export const WOLF_MIN_PLAYERS = 5;
export const WOLF_MAX_PLAYERS = 20;
export const WOLF_CLOSE_EYES_MS = 7000;
export const WOLF_OPEN_EYES_MS = 15000;
export const WOLF_ROLE_OPEN_MS = 15000;
export const WOLF_ROOM_RECONNECT_MS = 2 * 60 * 60 * 1000;

const WOLF_TEST_IDENTITIES = [
  { name: "Bot Roble" },
  { name: "Bot Luna" },
  { name: "Bot Brasa" },
  { name: "Bot Búho" },
  { name: "Bot Musgo" },
  { name: "Bot Nube" },
  { name: "Bot Sauce" },
  { name: "Bot Hiedra" },
  { name: "Bot Tejo" },
  { name: "Bot Cuervo" },
  { name: "Bot Niebla" },
  { name: "Bot Brezo" },
  { name: "Bot Risco" },
  { name: "Bot Arroyo" },
  { name: "Bot Bellota" },
  { name: "Bot Helecho" },
  { name: "Bot Zarza" },
  { name: "Bot Piedra" },
  { name: "Bot Aurora" }
];

export class WolfGameError extends Error {
  constructor(message, status = 400) {
    super(message);
    this.name = "WolfGameError";
    this.status = status;
  }
}

export function createWolfRoom(value) {
  const key = normalizeWolfRoomKey(value?.roomName);
  const roomName = cleanWolfText(value?.roomName, 16);
  const identity = normalizeWolfIdentity(value);
  if (!key || !roomName || !identity) return null;
  const host = createWolfPlayer(identity, 1);
  const testMode = Boolean(value?.testMode);
  const testBotCount = testMode ? Math.max(WOLF_MIN_PLAYERS - 1, Math.min(WOLF_MAX_PLAYERS - 1, Math.floor(Number(value?.testBotCount) || 6))) : 0;
  const room = {
    key,
    roomName,
    testMode,
    testBotCount,
    status: "lobby",
    phase: "lobby",
    hostId: host.id,
    players: [host],
    roleConfig: null,
    dayNumber: 0,
    nightNumber: 0,
    actions: {},
    votes: {},
    lastVoteDetails: [],
    lastVoteOutcome: null,
    lastEliminations: [],
    voteRound: 0,
    tieCandidates: [],
    pendingVictimId: "",
    pendingProtectedId: "",
    pendingHunterId: "",
    afterHunterPhase: "",
    nextNightRole: "",
    winner: "",
    eventId: "",
    lastEvent: null,
    phaseStartedAt: 0,
    phaseEndsAt: 0,
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
  if (testMode) {
    WOLF_TEST_IDENTITIES.slice(0, testBotCount).forEach((testIdentity, index) => {
      const duplicate = room.players.some((player) => player.name.toLocaleLowerCase() === testIdentity.name.toLocaleLowerCase());
      const uniqueIdentity = duplicate ? { ...testIdentity, name: `${testIdentity.name} 2`.slice(0, 16) } : testIdentity;
      const player = createWolfPlayer({ ...uniqueIdentity, isTestPlayer: true }, index + 2);
      room.players.push(player);
    });
  }
  return room;
}

export function normalizeWolfRoomKey(value) {
  return cleanWolfText(value, 16).toLocaleLowerCase();
}

export function normalizeWolfIdentity(value) {
  const name = cleanWolfText(value?.playerName, 16);
  return name ? { name } : null;
}

export function createWolfPlayer(identity, seatNumber) {
  return {
    id: randomWolfId(),
    token: randomWolfToken(),
    ...identity,
    seatNumber,
    role: "",
    alive: true,
    lastSeen: Date.now(),
    lastProtectedId: "",
    seerDiscoveries: [],
    wolfAttackHits: 0,
    idiotRevealed: false,
    voteDisabled: false
  };
}

export function replaceOrJoinWolfPlayer(room, identity) {
  const existing = room.players.find((player) => player.name.toLocaleLowerCase() === identity.name.toLocaleLowerCase());
  if (existing) {
    if (existing.isTestPlayer) throw new WolfGameError("No puedes entrar como jugador virtual de prueba", 409);
    existing.token = randomWolfToken();
    existing.lastSeen = Date.now();
    room.updatedAt = Date.now();
    return { player: existing, created: false };
  }
  if (room.testMode) throw new WolfGameError("Las salas de prueba individual no aceptan más jugadores", 409);
  if (room.status !== "lobby") throw new WolfGameError("La partida ya ha empezado. Usa el nombre de un jugador existente para reconectar.", 409);
  if (room.players.length >= WOLF_MAX_PLAYERS) throw new WolfGameError("La sala está llena", 409);
  const seatNumber = Math.max(0, ...room.players.map((player) => Number(player.seatNumber) || 0)) + 1;
  const player = createWolfPlayer(identity, seatNumber);
  room.players.push(player);
  room.updatedAt = Date.now();
  setWolfEvent(room, { type: "player-joined", playerName: player.name });
  return { player, created: true };
}

export function authenticateWolfPlayer(room, value) {
  const id = String(value?.playerId || "");
  const token = String(value?.token || "");
  return room?.players.find((player) => player.id === id && player.token === token) || null;
}

export function touchWolfRoom(room, playerId, token) {
  advanceWolfTimedPhases(room);
  const player = authenticateWolfPlayer(room, { playerId, token });
  if (player) player.lastSeen = Date.now();
  room.updatedAt = Date.now();
  return player;
}

export function isWolfHost(room, player) {
  return Boolean(player && player.id === (room.hostId || room.players[0]?.id));
}

export function isWolfHostConnected(room) {
  const host = room.players.find((player) => player.id === (room.hostId || room.players[0]?.id));
  return Boolean(host && Date.now() - Number(host.lastSeen || room.createdAt) < WOLF_ROOM_RECONNECT_MS);
}

export function recommendedWolfRoles(playerCount) {
  const count = clampInt(playerCount, WOLF_MIN_PLAYERS, WOLF_MAX_PLAYERS);
  return {
    werewolf: Math.max(1, Math.floor(count / 4)),
    seer: true,
    doctor: true,
    hunter: count >= 7,
    elder: count >= 10,
    idiot: count >= 13
  };
}

export function normalizeWolfRoleConfig(value, playerCount) {
  const count = clampInt(playerCount, WOLF_MIN_PLAYERS, WOLF_MAX_PLAYERS);
  const werewolf = Math.floor(Number(value?.werewolf));
  const maxWerewolves = Math.max(1, Math.floor((count - 1) / 2));
  if (!Number.isFinite(werewolf) || werewolf < 1 || werewolf > maxWerewolves) return null;
  if (Boolean(value?.hunter) && count < 7) return null;
  if (Boolean(value?.elder) && count < 10) return null;
  if (Boolean(value?.idiot) && count < 13) return null;
  const config = {
    werewolf,
    seer: Boolean(value?.seer),
    doctor: Boolean(value?.doctor),
    hunter: Boolean(value?.hunter),
    elder: Boolean(value?.elder),
    idiot: Boolean(value?.idiot)
  };
  const assigned = werewolf + Number(config.seer) + Number(config.doctor) + Number(config.hunter) + Number(config.elder) + Number(config.idiot);
  if (assigned >= count) return null;
  return { ...config, villager: count - assigned };
}

export function startWolfGame(room, player, roleConfig) {
  requireWolfHost(room, player, "Solo el anfitrión puede iniciar la partida");
  if (room.status !== "lobby") throw new WolfGameError("La partida ya ha empezado", 409);
  if (room.players.length < WOLF_MIN_PLAYERS) throw new WolfGameError(`Se necesitan al menos ${WOLF_MIN_PLAYERS} jugadores`, 409);
  const config = normalizeWolfRoleConfig(roleConfig, room.players.length);
  if (!config) throw new WolfGameError("La selección debe incluir lobos y al menos un aldeano");
  const roles = [
    ...Array(config.werewolf).fill("werewolf"),
    ...Array(config.villager).fill("villager"),
    ...(config.seer ? ["seer"] : []),
    ...(config.doctor ? ["doctor"] : []),
    ...(config.hunter ? ["hunter"] : []),
    ...(config.elder ? ["elder"] : []),
    ...(config.idiot ? ["idiot"] : [])
  ];
  shuffleWolfItems(roles);
  room.players.forEach((item, index) => {
    item.role = roles[index];
    item.alive = true;
    item.lastProtectedId = "";
    item.seerDiscoveries = [];
    item.wolfAttackHits = 0;
    item.idiotRevealed = false;
    item.voteDisabled = false;
    delete item.won;
  });
  room.roleConfig = config;
  room.status = "playing";
  room.phase = "role_reveal";
  room.dayNumber = 0;
  room.nightNumber = 0;
  room.actions = {};
  room.votes = {};
  room.lastVoteDetails = [];
  room.lastVoteOutcome = null;
  room.lastEliminations = [];
  room.voteRound = 0;
  room.tieCandidates = [];
  room.pendingVictimId = "";
  room.pendingProtectedId = "";
  room.pendingHunterId = "";
  room.afterHunterPhase = "";
  room.nextNightRole = "";
  room.winner = "";
  setWolfPhase(room, "role_reveal", { type: "roles-assigned" });
  room.updatedAt = Date.now();
}

export function startWolfSequence(room, player) {
  requireWolfHost(room, player, "Solo el anfitrión puede empezar la secuencia");
  if (room.status !== "playing" || !["role_reveal", "day_result"].includes(room.phase)) throw new WolfGameError("Ahora no se puede empezar una nueva noche", 409);
  startWolfNight(room, true);
  room.updatedAt = Date.now();
}

export function restartWolfGame(room, player) {
  requireWolfHost(room, player, "Solo el anfitrión puede reiniciar la partida");
  room.status = "lobby";
  room.phase = "lobby";
  room.players.forEach((item) => {
    item.role = "";
    item.alive = true;
    item.lastProtectedId = "";
    item.seerDiscoveries = [];
    item.wolfAttackHits = 0;
    item.idiotRevealed = false;
    item.voteDisabled = false;
    delete item.won;
  });
  room.roleConfig = null;
  room.dayNumber = 0;
  room.nightNumber = 0;
  room.actions = {};
  room.votes = {};
  room.lastVoteDetails = [];
  room.lastVoteOutcome = null;
  room.lastEliminations = [];
  room.voteRound = 0;
  room.tieCandidates = [];
  room.pendingVictimId = "";
  room.pendingProtectedId = "";
  room.pendingHunterId = "";
  room.afterHunterPhase = "";
  room.nextNightRole = "";
  room.winner = "";
  room.phaseStartedAt = 0;
  room.phaseEndsAt = 0;
  setWolfEvent(room, { type: "game-reset" });
  room.updatedAt = Date.now();
}

export function kickWolfPlayer(room, player, targetId) {
  requireWolfHost(room, player, "Solo el anfitrión puede expulsar jugadores");
  if (room.status !== "lobby") throw new WolfGameError("Solo se puede expulsar antes de empezar la partida", 409);
  if (!targetId || targetId === room.hostId) throw new WolfGameError("Jugador no válido para expulsar");
  const target = room.players.find((item) => item.id === targetId);
  if (!target) throw new WolfGameError("Jugador no encontrado", 404);
  if (target.isTestPlayer) throw new WolfGameError("No se puede expulsar a un jugador virtual de prueba", 409);
  room.players = room.players.filter((item) => item.id !== targetId);
  room.updatedAt = Date.now();
  setWolfEvent(room, { type: "player-kicked", playerName: target.name });
}

export function leaveWolfRoom(room, player) {
  if (!player) throw new WolfGameError("Sesión no válida", 401);
  player.lastSeen = 0;
  room.updatedAt = Date.now();
}

export function submitWolfAction(room, player, targetId) {
  advanceWolfTimedPhases(room);
  if (room.phase === "hunter_shot") {
    if (!player) throw new WolfGameError("Sesión no válida", 401);
  } else {
    requireAliveWolfPlayer(player);
  }
  const target = getAliveWolfPlayer(room, targetId);
  if (!target) throw new WolfGameError("Elige un jugador activo");

  if (room.phase === "night_wolves") {
    if (player.role !== "werewolf") throw new WolfGameError("Ahora solo actúan los lobos", 403);
    if (target.role === "werewolf") throw new WolfGameError("Los lobos no pueden atacarse entre ellos");
    room.actions[player.id] = target.id;
    resolveWerewolfChoices(room, false);
  } else if (room.phase === "night_seer") {
    if (player.role !== "seer") throw new WolfGameError("Ahora solo actúa la Vidente", 403);
    if (target.id === player.id) throw new WolfGameError("Elige otro jugador");
    const discovery = { playerId: target.id, name: target.name, isWerewolf: target.role === "werewolf", nightNumber: room.nightNumber };
    player.seerDiscoveries = [...(player.seerDiscoveries || []).filter((item) => item.playerId !== target.id), discovery];
    room.actions[player.id] = target.id;
    completeWolfNightRole(room, "seer");
  } else if (room.phase === "night_doctor") {
    if (player.role !== "doctor") throw new WolfGameError("Ahora solo actúa el Doctor", 403);
    if (target.id === player.lastProtectedId) throw new WolfGameError("El Doctor no puede proteger al mismo jugador dos noches seguidas");
    player.lastProtectedId = target.id;
    room.pendingProtectedId = target.id;
    room.actions[player.id] = target.id;
    completeWolfNightRole(room, "doctor");
  } else if (room.phase === "hunter_shot") {
    if (player.role !== "hunter" || player.id !== room.pendingHunterId) throw new WolfGameError("Ahora solo puede actuar el Cazador eliminado", 403);
    if (target.id === player.id) throw new WolfGameError("Elige otro jugador");
    target.alive = false;
    appendWolfElimination(room, target, "hunter");
    const after = room.afterHunterPhase || "day_result";
    room.pendingHunterId = "";
    room.afterHunterPhase = "";
    if (!checkWolfWinner(room)) finishWolfHunterPhase(room, after, { type: "hunter-fired", hunterName: player.name, targetName: target.name });
  } else {
    throw new WolfGameError("Ahora no hay ninguna acción privada disponible", 409);
  }
  player.lastSeen = Date.now();
  room.updatedAt = Date.now();
}

export function submitWolfVote(room, player, targetId) {
  advanceWolfTimedPhases(room);
  requireAliveWolfPlayer(player);
  if (room.phase !== "day_vote") throw new WolfGameError("La votación está cerrada", 409);
  if (player.voteDisabled) throw new WolfGameError("Has perdido el derecho a voto", 403);
  const target = getAliveWolfPlayer(room, targetId);
  if (!target || target.id === player.id) throw new WolfGameError("Elige otro jugador activo");
  if (target.idiotRevealed) throw new WolfGameError("El Tonto del pueblo ya revelado no puede volver a ser expulsado");
  if (room.tieCandidates?.length && !room.tieCandidates.includes(target.id)) throw new WolfGameError("Elige uno de los candidatos empatados");
  room.votes[player.id] = target.id;
  player.lastSeen = Date.now();
  resolveWolfDayVotes(room);
  room.updatedAt = Date.now();
}

export function advanceWolfTimedPhases(room) {
  if (room?.status !== "playing") return false;
  let changed = false;
  let guard = 0;
  while (room.phaseEndsAt && Date.now() >= Number(room.phaseEndsAt) && guard < 4) {
    guard += 1;
    changed = true;
    if (room.phase === "night_intermission_open") beginWolfRoleClose(room, room.lastEvent?.completedRole || "");
    else if (room.phase === "night_close") finishWolfRoleClose(room);
    else if (room.phase === "night_role_open") beginWolfNightActions(room);
    else if (room.phase === "night_open") resolveWolfNight(room);
    else break;
  }
  if (changed) room.updatedAt = Date.now();
  return changed;
}

export function resolveWolfTestViewPlayer(room, sessionPlayer, requestedPlayerId = "", autoFollow = false) {
  advanceWolfTimedPhases(room);
  if (!room?.testMode || !isWolfHost(room, sessionPlayer)) return sessionPlayer || null;
  const requested = room.players.find((player) => player.id === String(requestedPlayerId || ""));
  if (autoFollow) {
    const actors = room.phase === "day_vote"
      ? room.players.filter((player) => player.alive && !player.voteDisabled && !room.votes?.[player.id])
      : getWolfActionActors(room).filter((player) => !room.actions?.[player.id]);
    if (actors.length) return actors[0];
  }
  return requested || sessionPlayer || null;
}

export function skipWolfPhase(room, player) {
  requireWolfHost(room, player, "Solo el anfitrión puede saltar fases");
  if (room.status !== "playing") throw new WolfGameError("No se puede saltar la fase actual", 409);
  if (room.phaseEndsAt) {
    room.phaseEndsAt = Date.now() - 1;
    advanceWolfTimedPhases(room);
  } else if (room.phase === "night_wolves") resolveWerewolfChoices(room, true);
  else if (room.phase === "night_seer") completeWolfNightRole(room, "seer");
  else if (room.phase === "night_doctor") completeWolfNightRole(room, "doctor");
  else if (room.phase === "day_vote") resolveWolfDayVotes(room, true);
  else if (room.phase === "hunter_shot") resolveTimedOutHunter(room);
  else throw new WolfGameError("No se puede saltar la fase actual", 409);
  room.updatedAt = Date.now();
}

export function completeWolfNarration(room, player, eventId) {
  if (!player) throw new WolfGameError("Sesión no válida", 401);
  if (room.status !== "playing" || String(eventId || "") !== room.eventId) return false;
  if (!["night_close", "night_role_open", "night_open"].includes(room.phase)) return false;
  room.phaseEndsAt = Date.now() - 1;
  advanceWolfTimedPhases(room);
  room.updatedAt = Date.now();
  return true;
}

export function wolfRoomResponse(room, privatePlayer = null, sessionPlayer = privatePlayer) {
  advanceWolfTimedPhases(room);
  const now = Date.now();
  const revealAll = room.status === "finished";
  const revealAllRoles = revealAll || Boolean(room.testMode && isWolfHost(room, sessionPlayer));
  const alivePlayers = room.players.filter((player) => player.alive);
  const actionActors = getWolfActionActors(room);
  const aliveVoters = room.phase === "day_vote" ? alivePlayers.filter((player) => !player.voteDisabled) : [];
  const privateHasActed = Boolean(privatePlayer && room.actions?.[privatePlayer.id]);
  const privateHasVoted = Boolean(privatePlayer && room.votes?.[privatePlayer.id]);
  const wolfNames = privatePlayer?.role === "werewolf" || revealAll
    ? room.players.filter((player) => player.role === "werewolf").map((player) => player.name)
    : [];
  const visibleNightVotes = room.phase === "night_wolves" && privatePlayer?.alive && privatePlayer.role === "werewolf"
    ? getWolfVoteDetails(room, room.actions)
    : [];
  const visibleDayVotes = room.phase === "day_vote" ? getWolfVoteDetails(room, room.votes) : [];
  return {
    roomName: room.roomName,
    testMode: Boolean(room.testMode),
    status: room.status,
    phase: room.phase,
    theme: getWolfTheme(room.phase),
    roleConfig: room.roleConfig,
    recommendation: recommendedWolfRoles(room.players.length),
    minPlayers: WOLF_MIN_PLAYERS,
    maxPlayers: WOLF_MAX_PLAYERS,
    dayNumber: Number(room.dayNumber || 0),
    nightNumber: Number(room.nightNumber || 0),
    winner: room.winner || "",
    eventId: room.eventId || "",
    lastEvent: room.lastEvent || null,
    phaseStartedAt: Number(room.phaseStartedAt || 0),
    phaseEndsAt: Number(room.phaseEndsAt || 0),
    serverTime: now,
    actionsCast: Object.keys(room.actions || {}).filter((id) => actionActors.some((player) => player.id === id)).length,
    actionsNeeded: actionActors.length,
    votesCast: Object.keys(room.votes || {}).filter((id) => aliveVoters.some((player) => player.id === id)).length,
    votesNeeded: aliveVoters.length,
    canHostSkip: isWolfHost(room, sessionPlayer) && room.status === "playing" && !["role_reveal", "day_result"].includes(room.phase),
    voteRound: Number(room.voteRound || 0),
    tieCandidates: room.tieCandidates || [],
    nightVotes: visibleNightVotes,
    dayVotes: visibleDayVotes,
    lastDayVotes: room.lastVoteDetails || [],
    lastDayVoteOutcome: room.lastVoteOutcome || null,
    lastEliminations: room.lastEliminations || [],
    players: room.players.map((player) => {
      const seerDiscovery = privatePlayer?.role === "seer"
        ? (privatePlayer.seerDiscoveries || []).find((item) => item.playerId === player.id)
        : null;
      const roleKnown = revealAllRoles
        || !player.alive
        || player.idiotRevealed
        || player.id === privatePlayer?.id
        || (privatePlayer?.role === "werewolf" && player.role === "werewolf")
        || Boolean(seerDiscovery?.isWerewolf);
      return {
        id: player.id,
        name: player.name,
        seatNumber: player.seatNumber,
        alive: Boolean(player.alive),
        connected: Boolean(player.isTestPlayer) || now - Number(player.lastSeen || 0) < 30_000,
        isHost: player.id === room.hostId,
        isTestPlayer: Boolean(player.isTestPlayer),
        hasActed: player.id === privatePlayer?.id && Boolean(room.actions?.[player.id]),
        hasVoted: Boolean(room.votes?.[player.id]),
        voteDisabled: Boolean(player.voteDisabled),
        role: roleKnown ? player.role : "",
        won: revealAll ? Boolean(player.won) : undefined
      };
    }).sort((a, b) => a.seatNumber - b.seatNumber),
    player: privatePlayer ? {
      id: privatePlayer.id,
      sessionPlayerId: sessionPlayer?.id || privatePlayer.id,
      token: sessionPlayer?.token || privatePlayer.token,
      isHost: isWolfHost(room, sessionPlayer),
      viewingAs: privatePlayer.id !== sessionPlayer?.id,
      role: privatePlayer.role,
      alive: Boolean(privatePlayer.alive),
      hasActed: privateHasActed,
      hasVoted: privateHasVoted,
      wolfNames,
      seerDiscoveries: privatePlayer.seerDiscoveries || [],
      lastProtectedId: privatePlayer.role === "doctor" ? privatePlayer.lastProtectedId || "" : "",
      wolfAttackHits: privatePlayer.role === "elder" ? Number(privatePlayer.wolfAttackHits || 0) : 0,
      voteDisabled: Boolean(privatePlayer.voteDisabled),
      won: revealAll ? Boolean(privatePlayer.won) : undefined
    } : null,
    test: room.testMode && isWolfHost(room, sessionPlayer) ? {
      enabled: true,
      viewPlayerId: privatePlayer?.id || sessionPlayer?.id || "",
      canSkip: room.status === "playing" && !["role_reveal", "day_result"].includes(room.phase)
    } : null
  };
}

function startWolfNight(room, closeAllPlayers = false) {
  room.nightNumber = Number(room.nightNumber || 0) + 1;
  room.actions = {};
  room.votes = {};
  room.lastVoteDetails = [];
  room.lastVoteOutcome = null;
  room.lastEliminations = [];
  room.voteRound = 0;
  room.tieCandidates = [];
  room.pendingVictimId = "";
  room.pendingProtectedId = "";
  room.nextNightRole = getNextLivingWolfNightRole(room, "");
  if (closeAllPlayers) beginWolfRoleClose(room);
  else beginWolfRoleOpen(room);
}

function beginWolfNightActions(room) {
  room.actions = {};
  const role = room.nextNightRole || getNextLivingWolfNightRole(room, "");
  room.nextNightRole = "";
  if (role === "werewolf") setWolfPhase(room, "night_wolves", { type: "werewolves-wake", nightNumber: room.nightNumber });
  else if (role === "seer") setWolfPhase(room, "night_seer", { type: "seer-wakes", nightNumber: room.nightNumber });
  else if (role === "doctor") setWolfPhase(room, "night_doctor", { type: "doctor-wakes", nightNumber: room.nightNumber });
  else beginWolfWake(room);
}

function resolveWerewolfChoices(room, force) {
  const wolves = room.players.filter((player) => player.alive && player.role === "werewolf");
  if (!force && wolves.some((player) => !room.actions?.[player.id])) return;
  const counts = countWolfTargets(wolves.map((player) => room.actions[player.id]));
  if (!counts.size) {
    const candidates = room.players.filter((player) => player.alive && player.role !== "werewolf");
    const fallback = randomWolfItem(candidates);
    room.pendingVictimId = fallback?.id || "";
    room.actions = {};
    completeWolfNightRole(room, "werewolf");
    return;
  }
  const high = Math.max(0, ...counts.values());
  const leaders = [...counts.entries()].filter(([, count]) => count === high).map(([id]) => id);
  if (leaders.length !== 1 && !force) {
    room.actions = {};
    setWolfEvent(room, { type: "werewolf-tie" });
    return;
  }
  room.pendingVictimId = randomWolfItem(leaders) || "";
  room.actions = {};
  completeWolfNightRole(room, "werewolf");
}

function completeWolfNightRole(room, completedRole) {
  room.actions = {};
  room.nextNightRole = getNextLivingWolfNightRole(room, completedRole);
  beginWolfRoleClose(room, completedRole);
}

function beginWolfRoleClose(room, completedRole = "") {
  setWolfPhase(room, "night_close", {
    type: "night-role-closes",
    completedRole,
    nextRole: room.nextNightRole,
    nightNumber: room.nightNumber
  }, WOLF_CLOSE_EYES_MS);
}

function finishWolfRoleClose(room) {
  const completedRole = room.lastEvent?.completedRole || "";
  if (room.nextNightRole) beginWolfRoleOpen(room);
  else beginWolfWake(room, completedRole);
}

function beginWolfRoleOpen(room) {
  if (!room.nextNightRole) {
    beginWolfWake(room);
    return;
  }
  setWolfPhase(room, "night_role_open", {
    type: "night-role-opens",
    nextRole: room.nextNightRole,
    nightNumber: room.nightNumber
  }, WOLF_ROLE_OPEN_MS);
}

function beginWolfWake(room, completedRole = "") {
  room.actions = {};
  room.nextNightRole = "";
  setWolfPhase(room, "night_open", { type: "open-eyes", completedRole, nightNumber: room.nightNumber }, WOLF_OPEN_EYES_MS);
}

function getNextLivingWolfNightRole(room, completedRole) {
  const roles = ["werewolf", "seer", "doctor"];
  const startIndex = completedRole ? roles.indexOf(completedRole) + 1 : 0;
  return roles.slice(Math.max(0, startIndex)).find((role) => room.players.some((player) => player.alive && player.role === role)) || "";
}

function resolveWolfNight(room) {
  const victim = getAliveWolfPlayer(room, room.pendingVictimId);
  const protectedPlayer = getAliveWolfPlayer(room, room.pendingProtectedId);
  room.pendingVictimId = "";
  room.pendingProtectedId = "";
  room.actions = {};
  room.dayNumber = Number(room.dayNumber || 0) + 1;
  if (!victim || victim.id === protectedPlayer?.id) {
    beginWolfDayVote(room, { type: "night-peaceful", dayNumber: room.dayNumber });
    return;
  }
  if (victim.role === "elder" && Number(victim.wolfAttackHits || 0) < 1) {
    victim.wolfAttackHits = Number(victim.wolfAttackHits || 0) + 1;
    beginWolfDayVote(room, { type: "night-peaceful", dayNumber: room.dayNumber });
    return;
  }
  victim.alive = false;
  appendWolfElimination(room, victim, "night");
  if (victim.role === "hunter") {
    room.pendingHunterId = victim.id;
    room.afterHunterPhase = "day_vote";
    setWolfPhase(room, "hunter_shot", { type: "hunter-fell", hunterName: victim.name, cause: "night" });
    return;
  }
  if (!checkWolfWinner(room)) beginWolfDayVote(room, { type: "night-victim", playerName: victim.name, role: victim.role, dayNumber: room.dayNumber });
}

function beginWolfDayVote(room, event) {
  room.votes = {};
  room.lastVoteDetails = [];
  room.lastVoteOutcome = null;
  room.tieCandidates = [];
  room.voteRound = 0;
  setWolfPhase(room, "day_vote", event);
}

function resolveWolfDayVotes(room, force = false) {
  const voters = room.players.filter((player) => player.alive && !player.voteDisabled);
  if (!force && voters.some((player) => !room.votes?.[player.id])) return;
  const voteDetails = getWolfVoteDetails(room, room.votes);
  room.lastVoteDetails = voteDetails;
  const counts = countWolfTargets(voters.map((player) => room.votes[player.id]));
  if (!counts.size) {
    const candidates = room.tieCandidates?.length
      ? room.tieCandidates.map((id) => getAliveWolfPlayer(room, id)).filter(Boolean)
      : voters;
    const fallback = randomWolfItem(candidates);
    if (fallback) counts.set(fallback.id, 1);
  }
  const high = Math.max(0, ...counts.values());
  const leaders = [...counts.entries()].filter(([, count]) => count === high).map(([id]) => id);
  if (leaders.length > 1) {
    room.lastVoteOutcome = {
      type: "tie",
      targetPlayerIds: leaders,
      targetNames: leaders.map((id) => room.players.find((player) => player.id === id)?.name).filter(Boolean)
    };
    room.votes = {};
    room.tieCandidates = leaders;
    room.voteRound = Number(room.voteRound || 0) + 1;
    setWolfPhase(room, "day_vote", { type: "vote-tie", candidateNames: leaders.map((id) => room.players.find((player) => player.id === id)?.name).filter(Boolean) });
    return;
  }
  const target = getAliveWolfPlayer(room, randomWolfItem(leaders));
  room.votes = {};
  room.tieCandidates = [];
  if (!target) return;
  room.lastVoteOutcome = {
    type: "eliminated",
    targetPlayerIds: [target.id],
    targetNames: [target.name]
  };
  room.lastEliminations = [];
  if (target.role === "idiot" && !target.idiotRevealed) {
    target.idiotRevealed = true;
    target.voteDisabled = true;
    room.lastVoteOutcome = {
      type: "spared",
      targetPlayerIds: [target.id],
      targetNames: [target.name]
    };
    setWolfPhase(room, "day_result", { type: "idiot-spared", playerName: target.name, role: target.role });
    return;
  }
  target.alive = false;
  appendWolfElimination(room, target, "vote");
  if (target.role === "hunter") {
    room.pendingHunterId = target.id;
    room.afterHunterPhase = "day_result";
    setWolfPhase(room, "hunter_shot", { type: "hunter-fell", hunterName: target.name, cause: "vote" });
    return;
  }
  if (!checkWolfWinner(room)) setWolfPhase(room, "day_result", { type: "player-banished", playerName: target.name, role: target.role });
}

function resolveTimedOutHunter(room) {
  const hunter = room.players.find((player) => player.id === room.pendingHunterId);
  const target = randomWolfItem(room.players.filter((player) => player.alive && player.id !== hunter?.id));
  const after = room.afterHunterPhase || "day_result";
  room.pendingHunterId = "";
  room.afterHunterPhase = "";
  if (target) {
    target.alive = false;
    appendWolfElimination(room, target, "hunter");
  }
  if (!checkWolfWinner(room)) finishWolfHunterPhase(room, after, target
    ? { type: "hunter-fired", hunterName: hunter?.name || "Cazador", targetName: target.name, automatic: true }
    : { type: "hunter-missed", hunterName: hunter?.name || "Cazador" });
}

function finishWolfHunterPhase(room, after, event) {
  if (after === "day_vote") beginWolfDayVote(room, { ...event, dayNumber: room.dayNumber });
  else setWolfPhase(room, "day_result", event);
}

function getWolfVoteDetails(room, selections) {
  return Object.entries(selections || {}).map(([voterId, targetPlayerId]) => {
    const voter = room.players.find((player) => player.id === voterId);
    const target = room.players.find((player) => player.id === targetPlayerId);
    return voter && target ? {
      voterId: voter.id,
      voterName: voter.name,
      targetPlayerId: target.id,
      targetName: target.name
    } : null;
  }).filter(Boolean);
}

function appendWolfElimination(room, player, cause) {
  if (!player) return;
  room.lastEliminations = [...(room.lastEliminations || []), {
    cause,
    playerId: player.id,
    playerName: player.name,
    role: player.role
  }];
}

function checkWolfWinner(room) {
  const alive = room.players.filter((player) => player.alive);
  const wolves = alive.filter((player) => player.role === "werewolf").length;
  const village = alive.length - wolves;
  if (wolves > 0 && wolves < village) return false;
  room.status = "finished";
  room.phase = "finished";
  room.winner = wolves <= 0 ? "village" : "werewolves";
  room.phaseEndsAt = 0;
  room.players.forEach((player) => { player.won = room.winner === "werewolves" ? player.role === "werewolf" : player.role !== "werewolf"; });
  setWolfEvent(room, { type: "game-finished", winner: room.winner, eliminations: room.lastEliminations || [] });
  return true;
}

function getWolfActionActors(room) {
  if (room.phase === "night_wolves") return room.players.filter((player) => player.alive && player.role === "werewolf");
  if (room.phase === "night_seer") return room.players.filter((player) => player.alive && player.role === "seer");
  if (room.phase === "night_doctor") return room.players.filter((player) => player.alive && player.role === "doctor");
  if (room.phase === "hunter_shot") return room.players.filter((player) => player.id === room.pendingHunterId);
  return [];
}

function getAliveWolfPlayer(room, id) {
  return room.players.find((player) => player.id === String(id || "") && player.alive) || null;
}

function requireAliveWolfPlayer(player) {
  if (!player) throw new WolfGameError("Sesión no válida", 401);
  if (!player.alive) throw new WolfGameError("Los jugadores eliminados no pueden actuar", 403);
}

function requireWolfHost(room, player, message) {
  if (!isWolfHost(room, player)) throw new WolfGameError(message, 403);
}

function setWolfPhase(room, phase, event, durationMs = 0) {
  const now = Date.now();
  room.phase = phase;
  room.phaseStartedAt = now;
  room.phaseEndsAt = durationMs ? now + durationMs : 0;
  setWolfEvent(room, event);
}

function setWolfEvent(room, event) {
  room.eventId = randomWolfId();
  room.lastEvent = event || {};
}

function getWolfTheme(phase) {
  if (String(phase || "").startsWith("night_") || phase === "hunter_shot") return "night";
  return "day";
}

function countWolfTargets(ids) {
  const counts = new Map();
  ids.filter(Boolean).forEach((id) => counts.set(id, (counts.get(id) || 0) + 1));
  return counts;
}

function shuffleWolfItems(items) {
  for (let index = items.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [items[index], items[target]] = [items[target], items[index]];
  }
  return items;
}

function randomWolfItem(items) {
  return items?.length ? items[Math.floor(Math.random() * items.length)] : null;
}

function cleanWolfText(value, maxLength) {
  return String(value || "").trim().replace(/\s+/g, " ").slice(0, maxLength);
}

function clampInt(value, min, max) {
  return Math.max(min, Math.min(max, Math.floor(Number(value) || min)));
}

function randomWolfId() {
  return globalThis.crypto?.randomUUID?.() || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

function randomWolfToken() {
  return `${randomWolfId()}${randomWolfId()}`.replace(/-/g, "");
}
