const $ = (selector) => document.querySelector(selector);
const EMOJIS = ["🟩", "🟨", "🧠", "✏️", "📚", "🎯", "⚡", "🔥", "⭐", "🦊", "🐙", "🦄"];
const SESSION_KEY = "roulogames.wordDuelSession";

const view = $("#wordDuelView");
const lobby = $("#wordDuelLobby");
const game = $("#wordDuelGame");
const choice = $("#wordDuelChoice");
const createForm = $("#wordDuelCreateForm");
const joinForm = $("#wordDuelJoinForm");
const lobbyMessage = $("#wordDuelLobbyMessage");
const gameMessage = $("#wordDuelGameMessage");
const proposalForm = $("#wordDuelProposalForm");
const proposalInput = $("#wordDuelProposalInput");
const boardPanel = $("#wordDuelBoardPanel");
const guessForm = $("#wordDuelGuessForm");
const guessInput = $("#wordDuelGuessInput");
const startButton = $("#wordDuelStartButton");
const advanceButton = $("#wordDuelAdvanceButton");
const ranking = $("#wordDuelRanking");
let session = readSession();
let room = null;
let pollTimer = null;
let selectedPlayerId = "";
let requestPending = false;

for (const select of [$("#wordDuelCreateEmoji"), $("#wordDuelJoinEmoji")]) {
  select.replaceChildren(...EMOJIS.map((emoji) => new Option(emoji, emoji)));
}

$("#wordDuelChooseCreate").addEventListener("click", () => showLobbyForm(createForm));
$("#wordDuelChooseJoin").addEventListener("click", () => showLobbyForm(joinForm));
document.querySelectorAll("[data-word-duel-back]").forEach((button) => button.addEventListener("click", resetLobby));

createForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await perform(async () => {
    const payload = await api("/api/word-duel/rooms", {
      method: "POST",
      body: {
        roomName: $("#wordDuelCreateRoomName").value,
        name: $("#wordDuelCreatePlayerName").value,
        emoji: $("#wordDuelCreateEmoji").value,
        playerLimit: Number($("#wordDuelCreatePlayerLimit").value)
      }
    });
    enterRoom(payload);
  }, lobbyMessage);
});

joinForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await perform(async () => {
    const roomName = $("#wordDuelJoinRoomName").value.trim();
    const payload = await api(`/api/word-duel/rooms/${encodeURIComponent(roomName)}/join`, {
      method: "POST",
      body: { name: $("#wordDuelJoinPlayerName").value, emoji: $("#wordDuelJoinEmoji").value }
    });
    enterRoom(payload);
  }, lobbyMessage);
});

proposalForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await action("proposal", { word: proposalInput.value });
  proposalInput.value = "";
});

guessForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await action("guess", { word: guessInput.value });
  guessInput.value = "";
});

startButton.addEventListener("click", () => action("start"));
advanceButton.addEventListener("click", () => action(room?.status === "finished" ? "restart" : "advance"));
$("#wordDuelMyBoardButton").addEventListener("click", () => { selectedPlayerId = session?.playerId || ""; renderRoom(); });
$("#wordDuelShareButton").addEventListener("click", copyInvite);
$("#wordDuelLeaveButton").addEventListener("click", leaveRoom);

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-view-target]");
  if (!target) return;
  const active = target.dataset.viewTarget === "wordDuelView";
  document.body.classList.toggle("word-duel-active", active);
  if (active) activateView(); else stopPolling();
});
document.querySelectorAll("[data-home-link]").forEach((link) => link.addEventListener("click", () => {
  document.body.classList.remove("word-duel-active");
  stopPolling();
  const url = new URL(location.href); url.searchParams.delete("wordduel"); history.replaceState({}, "", url);
}));

const invitedRoom = new URLSearchParams(location.search).get("wordduel");
if (invitedRoom) {
  queueMicrotask(() => {
    document.querySelector("[data-view-target='wordDuelView']")?.click();
    $("#wordDuelJoinRoomName").value = invitedRoom;
    showLobbyForm(joinForm);
    $("#wordDuelJoinPlayerName").focus();
  });
}

function activateView() {
  document.body.classList.add("word-duel-active");
  if (session) {
    showGame();
    void pollRoom();
    startPolling();
  } else resetLobby();
}

function showLobbyForm(form) {
  choice.hidden = true;
  createForm.hidden = form !== createForm;
  joinForm.hidden = form !== joinForm;
  lobbyMessage.textContent = "";
  form.querySelector("input")?.focus();
}

function resetLobby() {
  lobby.hidden = false; game.hidden = true; choice.hidden = false;
  createForm.hidden = true; joinForm.hidden = true; lobbyMessage.textContent = "";
}

function enterRoom(payload) {
  room = payload;
  session = { roomName: payload.roomName, playerId: payload.player.id, token: payload.player.token, isHost: payload.player.isHost };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  selectedPlayerId = session.playerId;
  const url = new URL(location.href); url.searchParams.set("wordduel", payload.roomName); history.replaceState({}, "", url);
  showGame(); renderRoom(); startPolling();
}

function showGame() { lobby.hidden = true; game.hidden = false; }

async function pollRoom() {
  if (!session || requestPending || view.hidden) return;
  try {
    const params = new URLSearchParams({ playerId: session.playerId, token: session.token });
    room = await api(`/api/word-duel/rooms/${encodeURIComponent(session.roomName)}?${params}`);
    renderRoom();
  } catch (error) {
    gameMessage.textContent = error.message;
    if (/no encontrada|not found/i.test(error.message)) clearSession();
  }
}

function startPolling() { stopPolling(); pollTimer = setInterval(pollRoom, 1100); }
function stopPolling() { clearInterval(pollTimer); pollTimer = null; }

async function action(name, extra = {}) {
  if (!session) return;
  await perform(async () => {
    const payload = await api(`/api/word-duel/rooms/${encodeURIComponent(session.roomName)}/${name}`, {
      method: "POST", body: { playerId: session.playerId, token: session.token, ...extra }
    });
    room = payload; renderRoom();
  }, gameMessage);
}

function renderRoom() {
  if (!room || !session) return;
  const me = room.players.find((player) => player.id === session.playerId);
  if (!me) { clearSession(); return; }
  session.isHost = Boolean(me.isHost);
  $("#wordDuelRoomLabel").textContent = room.roomName;
  $("#wordDuelRoundLabel").textContent = `Ronda ${room.roundNumber}/5`;
  $("#wordDuelLengthLabel").textContent = `${room.wordLength} letras`;
  $("#wordDuelAttemptLabel").textContent = room.status === "guessing" ? `Intento ${room.attemptIndex + 1}/${room.maxAttempts}` : "";
  proposalInput.maxLength = room.wordLength; proposalInput.minLength = room.wordLength; proposalInput.placeholder = `${room.wordLength} letras`;
  guessInput.maxLength = room.wordLength; guessInput.minLength = room.wordLength; guessInput.placeholder = `${room.wordLength} letras`;
  renderPlayers(me);
  startButton.hidden = !(room.status === "lobby" && session.isHost);
  startButton.disabled = room.players.length < 2;
  startButton.textContent = room.players.length < 2 ? "Esperando otro jugador" : "Empezar partida";
  proposalForm.hidden = !(room.status === "proposing" && !me.hasProposed);
  boardPanel.hidden = !["guessing", "round-result"].includes(room.status);
  ranking.hidden = !["round-result", "finished"].includes(room.status);
  advanceButton.hidden = !(session.isHost && ["round-result", "finished"].includes(room.status));
  advanceButton.textContent = room.status === "finished" ? "Nueva partida" : room.roundIndex === 4 ? "Ver resultado final" : "Siguiente ronda";
  if (["guessing", "round-result"].includes(room.status)) renderBoard(me);
  if (["round-result", "finished"].includes(room.status)) renderRanking();
  gameMessage.textContent = statusMessage(me);
}

function renderPlayers(me) {
  const fragment = document.createDocumentFragment();
  room.players.forEach((player) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `word-duel-player-card${player.id === (selectedPlayerId || me.id) ? " is-selected" : ""}${player.submittedAttempt || player.hasProposed || player.solved ? " is-ready" : ""}`;
    button.innerHTML = `<span>${escapeHtml(player.emoji)}</span><span><strong>${escapeHtml(player.name)}${player.id === me.id ? " (tú)" : ""}</strong><small>${playerStatus(player)}</small></span><b>${player.score}</b>`;
    button.addEventListener("click", () => {
      if (!["guessing", "round-result"].includes(room.status)) return;
      selectedPlayerId = player.id; renderRoom();
    });
    fragment.append(button);
  });
  $("#wordDuelPlayers").replaceChildren(fragment);
}

function renderBoard(me) {
  const ownerId = selectedPlayerId && room.players.some((player) => player.id === selectedPlayerId) ? selectedPlayerId : me.id;
  selectedPlayerId = ownerId;
  const owner = room.players.find((player) => player.id === ownerId);
  const board = room.boards.find((item) => item.playerId === ownerId);
  $("#wordDuelBoardOwner").textContent = ownerId === me.id ? "Tu tablero" : `Tablero de ${owner.name}`;
  $("#wordDuelRevealedWord").textContent = board.target ? `Palabra: ${board.target}` : "";
  $("#wordDuelMyBoardButton").hidden = ownerId === me.id;
  const rows = [];
  for (let rowIndex = 0; rowIndex < room.maxAttempts; rowIndex += 1) {
    const guess = board.guesses[rowIndex];
    const row = document.createElement("div"); row.className = "word-duel-row";
    for (let letter = 0; letter < room.wordLength; letter += 1) {
      const tile = document.createElement("span");
      tile.className = `word-duel-tile${guess ? ` ${guess.result[letter]}` : ""}`;
      tile.textContent = guess?.word?.[letter] || "";
      row.append(tile);
    }
    rows.push(row);
  }
  $("#wordDuelGrid").replaceChildren(...rows);
  const canGuess = ownerId === me.id && room.status === "guessing" && !me.submittedAttempt && !me.solved;
  guessForm.hidden = !canGuess;
}

function renderRanking() {
  const title = document.createElement("h2");
  title.textContent = room.status === "finished" ? "Podio final" : `Resultado · ronda ${room.roundNumber}`;
  const entries = room.ranking.map((player) => {
    const article = document.createElement("article"); article.className = "word-duel-rank";
    article.innerHTML = `<strong>${player.rank <= 3 ? ["🥇", "🥈", "🥉"][player.rank - 1] : `#${player.rank}`}</strong><span>${escapeHtml(player.emoji)} ${escapeHtml(player.name)}</span><strong>${player.score} pt</strong>`;
    return article;
  });
  ranking.replaceChildren(title, ...entries);
}

function statusMessage(me) {
  if (room.status === "lobby") return `${room.players.length}/${room.config.playerLimit} jugadores en la sala`;
  if (room.status === "proposing") return me.hasProposed ? `Palabra enviada. Esperando ${room.players.length - room.proposedCount} jugador(es)…` : `Escribe una palabra de ${room.wordLength} letras.`;
  if (room.status === "guessing") {
    if (me.solved) return "¡Palabra resuelta! Esperando al resto…";
    if (me.submittedAttempt) return "Intento enviado. Esperando al resto…";
    return `Todos juegan el intento ${room.attemptIndex + 1} a la vez.`;
  }
  if (room.status === "round-result") return session.isHost ? "Ronda completada. Revisa los tableros y continúa." : "Ronda completada. Esperando al anfitrión.";
  return "Partida terminada. ¡Tenemos podio!";
}

function playerStatus(player) {
  if (room.status === "lobby") return player.isHost ? "Anfitrión" : "En sala";
  if (room.status === "proposing") return player.hasProposed ? "Palabra lista" : "Pensando…";
  if (player.solved) return "Resuelta";
  if (player.submittedAttempt) return "Intento listo";
  return "Jugando…";
}

async function copyInvite() {
  const url = new URL(location.href); url.search = ""; url.searchParams.set("wordduel", session.roomName);
  await navigator.clipboard.writeText(url.toString());
  gameMessage.textContent = "Enlace copiado.";
}

async function leaveRoom() {
  if (session) {
    await api(`/api/word-duel/rooms/${encodeURIComponent(session.roomName)}/leave`, {
      method: "POST", body: { playerId: session.playerId, token: session.token }
    }).catch(() => {});
  }
  clearSession();
  document.querySelector("[data-home-link]")?.click();
}

function clearSession() {
  stopPolling(); localStorage.removeItem(SESSION_KEY); session = null; room = null; selectedPlayerId = ""; resetLobby();
}

function readSession() {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY)) || null; } catch { return null; }
}

async function api(path, options = {}) {
  const response = await fetch(path, {
    method: options.method || "GET",
    headers: options.body ? { "Content-Type": "application/json" } : undefined,
    body: options.body ? JSON.stringify(options.body) : undefined
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || "No se ha podido conectar con la sala");
  return payload;
}

async function perform(callback, output) {
  if (requestPending) return;
  requestPending = true; output.textContent = "";
  try { await callback(); } catch (error) { output.textContent = error.message; }
  finally { requestPending = false; }
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));
}
