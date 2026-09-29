// Numbers: cada jugador recibe un valor secreto que ven todos menos él.
// La web solo reparte y oculta; las preguntas y los aciertos ocurren hablando.
// Es agnóstico del runtime (Node y Cloudflare Workers) igual que mind-engine.js:
// no toca red, disco ni base de datos. Los backends lo envuelven con persistencia y auth.

export const NUMBERS_MIN_PLAYERS = 2;
export const NUMBERS_MAX_PLAYERS = 10;
export const NUMBERS_VALUE_MIN = 1;
export const NUMBERS_VALUE_MAX = 100;
export const NUMBERS_ROOM_RECONNECT_MS = 2 * 60 * 60 * 1000;
export const NUMBERS_CONNECTED_MS = 30_000;
// Un sondeo solo refresca lastSeen en almacenamiento cada tantos ms, para no
// convertir cada poll de cada jugador en una escritura de base de datos.
export const NUMBERS_HEARTBEAT_MS = 10_000;
export const NUMBERS_MODES = ["numbers", "famous", "objects"];

// Nombres propios reconocibles que se escriben igual en es / ca / en, para que
// cambiar de idioma no cambie lo que ven los demás.
const NUMBERS_FAMOUS = [
  "Albert Einstein", "Pablo Picasso", "Salvador Dalí", "Frida Kahlo", "Vincent van Gogh",
  "Leonardo da Vinci", "Antoni Gaudí", "Marie Curie", "Isaac Newton", "Charles Darwin",
  "Stephen Hawking", "Neil Armstrong", "Nelson Mandela", "Mahatma Gandhi", "Barack Obama",
  "Michael Jackson", "Madonna", "Elvis Presley", "Freddie Mercury", "Shakira",
  "Rosalía", "Bad Bunny", "Taylor Swift", "Beyoncé", "Rihanna",
  "Lady Gaga", "Ed Sheeran", "Adele", "Dua Lipa", "Alejandro Sanz",
  "Leo Messi", "Cristiano Ronaldo", "Rafa Nadal", "Pau Gasol", "Fernando Alonso",
  "Michael Jordan", "Usain Bolt", "Serena Williams", "Lewis Hamilton", "Andrés Iniesta",
  "Charlie Chaplin", "Marilyn Monroe", "Leonardo DiCaprio", "Brad Pitt", "Tom Cruise",
  "Penélope Cruz", "Antonio Banderas", "Pedro Almodóvar", "Zendaya", "Walt Disney",
  "Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg", "Oprah Winfrey",
  "Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "William Shakespeare", "Ibai Llanos", "Kim Kardashian"
];

// Objetos cotidianos con identificador estable y traducción. Lo asignado es el id:
// el idioma solo cambia cómo se muestra.
const NUMBERS_OBJECTS = [
  ["car", "coche", "cotxe", "car"],
  ["motorbike", "moto", "moto", "motorbike"],
  ["bicycle", "bicicleta", "bicicleta", "bicycle"],
  ["broom", "escoba", "escombra", "broom"],
  ["umbrella", "paraguas", "paraigua", "umbrella"],
  ["fridge", "nevera", "nevera", "fridge"],
  ["microwave", "microondas", "microones", "microwave"],
  ["washing-machine", "lavadora", "rentadora", "washing machine"],
  ["toothbrush", "cepillo de dientes", "raspall de dents", "toothbrush"],
  ["pillow", "almohada", "coixí", "pillow"],
  ["sofa", "sofá", "sofà", "sofa"],
  ["chair", "silla", "cadira", "chair"],
  ["table", "mesa", "taula", "table"],
  ["lamp", "lámpara", "làmpada", "lamp"],
  ["mirror", "espejo", "mirall", "mirror"],
  ["clock", "reloj", "rellotge", "clock"],
  ["key", "llave", "clau", "key"],
  ["wallet", "cartera", "cartera", "wallet"],
  ["backpack", "mochila", "motxilla", "backpack"],
  ["glasses", "gafas", "ulleres", "glasses"],
  ["hat", "sombrero", "barret", "hat"],
  ["shoe", "zapato", "sabata", "shoe"],
  ["sock", "calcetín", "mitjó", "sock"],
  ["mobile-phone", "teléfono móvil", "telèfon mòbil", "mobile phone"],
  ["laptop", "ordenador portátil", "ordinador portàtil", "laptop"],
  ["television", "televisión", "televisió", "television"],
  ["remote-control", "mando a distancia", "comandament a distància", "remote control"],
  ["headphones", "auriculares", "auriculars", "headphones"],
  ["camera", "cámara de fotos", "càmera de fotos", "camera"],
  ["guitar", "guitarra", "guitarra", "guitar"],
  ["piano", "piano", "piano", "piano"],
  ["ball", "pelota", "pilota", "ball"],
  ["book", "libro", "llibre", "book"],
  ["pencil", "lápiz", "llapis", "pencil"],
  ["scissors", "tijeras", "tisores", "scissors"],
  ["hammer", "martillo", "martell", "hammer"],
  ["ladder", "escalera de mano", "escala de mà", "ladder"],
  ["candle", "vela", "espelma", "candle"],
  ["frying-pan", "sartén", "paella", "frying pan"],
  ["spoon", "cuchara", "cullera", "spoon"],
  ["fork", "tenedor", "forquilla", "fork"],
  ["knife", "cuchillo", "ganivet", "knife"],
  ["cup", "taza", "tassa", "cup"],
  ["bottle", "botella", "ampolla", "bottle"],
  ["toaster", "tostadora", "torradora", "toaster"],
  ["hair-dryer", "secador de pelo", "assecador de cabells", "hair dryer"],
  ["towel", "toalla", "tovallola", "towel"],
  ["soap", "jabón", "sabó", "soap"],
  ["bed", "cama", "llit", "bed"],
  ["door", "puerta", "porta", "door"],
  ["window", "ventana", "finestra", "window"],
  ["airplane", "avión", "avió", "airplane"],
  ["train", "tren", "tren", "train"],
  ["boat", "barco", "vaixell", "boat"],
  ["skateboard", "monopatín", "monopatí", "skateboard"],
  ["kite", "cometa", "estel", "kite"],
  ["tent", "tienda de campaña", "tenda de campanya", "tent"],
  ["suitcase", "maleta", "maleta", "suitcase"],
  ["vacuum-cleaner", "aspiradora", "aspiradora", "vacuum cleaner"],
  ["balloon", "globo", "globus", "balloon"]
];

const NUMBERS_POOLS = {
  numbers: Array.from({ length: NUMBERS_VALUE_MAX - NUMBERS_VALUE_MIN + 1 }, (_, index) => {
    const text = String(NUMBERS_VALUE_MIN + index);
    return { id: text, labels: { es: text, ca: text, en: text } };
  }),
  famous: NUMBERS_FAMOUS.map((name) => ({ id: slugNumbersId(name), labels: { es: name, ca: name, en: name } })),
  objects: NUMBERS_OBJECTS.map(([id, es, ca, en]) => ({ id, labels: { es, ca, en } }))
};

const NUMBERS_VALUE_INDEX = Object.fromEntries(
  Object.entries(NUMBERS_POOLS).map(([mode, pool]) => [mode, new Map(pool.map((item) => [item.id, item]))])
);

export class NumbersGameError extends Error {
  constructor(message, status = 400) {
    super(message);
    this.name = "NumbersGameError";
    this.status = status;
  }
}

export function numbersPoolSize(mode) {
  return NUMBERS_POOLS[mode]?.length || 0;
}

export function numbersPoolIds(mode) {
  return (NUMBERS_POOLS[mode] || []).map((item) => item.id);
}

export function normalizeNumbersMode(value) {
  const mode = String(value || "");
  return NUMBERS_MODES.includes(mode) ? mode : "";
}

export function normalizeNumbersRoomKey(value) {
  return cleanNumbersText(value, 16).toLocaleLowerCase();
}

export function normalizeNumbersIdentity(value) {
  const name = cleanNumbersText(value?.playerName, 16);
  return name ? { name } : null;
}

export function createNumbersRoom(value) {
  const key = normalizeNumbersRoomKey(value?.roomName);
  const roomName = cleanNumbersText(value?.roomName, 16);
  const identity = normalizeNumbersIdentity(value);
  if (!key || !roomName || !identity) return null;
  const host = createNumbersPlayer(identity, 1);
  const now = Date.now();
  return {
    key,
    roomName,
    hostId: host.id,
    players: [host],
    // Lo lee gameDirectoryEntry() para mostrar "2/10" en el listado de salas activas.
    maxPlayers: NUMBERS_MAX_PLAYERS,
    mode: normalizeNumbersMode(value?.mode) || "numbers",
    // round 0 = todavía no se ha repartido.
    round: 0,
    // Asignación completa de la ronda: { [playerId]: valueId }. Solo vive en el servidor.
    assignments: {},
    // Ronda anterior, para no repetir a nadie lo mismo si hay alternativas.
    previousMode: "",
    previousAssignments: {},
    revision: 0,
    createdAt: now,
    updatedAt: now
  };
}

export function joinNumbersRoom(room, identity) {
  const existing = room.players.find((player) => player.name.toLocaleLowerCase() === identity.name.toLocaleLowerCase());
  if (existing) {
    // Reconexión por nombre: token nuevo, mismo jugador y mismo valor asignado.
    existing.token = randomNumbersToken();
    existing.lastSeen = Date.now();
    touchNumbersRevision(room);
    return { player: existing, created: false };
  }
  if (room.players.length >= NUMBERS_MAX_PLAYERS) throw new NumbersGameError("La sala está llena", 409);
  // Quien llega tarde recibe un valor libre de la modalidad actual sin tocar el de nadie.
  let lateValue = "";
  if (room.round > 0) {
    const used = new Set(Object.values(room.assignments || {}));
    const free = NUMBERS_POOLS[room.mode].filter((item) => !used.has(item.id));
    if (!free.length) throw new NumbersGameError("No quedan valores libres en esta modalidad para un jugador más", 409);
    lateValue = free[randomNumbersInt(free.length)].id;
  }
  const seatNumber = Math.max(0, ...room.players.map((player) => Number(player.seatNumber) || 0)) + 1;
  const player = createNumbersPlayer(identity, seatNumber);
  room.players.push(player);
  if (lateValue) room.assignments[player.id] = lateValue;
  touchNumbersRevision(room);
  return { player, created: true };
}

export function authenticateNumbersPlayer(room, value) {
  const id = String(value?.playerId || "");
  const token = String(value?.token || "");
  if (!id || !token) return null;
  return room?.players.find((player) => player.id === id && player.token === token) || null;
}

export function touchNumbersRoom(room, playerId, token) {
  const player = authenticateNumbersPlayer(room, { playerId, token });
  if (player) player.lastSeen = Date.now();
  return player;
}

export function isNumbersHost(room, player) {
  return Boolean(player && player.id === room.hostId);
}

export function isNumbersHostConnected(room) {
  const host = room.players.find((player) => player.id === room.hostId);
  return Boolean(host && Date.now() - Number(host.lastSeen || room.createdAt) < NUMBERS_ROOM_RECONNECT_MS);
}

export function isNumbersRoomJoinable(room) {
  return Array.isArray(room?.players) && room.players.length > 0 && room.players.length < NUMBERS_MAX_PLAYERS;
}

// Reparte una ronda nueva a todos a la vez. `baseRound` es la ronda que veía el
// anfitrión al pulsar: si ya no coincide, otra petición repartió antes (doble
// pulsación, dos pestañas) y esta no hace nada. Así dos peticiones seguidas
// producen una sola ronda nueva y nunca dos repartos contradictorios.
export function dealNumbersRound(room, player, { mode, baseRound } = {}) {
  if (!isNumbersHost(room, player)) throw new NumbersGameError("Solo el anfitrión puede repartir", 403);
  const hasBase = baseRound !== undefined && baseRound !== null && baseRound !== "";
  if (hasBase && Number(baseRound) !== Number(room.round || 0)) return { dealt: false };
  const nextMode = mode === undefined || mode === null || mode === "" ? room.mode : normalizeNumbersMode(mode);
  if (!nextMode) throw new NumbersGameError("Modalidad no válida");
  if (room.players.length < NUMBERS_MIN_PLAYERS) {
    throw new NumbersGameError(`Hacen falta al menos ${NUMBERS_MIN_PLAYERS} jugadores para repartir`, 409);
  }
  const pool = NUMBERS_POOLS[nextMode];
  if (pool.length < room.players.length) {
    throw new NumbersGameError(`Esta modalidad solo tiene ${pool.length} valores distintos para ${room.players.length} jugadores`, 409);
  }
  const previous = room.mode === nextMode ? (room.assignments || {}) : {};
  room.previousMode = room.mode;
  room.previousAssignments = room.assignments || {};
  room.mode = nextMode;
  room.assignments = assignNumbersValues(room.players.map((item) => item.id), pool, previous);
  room.round = Number(room.round || 0) + 1;
  touchNumbersRevision(room);
  return { dealt: true };
}

// Valores únicos dentro de la ronda. Si hay alternativas, nadie repite exactamente
// lo que tenía: con más valores que jugadores siempre queda al menos una opción
// distinta, y solo con un conjunto justo se acepta repetir.
export function assignNumbersValues(playerIds, pool, previous = {}, randomInt = randomNumbersInt) {
  const deck = shuffleNumbersItems(pool.map((item) => item.id), randomInt);
  const used = new Set();
  const result = {};
  shuffleNumbersItems([...playerIds], randomInt).forEach((playerId) => {
    const avoid = previous[playerId];
    const pick = deck.find((id) => !used.has(id) && id !== avoid) || deck.find((id) => !used.has(id));
    used.add(pick);
    result[playerId] = pick;
  });
  return result;
}

export function leaveNumbersRoom(room, player) {
  room.players = room.players.filter((item) => item.id !== player.id);
  if (room.assignments) delete room.assignments[player.id];
  // Mismo relevo que Sincronía: si se va el anfitrión, pasa al primero que queda.
  if (room.hostId === player.id && room.players.length) room.hostId = room.players[0].id;
  touchNumbersRevision(room);
  return { closeRoom: room.players.length === 0 };
}

export function numbersValueFor(mode, valueId) {
  return NUMBERS_VALUE_INDEX[mode]?.get(String(valueId)) || null;
}

// Respuesta construida para UN jugador. Su propio valor no aparece en ningún campo:
// ni en la lista, ni en la ficha privada, ni en un historial. Sin sesión válida no
// se devuelve nada, porque cualquiera podría pedir la sala sin token y ver el suyo.
export function numbersRoomResponse(room, viewer) {
  if (!viewer) throw new NumbersGameError("Sesión no válida o reemplazada", 401);
  const now = Date.now();
  const assignments = room.assignments || {};
  return {
    roomName: room.roomName,
    mode: room.mode,
    round: Number(room.round || 0),
    minPlayers: NUMBERS_MIN_PLAYERS,
    maxPlayers: NUMBERS_MAX_PLAYERS,
    revision: Number(room.revision || 0),
    players: room.players
      .map((item) => {
        const isSelf = item.id === viewer.id;
        const value = !isSelf && assignments[item.id] ? numbersValueFor(room.mode, assignments[item.id]) : null;
        return {
          id: item.id,
          name: item.name,
          seatNumber: item.seatNumber,
          isHost: item.id === room.hostId,
          isSelf,
          connected: isSelf || now - Number(item.lastSeen || 0) < NUMBERS_CONNECTED_MS,
          assigned: Boolean(assignments[item.id]),
          value: value ? { id: value.id, labels: { ...value.labels } } : null
        };
      })
      .sort((a, b) => a.seatNumber - b.seatNumber),
    player: {
      id: viewer.id,
      token: viewer.token,
      name: viewer.name,
      isHost: isNumbersHost(room, viewer)
    }
  };
}

function createNumbersPlayer(identity, seatNumber) {
  return {
    id: randomNumbersId(),
    token: randomNumbersToken(),
    name: identity.name,
    seatNumber,
    lastSeen: Date.now()
  };
}

function touchNumbersRevision(room) {
  room.revision = Number(room.revision || 0) + 1;
  room.updatedAt = Date.now();
}

// Fisher-Yates con aleatoriedad criptográfica. Un sort() con Math.random no es uniforme.
function shuffleNumbersItems(items, randomInt = randomNumbersInt) {
  for (let index = items.length - 1; index > 0; index -= 1) {
    const target = randomInt(index + 1);
    [items[index], items[target]] = [items[target], items[index]];
  }
  return items;
}

function randomNumbersInt(bound) {
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

function slugNumbersId(text) {
  return String(text).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function cleanNumbersText(value, maxLength) {
  return String(value || "").trim().replace(/\s+/g, " ").slice(0, maxLength);
}

function randomNumbersId() {
  return globalThis.crypto?.randomUUID?.() || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

function randomNumbersToken() {
  return `${randomNumbersId()}${randomNumbersId()}`.replace(/-/g, "");
}
