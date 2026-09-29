// Pruebas de integración de Numbers contra el servidor Node real (server.js).
// Verifican el cableado de rutas, la autenticación por token, que el valor propio
// no viaja por la red y el comportamiento ante repartos simultáneos.
import test, { after, before } from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
// Distinto del de mind-api.test.js: node --test ejecuta los archivos en paralelo.
const PORT = 3098;
const BASE = `http://127.0.0.1:${PORT}`;

let serverProcess = null;

before(async () => {
  serverProcess = spawn(process.execPath, [path.join(root, "server.js")], {
    env: { ...process.env, PORT: String(PORT) },
    stdio: ["ignore", "pipe", "pipe"]
  });
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      await fetch(`${BASE}/api/numbers/rooms`);
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

async function api(method, url, body) {
  const response = await fetch(`${BASE}${url}`, {
    method,
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined
  });
  const text = await response.text();
  return { status: response.status, headers: response.headers, text, payload: JSON.parse(text) };
}

async function createRoom(names, mode = "numbers") {
  roomCounter += 1;
  const roomName = `NUM${roomCounter}`;
  const created = await api("POST", "/api/numbers/rooms", { roomName, playerName: names[0], mode });
  assert.equal(created.status, 201);
  const sessions = [created.payload.player];
  for (const name of names.slice(1)) {
    const joined = await api("POST", `/api/numbers/rooms/${roomName}/join`, { playerName: name });
    assert.equal(joined.status, 201);
    sessions.push(joined.payload.player);
  }
  return { roomName, sessions };
}

function auth(session, extra = {}) {
  return { playerId: session.id, token: session.token, ...extra };
}

function poll(roomName, session) {
  return api("GET", `/api/numbers/rooms/${roomName}?playerId=${session.id}&token=${session.token}`);
}

test("tras repartir, cada jugador recibe por la red los valores ajenos y nunca el suyo", async () => {
  const { roomName, sessions } = await createRoom(["Ana", "Bruno", "Carla"], "objects");
  const dealt = await api("POST", `/api/numbers/rooms/${roomName}/deal`, auth(sessions[0], { baseRound: 0 }));
  assert.equal(dealt.status, 200);
  assert.equal(dealt.payload.round, 1);

  const views = await Promise.all(sessions.map((session) => poll(roomName, session)));
  // Lo que ven los demás de cada jugador es su valor real.
  const seenBy = new Map();
  views.forEach(({ payload }) => payload.players.forEach((item) => {
    if (item.value) seenBy.set(item.id, [...(seenBy.get(item.id) || []), item.value.id]);
  }));
  sessions.forEach((session, index) => {
    const { payload, text, headers } = views[index];
    const self = payload.players.find((item) => item.id === session.id);
    assert.equal(self.value, null);
    assert.equal(self.isSelf, true);
    const [ownId] = seenBy.get(session.id);
    assert.equal(new Set(seenBy.get(session.id)).size, 1, "todos ven lo mismo");
    assert.equal(text.includes(`"${ownId}"`), false, "el id propio viaja en la respuesta");
    assert.match(headers.get("cache-control") || "", /no-store/);
  });
});

test("sin token válido no se puede leer la sala", async () => {
  const { roomName, sessions } = await createRoom(["Ana", "Bruno"]);
  await api("POST", `/api/numbers/rooms/${roomName}/deal`, auth(sessions[0], { baseRound: 0 }));
  assert.equal((await api("GET", `/api/numbers/rooms/${roomName}`)).status, 401);
  assert.equal((await api("GET", `/api/numbers/rooms/${roomName}?playerId=${sessions[0].id}&token=otro`)).status, 401);
  assert.equal((await api("POST", `/api/numbers/rooms/${roomName}/deal`, { playerId: sessions[0].id, token: "otro" })).status, 401);
  assert.equal((await api("GET", "/api/numbers/rooms/NOEXISTE?playerId=a&token=b")).status, 404);
});

test("el listado de salas no expone asignaciones", async () => {
  const { roomName, sessions } = await createRoom(["Ana", "Bruno"], "famous");
  await api("POST", `/api/numbers/rooms/${roomName}/deal`, auth(sessions[0], { baseRound: 0 }));
  const list = await api("GET", "/api/numbers/rooms");
  const entry = list.payload.rooms.find((item) => item.roomName === roomName);
  assert.deepEqual(Object.keys(entry).sort(), ["playerCount", "playerLimit", "roomName", "status", "updatedAt"]);
});

test("un no anfitrión no puede repartir ni cambiar la modalidad", async () => {
  const { roomName, sessions } = await createRoom(["Ana", "Bruno"]);
  const deal = await api("POST", `/api/numbers/rooms/${roomName}/deal`, auth(sessions[1], { baseRound: 0 }));
  const mode = await api("POST", `/api/numbers/rooms/${roomName}/deal`, auth(sessions[1], { mode: "famous", baseRound: 0 }));
  assert.equal(deal.status, 403);
  assert.equal(mode.status, 403);
  const view = await poll(roomName, sessions[0]);
  assert.equal(view.payload.round, 0);
  assert.equal(view.payload.mode, "numbers");
});

test("dos repartos simultáneos desde la misma ronda crean una sola ronda", async () => {
  const { roomName, sessions } = await createRoom(["Ana", "Bruno", "Carla"]);
  const body = auth(sessions[0], { baseRound: 0 });
  const results = await Promise.all([1, 2, 3].map(() => api("POST", `/api/numbers/rooms/${roomName}/deal`, body)));
  results.forEach((result) => assert.equal(result.status, 200));
  assert.equal((await poll(roomName, sessions[0])).payload.round, 1);
});

test("cambiar de modalidad reparte valores de la nueva categoría", async () => {
  const { roomName, sessions } = await createRoom(["Ana", "Bruno"]);
  await api("POST", `/api/numbers/rooms/${roomName}/deal`, auth(sessions[0], { baseRound: 0 }));
  const changed = await api("POST", `/api/numbers/rooms/${roomName}/deal`, auth(sessions[0], { mode: "objects", baseRound: 1 }));
  assert.equal(changed.payload.mode, "objects");
  assert.equal(changed.payload.round, 2);
  const other = changed.payload.players.find((item) => !item.isSelf);
  assert.ok(other.value.labels.ca && other.value.labels.en);
});

test("recargar con la sesión guardada devuelve el mismo jugador sin cambiar valores", async () => {
  const { roomName, sessions } = await createRoom(["Ana", "Bruno"]);
  await api("POST", `/api/numbers/rooms/${roomName}/deal`, auth(sessions[0], { baseRound: 0 }));
  const first = await poll(roomName, sessions[1]);
  const second = await poll(roomName, sessions[1]);
  assert.equal(second.payload.player.id, sessions[1].id);
  assert.equal(second.payload.round, first.payload.round);
  assert.deepEqual(second.payload.players, first.payload.players);
});

test("quien entra tarde recibe valor y los demás conservan el suyo", async () => {
  const { roomName, sessions } = await createRoom(["Ana", "Bruno"]);
  await api("POST", `/api/numbers/rooms/${roomName}/deal`, auth(sessions[0], { baseRound: 0 }));
  const before = (await poll(roomName, sessions[0])).payload.players.find((item) => !item.isSelf).value.id;
  const late = await api("POST", `/api/numbers/rooms/${roomName}/join`, { playerName: "Carla" });
  assert.equal(late.status, 201);
  assert.equal(late.payload.round, 1);
  assert.equal(late.payload.players.find((item) => item.isSelf).assigned, true);
  const after = (await poll(roomName, sessions[0])).payload.players;
  assert.equal(after.find((item) => item.id === sessions[1].id).value.id, before);
  assert.ok(after.find((item) => item.name === "Carla").value);
});

test("salir cede el anfitrión y cierra la sala al irse el último", async () => {
  const { roomName, sessions } = await createRoom(["Ana", "Bruno"]);
  assert.equal((await api("POST", `/api/numbers/rooms/${roomName}/leave`, auth(sessions[0]))).status, 200);
  const view = await poll(roomName, sessions[1]);
  assert.equal(view.payload.player.isHost, true);
  await api("POST", `/api/numbers/rooms/${roomName}/leave`, auth(sessions[1]));
  assert.equal((await poll(roomName, sessions[1])).status, 404);
});
