import { SPANISH_WORDS_4_TO_8 } from "./spanish-words-4-8.js";

export const WORD_DUEL_DEFAULT_ROUND_LENGTH = 5;
export const WORD_DUEL_MIN_ROUNDS = 1;
export const WORD_DUEL_MAX_ROUNDS = 10;
export const WORD_DUEL_MAX_ATTEMPTS = 6;
const WORD_DUEL_MIN_LENGTH = 4;
const WORD_DUEL_MAX_LENGTH = 8;
const SPANISH_ACCENT_CORRECTIONS = buildSpanishAccentCorrections();
const NORMALIZED_SPANISH_WORDS = new Set([...SPANISH_WORDS_4_TO_8].map(normalizeWordDuelText));
const SPANISH_PERSON_NAMES = new Set(`
aaron abel adela adrian agustin aitana alba alberto aleix alejandra alejandro alex alicia alma alonso alvaro amalia amparo ana andrea andres angel angela antonia antonio arancha ariadna arturo aurora beatriz belen bernardo blanca borja bruno candela carla carlos carlota carmen carolina catalina cayetano celia cesar clara claudia concha consuelo cristian cristina daniel david diego diana dolores eduardo elena elias elisa eloy elvira emilio emma encarna enrique eric erika ernesto esteban ester eugenia eugenio eva fabian fatima federico felipe fernando francisca francisco gabriel gema gloria gonzalo gregorio guillermo hector helena hugo ignacio ines iñigo irene isaac isabel ivan jacobo jaime javier jesus joaquin jorge jose josefa juan juana julia julian laura leire leo leonardo leticia lidia lola lorena lourdes lucas lucia luis luisa maite manuel manuela marc marcelo marcos margarita maria marina mario marisol marta martin mateo matias mercedes miguel miriam monica natalia nerea nicolas noa noelia nuria olga oscar pablo paloma patricia paula pedro pilar rafael ramiro ramon raquel rebecca ricardo roberto rocío rodolfo rodrigo rosa rosario ruben ruth salvador samuel sandra santi santiago sara saul sergio silvia sofia sonia susana tamara teresa tomas triana valeria vanesa veronica vicente victor victoria ximena yolanda
`.trim().split(/\s+/));
const WORD_DUEL_TEST_BOTS = [
  ["Bot Letra", "🤖"], ["Bot Tilde", "🧠"], ["Bot Verde", "🟩"],
  ["Bot Amarillo", "🟨"], ["Bot Ñ", "Ñ"], ["Bot Pluma", "✏️"],
  ["Bot Libro", "📚"], ["Bot Diana", "🎯"], ["Bot Rayo", "⚡"]
];
const WORD_DUEL_BOT_WORDS = [
  ["casa", "luna", "mesa", "roca", "pato", "vino", "nube", "gato", "mapa"],
  ["perro", "mango", "silla", "ratón", "campo", "libro", "playa", "reloj", "tigre"],
  ["camino", "tomate", "puerta", "jardín", "piedra", "bosque", "conejo", "cantar", "pelota"],
  ["palabra", "teclado", "ventana", "caballo", "planeta", "corazón", "caminar", "montaña", "sonrisa"],
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
  const roundLengths = normalizeRoundLengths(value?.roundLengths, value?.roundCount);
  if (!key || !roomName || !identity || playerLimit < 2 || playerLimit > 10) {
    throw new WordDuelError("Sala, jugador o límite no válido");
  }
  const host = createPlayer(identity, roundLengths.length);
  const now = Date.now();
  const room = {
    key, roomName, hostId: host.id, config: { playerLimit, roundLengths }, status: "lobby",
    testMode,
    roundIndex: 0, attemptIndex: 0, proposals: {}, proposalSpellings: {}, assignments: {}, boards: {}, roundEvents: [],
    players: [host], createdAt: now, updatedAt: now
  };
  if (testMode) {
    WORD_DUEL_TEST_BOTS.slice(0, botCount).forEach(([name, emoji]) => room.players.push(createPlayer({ name, emoji, isTestPlayer: true }, roundLengths.length)));
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
  const player = createPlayer(identity, getRoundLengths(room).length);
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
  const guess = validateProposalWord(rawWord, currentLength(room));
  const target = room.proposals[room.assignments[player.id]];
  const targetSpelling = room.proposalSpellings?.[room.assignments[player.id]] || target;
  const displayedGuess = guess.normalized === target
    ? targetSpelling
    : guess.spelling;
  applyWordDuelGuess(room, player, guess.normalized, displayedGuess);
  if (room.testMode) completeWordDuelTestBots(room);
  finishRoundWhenReady(room);
  room.updatedAt = Date.now();
}

export function advanceWordDuelRound(room, player) {
  assertHost(room, player);
  if (room.status !== "round-result") throw new WordDuelError("La ronda todavía no ha terminado", 409);
  if (room.roundIndex >= getRoundLengths(room).length - 1) {
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
  room.players.forEach((item) => { item.score = 0; item.roundScores = Array(getRoundLengths(room).length).fill(null); });
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
  else if (room.status === "guessing") finishRoundWhenReady(room);
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
  const roundLengths = getRoundLengths(room);
  const viewerAttemptIndex = viewer ? Math.min(room.boards?.[viewer.id]?.guesses?.length || 0, WORD_DUEL_MAX_ATTEMPTS - 1) : 0;
  const rankings = [...room.players].sort((a, b) => b.score - a.score || a.name.localeCompare(b.name, "es"));
  return {
    roomName: room.roomName, config: room.config, status: room.status, testMode: Boolean(room.testMode),
    roundIndex: room.roundIndex, roundNumber: room.roundIndex + 1, roundCount: roundLengths.length, wordLength: length,
    attemptIndex: viewerAttemptIndex, maxAttempts: WORD_DUEL_MAX_ATTEMPTS,
    proposedCount: Object.keys(room.proposals || {}).length,
    submittedWord: viewer ? room.proposalSpellings?.[viewer.id] || room.proposals?.[viewer.id] || "" : "",
    events: room.roundEvents || [],
    players: room.players.map((player) => ({
      id: player.id, name: player.name, emoji: player.emoji, score: player.score,
      roundScores: player.roundScores, isHost: player.id === room.hostId, isTestPlayer: Boolean(player.isTestPlayer),
      hasProposed: Boolean(room.proposals?.[player.id]),
      submittedAttempt: Boolean(room.boards?.[player.id]?.finished),
      solved: Boolean(room.boards?.[player.id]?.solved),
      finished: Boolean(room.boards?.[player.id]?.finished)
    })),
    boards: room.players.map((player) => {
      const board = room.boards?.[player.id] || { guesses: [], solved: false, finished: false, points: 0 };
      const targetPlayerId = room.assignments?.[player.id];
      const target = room.proposalSpellings?.[targetPlayerId] || room.proposals?.[targetPlayerId] || "";
      const reveal = board.finished || room.status === "round-result" || room.status === "finished" || (viewer && player.id !== viewer.id);
      return { playerId: player.id, guesses: board.guesses, solved: board.solved, finished: board.finished, points: board.points, target: reveal ? target : "", wordLength: length };
    }),
    ranking: rankings.map((player, index) => ({ rank: index + 1, id: player.id, name: player.name, emoji: player.emoji, score: player.score, roundScores: player.roundScores, finished: Boolean(room.boards?.[player.id]?.finished) })),
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

function createPlayer(identity, roundCount = 0) {
  return { id: crypto.randomUUID(), token: makeToken(), ...identity, score: 0, roundScores: Array(roundCount).fill(null), lastSeen: Date.now() };
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
  const normalized = normalizeWordDuelText(spelling);
  const isPersonName = SPANISH_PERSON_NAMES.has(normalized);
  const correctedSpelling = isPersonName
    ? spelling
    : SPANISH_WORDS_4_TO_8.has(spelling)
      ? spelling
      : SPANISH_ACCENT_CORRECTIONS.get(normalized);
  if (!correctedSpelling) {
    throw new WordDuelError(`No encontramos «${spelling}» en el diccionario. Revisa la ortografía.`);
  }
  if (!isPersonName && isSpanishPlural(normalized)) {
    throw new WordDuelError("No se permiten palabras en plural");
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

function isSpanishPlural(word) {
  const singularCandidates = [];
  if (word.endsWith("ces") && word.length > 4) singularCandidates.push(`${word.slice(0, -3)}z`);
  if (word.endsWith("es") && word.length > 4) singularCandidates.push(word.slice(0, -2));
  if (word.endsWith("s") && word.length > 3) singularCandidates.push(word.slice(0, -1));
  return singularCandidates.some((candidate) => NORMALIZED_SPANISH_WORDS.has(candidate) || SPANISH_PERSON_NAMES.has(candidate));
}

function currentLength(room) {
  return getRoundLengths(room)[room.roundIndex] || WORD_DUEL_DEFAULT_ROUND_LENGTH;
}

function normalizeRoundLengths(rawLengths, rawCount) {
  const requestedCount = Math.floor(Number(rawCount));
  const source = Array.isArray(rawLengths) ? rawLengths : [];
  if (!source.length && !requestedCount) return [4, 5, 6, 7, 8];
  const count = Math.max(WORD_DUEL_MIN_ROUNDS, Math.min(WORD_DUEL_MAX_ROUNDS, requestedCount || source.length || 5));
  const lengths = Array.from({ length: count }, (_, index) => Math.floor(Number(source[index])) || WORD_DUEL_DEFAULT_ROUND_LENGTH);
  if (lengths.some((length) => length < WORD_DUEL_MIN_LENGTH || length > WORD_DUEL_MAX_LENGTH)) {
    throw new WordDuelError(`La longitud de cada ronda debe estar entre ${WORD_DUEL_MIN_LENGTH} y ${WORD_DUEL_MAX_LENGTH} letras`);
  }
  return lengths;
}

function getRoundLengths(room) {
  const stored = room?.config?.roundLengths;
  return Array.isArray(stored) && stored.length ? stored : [4, 5, 6, 7, 8];
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
  const words = WORD_DUEL_BOT_WORDS[currentLength(room) - WORD_DUEL_MIN_LENGTH] || WORD_DUEL_BOT_WORDS[1];
  room.players.filter((player) => player.isTestPlayer).forEach((bot, index) => {
    const spelling = words[index % words.length];
    room.proposals[bot.id] = normalizeWordDuelText(spelling);
    room.proposalSpellings[bot.id] = spelling;
  });
  if (room.players.every((player) => room.proposals[player.id])) beginGuessing(room);
}

function completeWordDuelTestBots(room) {
  room.players.filter((player) => player.isTestPlayer).forEach((bot, index) => {
    const board = room.boards[bot.id];
    while (board && !board.finished) {
      const attemptIndex = board.guesses.length;
      const targetPlayerId = room.assignments[bot.id];
      const target = room.proposals[targetPlayerId];
      const targetSpelling = room.proposalSpellings?.[targetPlayerId] || target;
      const solveAt = (index % 4) + 1;
      const solvedGuess = attemptIndex + 1 >= solveAt;
      const guess = solvedGuess ? target : "x".repeat(currentLength(room));
      applyWordDuelGuess(room, bot, guess, solvedGuess ? targetSpelling : guess);
    }
  });
}

function applyWordDuelGuess(room, player, guess, displayedGuess) {
  const board = room.boards[player.id];
  const target = room.proposals[room.assignments[player.id]];
  const result = evaluateWordDuelGuess(guess, target);
  const attemptIndex = board.guesses.length;
  board.guesses.push({ word: displayedGuess, normalizedWord: guess, result });
  if (guess === target) {
    board.solved = true;
    board.finished = true;
    const points = scoreFor(room, attemptIndex);
    board.points = points;
    player.roundScores[room.roundIndex] = points;
    player.score = player.roundScores.reduce((sum, value) => sum + Number(value || 0), 0);
  } else if (attemptIndex >= WORD_DUEL_MAX_ATTEMPTS - 1) {
    board.finished = true;
    player.roundScores[room.roundIndex] = 0;
  }
  if (board.finished) {
    room.roundEvents = [...(room.roundEvents || []), {
      id: crypto.randomUUID(),
      type: guess === target ? "correct" : "failed",
      playerId: player.id,
      playerName: player.name,
      playerEmoji: player.emoji,
      guess: displayedGuess,
      attemptNumber: attemptIndex + 1,
      points: guess === target ? board.points : 0
    }].slice(-30);
  }
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

function finishRoundWhenReady(room) {
  if (room.players.every((player) => room.boards[player.id]?.finished)) room.status = "round-result";
}

function scoreFor(room, attemptIndex) {
  const lengthMultiplier = currentLength(room) - 2;
  return (WORD_DUEL_MAX_ATTEMPTS - attemptIndex) * 10 * lengthMultiplier;
}

function assertHost(room, player) {
  if (!player || player.id !== room.hostId) throw new WordDuelError("Solo el anfitrión puede hacer eso", 403);
}
