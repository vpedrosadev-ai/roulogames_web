// Capa HTTP de Numbers. Es el único sitio del cliente que conoce las rutas.

const BASE = "/api/numbers/rooms";

export class NumbersApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "NumbersApiError";
    this.status = status;
  }
}

async function send(method, url, body) {
  const response = await fetch(url, {
    method,
    // La respuesta es distinta para cada jugador: que el navegador tampoco la reutilice.
    cache: "no-store",
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new NumbersApiError(payload.error || "No se pudo completar la acción", response.status);
  return payload;
}

function roomUrl(roomName, suffix = "") {
  return `${BASE}/${encodeURIComponent(roomName)}${suffix}`;
}

function action(roomName, session, suffix, body = {}) {
  return send("POST", roomUrl(roomName, suffix), { playerId: session.playerId, token: session.token, ...body });
}

export function createRoom(roomName, playerName, mode) {
  return send("POST", BASE, { roomName, playerName, mode });
}

export function joinRoom(roomName, playerName) {
  return send("POST", roomUrl(roomName, "/join"), { playerName });
}

export function fetchRoom(roomName, session) {
  const params = new URLSearchParams({ playerId: session.playerId, token: session.token });
  return send("GET", `${roomUrl(roomName)}?${params}`);
}

// baseRound es la ronda que ve el anfitrión: el servidor ignora el reparto si ya cambió.
export const deal = (roomName, session, mode, baseRound) => action(roomName, session, "/deal", { mode, baseRound });
export const leaveRoom = (roomName, session) => action(roomName, session, "/leave");
