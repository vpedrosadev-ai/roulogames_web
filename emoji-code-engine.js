export class EmojiCodeError extends Error {
  constructor(message, status = 400) {
    super(message);
    this.name = "EmojiCodeError";
    this.status = status;
  }
}

const PLAYER_COLORS = ["#ff6b6b", "#4dabf7", "#ffd43b", "#69db7c", "#b197fc", "#ffa94d", "#f783ac", "#63e6be", "#74c0fc", "#e599f7"];
const MAX_EMOJI_GRAPHEMES = 12;
const BOT_IDENTITIES = [
  { name: "Bot Lumière", emoji: "🎥" },
  { name: "Bot Palomita", emoji: "🍿" },
  { name: "Bot Claqueta", emoji: "🎬" },
  { name: "Bot Estrella", emoji: "⭐" },
  { name: "Bot Robot", emoji: "🤖" },
  { name: "Bot Zorro", emoji: "🦊" },
  { name: "Bot Alien", emoji: "👽" },
  { name: "Bot Fantasma", emoji: "👻" },
  { name: "Bot León", emoji: "🦁" }
];
const BOT_MOVIES = [
  { title: "Titanic", code: "🚢🧊💔" },
  { title: "Up", code: "🎈🏠☁️" },
  { title: "El rey león", code: "🦁👑🌅" },
  { title: "Buscando a Nemo", code: "🐠🌊🔎" },
  { title: "Jurassic Park", code: "🦖🏝️🚙" },
  { title: "Harry Potter", code: "🧙‍♂️⚡🏰" }
];

export function normalizeEmojiCodeKey(value) {
  return String(value || "").trim().toLocaleLowerCase().replace(/[^a-z0-9áéíóúüñ_-]/gi, "").slice(0, 16);
}

export function createEmojiCodeRoom(value = {}) {
  const key = normalizeEmojiCodeKey(value.roomName);
  const roomName = String(value.roomName || "").trim().replace(/\s+/g, " ").slice(0, 16);
  const identity = normalizeIdentity(value);
  const playerLimit = Math.floor(Number(value.playerLimit || 4));
  const rounds = Math.floor(Number(value.rounds || 3));
  const testMode = Boolean(value.testMode);
  const botCount = testMode ? Math.max(1, Math.min(9, Math.floor(Number(value.botCount) || 3))) : 0;
  if (!key || !roomName || !identity) throw new EmojiCodeError("Completa el nombre de sala y tu identidad");
  if (playerLimit < 2 || playerLimit > 10) throw new EmojiCodeError("La sala debe tener entre 2 y 10 jugadores");
  if (rounds < 1 || rounds > 12) throw new EmojiCodeError("Elige entre 1 y 12 rondas");
  const resolvedPlayerLimit = testMode ? botCount + 1 : playerLimit;
  const host = createPlayer(identity, 1);
  const bots = BOT_IDENTITIES.slice(0, botCount).map((bot, index) => createPlayer({ ...bot, isTestPlayer: true }, index + 2));
  const now = Date.now();
  const room = {
    key,
    roomName,
    config: { playerLimit: resolvedPlayerLimit, rounds, guessLimit: 3 },
    testMode,
    botCount,
    status: "lobby",
    phase: "lobby",
    hostId: host.id,
    turnIndex: -1,
    guesserId: "",
    leaderId: "",
    movieTitle: "",
    codes: {},
    guesses: [],
    lastTurnResult: null,
    history: [],
    eventId: "",
    players: [host, ...bots],
    createdAt: now,
    updatedAt: now
  };
  if (testMode) {
    room.turnIndex = 0;
    beginTurn(room);
    settleEmojiCodeBots(room);
  }
  return room;
}

export function joinEmojiCodeRoom(room, value = {}) {
  if (room.status !== "lobby") throw new EmojiCodeError("La partida ya ha empezado", 409);
  const identity = normalizeIdentity(value);
  if (!identity) throw new EmojiCodeError("Elige nombre y emoji");
  const existing = room.players.find((player) => player.name.toLocaleLowerCase() === identity.name.toLocaleLowerCase());
  if (existing) {
    existing.lastSeen = Date.now();
    return existing;
  }
  if (room.players.length >= room.config.playerLimit) throw new EmojiCodeError("La sala está llena", 409);
  const player = createPlayer(identity, nextSeat(room));
  room.players.push(player);
  markChanged(room, "player-joined");
  if (room.players.length === room.config.playerLimit) {
    startRoom(room);
    settleEmojiCodeBots(room);
  }
  return player;
}

export function authenticateEmojiCodePlayer(room, value = {}) {
  const player = room?.players?.find((item) => item.id === String(value.playerId || "") && item.token === String(value.token || ""));
  if (!player) throw new EmojiCodeError("Sesión de jugador no válida", 401);
  player.lastSeen = Date.now();
  return player;
}

export function touchEmojiCodeRoom(room, playerId, token) {
  const player = room.players.find((item) => item.id === String(playerId || "") && item.token === String(token || ""));
  if (player) player.lastSeen = Date.now();
  room.updatedAt = Date.now();
  return player || null;
}

export function startEmojiCodeGame(room, player) {
  requireHost(room, player);
  if (room.status !== "lobby") throw new EmojiCodeError("La partida ya ha empezado", 409);
  if (room.players.length !== room.config.playerLimit) throw new EmojiCodeError(`Faltan jugadores: ${room.players.length}/${room.config.playerLimit}`, 409);
  startRoom(room);
  settleEmojiCodeBots(room);
}

export function submitEmojiCodeTitle(room, player, value, emojiCode) {
  if (room.status !== "playing" || room.phase !== "leader") throw new EmojiCodeError("Ahora no se puede proponer película", 409);
  if (player.id !== room.leaderId) throw new EmojiCodeError("Solo el líder propone la película", 403);
  const title = String(value || "").trim().replace(/\s+/g, " ").slice(0, 80);
  if (title.length < 2) throw new EmojiCodeError("Escribe un título de película válido");
  const code = normalizeEmojiSequence(emojiCode);
  if (!code || !isEmojiOnly(code)) throw new EmojiCodeError("El código solo puede contener emojis");
  room.movieTitle = title;
  room.codes[player.id] = code;
  room.phase = getTeamCoders(room).length ? "team_codes" : "guessing";
  markChanged(room, "title-ready");
  settleEmojiCodeBots(room);
}

export function submitEmojiCode(room, player, value) {
  if (room.status !== "playing" || room.phase !== "team_codes") throw new EmojiCodeError("Ahora no se aceptan códigos", 409);
  if (player.id === room.guesserId || player.id === room.leaderId) throw new EmojiCodeError("Este jugador no envía código en esta fase", 403);
  const code = normalizeEmojiSequence(value);
  if (!code || !isEmojiOnly(code)) throw new EmojiCodeError("El código solo puede contener emojis");
  room.codes[player.id] = code;
  if (getTeamCoders(room).every((coder) => room.codes[coder.id])) room.phase = "guessing";
  markChanged(room, room.phase === "guessing" ? "codes-ready" : "code-submitted");
  settleEmojiCodeBots(room);
}

export function submitEmojiCodeGuess(room, player, value) {
  if (room.status !== "playing" || room.phase !== "guessing") throw new EmojiCodeError("Ahora no se puede adivinar", 409);
  if (player.id !== room.guesserId) throw new EmojiCodeError("Solo el adivinador puede responder", 403);
  const guess = String(value || "").trim().replace(/\s+/g, " ").slice(0, 80);
  if (!guess) throw new EmojiCodeError("Escribe un título");
  const correct = normalizeTitle(guess) === normalizeTitle(room.movieTitle);
  room.guesses.push({ text: guess, correct });
  if (!correct && room.guesses.length < 3) {
    markChanged(room, "guess-wrong");
    return;
  }
  finishTurn(room, correct, guess);
}

export function advanceEmojiCodeTurn(room, player) {
  requireHost(room, player);
  if (room.status !== "playing" || room.phase !== "result") throw new EmojiCodeError("El turno todavía no ha terminado", 409);
  const totalTurns = room.config.rounds * room.players.length;
  if (room.turnIndex + 1 >= totalTurns) {
    room.status = "finished";
    room.phase = "finished";
    markChanged(room, "game-finished");
    return;
  }
  room.turnIndex += 1;
  beginTurn(room);
  settleEmojiCodeBots(room);
}

export function restartEmojiCodeGame(room, player) {
  requireHost(room, player);
  room.status = "lobby";
  room.phase = "lobby";
  room.turnIndex = -1;
  room.guesserId = "";
  room.leaderId = "";
  room.movieTitle = "";
  room.codes = {};
  room.guesses = [];
  room.lastTurnResult = null;
  room.history = [];
  room.players.forEach((item) => { item.score = 0; item.guesserWins = 0; item.codeWins = 0; });
  markChanged(room, "restarted");
  if (room.players.length === room.config.playerLimit) {
    startRoom(room);
    settleEmojiCodeBots(room);
  }
}

export function kickEmojiCodePlayer(room, player, targetId) {
  requireHost(room, player);
  if (room.status !== "lobby") throw new EmojiCodeError("Solo puedes expulsar antes de empezar", 409);
  if (targetId === room.hostId) throw new EmojiCodeError("No puedes expulsar al creador");
  const before = room.players.length;
  room.players = room.players.filter((item) => item.id !== targetId);
  if (room.players.length === before) throw new EmojiCodeError("Jugador no encontrado", 404);
  markChanged(room, "player-kicked");
}

export function leaveEmojiCodeRoom(room, player) {
  if (player.id === room.hostId) return { closeRoom: true };
  if (room.status !== "lobby") throw new EmojiCodeError("No puedes salir después de empezar", 409);
  room.players = room.players.filter((item) => item.id !== player.id);
  markChanged(room, "player-left");
  return { closeRoom: false };
}

export function emojiCodeRoomResponse(room, privatePlayer = null) {
  const now = Date.now();
  const guesser = room.players.find((player) => player.id === room.guesserId);
  const leader = room.players.find((player) => player.id === room.leaderId);
  const isGuesser = privatePlayer?.id === room.guesserId;
  const revealTitle = room.status === "finished" || room.phase === "result" || (privatePlayer && !isGuesser && room.phase !== "leader");
  const revealCodes = ["guessing", "result", "finished"].includes(room.phase);
  const roundNumber = room.turnIndex < 0 ? 0 : Math.floor(room.turnIndex / Math.max(1, room.players.length)) + 1;
  const turnInRound = room.turnIndex < 0 ? 0 : (room.turnIndex % Math.max(1, room.players.length)) + 1;
  return {
    roomName: room.roomName,
    testMode: Boolean(room.testMode),
    botCount: Number(room.botCount || 0),
    config: room.config,
    status: room.status,
    phase: room.phase,
    eventId: room.eventId,
    roundNumber,
    turnInRound,
    turnsPerRound: room.status === "lobby" ? room.config.playerLimit : room.players.length,
    guesserId: room.guesserId,
    guesserName: guesser?.name || "",
    leaderId: room.leaderId,
    leaderName: leader?.name || "",
    movieTitle: revealTitle ? room.movieTitle : "",
    codes: revealCodes ? getCoders(room).map((coder) => ({ playerId: coder.id, name: coder.name, emoji: coder.emoji, code: room.codes[coder.id] || "" })) : [],
    codesSubmitted: Object.keys(room.codes || {}).length,
    codesRequired: Math.max(0, room.players.length - 1),
    guesses: room.guesses || [],
    guessesRemaining: Math.max(0, 3 - (room.guesses || []).length),
    lastTurnResult: room.lastTurnResult,
    history: room.status === "finished" ? room.history : [],
    players: room.players.map((player) => ({
      id: player.id,
      name: player.name,
      emoji: player.emoji,
      color: player.color,
      seatNumber: player.seatNumber,
      score: Number(player.score || 0),
      isTestPlayer: Boolean(player.isTestPlayer),
      role: player.id === room.guesserId ? "guesser" : player.id === room.leaderId ? "leader" : "ally",
      submitted: Boolean(room.codes?.[player.id]),
      connected: now - Number(player.lastSeen || room.createdAt) < 30_000
    })),
    player: privatePlayer ? {
      id: privatePlayer.id,
      token: privatePlayer.token,
      isHost: privatePlayer.id === room.hostId,
      role: privatePlayer.id === room.guesserId ? "guesser" : privatePlayer.id === room.leaderId ? "leader" : "ally",
      canSubmitTitle: room.status === "playing" && room.phase === "leader" && privatePlayer.id === room.leaderId,
      canSubmitCode: room.status === "playing" && room.phase === "team_codes" && privatePlayer.id !== room.guesserId && privatePlayer.id !== room.leaderId && !room.codes?.[privatePlayer.id],
      canGuess: room.status === "playing" && room.phase === "guessing" && privatePlayer.id === room.guesserId,
      canAdvance: room.status === "playing" && room.phase === "result" && privatePlayer.id === room.hostId,
      ownCode: room.codes?.[privatePlayer.id] || ""
    } : undefined
  };
}

export function isEmojiCodeHostConnected(room) {
  const host = room.players.find((player) => player.id === room.hostId);
  return Boolean(host && Date.now() - Number(host.lastSeen || room.createdAt) < 30_000);
}

export function emojiCodeDirectoryEntry(room) {
  return {
    roomName: room.roomName,
    playerCount: room.players.length,
    playerLimit: room.config.playerLimit,
    full: room.players.length >= room.config.playerLimit,
    players: room.players.map((player) => player.name),
    updatedAt: Number(room.updatedAt || room.createdAt || 0)
  };
}

function beginTurn(room) {
  const count = room.players.length;
  const guesserIndex = room.turnIndex % count;
  const leaderIndex = (guesserIndex + 1) % count;
  room.status = "playing";
  room.phase = "leader";
  room.guesserId = room.players[guesserIndex].id;
  room.leaderId = room.players[leaderIndex].id;
  room.movieTitle = "";
  room.codes = {};
  room.guesses = [];
  room.lastTurnResult = null;
  markChanged(room, "turn-start");
}

function finishTurn(room, correct, finalGuess) {
  const attempt = room.guesses.length;
  const guesser = room.players.find((player) => player.id === room.guesserId);
  const guesserPoints = correct ? [10, 7, 5][Math.max(0, attempt - 1)] : 0;
  const codePoints = correct ? 2 : 0;
  if (guesser) {
    guesser.score += guesserPoints;
    if (correct) guesser.guesserWins += 1;
  }
  getCoders(room).forEach((coder) => {
    coder.score += codePoints;
    if (correct) coder.codeWins += 1;
  });
  room.lastTurnResult = {
    correct,
    movieTitle: room.movieTitle,
    guess: finalGuess,
    attempts: attempt,
    guesserId: room.guesserId,
    guesserName: guesser?.name || "",
    guesserPoints,
    codePoints
  };
  room.history.push({
    roundNumber: Math.floor(room.turnIndex / room.players.length) + 1,
    turnInRound: (room.turnIndex % room.players.length) + 1,
    leaderId: room.leaderId,
    ...room.lastTurnResult,
    codes: getCoders(room).map((coder) => ({ playerId: coder.id, code: room.codes[coder.id] || "" }))
  });
  room.phase = "result";
  markChanged(room, correct ? "guess-correct" : "guess-failed");
}

function getCoders(room) {
  return room.players.filter((player) => player.id !== room.guesserId);
}

function getTeamCoders(room) {
  return room.players.filter((player) => player.id !== room.guesserId && player.id !== room.leaderId);
}

function startRoom(room) {
  room.players.forEach((item) => { item.score = 0; item.guesserWins = 0; item.codeWins = 0; });
  room.turnIndex = 0;
  room.history = [];
  room.lastTurnResult = null;
  beginTurn(room);
}

function settleEmojiCodeBots(room) {
  if (!room.testMode || room.status !== "playing") return;
  for (let guard = 0; guard < 5; guard += 1) {
    if (room.phase === "leader") {
      const leader = room.players.find((player) => player.id === room.leaderId);
      if (!leader?.isTestPlayer) return;
      const movie = BOT_MOVIES[room.turnIndex % BOT_MOVIES.length];
      room.movieTitle = movie.title;
      room.codes[leader.id] = movie.code;
      room.phase = getTeamCoders(room).length ? "team_codes" : "guessing";
      markChanged(room, "bot-title-ready");
      continue;
    }
    if (room.phase === "team_codes") {
      const movie = BOT_MOVIES[room.turnIndex % BOT_MOVIES.length];
      getTeamCoders(room).filter((player) => player.isTestPlayer && !room.codes[player.id]).forEach((player, index) => {
        const variants = [movie.code, `${movie.code}✨`, `🎞️${movie.code}`];
        room.codes[player.id] = variants[index % variants.length];
      });
      if (!getTeamCoders(room).every((player) => room.codes[player.id])) return;
      room.phase = "guessing";
      markChanged(room, "bot-codes-ready");
      continue;
    }
    if (room.phase === "guessing") {
      const guesser = room.players.find((player) => player.id === room.guesserId);
      if (!guesser?.isTestPlayer) return;
      room.guesses.push({ text: room.movieTitle, correct: true });
      finishTurn(room, true, room.movieTitle);
    }
    return;
  }
}

function normalizeIdentity(value) {
  const name = String(value.playerName || "").trim().replace(/\s+/g, " ").slice(0, 16);
  const emoji = Array.from(String(value.emoji || "").trim())[0] || "";
  return name && emoji ? { name, emoji } : null;
}

function createPlayer(identity, seatNumber) {
  return {
    id: crypto.randomUUID(),
    token: `${crypto.randomUUID()}${crypto.randomUUID()}`.replaceAll("-", ""),
    ...identity,
    isTestPlayer: Boolean(identity.isTestPlayer),
    seatNumber,
    color: PLAYER_COLORS[(seatNumber - 1) % PLAYER_COLORS.length],
    score: 0,
    guesserWins: 0,
    codeWins: 0,
    lastSeen: Date.now()
  };
}

function nextSeat(room) {
  return Math.max(0, ...room.players.map((player) => Number(player.seatNumber) || 0)) + 1;
}

function requireHost(room, player) {
  if (!player || player.id !== room.hostId) throw new EmojiCodeError("Solo el creador de la sala puede hacerlo", 403);
}

function normalizeTitle(value) {
  return String(value || "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
}

function normalizeEmojiSequence(value) {
  return Array.from(String(value || "").trim().replace(/\s+/g, " ")).slice(0, 64).join("");
}

function isEmojiOnly(value) {
  const compact = value.replace(/\s/g, "");
  if (!compact || /[\p{L}\p{N}]/u.test(compact.replace(/[0-9#*]\uFE0F?\u20E3/gu, ""))) return false;
  const pictographs = compact.match(/\p{Extended_Pictographic}|\p{Regional_Indicator}|[0-9#*]\uFE0F?\u20E3/gu) || [];
  if (!pictographs.length) return false;
  const graphemes = typeof Intl.Segmenter === "function"
    ? [...new Intl.Segmenter("es", { granularity: "grapheme" }).segment(compact)].length
    : pictographs.length;
  return graphemes <= MAX_EMOJI_GRAPHEMES && /^[\p{Extended_Pictographic}\p{Regional_Indicator}\p{Emoji_Modifier}\uFE0F\u200D\u20E3\u2640\u2642\u2695\u2764\u3030\u303D\u3297\u3299#*0-9]+$/u.test(compact);
}

function markChanged(room, type) {
  room.eventId = crypto.randomUUID();
  room.lastEvent = { type };
  room.updatedAt = Date.now();
}
