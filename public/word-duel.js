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
const proposalHint = $("#wordDuelProposalHint");
const boardPanel = $("#wordDuelBoardPanel");
const guessForm = $("#wordDuelGuessForm");
const guessInput = $("#wordDuelGuessInput");
const advanceButton = $("#wordDuelAdvanceButton");
const ranking = $("#wordDuelRanking");
const proposalWaiting = $("#wordDuelProposalWaiting");
const guessWaiting = $("#wordDuelGuessWaiting");
const restartButton = $("#wordDuelRestartButton");
let session = readSession();
let room = null;
let pollTimer = null;
let roomDirectoryTimer = null;
let selectedPlayerId = "";
let requestPending = false;
let seenEventIds = new Set();

for (const select of [$("#wordDuelCreateEmoji"), $("#wordDuelJoinEmoji")]) {
  select.replaceChildren(...EMOJIS.map((emoji) => new Option(emoji, emoji)));
}

$("#wordDuelChooseCreate").addEventListener("click", () => showLobbyForm(createForm));
$("#wordDuelChooseJoin").addEventListener("click", () => showLobbyForm(joinForm));
document.querySelectorAll("[data-word-duel-back]").forEach((button) => button.addEventListener("click", resetLobby));
$("#wordDuelRefreshRooms").addEventListener("click", loadAvailableRooms);
$("#wordDuelCreateTestMode").addEventListener("change", syncTestModeFields);

createForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await perform(async () => {
    const payload = await api("/api/word-duel/rooms", {
      method: "POST",
      body: {
        roomName: $("#wordDuelCreateRoomName").value,
        name: $("#wordDuelCreatePlayerName").value,
        emoji: $("#wordDuelCreateEmoji").value,
        playerLimit: Number($("#wordDuelCreatePlayerLimit").value),
        testMode: $("#wordDuelCreateTestMode").checked,
        botCount: Number($("#wordDuelCreateBotCount").value)
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
  resetProposalHint();
  const accepted = await action("proposal", { word: proposalInput.value }, proposalHint);
  if (!accepted) {
    proposalHint.classList.add("is-error");
    proposalInput.focus();
    proposalInput.select();
    return;
  }
  proposalInput.value = "";
  resetProposalHint();
});
proposalInput.addEventListener("input", resetProposalHint);

guessForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await action("guess", { word: guessInput.value });
  guessInput.value = "";
});

advanceButton.addEventListener("click", () => action(room?.status === "finished" ? "restart" : "advance"));
restartButton.addEventListener("click", () => action("restart"));
$("#wordDuelMyBoardButton").addEventListener("click", () => { selectedPlayerId = session?.playerId || ""; renderRoom(); });
$("#wordDuelShareButton").addEventListener("click", copyInvite);
$("#wordDuelLeaveButton").addEventListener("click", leaveRoom);

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-view-target]");
  if (!target) return;
  const active = target.dataset.viewTarget === "wordDuelView";
  document.body.classList.toggle("word-duel-active", active);
  if (active) activateView(); else { stopPolling(); stopRoomDirectoryPolling(); }
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
  stopRoomDirectoryPolling();
  choice.hidden = true;
  createForm.hidden = form !== createForm;
  joinForm.hidden = form !== joinForm;
  lobbyMessage.textContent = "";
  form.querySelector("input")?.focus();
  if (form === joinForm) {
    void loadAvailableRooms();
    roomDirectoryTimer = setInterval(loadAvailableRooms, 3000);
  }
}

function resetLobby() {
  stopRoomDirectoryPolling();
  lobby.hidden = false; game.hidden = true; choice.hidden = false;
  createForm.hidden = true; joinForm.hidden = true; lobbyMessage.textContent = "";
}

function enterRoom(payload) {
  stopRoomDirectoryPolling();
  room = payload;
  session = { roomName: payload.roomName, playerId: payload.player.id, token: payload.player.token, isHost: payload.player.isHost };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  seenEventIds = new Set((payload.events || []).map((event) => event.id));
  selectedPlayerId = session.playerId;
  const url = new URL(location.href); url.searchParams.set("wordduel", payload.roomName); history.replaceState({}, "", url);
  showGame(); renderRoom(); startPolling();
}

function showGame() { lobby.hidden = true; game.hidden = false; }

async function pollRoom() {
  if (!session || requestPending || view.hidden) return;
  try {
    const params = new URLSearchParams({ playerId: session.playerId, token: session.token });
    const payload = await api(`/api/word-duel/rooms/${encodeURIComponent(session.roomName)}?${params}`);
    if (!payload.player) {
      clearSession();
      lobbyMessage.textContent = "Tu sesión ha sido sustituida por otro acceso con el mismo nombre.";
      return;
    }
    showNewEvents(payload, !room);
    room = payload;
    renderRoom();
  } catch (error) {
    gameMessage.textContent = error.message;
    if (/no encontrada|not found/i.test(error.message)) clearSession();
  }
}

function startPolling() { stopPolling(); pollTimer = setInterval(pollRoom, 1100); }
function stopPolling() { clearInterval(pollTimer); pollTimer = null; }
function stopRoomDirectoryPolling() { clearInterval(roomDirectoryTimer); roomDirectoryTimer = null; }

async function action(name, extra = {}, output = gameMessage) {
  if (!session) return;
  return perform(async () => {
    const payload = await api(`/api/word-duel/rooms/${encodeURIComponent(session.roomName)}/${name}`, {
      method: "POST", body: { playerId: session.playerId, token: session.token, ...extra }
    });
    showNewEvents(payload);
    room = payload; renderRoom();
  }, output);
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
  const shouldShowProposal = room.status === "proposing" && !me.hasProposed;
  proposalForm.hidden = !shouldShowProposal;
  proposalForm.style.display = shouldShowProposal ? "" : "none";
  proposalWaiting.hidden = !(room.status === "proposing" && me.hasProposed);
  if (!proposalWaiting.hidden) {
    $("#wordDuelSubmittedWord").textContent = room.submittedWord.toLocaleUpperCase("es");
    const pending = room.players.filter((player) => !player.hasProposed).map((player) => player.name);
    $("#wordDuelProposalPending").textContent = pending.length ? `Faltan por enviar: ${pending.join(", ")}` : "Todos han enviado su palabra.";
  }
  boardPanel.hidden = room.status !== "guessing";
  ranking.hidden = !["round-result", "finished"].includes(room.status);
  restartButton.hidden = !(session.isHost && room.status !== "lobby");
  advanceButton.hidden = !(session.isHost && ["round-result", "finished"].includes(room.status));
  advanceButton.textContent = room.status === "finished" ? "Nueva partida" : room.roundIndex === 4 ? "Ver resultado final" : "Siguiente ronda";
  if (room.status === "guessing") renderBoard(me);
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
      if (room.status !== "guessing") return;
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
  guessWaiting.hidden = !(ownerId === me.id && room.status === "guessing" && !canGuess);
}

function renderRanking() {
  const title = document.createElement("h2");
  title.textContent = room.status === "finished" ? "Podio final" : `Resultado · ronda ${room.roundNumber}`;
  const entries = room.ranking.map((player) => {
    const article = document.createElement("article"); article.className = "word-duel-rank";
    const roundPoints = Number(player.roundScores?.[room.roundIndex] || 0);
    article.innerHTML = `<strong>${player.rank <= 3 ? ["🥇", "🥈", "🥉"][player.rank - 1] : `#${player.rank}`}</strong><span>${escapeHtml(player.emoji)} ${escapeHtml(player.name)}<small>+${roundPoints} esta ronda</small></span><strong>${player.score} pt</strong>`;
    return article;
  });
  ranking.replaceChildren(title, ...entries);
}

function statusMessage(me) {
  if (room.status === "lobby") return `${room.players.length}/${room.config.playerLimit} jugadores. La partida comenzará cuando se llene la sala.`;
  if (room.status === "proposing") return me.hasProposed ? `Palabra enviada. Esperando ${room.players.length - room.proposedCount} jugador(es)…` : `Escribe una palabra de ${room.wordLength} letras.`;
  if (room.status === "guessing") {
    if (me.solved) return "¡Palabra resuelta! Esperando al resto…";
    if (me.submittedAttempt) return "Intento enviado. Esperando al resto…";
    return `Todos juegan el intento ${room.attemptIndex + 1} a la vez.`;
  }
  if (room.status === "round-result") return session.isHost ? "Ronda completada. Revisa los tableros y continúa." : "Ronda completada. Esperando al anfitrión.";
  return "Partida terminada. ¡Tenemos podio!";
}

function resetProposalHint() {
  proposalHint.classList.remove("is-error");
  proposalHint.textContent = "Otro jugador tendrá que adivinarla.";
}

function playerStatus(player) {
  if (room.status === "lobby") return player.isHost ? "Anfitrión" : player.isTestPlayer ? "Bot" : "En sala";
  if (room.status === "proposing") return player.hasProposed ? "Palabra lista" : "Pensando…";
  if (player.solved) return "Resuelta";
  if (player.submittedAttempt) return "Intento listo";
  return "Jugando…";
}

function syncTestModeFields() {
  const enabled = $("#wordDuelCreateTestMode").checked;
  $("#wordDuelBotCountField").hidden = !enabled;
  $("#wordDuelCreatePlayerLimit").closest("label").hidden = enabled;
}

async function loadAvailableRooms() {
  if (joinForm.hidden) return;
  const container = $("#wordDuelAvailableRooms");
  try {
    const payload = await api("/api/word-duel/rooms");
    const rooms = payload.rooms || [];
    if (!rooms.length) {
      const empty = document.createElement("p");
      empty.className = "word-duel-empty-rooms";
      empty.textContent = "No hay salas abiertas.";
      container.replaceChildren(empty);
      return;
    }
    const cards = rooms.map((availableRoom) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `word-duel-room-card${availableRoom.full ? " is-full" : ""}`;
      button.innerHTML = `<span><strong>${escapeHtml(availableRoom.roomName)}</strong><small>${availableRoom.full ? "Completa · solo reingreso" : "Disponible"}</small></span><b>${availableRoom.playerCount}/${availableRoom.playerLimit}</b>`;
      button.addEventListener("click", () => {
        $("#wordDuelJoinRoomName").value = availableRoom.roomName;
        container.querySelectorAll(".word-duel-room-card").forEach((card) => card.classList.toggle("is-selected", card === button));
        $("#wordDuelJoinPlayerName").focus();
      });
      return button;
    });
    container.replaceChildren(...cards);
  } catch (error) {
    const message = document.createElement("p");
    message.className = "word-duel-empty-rooms";
    message.textContent = error.message;
    container.replaceChildren(message);
  }
}

function showNewEvents(payload, silent = false) {
  const newEvents = (payload.events || []).filter((event) => event.id && !seenEventIds.has(event.id));
  (payload.events || []).forEach((event) => seenEventIds.add(event.id));
  if (silent) return;
  newEvents.filter((event) => event.playerId !== session?.playerId).forEach((event, index) => {
    let stack = document.querySelector(".word-duel-notifications");
    if (!stack) {
      stack = document.createElement("div");
      stack.className = "word-duel-notifications";
      stack.setAttribute("aria-live", "polite");
      document.body.append(stack);
    }
    const notification = document.createElement("article");
    notification.className = `word-duel-notification is-${event.type}`;
    notification.style.setProperty("--notification-delay", `${index * 100}ms`);
    notification.innerHTML = `<span>${escapeHtml(event.playerEmoji)}</span><div><strong>${escapeHtml(event.playerName)}</strong><small>${event.type === "correct" ? "ha acertado" : `ha fallado: ${escapeHtml(event.guess).toLocaleUpperCase("es")}`}</small></div><b>${event.type === "correct" ? `+${event.points}` : "✕"}</b>`;
    stack.append(notification);
    window.setTimeout(() => {
      notification.remove();
      if (!stack.children.length) stack.remove();
    }, 3800 + index * 100);
  });
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
  stopPolling(); stopRoomDirectoryPolling(); localStorage.removeItem(SESSION_KEY); session = null; room = null; selectedPlayerId = ""; resetLobby();
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
  try { await callback(); return true; } catch (error) { output.textContent = error.message; return false; }
  finally { requestPending = false; }
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));
}
