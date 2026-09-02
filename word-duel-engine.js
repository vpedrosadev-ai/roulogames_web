import { SPANISH_WORDS_4_TO_8 } from "./spanish-words-4-8.js";

export const WORD_DUEL_ROUND_LENGTHS = [4, 5, 6, 7, 8];
export const WORD_DUEL_MAX_ATTEMPTS = 6;
const SPANISH_ACCENT_CORRECTIONS = buildSpanishAccentCorrections();
const WORD_DUEL_TEST_BOTS = [
  ["Bot Letra", "🤖"], ["Bot Tilde", "🧠"], ["Bot Verde", "🟩"],
  ["Bot Amarillo", "🟨"], ["Bot Ñ", "Ñ"], ["Bot Pluma", "✏️"],
  ["Bot Libro", "📚"], ["Bot Diana", "🎯"], ["Bot Rayo", "⚡"]
];
const WORD_DUEL_BOT_WORDS = [
  ["casa", "luna", "mesa", "roca", "pato", "vino", "nube", "gato", "mapa"],
  ["perro", "mango", "nubes", "ratón", "campo", "libro", "playa", "reloj", "tigre"],
  ["camino", "tomate", "puerta", "jardín", "piedra", "bosque", "barcos", "cantar", "pelota"],
  ["palabra", "teclado", "ventana", "caballo", "planeta", "piratas", "caminar", "montaña", "sonrisa"],
  ["elefante", "estrella", "guitarra", "mariposa", "universo", "aventura", "tormenta", "princesa", "cuaderno"]
];

export class WordDuelError extends Error {
  constructor(message, status = 400) {
    super(message);
    this.name = "WordDuelError";
    this.status = status;
  }
}

export function normalizeWordDuelKey(value) {
  let roomName = String(value || "");
  try { roomName = decodeURIComponent(roomName); } catch { /* Keep raw value. */ }
  return normalizeWordDuelText(roomName).replace(/[^a-z0-9]+/g, "").slice(0, 10);
}

export function normalizeWordDuelIdentity(value) {
  const name = String(value?.name || "").trim().slice(0, 16);
  const emoji = Array.from(String(value?.emoji || "").trim())[0] || "";
  return name && emoji ? { name, emoji } : null;
}

export function createWordDuelRoom(value) {
  const roomName = String(value?.roomName || "").trim().slice(0, 16);
  const key = normalizeWordDuelKey(roomName);
  const identity = normalizeWordDuelIdentity(value);
  const testMode = Boolean(value?.testMode);
  const botCount = Math.max(1, Math.min(9, Math.floor(Number(value?.botCount) || 3)));
  const playerLimit = testMode ? botCount + 1 : Math.floor(Number(value?.playerLimit));
  if (!key || !roomName || !identity || playerLimit < 2 || playerLimit > 10) {
    throw new WordDuelError("Sala, jugador o límite no válido");
  }
  const host = createPlayer(identity);
  const now = Date.now();
  const room = {
    key, roomName, hostId: host.id, config: { playerLimit }, status: "lobby",
    testMode,
    roundIndex: 0, attemptIndex: 0, proposals: {}, proposalSpellings: {}, assignments: {}, boards: {}, roundEvents: [],
    players: [host], createdAt: now, updatedAt: now
  };
  if (testMode) {
    WORD_DUEL_TEST_BOTS.slice(0, botCount).forEach(([name, emoji]) => room.players.push(createPlayer({ name, emoji, isTestPlayer: true })));
    startWordDuelGame(room, host);
  }
  return room;
}

export function joinWordDuelRoom(room, value) {
  const identity = normalizeWordDuelIdentity(value);
  if (!identity) throw new WordDuelError("Datos de jugador no válidos");
  const existing = room.players.find((player) => player.name.toLocaleLowerCase() === identity.name.toLocaleLowerCase());
  if (existing) {
    existing.token = makeToken();
    existing.emoji = identity.emoji;
    existing.lastSeen = Date.now();
    room.updatedAt = Date.now();
    return existing;
  }
  if (room.testMode) throw new WordDuelError("Las salas de prueba no aceptan otros jugadores", 409);
  if (room.status !== "lobby") throw new WordDuelError("La partida ya ha empezado", 409);
  if (room.players.length >= room.config.playerLimit) throw new WordDuelError("La sala está llena", 409);
  const player = createPlayer(identity);
  room.players.push(player);
  if (room.players.length >= room.config.playerLimit) startWordDuelGame(room, room.players.find((item) => item.id === room.hostId));
  room.updatedAt = Date.now();
  return player;
}

export function authenticateWordDuelPlayer(room, value) {
  const player = room?.players?.find((item) => item.id === value?.playerId && item.token === value?.token);
  if (!player) throw new WordDuelError("Sesión de jugador no válida", 403);
  player.lastSeen = Date.now();
  return player;
}

export function startWordDuelGame(room, player) {
  assertHost(room, player);
  if (room.status !== "lobby") throw new WordDuelError("La partida ya ha empezado", 409);
  if (room.players.length < 2) throw new WordDuelError("Se necesitan al menos 2 jugadores", 409);
  room.status = "proposing";
  resetRound(room, 0);
  prepareWordDuelBotProposals(room);
  room.updatedAt = Date.now();
}

export function submitWordDuelProposal(room, player, rawWord) {
  if (room.status !== "proposing") throw new WordDuelError("Ahora no se proponen palabras", 409);
  const word = validateProposalWord(rawWord, currentLength(room));
  room.proposals[player.id] = word.normalized;
  room.proposalSpellings = room.proposalSpellings || {};
  room.proposalSpellings[player.id] = word.spelling;
  if (room.players.every((item) => room.proposals[item.id])) beginGuessing(room);
  room.updatedAt = Date.now();
}

export function submitWordDuelGuess(room, player, rawWord) {
  if (room.status !== "guessing") throw new WordDuelError("Ahora no se aceptan intentos", 409);
  const board = room.boards[player.id];
  if (!board || board.solved || board.finished) throw new WordDuelError("Tu ronda ya ha terminado", 409);
  if (board.guesses.length !== room.attemptIndex) throw new WordDuelError("Ya has enviado este intento", 409);
  const guess = validateWord(rawWord, currentLength(room));
  const target = room.proposals[room.assignments[player.id]];
  const targetSpelling = room.proposalSpellings?.[room.assignments[player.id]] || target;
  const displayedGuess = guess === target
    ? targetSpelling
    : String(rawWord || "").trim().toLocaleLowerCase("es").normalize("NFC");
  applyWordDuelGuess(room, player, guess, displayedGuess);
  if (room.testMode) completeWordDuelTestBots(room);
  else advanceAttemptWhenReady(room);
  room.updatedAt = Date.now();
}

export function advanceWordDuelRound(room, player) {
  assertHost(room, player);
  if (room.status !== "round-result") throw new WordDuelError("La ronda todavía no ha terminado", 409);
  if (room.roundIndex >= WORD_DUEL_ROUND_LENGTHS.length - 1) {
    room.status = "finished";
  } else {
    resetRound(room, room.roundIndex + 1);
    room.status = "proposing";
    prepareWordDuelBotProposals(room);
  }
  room.updatedAt = Date.now();
}

export function restartWordDuelGame(room, player) {
  assertHost(room, player);
  room.players.forEach((item) => { item.score = 0; item.roundScores = Array(5).fill(null); });
  room.status = "proposing";
  resetRound(room, 0);
  prepareWordDuelBotProposals(room);
  room.updatedAt = Date.now();
}

export function kickWordDuelPlayer(room, player, targetId) {
  assertHost(room, player);
  if (room.status !== "lobby") throw new WordDuelError("Solo puedes expulsar jugadores en la sala de espera", 409);
  if (!targetId || targetId === room.hostId) throw new WordDuelError("Jugador no válido");
  const previousLength = room.players.length;
  room.players = room.players.filter((item) => item.id !== targetId);
  if (room.players.length === previousLength) throw new WordDuelError("Jugador no encontrado", 404);
  room.updatedAt = Date.now();
}

export function leaveWordDuelPlayer(room, player) {
  if (player.id === room.hostId) return { closeRoom: true };
  room.players = room.players.filter((item) => item.id !== player.id);
  delete room.boards?.[player.id];
  if (room.status !== "guessing") {
    delete room.proposals?.[player.id];
    delete room.proposalSpellings?.[player.id];
  }
  delete room.assignments?.[player.id];
  if (room.players.length < 2 && room.status !== "lobby") room.status = "finished";
  else if (room.status === "proposing" && room.players.every((item) => room.proposals[item.id])) beginGuessing(room);
  else if (room.status === "guessing") advanceAttemptWhenReady(room);
  room.updatedAt = Date.now();
  return { closeRoom: false };
}

export function touchWordDuelRoom(room, playerId, token) {
  const player = room.players.find((item) => item.id === playerId && item.token === token);
  if (player) player.lastSeen = Date.now();
  room.updatedAt = Date.now();
  return player || null;
}

export function wordDuelRoomResponse(room, viewer = null) {
  const length = currentLength(room);
  const rankings = [...room.players].sort((a, b) => b.score - a.score || a.name.localeCompare(b.name, "es"));
  return {
    roomName: room.roomName, config: room.config, status: room.status, testMode: Boolean(room.testMode),
    roundIndex: room.roundIndex, roundNumber: room.roundIndex + 1, wordLength: length,
    attemptIndex: room.attemptIndex, maxAttempts: WORD_DUEL_MAX_ATTEMPTS,
    proposedCount: Object.keys(room.proposals || {}).length,
    submittedWord: viewer ? room.proposalSpellings?.[viewer.id] || room.proposals?.[viewer.id] || "" : "",
    events: room.roundEvents || [],
    players: room.players.map((player) => ({
      id: player.id, name: player.name, emoji: player.emoji, score: player.score,
      roundScores: player.roundScores, isHost: player.id === room.hostId, isTestPlayer: Boolean(player.isTestPlayer),
      hasProposed: Boolean(room.proposals?.[player.id]),
      submittedAttempt: room.boards?.[player.id]?.guesses?.length > room.attemptIndex || Boolean(room.boards?.[player.id]?.finished),
      solved: Boolean(room.boards?.[player.id]?.solved)
    })),
    boards: room.players.map((player) => {
      const board = room.boards?.[player.id] || { guesses: [], solved: false, finished: false, points: 0 };
      const targetPlayerId = room.assignments?.[player.id];
      const target = room.proposalSpellings?.[targetPlayerId] || room.proposals?.[targetPlayerId] || "";
      const reveal = room.status === "round-result" || room.status === "finished" || (viewer && player.id !== viewer.id);
      return { playerId: player.id, guesses: board.guesses, solved: board.solved, finished: board.finished, points: board.points, target: reveal ? target : "", wordLength: length };
    }),
    ranking: rankings.map((player, index) => ({ rank: index + 1, id: player.id, name: player.name, emoji: player.emoji, score: player.score, roundScores: player.roundScores })),
    player: viewer ? { id: viewer.id, token: viewer.token, isHost: viewer.id === room.hostId } : undefined
  };
}

export function evaluateWordDuelGuess(rawGuess, rawTarget) {
  const guess = normalizeWordDuelText(rawGuess);
  const target = normalizeWordDuelText(rawTarget);
  const result = Array(guess.length).fill("absent");
  const remaining = {};
  for (let index = 0; index < target.length; index += 1) {
    if (guess[index] === target[index]) result[index] = "correct";
    else remaining[target[index]] = (remaining[target[index]] || 0) + 1;
  }
  for (let index = 0; index < guess.length; index += 1) {
    if (result[index] === "correct") continue;
    if (remaining[guess[index]] > 0) {
      result[index] = "present";
      remaining[guess[index]] -= 1;
    }
  }
  return result;
}

function createPlayer(identity) {
  return { id: crypto.randomUUID(), token: makeToken(), ...identity, score: 0, roundScores: Array(5).fill(null), lastSeen: Date.now() };
}

function makeToken() {
  return crypto.randomUUID() + crypto.randomUUID();
}

function normalizeWordDuelText(value) {
  return String(value || "").trim().toLocaleLowerCase("es").normalize("NFD").replace(/n\u0303/g, "ñ").replace(/[\u0300-\u036f]/g, "");
}

function validateProposalWord(value, length) {
  const spelling = String(value || "").trim().toLocaleLowerCase("es").normalize("NFC");
  if (!/^[a-záéíóúüñ]+$/.test(spelling) || Array.from(spelling).length !== length) {
    throw new WordDuelError(`La palabra debe tener ${length} letras`);
  }
  const correctedSpelling = SPANISH_WORDS_4_TO_8.has(spelling)
    ? spelling
    : SPANISH_ACCENT_CORRECTIONS.get(normalizeWordDuelText(spelling));
  if (!correctedSpelling) {
    throw new WordDuelError(`No encontramos «${spelling}» en el diccionario. Revisa la ortografía.`);
  }
  return { spelling: correctedSpelling, normalized: normalizeWordDuelText(correctedSpelling) };
}

function buildSpanishAccentCorrections() {
  const corrections = new Map();
  SPANISH_WORDS_4_TO_8.forEach((word) => {
    const normalized = normalizeWordDuelText(word);
    if (word !== normalized && !corrections.has(normalized)) corrections.set(normalized, word);
  });
  return corrections;
}

function validateWord(value, length) {
  const word = normalizeWordDuelText(value);
  if (!/^[a-zñ]+$/.test(word) || Array.from(word).length !== length) {
    throw new WordDuelError(`La palabra debe tener ${length} letras`);
  }
  return word;
}

function currentLength(room) {
  return WORD_DUEL_ROUND_LENGTHS[room.roundIndex] || 7;
}

function resetRound(room, roundIndex) {
  room.roundIndex = roundIndex;
  room.attemptIndex = 0;
  room.proposals = {};
  room.proposalSpellings = {};
  room.assignments = {};
  room.boards = {};
  room.roundEvents = [];
}

function beginGuessing(room) {
  const ids = room.players.map((player) => player.id);
  const shuffled = derange(ids);
  room.assignments = Object.fromEntries(ids.map((id, index) => [id, shuffled[index]]));
  room.boards = Object.fromEntries(ids.map((id) => [id, { guesses: [], solved: false, finished: false, points: 0 }]));
  room.attemptIndex = 0;
  room.status = "guessing";
}

function prepareWordDuelBotProposals(room) {
  if (!room.testMode || room.status !== "proposing") return;
  const words = WORD_DUEL_BOT_WORDS[room.roundIndex] || WORD_DUEL_BOT_WORDS.at(-1);
  room.players.filter((player) => player.isTestPlayer).forEach((bot, index) => {
    const spelling = words[index % words.length];
    room.proposals[bot.id] = normalizeWordDuelText(spelling);
    room.proposalSpellings[bot.id] = spelling;
  });
  if (room.players.every((player) => room.proposals[player.id])) beginGuessing(room);
}

function completeWordDuelTestBots(room) {
  const humans = room.players.filter((player) => !player.isTestPlayer);
  while (room.status === "guessing") {
    const attemptIndex = room.attemptIndex;
    room.players.filter((player) => player.isTestPlayer).forEach((bot, index) => {
      const board = room.boards[bot.id];
      if (!board || board.finished || board.guesses.length !== attemptIndex) return;
      const targetPlayerId = room.assignments[bot.id];
      const target = room.proposals[targetPlayerId];
      const targetSpelling = room.proposalSpellings?.[targetPlayerId] || target;
      const solveAt = (index % 4) + 1;
      const solvedGuess = attemptIndex + 1 >= solveAt;
      const guess = solvedGuess ? target : "x".repeat(currentLength(room));
      applyWordDuelGuess(room, bot, guess, solvedGuess ? targetSpelling : guess);
    });
    advanceAttemptWhenReady(room);
    if (room.status !== "guessing") break;
    const humanNeedsInput = humans.some((player) => {
      const board = room.boards[player.id];
      return board && !board.finished && board.guesses.length === room.attemptIndex;
    });
    if (humanNeedsInput) break;
  }
}

function applyWordDuelGuess(room, player, guess, displayedGuess) {
  const board = room.boards[player.id];
  const target = room.proposals[room.assignments[player.id]];
  const result = evaluateWordDuelGuess(guess, target);
  board.guesses.push({ word: displayedGuess, normalizedWord: guess, result });
  if (guess === target) {
    board.solved = true;
    board.finished = true;
    const points = scoreFor(room.roundIndex, room.attemptIndex);
    board.points = points;
    player.roundScores[room.roundIndex] = points;
    player.score = player.roundScores.reduce((sum, value) => sum + Number(value || 0), 0);
  } else if (room.attemptIndex >= WORD_DUEL_MAX_ATTEMPTS - 1) {
    board.finished = true;
    player.roundScores[room.roundIndex] = 0;
  }
  room.roundEvents = [...(room.roundEvents || []), {
    id: crypto.randomUUID(),
    type: guess === target ? "correct" : "wrong",
    playerId: player.id,
    playerName: player.name,
    playerEmoji: player.emoji,
    guess: displayedGuess,
    attemptNumber: room.attemptIndex + 1,
    points: guess === target ? board.points : 0
  }].slice(-30);
}

function derange(ids) {
  if (ids.length === 2) return [ids[1], ids[0]];
  for (let tries = 0; tries < 50; tries += 1) {
    const shuffled = [...ids];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swap]] = [shuffled[swap], shuffled[index]];
    }
    if (shuffled.every((id, index) => id !== ids[index])) return shuffled;
  }
  return ids.map((_, index) => ids[(index + 1) % ids.length]);
}

function advanceAttemptWhenReady(room) {
  const pending = room.players.some((player) => {
    const board = room.boards[player.id];
    return !board.finished && board.guesses.length <= room.attemptIndex;
  });
  if (pending) return;
  if (room.players.every((player) => room.boards[player.id].finished)) room.status = "round-result";
  else room.attemptIndex += 1;
}

function scoreFor(roundIndex, attemptIndex) {
  const lengthMultiplier = WORD_DUEL_ROUND_LENGTHS[roundIndex] - 2;
  return (WORD_DUEL_MAX_ATTEMPTS - attemptIndex) * 10 * lengthMultiplier;
}

function assertHost(room, player) {
  if (!player || player.id !== room.hostId) throw new WordDuelError("Solo el anfitrión puede hacer eso", 403);
}
