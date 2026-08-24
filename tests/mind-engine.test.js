import test from "node:test";
import assert from "node:assert/strict";

import {
  MIND_MAX_LIVES,
  MIND_MAX_STARS,
  MindGameError,
  advanceMindTimedPhases,
  createMindRoom,
  leaveMindRoom,
  mindRoomResponse,
  pauseMindRoom,
  playMindCard,
  proposeMindStar,
  readyMindPlayer,
  replaceOrJoinMindPlayer,
  restartMindGame,
  shuffleMindDeck,
  startMindGame,
  voteMindStar
} from "../mind-engine.js";

function buildRoom(playerCount) {
  const room = createMindRoom({ roomName: "MANGOS", playerName: "P1", playerEmoji: "🥭" });
  for (let index = 2; index <= playerCount; index += 1) {
    replaceOrJoinMindPlayer(room, { name: `P${index}`, emoji: "" });
  }
  return room;
}

function startedRoom(playerCount) {
  const room = buildRoom(playerCount);
  startMindGame(room, room.players[0]);
  return room;
}

// Lleva la sala hasta `playing` con las manos indicadas.
function playingRoom(hands) {
  const room = startedRoom(hands.length);
  room.players.forEach((player, index) => { player.hand = [...hands[index]].sort((a, b) => a - b); });
  room.players.forEach((player) => readyMindPlayer(room, player));
  room.syncEndsAt = Date.now() - 1;
  advanceMindTimedPhases(room);
  assert.equal(room.status, "playing");
  return room;
}

test("configuración oficial según número de jugadores", () => {
  const two = startedRoom(2);
  assert.equal(two.maxLevel, 12);
  assert.equal(two.lives, 2);
  assert.equal(two.stars, 1);

  const three = startedRoom(3);
  assert.equal(three.maxLevel, 10);
  assert.equal(three.lives, 3);

  const four = startedRoom(4);
  assert.equal(four.maxLevel, 8);
  assert.equal(four.lives, 4);
});

test("mesas ampliadas de 5 y 6 jugadores", () => {
  const five = startedRoom(5);
  assert.equal(five.maxLevel, 7);
  assert.equal(five.lives, 5);
  assert.equal(five.maxLives, 5, "cinco vidas siguen cabiendo en el tope clásico");

  const six = startedRoom(6);
  assert.equal(six.maxLevel, 6);
  assert.equal(six.lives, 6);
  assert.equal(six.maxLives, 6, "el tope sube para no arrancar ya por encima del máximo");
  six.players.forEach((player) => assert.equal(player.hand.length, 1));
});

test("con 6 jugadores el último nivel cabe en la baraja", () => {
  const six = startedRoom(6);
  assert.ok(six.maxLevel * 6 <= 100, `${six.maxLevel * 6} cartas no caben en 100`);
});

test("una vida de recompensa no supera el tope de la mesa", () => {
  const room = playingRoom([[5], [9], [11], [14], [20], [26]]);
  room.level = 3;
  room.lives = room.maxLives;
  const order = room.players.map((player, index) => ({ player, card: player.hand[0] }))
    .sort((a, b) => a.card - b.card);
  order.forEach((move) => playMindCard(room, move.player, move.card));
  assert.equal(room.lives, 6, "seis jugadores no pasan de seis vidas");
  assert.equal(room.levelReward, "");
});

test("el nivel N reparte N cartas únicas a cada jugador", () => {
  const room = startedRoom(3);
  room.players.forEach((player) => assert.equal(player.hand.length, 1));

  room.level = 3;
  room.players.forEach((player) => { player.hand = []; });
  // Se vuelve a repartir desde una baraja nueva completa.
  const rebuilt = startedRoom(3);
  rebuilt.players.forEach((player) => readyMindPlayer(rebuilt, player));

  const all = rebuilt.players.flatMap((player) => player.hand);
  assert.equal(new Set(all).size, all.length, "no debe haber cartas duplicadas");
  all.forEach((card) => assert.ok(card >= 1 && card <= 100));
});

test("solo se puede jugar la carta más baja de la propia mano", () => {
  const room = playingRoom([[21, 56, 93], [40, 70, 99]]);
  assert.throws(() => playMindCard(room, room.players[0], 56), MindGameError);
  playMindCard(room, room.players[0], 21);
  assert.equal(room.pileTop, 21);
  assert.deepEqual(room.players[0].hand, [56, 93]);
});

test("saltar números no repartidos es válido y no penaliza", () => {
  const room = playingRoom([[7, 94], [11, 81], [35, 47]]);
  playMindCard(room, room.players[0], 7);
  playMindCard(room, room.players[1], 11);
  playMindCard(room, room.players[2], 35);
  playMindCard(room, room.players[2], 47);
  assert.equal(room.lives, 3, "no debe perderse ninguna vida");
  assert.deepEqual(room.playedCards, [7, 11, 35, 47]);
});

test("un error quita una sola vida y descarta todas las cartas inferiores", () => {
  const room = playingRoom([[34, 88], [26, 61], [30, 77]]);
  const result = playMindCard(room, room.players[0], 34);

  assert.equal(result.outcome, "mistake");
  assert.equal(room.lives, 2, "solo una vida por acción incorrecta, no una por carta");
  assert.deepEqual(room.discardedCards, [26, 30]);
  assert.deepEqual(room.players[1].hand, [61]);
  assert.deepEqual(room.players[2].hand, [77]);
  assert.equal(room.pileTop, 34, "la carta que causó el error permanece en la pila");
  assert.equal(room.status, "playing", "el nivel continúa, no se reinicia");
  assert.equal(room.level, 1);
});

test("perder la última vida termina la partida inmediatamente", () => {
  const room = playingRoom([[50, 90], [10, 20]]);
  room.lives = 1;
  playMindCard(room, room.players[0], 50);
  assert.equal(room.lives, 0);
  assert.equal(room.status, "defeat");
});

test("la derrota tiene prioridad sobre completar el nivel", () => {
  const room = playingRoom([[50], [10]]);
  room.lives = 1;
  playMindCard(room, room.players[0], 50);
  assert.equal(room.status, "defeat", "aunque todas las manos queden vacías");
});

test("completar el nivel 2 concede una estrella y el 3 una vida", () => {
  const room = playingRoom([[5], [9]]);
  room.level = 2;
  room.stars = 1;
  playMindCard(room, room.players[0], 5);
  playMindCard(room, room.players[1], 9);
  assert.equal(room.status, "level_result");
  assert.equal(room.stars, 2);
  assert.equal(room.levelReward, "star");

  const lifeRoom = playingRoom([[5], [9]]);
  lifeRoom.level = 3;
  lifeRoom.lives = 2;
  playMindCard(lifeRoom, lifeRoom.players[0], 5);
  playMindCard(lifeRoom, lifeRoom.players[1], 9);
  assert.equal(lifeRoom.lives, 3);
  assert.equal(lifeRoom.levelReward, "life");
});

test("las recompensas no superan 5 vidas ni 3 estrellas y se pierden", () => {
  const room = playingRoom([[5], [9]]);
  room.level = 2;
  room.stars = MIND_MAX_STARS;
  playMindCard(room, room.players[0], 5);
  playMindCard(room, room.players[1], 9);
  assert.equal(room.stars, MIND_MAX_STARS);
  assert.equal(room.levelReward, "", "la recompensa se pierde, no se acumula");
  assert.equal(room.lastEvent.rewardLost, true);

  const lifeRoom = playingRoom([[5], [9]]);
  lifeRoom.level = 3;
  lifeRoom.lives = MIND_MAX_LIVES;
  playMindCard(lifeRoom, lifeRoom.players[0], 5);
  playMindCard(lifeRoom, lifeRoom.players[1], 9);
  assert.equal(lifeRoom.lives, MIND_MAX_LIVES);
});

test("un nivel con error sigue completándose y da su recompensa", () => {
  const room = playingRoom([[40], [10]]);
  room.level = 2;
  room.stars = 1;
  playMindCard(room, room.players[0], 40);
  assert.equal(room.lives, 1, "se perdió una vida por el error");
  assert.equal(room.status, "level_result");
  assert.equal(room.stars, 2, "el nivel cuenta como completado igualmente");
});

test("completar el último nivel es victoria", () => {
  const room = playingRoom([[5], [9]]);
  room.level = room.maxLevel;
  playMindCard(room, room.players[0], 5);
  playMindCard(room, room.players[1], 9);
  assert.equal(room.status, "victory");
});

test("la estrella ninja necesita unanimidad", () => {
  const room = playingRoom([[12, 70], [14, 90], [50]]);
  proposeMindStar(room, room.players[0]);
  assert.equal(room.status, "star_vote", "proponer bloquea las jugadas");
  assert.throws(() => playMindCard(room, room.players[1], 14), MindGameError);

  voteMindStar(room, room.players[1], true);
  assert.equal(room.status, "star_vote", "todavía falta un voto");
  voteMindStar(room, room.players[2], true);

  assert.equal(room.stars, 0);
  assert.deepEqual(room.discardedCards, [12, 14, 50]);
  assert.deepEqual(room.players[0].hand, [70]);
  assert.deepEqual(room.players[1].hand, [90]);
  assert.deepEqual(room.players[2].hand, []);
  assert.equal(room.status, "paused", "el equipo se vuelve a sincronizar");
});

test("rechazar la estrella no la consume ni descarta cartas", () => {
  const room = playingRoom([[12, 70], [14, 90]]);
  proposeMindStar(room, room.players[0]);
  voteMindStar(room, room.players[1], false);

  assert.equal(room.stars, 1);
  assert.deepEqual(room.discardedCards, []);
  assert.deepEqual(room.players[0].hand, [12, 70]);
  assert.equal(room.status, "playing", "vuelve al estado anterior");
});

test("la votación caducada rechaza la estrella sin consumirla", () => {
  const room = playingRoom([[12, 70], [14, 90]]);
  proposeMindStar(room, room.players[0]);
  room.pendingStarVote.endsAt = Date.now() - 1;
  advanceMindTimedPhases(room);
  assert.equal(room.status, "playing");
  assert.equal(room.stars, 1);
});

test("la estrella solo descarta de las manos que tienen cartas", () => {
  const room = playingRoom([[12, 20], [90]]);
  room.players[1].hand = [];
  proposeMindStar(room, room.players[0]);
  voteMindStar(room, room.players[1], true);
  assert.deepEqual(room.discardedCards, [12]);
  assert.deepEqual(room.players[0].hand, [20]);
});

test("la estrella no adelanta la pila y deja jugables cartas inferiores", () => {
  // Ana descarta 12 y conserva 20; Bruno descarta 90. El 20 sigue siendo legal.
  const room = playingRoom([[12, 20], [90]]);
  proposeMindStar(room, room.players[0]);
  voteMindStar(room, room.players[1], true);
  room.players.forEach((player) => readyMindPlayer(room, player));
  room.syncEndsAt = Date.now() - 1;
  advanceMindTimedPhases(room);

  playMindCard(room, room.players[0], 20);
  assert.equal(room.lives, 2, "jugar el 20 tras descartar el 90 no es un error");
});

test("una estrella que vacía todas las manos completa el nivel", () => {
  const room = playingRoom([[12], [14]]);
  room.level = 2;
  proposeMindStar(room, room.players[0]);
  voteMindStar(room, room.players[1], true);
  assert.equal(room.status, "level_result");
  assert.equal(room.stars, 1, "gasta una por la estrella y gana otra por el nivel 2");
});

test("no se puede proponer una estrella sin estrellas o sin cartas", () => {
  const room = playingRoom([[12], [14]]);
  room.stars = 0;
  assert.throws(() => proposeMindStar(room, room.players[0]), MindGameError);

  const empty = playingRoom([[12], [14]]);
  empty.players.forEach((player) => { player.hand = []; });
  assert.throws(() => proposeMindStar(empty, empty.players[0]), MindGameError);
});

test("la pausa bloquea las jugadas hasta que todos confirman", () => {
  const room = playingRoom([[12, 70], [14, 90]]);
  pauseMindRoom(room, room.players[0]);
  assert.equal(room.status, "paused");
  assert.throws(() => playMindCard(room, room.players[1], 14), MindGameError);

  readyMindPlayer(room, room.players[0]);
  assert.equal(room.status, "paused", "falta gente");
  readyMindPlayer(room, room.players[1]);
  assert.equal(room.status, "synchronizing");

  room.syncEndsAt = Date.now() - 1;
  advanceMindTimedPhases(room);
  assert.equal(room.status, "playing");
});

// --- Concurrencia -------------------------------------------------------

test("repetir la misma acción no la aplica dos veces", () => {
  const room = playingRoom([[40, 88], [10, 61]]);
  const first = playMindCard(room, room.players[0], 40, "action-1");
  const replay = playMindCard(room, room.players[0], 40, "action-1");

  assert.deepEqual(replay, first, "la repetición devuelve el resultado original");
  assert.equal(room.lives, 1, "una sola vida perdida, no una por cada envío");
  assert.equal(room.mistakes, 1);
  assert.equal(room.playedCards.filter((card) => card === 40).length, 1);
});

test("una carta descartada mientras viajaba la petición se rechaza sin penalizar", () => {
  // Ana juega 40, el 35 de Bruno se descarta. La petición atrasada de Bruno llega después.
  const room = playingRoom([[40, 88], [35, 61]]);
  playMindCard(room, room.players[0], 40, "ana-1");
  assert.equal(room.lives, 1);

  assert.throws(() => playMindCard(room, room.players[1], 35, "bruno-1"), MindGameError);
  assert.equal(room.lives, 1, "la petición obsoleta no cuesta una segunda vida");
});

test("dos jugadas casi simultáneas se resuelven por orden de llegada", () => {
  const room = playingRoom([[40, 88], [35, 61]]);
  // El servidor serializa: procesa el 40 y luego el 35 ya descartado.
  playMindCard(room, room.players[0], 40, "a");
  assert.throws(() => playMindCard(room, room.players[1], 35, "b"), MindGameError);
  assert.deepEqual(room.playedCards, [40]);
  assert.deepEqual(room.discardedCards, [35]);
});

test("votar en una votación ya cerrada se rechaza", () => {
  const room = playingRoom([[12, 70], [14, 90]]);
  proposeMindStar(room, room.players[0]);
  const voteId = room.pendingStarVote.id;
  voteMindStar(room, room.players[1], false);
  assert.throws(() => voteMindStar(room, room.players[1], true, voteId), MindGameError);
});

test("la revisión avanza en cada cambio de estado", () => {
  const room = playingRoom([[12, 70], [14, 90]]);
  const before = room.revision;
  playMindCard(room, room.players[0], 12);
  assert.ok(room.revision > before);
});

// --- Privacidad ---------------------------------------------------------

test("la respuesta nunca expone las manos ajenas", () => {
  const room = playingRoom([[12, 70], [14, 90], [50, 60]]);
  const payload = mindRoomResponse(room, room.players[0]);

  assert.deepEqual(payload.player.hand, [12, 70]);
  payload.players.forEach((player) => {
    assert.equal(player.hand, undefined, "no debe viajar ninguna mano ajena");
    assert.equal(typeof player.cardCount, "number");
  });
  assert.equal(JSON.stringify(payload).includes("\"14\""), false);

  // Ni siquiera al terminar la partida se revelan las manos.
  room.status = "defeat";
  const finished = mindRoomResponse(room, room.players[0]);
  finished.players.forEach((player) => assert.equal(player.hand, undefined));
});

test("la respuesta sin jugador identificado no incluye ninguna mano", () => {
  const room = playingRoom([[12, 70], [14, 90]]);
  const payload = mindRoomResponse(room, null);
  assert.equal(payload.player, null);
  payload.players.forEach((player) => assert.equal(player.hand, undefined));
});

test("solo la carta más baja se marca como jugable", () => {
  const room = playingRoom([[21, 56, 93], [40, 70, 99]]);
  const payload = mindRoomResponse(room, room.players[0]);
  assert.equal(payload.player.playableCard, 21);

  room.status = "paused";
  assert.equal(mindRoomResponse(room, room.players[0]).player.playableCard, 0);
});

// --- Sala ---------------------------------------------------------------

test("la sala admite entre 2 y 6 jugadores", () => {
  const room = buildRoom(6);
  assert.equal(room.players.length, 6);
  assert.throws(() => replaceOrJoinMindPlayer(room, { name: "P7", emoji: "" }), MindGameError);

  const solo = buildRoom(1);
  assert.throws(() => startMindGame(solo, solo.players[0]), MindGameError);
});

test("reconectar con el mismo nombre conserva la mano y renueva el token", () => {
  const room = playingRoom([[12, 70], [14, 90]]);
  const oldToken = room.players[1].token;
  const { player, created } = replaceOrJoinMindPlayer(room, { name: "P2", emoji: "" });

  assert.equal(created, false);
  assert.notEqual(player.token, oldToken);
  assert.deepEqual(player.hand, [14, 90]);
});

test("solo el anfitrión puede empezar y reiniciar", () => {
  const room = buildRoom(3);
  assert.throws(() => startMindGame(room, room.players[1]), MindGameError);
  startMindGame(room, room.players[0]);

  room.status = "defeat";
  assert.throws(() => restartMindGame(room, room.players[1]), MindGameError);
  restartMindGame(room, room.players[0]);
  assert.equal(room.status, "lobby");
  room.players.forEach((player) => assert.deepEqual(player.hand, []));
});

test("salir durante la partida pausa en vez de repartir de nuevo", () => {
  const room = playingRoom([[12, 70], [14, 90], [50, 60]]);
  leaveMindRoom(room, room.players[2]);
  assert.equal(room.players.length, 3, "no cambia el número de jugadores a mitad de partida");
  assert.equal(room.status, "paused");
  assert.deepEqual(room.players[2].hand, [50, 60], "no se redistribuyen sus cartas");
});

test("el barajado usa todas las posiciones y no pierde cartas", () => {
  const deck = Array.from({ length: 100 }, (_, index) => index + 1);
  const shuffled = shuffleMindDeck([...deck]);
  assert.equal(shuffled.length, 100);
  assert.deepEqual([...shuffled].sort((a, b) => a - b), deck);

  // Con una fuente determinista el reparto es reproducible (útil en pruebas).
  let counter = 0;
  const seeded = shuffleMindDeck([...deck], (bound) => (counter++ * 7) % bound);
  const seededAgain = shuffleMindDeck([...deck], ((c) => (bound) => (c++ * 7) % bound)(0));
  assert.deepEqual(seeded, seededAgain);
});
