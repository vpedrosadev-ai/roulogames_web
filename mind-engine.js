// Sincronía: motor de reglas cooperativo inspirado en juegos de sincronización mental.
// Es agnóstico del runtime (Node y Cloudflare Workers) igual que wolf-engine.js:
// no toca red, disco ni base de datos. Los backends lo envuelven con persistencia y auth.

export const MIND_MIN_PLAYERS = 2;
export const MIND_MAX_PLAYERS = 6;
export const MIND_DECK_SIZE = 100;
export const MIND_MAX_LIVES = 5;
export const MIND_MAX_STARS = 3;
export const MIND_START_STARS = 1;
export const MIND_SYNC_COUNTDOWN_MS = 3000;
export const MIND_STAR_VOTE_MS = 30_000;
export const MIND_ROOM_RECONNECT_MS = 2 * 60 * 60 * 1000;
export const MIND_CONNECTED_MS = 30_000;
// Un sondeo solo refresca lastSeen en almacenamiento cada tantos ms, para no
// convertir cada poll de cada jugador en una escritura de base de datos.
export const MIND_HEARTBEAT_MS = 10_000;
export const MIND_RECENT_ACTION_LIMIT = 40;

// Niveles y vidas iniciales según el número de jugadores.
// De 2 a 4 son los valores del juego de mesa. 5 y 6 son extensión propia: se
// mantiene vidas = jugadores, y se recortan niveles para que el total de cartas
// del último nivel siga rondando las 30-36 y sincronizarse no se vuelva imposible.
const MIND_SETUP_BY_PLAYERS = {
  2: { maxLevel: 12, lives: 2 },
  3: { maxLevel: 10, lives: 3 },
  4: { maxLevel: 8, lives: 4 },
  5: { maxLevel: 7, lives: 5 },
  6: { maxLevel: 6, lives: 6 }
};

// Recompensas al COMPLETAR el nivel indicado.
const MIND_LEVEL_REWARDS = {
  2: "star",
  3: "life",
  5: "star",
  6: "life",
  8: "star",
  9: "life"
};

export class MindGameError extends Error {
  constructor(message, status = 400) {
    super(message);
    this.name = "MindGameError";
    this.status = status;
  }
}

export function mindSetupForPlayers(playerCount) {
  return MIND_SETUP_BY_PLAYERS[clampInt(playerCount, MIND_MIN_PLAYERS, MIND_MAX_PLAYERS)];
}

export function mindRewardForLevel(level) {
  return MIND_LEVEL_REWARDS[Number(level)] || "";
}

export function normalizeMindRoomKey(value) {
  return cleanMindText(value, 16).toLocaleLowerCase();
}

export function normalizeMindIdentity(value) {
  const name = cleanMindText(value?.playerName, 16);
  if (!name) return null;
  const emoji = cleanMindText(value?.playerEmoji, 4);
  return { name, emoji };
}

export function createMindPlayer(identity, seatNumber) {
  return {
    id: randomMindId(),
    token: randomMindToken(),
    name: identity.name,
    emoji: identity.emoji || "",
    seatNumber,
    hand: [],
    ready: false,
    lastSeen: Date.now()
  };
}

export function createMindRoom(value) {
  const key = normalizeMindRoomKey(value?.roomName);
  const roomName = cleanMindText(value?.roomName, 16);
  const identity = normalizeMindIdentity(value);
  if (!key || !roomName || !identity) return null;
  const host = createMindPlayer(identity, 1);
  const now = Date.now();
  return {
    key,
    roomName,
    status: "lobby",
    hostId: host.id,
    players: [host],
    // Lo lee gameDirectoryEntry() para mostrar "2/4" en el listado de salas activas.
    maxPlayers: MIND_MAX_PLAYERS,
    level: 0,
    maxLevel: 0,
    lives: 0,
    stars: 0,
    maxLives: MIND_MAX_LIVES,
    maxStars: MIND_MAX_STARS,
    pileTop: 0,
    playedCards: [],
    discardedCards: [],
    mistakes: 0,
    levelReward: "",
    pendingStarVote: null,
    syncEndsAt: 0,
    resumeStatus: "",
    revision: 0,
    recentActions: [],
    eventId: "",
    lastEvent: null,
    createdAt: now,
    updatedAt: now
  };
}

export function replaceOrJoinMindPlayer(room, identity) {
  const existing = room.players.find((player) => player.name.toLocaleLowerCase() === identity.name.toLocaleLowerCase());
  if (existing) {
    // Reconexión: se emite un token nuevo y se conserva la mano.
    existing.token = randomMindToken();
    existing.emoji = identity.emoji || existing.emoji;
    existing.lastSeen = Date.now();
    touchMindRevision(room);
    return { player: existing, created: false };
  }
  if (room.status !== "lobby") {
    throw new MindGameError("La partida ya ha empezado. Entra con el mismo nombre para reconectar.", 409);
  }
  if (room.players.length >= MIND_MAX_PLAYERS) throw new MindGameError("La sala está llena", 409);
  const seatNumber = Math.max(0, ...room.players.map((player) => Number(player.seatNumber) || 0)) + 1;
  const player = createMindPlayer(identity, seatNumber);
  room.players.push(player);
  setMindEvent(room, { type: "player-joined", playerName: player.name });
  touchMindRevision(room);
  return { player, created: true };
}

export function authenticateMindPlayer(room, value) {
  const id = String(value?.playerId || "");
  const token = String(value?.token || "");
  return room?.players.find((player) => player.id === id && player.token === token) || null;
}

export function touchMindRoom(room, playerId, token) {
  advanceMindTimedPhases(room);
  const player = authenticateMindPlayer(room, { playerId, token });
  if (player) player.lastSeen = Date.now();
  return player;
}

export function isMindHost(room, player) {
  return Boolean(player && player.id === (room.hostId || room.players[0]?.id));
}

export function isMindHostConnected(room) {
  const host = room.players.find((player) => player.id === (room.hostId || room.players[0]?.id));
  return Boolean(host && Date.now() - Number(host.lastSeen || room.createdAt) < MIND_ROOM_RECONNECT_MS);
}

export function isMindRoomJoinable(room) {
  return room?.status === "lobby" && room.players.length < MIND_MAX_PLAYERS;
}

// Las fases con cuenta atrás avanzan de forma perezosa, igual que en wolf-engine:
// una sala inactiva solo progresa cuando alguien la consulta.
export function advanceMindTimedPhases(room) {
  if (!room) return;
  const now = Date.now();
  if (room.status === "star_vote" && room.pendingStarVote && now >= Number(room.pendingStarVote.endsAt || 0)) {
    resolveMindStarVote(room, false, "timeout");
  }
  if (room.status === "synchronizing" && Number(room.syncEndsAt || 0) && now >= Number(room.syncEndsAt)) {
    room.status = "playing";
    room.syncEndsAt = 0;
    setMindEvent(room, { type: "level-started", level: room.level });
    touchMindRevision(room);
  }
}

export function startMindGame(room, player) {
  requireMindHost(room, player, "Solo el anfitrión puede empezar la partida");
  if (room.status !== "lobby") throw new MindGameError("La partida ya ha empezado", 409);
  if (room.players.length < MIND_MIN_PLAYERS) {
    throw new MindGameError(`Se necesitan al menos ${MIND_MIN_PLAYERS} jugadores`, 409);
  }
  const setup = mindSetupForPlayers(room.players.length);
  room.maxLevel = setup.maxLevel;
  room.lives = setup.lives;
  // Con 6 jugadores se empieza con 6 vidas, por encima del tope clásico de 5:
  // el techo sube a las vidas iniciales para no arrancar ya por encima del máximo.
  room.maxLives = Math.max(MIND_MAX_LIVES, setup.lives);
  room.stars = MIND_START_STARS;
  room.mistakes = 0;
  room.level = 0;
  room.playedCards = [];
  room.discardedCards = [];
  beginMindLevel(room, 1);
}

export function restartMindGame(room, player) {
  requireMindHost(room, player, "Solo el anfitrión puede reiniciar la partida");
  if (!["victory", "defeat"].includes(room.status)) {
    throw new MindGameError("Solo se puede reiniciar al terminar la partida", 409);
  }
  room.players.forEach((item) => {
    item.hand = [];
    item.ready = false;
  });
  room.status = "lobby";
  room.pendingStarVote = null;
  room.syncEndsAt = 0;
  room.resumeStatus = "";
  room.pileTop = 0;
  room.levelReward = "";
  setMindEvent(room, { type: "game-restarted" });
  touchMindRevision(room);
}

export function readyMindPlayer(room, player) {
  if (!["level_preparation", "paused", "level_result"].includes(room.status)) {
    throw new MindGameError("Ahora no hace falta confirmar que estás preparado", 409);
  }
  player.ready = true;
  if (room.players.some((item) => !item.ready)) {
    setMindEvent(room, { type: "player-ready", playerName: player.name });
    touchMindRevision(room);
    return;
  }
  if (room.status === "level_result") {
    beginMindLevel(room, Number(room.level || 0) + 1);
    return;
  }
  beginMindSynchronizing(room);
}

export function pauseMindRoom(room, player) {
  if (room.status !== "playing") throw new MindGameError("Solo se puede pausar durante el nivel", 409);
  room.status = "paused";
  room.players.forEach((item) => { item.ready = false; });
  setMindEvent(room, { type: "paused", playerName: player.name });
  touchMindRevision(room);
}

export function playMindCard(room, player, cardValue, actionId = "") {
  const replay = findMindRecentAction(room, actionId);
  if (replay) return replay.result;
  if (room.status !== "playing") throw new MindGameError("Ahora no se pueden jugar cartas", 409);

  const card = Math.floor(Number(cardValue));
  if (!Number.isFinite(card)) throw new MindGameError("Carta no válida");
  if (!player.hand.includes(card)) {
    // Puede haber sido descartada por el error de otra persona mientras la petición viajaba.
    throw new MindGameError("Esa carta ya no está en tu mano", 409);
  }
  const lowest = Math.min(...player.hand);
  if (card !== lowest) throw new MindGameError("Solo puedes jugar tu carta más baja", 409);

  player.hand = player.hand.filter((item) => item !== card);
  room.playedCards.push(card);
  room.pileTop = card;

  // Un error cuesta exactamente UNA vida, aunque se descarten varias cartas.
  const missed = [];
  room.players.forEach((item) => {
    const lower = item.hand.filter((value) => value < card);
    if (!lower.length) return;
    item.hand = item.hand.filter((value) => value >= card);
    missed.push(...lower.map((value) => ({ value, playerId: item.id, playerName: item.name })));
  });

  let outcome = "ok";
  if (missed.length) {
    outcome = "mistake";
    room.mistakes = Number(room.mistakes || 0) + 1;
    room.lives = Math.max(0, Number(room.lives || 0) - 1);
    const values = missed.map((item) => item.value).sort((a, b) => a - b);
    room.discardedCards.push(...values);
    setMindEvent(room, {
      type: "mistake",
      playedCard: card,
      playerName: player.name,
      discardedCards: values,
      missed: missed.sort((a, b) => a.value - b.value)
    });
  } else {
    setMindEvent(room, { type: "card-played", playedCard: card, playerName: player.name });
  }

  // La derrota tiene prioridad: si la última vida se pierde con la última carta, se pierde.
  if (room.lives <= 0) {
    finishMindGame(room, "defeat");
  } else if (isMindLevelCleared(room)) {
    completeMindLevel(room);
  } else {
    touchMindRevision(room);
  }

  const result = { outcome, card, discardedCards: missed.map((item) => item.value) };
  rememberMindAction(room, actionId, result);
  return result;
}

export function proposeMindStar(room, player) {
  if (room.status !== "playing") throw new MindGameError("Ahora no se puede proponer una estrella", 409);
  if (Number(room.stars || 0) <= 0) throw new MindGameError("No quedan estrellas ninja", 409);
  if (!room.players.some((item) => item.hand.length)) {
    throw new MindGameError("No quedan cartas que descartar", 409);
  }
  // Proponer bloquea inmediatamente las jugadas: nadie puede jugar mientras se vota.
  room.status = "star_vote";
  room.pendingStarVote = {
    id: randomMindId(),
    proposerId: player.id,
    proposerName: player.name,
    votes: { [player.id]: true },
    endsAt: Date.now() + MIND_STAR_VOTE_MS
  };
  setMindEvent(room, { type: "star-proposed", playerName: player.name });
  touchMindRevision(room);
}

export function voteMindStar(room, player, accept, voteId = "") {
  if (room.status !== "star_vote" || !room.pendingStarVote) {
    throw new MindGameError("No hay ninguna votación abierta", 409);
  }
  if (voteId && voteId !== room.pendingStarVote.id) {
    throw new MindGameError("Esa votación ya ha terminado", 409);
  }
  if (!accept) {
    resolveMindStarVote(room, false, "rejected", player.name);
    return;
  }
  room.pendingStarVote.votes[player.id] = true;
  const everyoneAgreed = room.players.every((item) => room.pendingStarVote.votes[item.id] === true);
  if (everyoneAgreed) resolveMindStarVote(room, true, "accepted");
  else touchMindRevision(room);
}

export function kickMindPlayer(room, player, targetId) {
  requireMindHost(room, player, "Solo el anfitrión puede expulsar jugadores");
  if (room.status !== "lobby") throw new MindGameError("Solo se puede expulsar en la sala de espera", 409);
  if (targetId === room.hostId) throw new MindGameError("El anfitrión no puede expulsarse", 409);
  const target = room.players.find((item) => item.id === targetId);
  if (!target) throw new MindGameError("Jugador no encontrado", 404);
  room.players = room.players.filter((item) => item.id !== targetId);
  setMindEvent(room, { type: "player-kicked", playerName: target.name });
  touchMindRevision(room);
}

export function leaveMindRoom(room, player) {
  if (room.status === "lobby") {
    room.players = room.players.filter((item) => item.id !== player.id);
    if (room.hostId === player.id && room.players.length) room.hostId = room.players[0].id;
    setMindEvent(room, { type: "player-left", playerName: player.name });
    touchMindRevision(room);
    return;
  }
  // Durante la partida no se reparten de nuevo las cartas ni cambia el número de jugadores:
  // eso alteraría vidas, niveles y cartas ya conocidas. Solo se marca la desconexión.
  player.lastSeen = 0;
  if (room.status === "playing") pauseMindRoom(room, player);
  else touchMindRevision(room);
}

export function mindRoomResponse(room, privatePlayer = null) {
  advanceMindTimedPhases(room);
  const now = Date.now();
  const vote = room.pendingStarVote;
  return {
    roomName: room.roomName,
    status: room.status,
    level: Number(room.level || 0),
    maxLevel: Number(room.maxLevel || 0),
    lives: Number(room.lives || 0),
    stars: Number(room.stars || 0),
    maxLives: Number(room.maxLives || MIND_MAX_LIVES),
    maxStars: MIND_MAX_STARS,
    minPlayers: MIND_MIN_PLAYERS,
    maxPlayers: MIND_MAX_PLAYERS,
    pileTop: Number(room.pileTop || 0),
    playedCards: room.playedCards || [],
    discardedCards: room.discardedCards || [],
    mistakes: Number(room.mistakes || 0),
    levelReward: room.levelReward || "",
    nextReward: mindRewardForLevel(Number(room.level || 0)),
    syncEndsAt: Number(room.syncEndsAt || 0),
    serverTime: now,
    revision: Number(room.revision || 0),
    eventId: room.eventId || "",
    lastEvent: room.lastEvent || null,
    starVote: vote ? {
      id: vote.id,
      proposerName: vote.proposerName || "",
      endsAt: Number(vote.endsAt || 0),
      votesCast: room.players.filter((item) => vote.votes[item.id] === true).length,
      votesNeeded: room.players.length,
      hasVoted: Boolean(privatePlayer && vote.votes[privatePlayer.id] === true)
    } : null,
    // Nunca se exponen los valores de las manos ajenas, solo cuántas cartas tienen.
    players: room.players.map((item) => ({
      id: item.id,
      name: item.name,
      emoji: item.emoji || "",
      seatNumber: item.seatNumber,
      cardCount: item.hand.length,
      ready: Boolean(item.ready),
      connected: now - Number(item.lastSeen || 0) < MIND_CONNECTED_MS,
      isHost: item.id === room.hostId
    })).sort((a, b) => a.seatNumber - b.seatNumber),
    player: privatePlayer ? {
      id: privatePlayer.id,
      token: privatePlayer.token,
      isHost: isMindHost(room, privatePlayer),
      name: privatePlayer.name,
      emoji: privatePlayer.emoji || "",
      ready: Boolean(privatePlayer.ready),
      hand: [...privatePlayer.hand].sort((a, b) => a - b),
      playableCard: privatePlayer.hand.length && room.status === "playing" ? Math.min(...privatePlayer.hand) : 0
    } : null
  };
}

function beginMindLevel(room, level) {
  const playerCount = room.players.length;
  if (level * playerCount > MIND_DECK_SIZE) throw new MindGameError("No hay cartas suficientes para ese nivel", 409);
  // Cada nivel se reparte desde una baraja nueva de 1..100, no desde las sobras del anterior.
  const deck = shuffleMindDeck(buildMindDeck());
  let cursor = 0;
  room.players.forEach((player) => {
    player.hand = deck.slice(cursor, cursor + level).sort((a, b) => a - b);
    player.ready = false;
    cursor += level;
  });
  room.level = level;
  room.status = "level_preparation";
  room.pileTop = 0;
  room.playedCards = [];
  room.discardedCards = [];
  room.levelReward = "";
  room.pendingStarVote = null;
  room.syncEndsAt = 0;
  setMindEvent(room, { type: "level-dealt", level });
  touchMindRevision(room);
}

function beginMindSynchronizing(room) {
  room.status = "synchronizing";
  room.syncEndsAt = Date.now() + MIND_SYNC_COUNTDOWN_MS;
  room.players.forEach((item) => { item.ready = false; });
  setMindEvent(room, { type: "synchronizing", level: room.level });
  touchMindRevision(room);
}

function isMindLevelCleared(room) {
  return room.players.every((player) => !player.hand.length);
}

function completeMindLevel(room) {
  // Un nivel cuenta como completado aunque se hayan perdido vidas durante él.
  const reward = mindRewardForLevel(room.level);
  let granted = "";
  if (reward === "star" && Number(room.stars || 0) < MIND_MAX_STARS) {
    room.stars = Number(room.stars || 0) + 1;
    granted = "star";
  } else if (reward === "life" && Number(room.lives || 0) < Number(room.maxLives || MIND_MAX_LIVES)) {
    room.lives = Number(room.lives || 0) + 1;
    granted = "life";
  }
  room.levelReward = granted;
  room.pendingStarVote = null;

  if (Number(room.level || 0) >= Number(room.maxLevel || 0)) {
    finishMindGame(room, "victory");
    return;
  }
  room.status = "level_result";
  room.players.forEach((item) => { item.ready = false; });
  setMindEvent(room, {
    type: "level-complete",
    level: room.level,
    reward,
    granted,
    rewardLost: Boolean(reward && !granted)
  });
  touchMindRevision(room);
}

function finishMindGame(room, status) {
  room.status = status;
  room.pendingStarVote = null;
  room.syncEndsAt = 0;
  room.players.forEach((item) => { item.ready = false; });
  setMindEvent(room, { type: status, level: room.level, lives: room.lives, stars: room.stars });
  touchMindRevision(room);
}

function resolveMindStarVote(room, accepted, reason, rejectedBy = "") {
  const vote = room.pendingStarVote;
  room.pendingStarVote = null;
  if (!accepted) {
    // Rechazada o caducada: no se consume la estrella ni se descarta nada.
    room.status = "playing";
    setMindEvent(room, { type: "star-rejected", reason, playerName: rejectedBy, proposerName: vote?.proposerName || "" });
    touchMindRevision(room);
    return;
  }
  room.stars = Math.max(0, Number(room.stars || 0) - 1);
  const revealed = [];
  room.players.forEach((player) => {
    if (!player.hand.length) return;
    const lowest = Math.min(...player.hand);
    player.hand = player.hand.filter((value) => value !== lowest);
    revealed.push({ value: lowest, playerId: player.id, playerName: player.name });
  });
  const values = revealed.map((item) => item.value).sort((a, b) => a - b);
  room.discardedCards.push(...values);
  setMindEvent(room, { type: "star-used", discardedCards: values, revealed: revealed.sort((a, b) => a.value - b.value) });

  if (isMindLevelCleared(room)) {
    completeMindLevel(room);
    return;
  }
  // Tras usar una estrella el equipo se vuelve a sincronizar.
  room.status = "paused";
  room.players.forEach((item) => { item.ready = false; });
  touchMindRevision(room);
}

function findMindRecentAction(room, actionId) {
  if (!actionId) return null;
  return (room.recentActions || []).find((item) => item.id === actionId) || null;
}

function rememberMindAction(room, actionId, result) {
  if (!actionId) return;
  room.recentActions = [...(room.recentActions || []), { id: actionId, result }].slice(-MIND_RECENT_ACTION_LIMIT);
}

function requireMindHost(room, player, message) {
  if (!isMindHost(room, player)) throw new MindGameError(message, 403);
}

function setMindEvent(room, event) {
  room.eventId = randomMindId();
  room.lastEvent = event || {};
}

function touchMindRevision(room) {
  room.revision = Number(room.revision || 0) + 1;
  room.updatedAt = Date.now();
}

function buildMindDeck() {
  return Array.from({ length: MIND_DECK_SIZE }, (_, index) => index + 1);
}

// Fisher-Yates con aleatoriedad criptográfica. Un sort() con Math.random no es uniforme.
export function shuffleMindDeck(items, randomInt = randomMindInt) {
  for (let index = items.length - 1; index > 0; index -= 1) {
    const target = randomInt(index + 1);
    [items[index], items[target]] = [items[target], items[index]];
  }
  return items;
}

function randomMindInt(bound) {
  const cryptoApi = globalThis.crypto;
  if (!cryptoApi?.getRandomValues) return Math.floor(Math.random() * bound);
  // Muestreo con rechazo para que el módulo no sesgue el reparto.
  const limit = Math.floor(0xffffffff / bound) * bound;
  const buffer = new Uint32Array(1);
  let value = 0;
  do {
    cryptoApi.getRandomValues(buffer);
    value = buffer[0];
  } while (value >= limit);
  return value % bound;
}

function cleanMindText(value, maxLength) {
  return String(value || "").trim().replace(/\s+/g, " ").slice(0, maxLength);
}

function clampInt(value, min, max) {
  return Math.max(min, Math.min(max, Math.floor(Number(value) || min)));
}

function randomMindId() {
  return globalThis.crypto?.randomUUID?.() || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

function randomMindToken() {
  return `${randomMindId()}${randomMindId()}`.replace(/-/g, "");
}
