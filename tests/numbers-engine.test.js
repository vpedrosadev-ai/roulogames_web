// Pruebas del motor de Numbers: reparto, privacidad del valor propio y rondas.
import test from "node:test";
import assert from "node:assert/strict";
import {
  NUMBERS_MAX_PLAYERS,
  NUMBERS_MODES,
  assignNumbersValues,
  authenticateNumbersPlayer,
  createNumbersRoom,
  dealNumbersRound,
  joinNumbersRoom,
  leaveNumbersRoom,
  numbersPoolIds,
  numbersPoolSize,
  numbersRoomResponse,
  numbersValueFor
} from "../numbers-engine.js";

function roomWith(names, mode = "numbers") {
  const room = createNumbersRoom({ roomName: "Mesa", playerName: names[0], mode });
  names.slice(1).forEach((name) => joinNumbersRoom(room, { name }));
  return room;
}

function selfValueLeaks(room, player) {
  const own = numbersValueFor(room.mode, room.assignments[player.id]);
  const wire = JSON.stringify(numbersRoomResponse(room, player));
  return [own.id, ...Object.values(own.labels)].some((text) => wire.includes(`"${text}"`));
}

test("cada jugador ve los valores ajenos y nunca el suyo", () => {
  const room = roomWith(["Ana", "Bruno", "Carla"]);
  const [ana] = room.players;
  dealNumbersRound(room, ana, { baseRound: 0 });

  room.players.forEach((viewer) => {
    const response = numbersRoomResponse(room, viewer);
    response.players.forEach((item) => {
      if (item.id === viewer.id) {
        assert.equal(item.isSelf, true);
        assert.equal(item.value, null);
        assert.equal(item.assigned, true);
      } else {
        assert.equal(item.value.id, room.assignments[item.id]);
      }
    });
    assert.equal("value" in response.player, false);
  });
});

test("el valor propio no aparece en ningún campo de la respuesta serializada", () => {
  for (const mode of ["famous", "objects"]) {
    const room = roomWith(["Ana", "Bruno", "Carla", "Dani"], mode);
    for (let round = 0; round < 20; round += 1) {
      dealNumbersRound(room, room.players[0], { baseRound: room.round });
      room.players.forEach((viewer) => assert.equal(selfValueLeaks(room, viewer), false, `${mode}: se filtra el valor de ${viewer.name}`));
    }
  }
});

test("sin sesión válida no se devuelve la sala", () => {
  const room = roomWith(["Ana", "Bruno"]);
  dealNumbersRound(room, room.players[0], {});
  assert.throws(() => numbersRoomResponse(room, null), { status: 401 });
  assert.equal(authenticateNumbersPlayer(room, { playerId: room.players[0].id, token: "falso" }), null);
  assert.equal(authenticateNumbersPlayer(room, { playerId: room.players[0].id }), null);
});

test("no hay valores repetidos dentro de una ronda en ninguna modalidad", () => {
  const names = Array.from({ length: NUMBERS_MAX_PLAYERS }, (_, index) => `J${index}`);
  for (const mode of NUMBERS_MODES) {
    const room = roomWith(names, mode);
    for (let round = 0; round < 30; round += 1) {
      dealNumbersRound(room, room.players[0], { baseRound: room.round });
      const values = Object.values(room.assignments);
      assert.equal(values.length, NUMBERS_MAX_PLAYERS);
      assert.equal(new Set(values).size, values.length);
      values.forEach((id) => assert.ok(numbersValueFor(mode, id), `${mode}: valor desconocido ${id}`));
    }
  }
});

test("los números van del 1 al 100", () => {
  const room = roomWith(["Ana", "Bruno"]);
  for (let round = 0; round < 50; round += 1) {
    dealNumbersRound(room, room.players[0], {});
    Object.values(room.assignments).forEach((id) => {
      const value = Number(id);
      assert.ok(Number.isInteger(value) && value >= 1 && value <= 100);
    });
  }
});

test("cada catálogo cubre la sala llena con margen para no repetir", () => {
  NUMBERS_MODES.forEach((mode) => {
    assert.ok(numbersPoolSize(mode) > NUMBERS_MAX_PLAYERS, mode);
    // Un id repetido haría que dos personas "distintas" fueran la misma.
    assert.equal(new Set(numbersPoolIds(mode)).size, numbersPoolSize(mode), `${mode}: ids duplicados`);
  });
  const room = roomWith(["Ana", "Bruno"], "objects");
  dealNumbersRound(room, room.players[0], {});
  const value = numbersValueFor("objects", room.assignments[room.players[1].id]);
  assert.ok(value.labels.es && value.labels.ca && value.labels.en);
});

test("una ronda nueva evita repetir a alguien lo mismo si hay alternativas", () => {
  // Con 3 valores para 2 jugadores siempre queda uno distinto al anterior.
  const pool = [{ id: "a" }, { id: "b" }, { id: "c" }];
  for (let attempt = 0; attempt < 200; attempt += 1) {
    const result = assignNumbersValues(["p1", "p2"], pool, { p1: "a", p2: "b" });
    assert.notEqual(result.p1, "a");
    assert.notEqual(result.p2, "b");
    assert.notEqual(result.p1, result.p2);
  }
  // Con un conjunto justo se acepta repetir antes que dejar a alguien sin valor.
  const tight = assignNumbersValues(["p1", "p2"], [{ id: "a" }, { id: "b" }], { p1: "a", p2: "b" });
  assert.deepEqual(new Set(Object.values(tight)), new Set(["a", "b"]));
});

test("solo el anfitrión reparte y hacen falta dos jugadores", () => {
  const solo = roomWith(["Ana"]);
  assert.throws(() => dealNumbersRound(solo, solo.players[0], {}), { status: 409 });
  const room = roomWith(["Ana", "Bruno"]);
  assert.throws(() => dealNumbersRound(room, room.players[1], { baseRound: 0 }), { status: 403 });
  assert.throws(() => dealNumbersRound(room, room.players[1], { mode: "famous", baseRound: 0 }), { status: 403 });
  assert.equal(room.round, 0);
  assert.throws(() => dealNumbersRound(room, room.players[0], { mode: "planetas" }), { status: 400 });
});

test("dos repartos desde la misma ronda producen una sola ronda nueva", () => {
  const room = roomWith(["Ana", "Bruno", "Carla"]);
  const host = room.players[0];
  assert.equal(dealNumbersRound(room, host, { baseRound: 0 }).dealt, true);
  const snapshot = { ...room.assignments };
  assert.equal(dealNumbersRound(room, host, { baseRound: 0 }).dealt, false);
  assert.equal(room.round, 1);
  assert.deepEqual(room.assignments, snapshot);
});

test("cambiar de modalidad empieza ronda nueva con valores de la nueva categoría", () => {
  const room = roomWith(["Ana", "Bruno", "Carla"]);
  dealNumbersRound(room, room.players[0], { baseRound: 0 });
  dealNumbersRound(room, room.players[0], { mode: "famous", baseRound: 1 });
  assert.equal(room.mode, "famous");
  assert.equal(room.round, 2);
  Object.values(room.assignments).forEach((id) => assert.ok(numbersValueFor("famous", id)));
  const response = numbersRoomResponse(room, room.players[0]);
  response.players.filter((item) => !item.isSelf).forEach((item) => assert.ok(Number.isNaN(Number(item.value.id))));
});

test("quien entra tarde recibe un valor libre sin cambiar el de los demás", () => {
  const room = roomWith(["Ana", "Bruno"], "objects");
  dealNumbersRound(room, room.players[0], { baseRound: 0 });
  const before = { ...room.assignments };
  const { player } = joinNumbersRoom(room, { name: "Carla" });
  assert.equal(room.round, 1);
  Object.entries(before).forEach(([id, value]) => assert.equal(room.assignments[id], value));
  assert.ok(room.assignments[player.id]);
  assert.equal(new Set(Object.values(room.assignments)).size, 3);
  assert.equal(numbersRoomResponse(room, player).players.find((item) => item.isSelf).value, null);
});

test("reconectar con el mismo nombre conserva jugador y valor, e invalida el token viejo", () => {
  const room = roomWith(["Ana", "Bruno"]);
  dealNumbersRound(room, room.players[0], {});
  const bruno = room.players[1];
  const oldToken = bruno.token;
  const value = room.assignments[bruno.id];
  const { player, created } = joinNumbersRoom(room, { name: "bruno" });
  assert.equal(created, false);
  assert.equal(player.id, bruno.id);
  assert.equal(room.assignments[bruno.id], value);
  assert.equal(authenticateNumbersPlayer(room, { playerId: bruno.id, token: oldToken }), null);
  assert.equal(room.players.length, 2);
});

test("si se va el anfitrión, el relevo pasa al primero que queda", () => {
  const room = roomWith(["Ana", "Bruno", "Carla"]);
  dealNumbersRound(room, room.players[0], {});
  const [ana, bruno] = room.players;
  assert.equal(leaveNumbersRoom(room, ana).closeRoom, false);
  assert.equal(room.hostId, bruno.id);
  assert.equal(room.assignments[ana.id], undefined);
  assert.equal(dealNumbersRound(room, bruno, { baseRound: 1 }).dealt, true);
});

test("la sala no admite más de 10 jugadores", () => {
  const room = roomWith(Array.from({ length: NUMBERS_MAX_PLAYERS }, (_, index) => `J${index}`));
  assert.throws(() => joinNumbersRoom(room, { name: "Extra" }), { status: 409 });
});
