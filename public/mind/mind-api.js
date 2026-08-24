// Capa HTTP de Sincronía. Es el único sitio del cliente que conoce las rutas,
// para que cambiar de transporte (por ejemplo a WebSocket) no toque el resto.

const BASE = "/api/mind/rooms";

export class MindApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "MindApiError";
    this.status = status;
  }
}

async function readPayload(response) {
  try {
    return await response.json();
  } catch {
    return {};
  }
}

async function send(method, url, body) {
  const response = await fetch(url, {
    method,
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined
  });
  const payload = await readPayload(response);
  if (!response.ok) throw new MindApiError(payload.error || "No se pudo completar la acción", response.status);
  return payload;
}

function roomUrl(roomName, suffix = "") {
  return `${BASE}/${encodeURIComponent(roomName)}${suffix}`;
}

export function createRoom(roomName, playerName, playerEmoji = "") {
  return send("POST", BASE, { roomName, playerName, playerEmoji });
}

export function joinRoom(roomName, playerName, playerEmoji = "") {
  return send("POST", roomUrl(roomName, "/join"), { playerName, playerEmoji });
}

export function fetchRoom(roomName, session) {
  const params = new URLSearchParams({ playerId: session.playerId, token: session.token });
  return send("GET", `${roomUrl(roomName)}?${params}`);
}

function action(roomName, session, suffix, body = {}) {
  return send("POST", roomUrl(roomName, suffix), {
    playerId: session.playerId,
    token: session.token,
    ...body
  });
}

export const startGame = (room, session) => action(room, session, "/start");
export const markReady = (room, session) => action(room, session, "/ready");
export const playCard = (room, session, card, actionId) => action(room, session, "/play", { card, actionId });
export const pauseGame = (room, session) => action(room, session, "/pause");
export const proposeStar = (room, session) => action(room, session, "/star-propose");
export const voteStar = (room, session, accept, voteId) => action(room, session, "/star-vote", { accept, voteId });
export const restartGame = (room, session) => action(room, session, "/restart");
export const leaveRoom = (room, session) => action(room, session, "/leave");
