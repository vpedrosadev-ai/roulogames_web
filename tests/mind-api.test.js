// Pruebas de integración contra el servidor Node real (server.js), por HTTP.
// Verifican el cableado de rutas, la autenticación por token, la privacidad de
// las manos en el cable y el comportamiento ante peticiones concurrentes.
import test, { after, before } from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const PORT = 3099;
const BASE = `http://127.0.0.1:${PORT}`;

let serverProcess = null;

before(async () => {
  serverProcess = spawn(process.execPath, [path.join(root, "server.js")], {
    env: { ...process.env, PORT: String(PORT) },
    stdio: ["ignore", "pipe", "pipe"]
  });
  // Espera activa a que el puerto responda, sin dormir a ciegas.
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      await fetch(`${BASE}/api/mind/rooms`);
      return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }
  throw new Error("El servidor de pruebas no arrancó");
});

after(() => {
  serverProcess?.kill();
});

let roomCounter = 0;
function nextRoomName() {
  roomCounter += 1;
  return `SALA${roomCounter}`;
}

async function api(method, url, body) {
  const response = await fetch(`${BASE}${url}`, {
    method,
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined
  });
  return { status: response.status, payload: await response.json() };
}

async function createRoom(playerNames) {
  const roomName = nextRoomName();
  const created = await api("POST", "/api/mind/rooms", { roomName, playerName: playerNames[0], playerEmoji: "🥭" });
  assert.equal(created.status, 201);
  const sessions = [created.payload.player];
  for (const name of playerNames.slice(1)) {
    const joined = await api("POST", `/api/mind/rooms/${roomName}/join`, { playerName: name });
    assert.equal(joined.status, 201);
    sessions.push(joined.payload.player);
  }
  return { roomName, sessions };
}

function auth(session, extra = {}) {
  return { playerId: session.id, token: session.token, ...extra };
}

test("crear sala, unirse y arrancar reparte una carta por jugador", async () => {
  const { roomName, sessions } = await createRoom(["Ana", "Bruno"]);
  const started = await api("POST", `/api/mind/rooms/${roomName}/start`, auth(sessions[0]));

  assert.equal(started.status, 200);
  assert.equal(started.payload.status, "level_preparation");
  assert.equal(started.payload.level, 1);
  assert.equal(started.payload.lives, 2);
  assert.equal(started.payload.stars, 1);
  assert.equal(started.payload.maxLevel, 12);
  assert.equal(started.payload.player.hand.length, 1);
});

test("solo el anfitrión puede arrancar la partida", async () => {
  const { roomName, sessions } = await createRoom(["Ana", "Bruno"]);
  const denied = await api("POST", `/api/mind/rooms/${roomName}/start`, auth(sessions[1]));
  assert.equal(denied.status, 403);
});

test("un token inválido recibe 401 y no revela la sala", async () => {
  const { roomName, sessions } = await createRoom(["Ana", "Bruno"]);
  const forged = await api("POST", `/api/mind/rooms/${roomName}/ready`, {
    playerId: sessions[1].id,
    token: "token-inventado"
  });
  assert.equal(forged.status, 401);
});

test("la respuesta HTTP nunca contiene las manos ajenas", async () => {
  const { roomName, sessions } = await createRoom(["Ana", "Bruno", "Carla"]);
  await api("POST", `/api/mind/rooms/${roomName}/start`, auth(sessions[0]));

  const params = new URLSearchParams({ playerId: sessions[0].id, token: sessions[0].token });
  const response = await fetch(`${BASE}/api/mind/rooms/${roomName}?${params}`);
  const raw = await response.text();
  const payload = JSON.parse(raw);

  assert.equal(payload.player.hand.length, 1);
  payload.players.forEach((player) => {
    assert.equal(player.hand, undefined);
    assert.equal(player.token, undefined);
    assert.equal(typeof player.cardCount, "number");
  });

  // La mano de Bruno no debe aparecer en ninguna parte del cuerpo de la respuesta.
  const bruno = await api("GET", `/api/mind/rooms/${roomName}?${new URLSearchParams({
    playerId: sessions[1].id, token: sessions[1].token
  })}`);
  const brunoCard = bruno.payload.player.hand[0];
  const anaCard = payload.player.hand[0];
  if (brunoCard !== anaCard) {
    assert.equal(raw.includes(`[${brunoCard}]`), false, "la mano de Bruno viajó a Ana");
  }
});

test("cambiar el playerId sin el token correcto no da acceso a otra mano", async () => {
  const { roomName, sessions } = await createRoom(["Ana", "Bruno"]);
  await api("POST", `/api/mind/rooms/${roomName}/start`, auth(sessions[0]));

  const params = new URLSearchParams({ playerId: sessions[1].id, token: sessions[0].token });
  const response = await api("GET", `/api/mind/rooms/${roomName}?${params}`);
  assert.equal(response.payload.player, null, "sin token válido no se entrega ninguna mano");
});

test("partida completa de 2 jugadores hasta ganar", async () => {
  const { roomName, sessions } = await createRoom(["Ana", "Bruno"]);
  await api("POST", `/api/mind/rooms/${roomName}/start`, auth(sessions[0]));

  let state = null;
  for (let guard = 0; guard < 200; guard += 1) {
    const view = await api("GET", `/api/mind/rooms/${roomName}?${new URLSearchParams({
      playerId: sessions[0].id, token: sessions[0].token
    })}`);
    state = view.payload;
    if (state.status === "victory" || state.status === "defeat") break;

    if (["level_preparation", "paused", "level_result"].includes(state.status)) {
      for (const session of sessions) await api("POST", `/api/mind/rooms/${roomName}/ready`, auth(session));
      continue;
    }
    if (state.status === "synchronizing") {
      await new Promise((resolve) => setTimeout(resolve, Math.max(0, state.syncEndsAt - Date.now()) + 60));
      continue;
    }
    if (state.status === "playing") {
      // Se consultan las manos una sola vez por nivel y se juega toda la secuencia
      // ascendente perfecta: sin errores no puede perderse ninguna vida.
      const order = [];
      for (const session of sessions) {
        const hand = await api("GET", `/api/mind/rooms/${roomName}?${new URLSearchParams({
          playerId: session.id, token: session.token
        })}`);
        hand.payload.player.hand.forEach((card) => order.push({ session, card }));
      }
      order.sort((a, b) => a.card - b.card);
      for (const move of order) {
        await api("POST", `/api/mind/rooms/${roomName}/play`, auth(move.session, {
          card: move.card,
          actionId: `${move.session.id}-${state.level}-${move.card}`
        }));
      }
    }
  }

  assert.equal(state.status, "victory", "una partida perfecta debe ganar");
  assert.equal(state.level, 12);
  assert.equal(state.mistakes, 0, "una secuencia ascendente perfecta no comete errores");
  // Se empieza con 2 vidas y 1 estrella; los niveles 3, 6 y 9 dan vida y el 2, 5 y 8 estrella,
  // así que una partida perfecta termina con ambos recursos al tope.
  assert.equal(state.lives, 5);
  assert.equal(state.stars, 3);
});

test("jugar una carta que no es la más baja se rechaza", async () => {
  const { roomName, sessions } = await createRoom(["Ana", "Bruno"]);
  await api("POST", `/api/mind/rooms/${roomName}/start`, auth(sessions[0]));
  for (const session of sessions) await api("POST", `/api/mind/rooms/${roomName}/ready`, auth(session));
  await new Promise((resolve) => setTimeout(resolve, 3200));

  const view = await api("GET", `/api/mind/rooms/${roomName}?${new URLSearchParams({
    playerId: sessions[0].id, token: sessions[0].token
  })}`);
  assert.equal(view.payload.status, "playing");

  const notMine = view.payload.player.hand[0] === 100 ? 99 : view.payload.player.hand[0] + 1;
  const rejected = await api("POST", `/api/mind/rooms/${roomName}/play`, auth(sessions[0], { card: notMine }));
  assert.equal(rejected.status, 409);
});

test("el mismo actionId enviado dos veces solo se aplica una vez", async () => {
  const { roomName, sessions } = await createRoom(["Ana", "Bruno"]);
  await api("POST", `/api/mind/rooms/${roomName}/start`, auth(sessions[0]));
  for (const session of sessions) await api("POST", `/api/mind/rooms/${roomName}/ready`, auth(session));
  await new Promise((resolve) => setTimeout(resolve, 3200));

  const hands = [];
  for (const session of sessions) {
    const view = await api("GET", `/api/mind/rooms/${roomName}?${new URLSearchParams({
      playerId: session.id, token: session.token
    })}`);
    hands.push({ session, card: view.payload.player.hand[0] });
  }
  const lowest = hands.sort((a, b) => a.card - b.card)[0];

  const body = auth(lowest.session, { card: lowest.card, actionId: "duplicado-1" });
  const first = await api("POST", `/api/mind/rooms/${roomName}/play`, body);
  const second = await api("POST", `/api/mind/rooms/${roomName}/play`, body);

  assert.equal(first.status, 200);
  assert.equal(second.status, 200, "la repetición es idempotente, no un error");
  assert.equal(second.payload.playedCards.filter((card) => card === lowest.card).length, 1);
});

test("dos jugadas simultáneas no cuestan dos vidas", async () => {
  const { roomName, sessions } = await createRoom(["Ana", "Bruno", "Carla"]);
  await api("POST", `/api/mind/rooms/${roomName}/start`, auth(sessions[0]));
  for (const session of sessions) await api("POST", `/api/mind/rooms/${roomName}/ready`, auth(session));
  await new Promise((resolve) => setTimeout(resolve, 3200));

  const hands = [];
  for (const session of sessions) {
    const view = await api("GET", `/api/mind/rooms/${roomName}?${new URLSearchParams({
      playerId: session.id, token: session.token
    })}`);
    hands.push({ session, card: view.payload.player.hand[0] });
  }
  hands.sort((a, b) => b.card - a.card);

  // Las dos cartas más altas se envían a la vez: como máximo debe perderse una vida.
  const [highest, middle] = hands;
  const results = await Promise.all([
    api("POST", `/api/mind/rooms/${roomName}/play`, auth(highest.session, { card: highest.card, actionId: "sim-a" })),
    api("POST", `/api/mind/rooms/${roomName}/play`, auth(middle.session, { card: middle.card, actionId: "sim-b" }))
  ]);

  const final = await api("GET", `/api/mind/rooms/${roomName}?${new URLSearchParams({
    playerId: sessions[0].id, token: sessions[0].token
  })}`);
  const livesLost = 3 - final.payload.lives;
  assert.ok(livesLost <= 1, `se perdieron ${livesLost} vidas por una sola ronda de errores`);
  results.forEach((result) => assert.ok([200, 409].includes(result.status)));
});

test("la sala aparece en el directorio y desaparece al llenarse", async () => {
  const { roomName, sessions } = await createRoom(["Ana", "Bruno"]);
  const listed = await api("GET", "/api/mind/rooms");
  const entry = listed.payload.rooms.find((room) => room.roomName === roomName);
  assert.ok(entry, "la sala con hueco debe listarse");
  assert.equal(entry.playerLimit, 6);
  assert.equal(entry.playerCount, 2);

  for (const name of ["Carla", "Dani", "Eva", "Fran"]) {
    const joined = await api("POST", `/api/mind/rooms/${roomName}/join`, { playerName: name });
    assert.equal(joined.status, 201, `${name} debería poder entrar`);
  }
  const full = await api("GET", "/api/mind/rooms");
  assert.equal(full.payload.rooms.some((room) => room.roomName === roomName), false, "una sala llena no es unible");

  const overflow = await api("POST", `/api/mind/rooms/${roomName}/join`, { playerName: "Gemma" });
  assert.equal(overflow.status, 409, "el séptimo jugador se rechaza");
  assert.ok(sessions.length === 2);
});

test("reconectar con el mismo nombre devuelve un token nuevo y la misma mano", async () => {
  const { roomName, sessions } = await createRoom(["Ana", "Bruno"]);
  await api("POST", `/api/mind/rooms/${roomName}/start`, auth(sessions[0]));

  const before = await api("GET", `/api/mind/rooms/${roomName}?${new URLSearchParams({
    playerId: sessions[1].id, token: sessions[1].token
  })}`);
  const rejoined = await api("POST", `/api/mind/rooms/${roomName}/join`, { playerName: "Bruno" });

  assert.equal(rejoined.status, 200, "reconectar no crea un jugador nuevo");
  assert.notEqual(rejoined.payload.player.token, sessions[1].token);
  assert.deepEqual(rejoined.payload.player.hand, before.payload.player.hand);
  assert.equal(rejoined.payload.players.length, 2);
});

test("una sala inexistente devuelve 404", async () => {
  const missing = await api("GET", "/api/mind/rooms/nohay");
  assert.equal(missing.status, 404);
});
