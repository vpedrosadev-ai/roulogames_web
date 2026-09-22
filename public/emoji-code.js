const PLAYER_EMOJIS = ["😎", "🤠", "🦊", "🐼", "🦄", "🐸", "🤖", "👻", "🐙", "🦁", "🍿", "🎬"];
const $ = (selector) => document.querySelector(selector);

const view = $("#emojiCodeView");
const lobby = $("#emojiCodeLobby");
const game = $("#emojiCodeGame");
const choice = $("#emojiCodeChoice");
const createForm = $("#emojiCodeCreateForm");
const joinForm = $("#emojiCodeJoinForm");
const message = $("#emojiCodeLobbyMessage");
const gameMessage = $("#emojiCodeGameMessage");
const primaryButton = $("#emojiCodePrimaryButton");
const titleForm = $("#emojiCodeTitleForm");
const codeForm = $("#emojiCodeCodeForm");
const guessForm = $("#emojiCodeGuessForm");
const codeInput = $("#emojiCodeCodeInput");
const leaderCodeInput = $("#emojiCodeLeaderCodeInput");
const titleInput = $("#emojiCodeTitleInput");
const changeMovieButton = $("#emojiCodeChangeMovieButton");
const guessInput = $("#emojiCodeGuessInput");
const guessSuggestions = $("#emojiCodeGuessSuggestions");
const testModeInput = $("#emojiCodeCreateTestMode");
const botCountInput = $("#emojiCodeCreateBotCount");

let session = null;
let room = null;
let pollTimer = null;
let lastEventId = "";
let testViewPlayerId = "";
let movieSearchTimer = null;
let movieSearchSequence = 0;

populateIdentityEmojis();

document.querySelectorAll("[data-view-target]").forEach((button) => button.addEventListener("click", () => {
  if (button.dataset.viewTarget === "emojiCodeView") showLobby();
  else if (session) releaseRoom();
}));
$("#emojiCodeChooseCreate")?.addEventListener("click", () => showForm("create"));
$("#emojiCodeChooseJoin")?.addEventListener("click", () => showForm("join"));
document.querySelectorAll("[data-emoji-code-back]").forEach((button) => button.addEventListener("click", showChoice));
createForm?.addEventListener("submit", createRoom);
joinForm?.addEventListener("submit", joinRoom);
$("#emojiCodeShareButton")?.addEventListener("click", shareRoom);
$("#emojiCodeLeaveButton")?.addEventListener("click", leaveToMenu);
$("#emojiCodeRestartButton")?.addEventListener("click", () => performAction("restart"));
primaryButton?.addEventListener("click", handlePrimaryAction);
titleForm?.addEventListener("submit", submitTitle);
codeForm?.addEventListener("submit", submitCode);
guessForm?.addEventListener("submit", submitGuess);
changeMovieButton?.addEventListener("click", () => performAction("reroll-movie"));
titleInput?.addEventListener("input", () => { titleInput.dataset.userEdited = "true"; });
guessInput?.addEventListener("input", scheduleMovieSearch);
guessInput?.addEventListener("focus", scheduleMovieSearch);
guessInput?.addEventListener("keydown", handleMovieSearchKeydown);
guessInput?.addEventListener("blur", () => window.setTimeout(hideMovieSuggestions, 140));
guessSuggestions?.addEventListener("mousedown", chooseMovieSuggestion);
codeInput?.addEventListener("input", validateEmojiDraft);
leaderCodeInput?.addEventListener("input", validateLeaderEmojiDraft);
testModeInput?.addEventListener("change", syncTestMode);
botCountInput?.addEventListener("input", syncTestMode);
$("#emojiCodePlayers")?.addEventListener("click", handlePlayerCardClick);
$("#emojiCodePlayers")?.addEventListener("keydown", handlePlayerCardKeydown);

const invite = new URLSearchParams(window.location.search).get("emojicode");
if (invite) {
  window.setTimeout(() => {
    document.querySelector('[data-view-target="emojiCodeView"]')?.click();
    $("#emojiCodeJoinRoomName").value = invite;
    showForm("join");
  }, 0);
}

function populateIdentityEmojis() {
  [$("#emojiCodeCreateEmoji"), $("#emojiCodeJoinEmoji")].forEach((select, selectIndex) => {
    if (!select) return;
    select.replaceChildren(...PLAYER_EMOJIS.map((emoji, index) => {
      const option = document.createElement("option");
      option.value = emoji;
      option.textContent = emoji;
      option.selected = index === selectIndex;
      return option;
    }));
  });
}

function showLobby() {
  if (!lobby || !game) return;
  lobby.hidden = Boolean(session);
  game.hidden = !session;
  if (session) renderRoom();
  else showChoice();
}

function showChoice() {
  choice.hidden = false;
  createForm.hidden = true;
  joinForm.hidden = true;
  message.textContent = "";
}

function showForm(kind) {
  choice.hidden = true;
  createForm.hidden = kind !== "create";
  joinForm.hidden = kind !== "join";
  message.textContent = "";
  if (kind === "create") syncTestMode();
  (kind === "create" ? $("#emojiCodeCreateRoomName") : $("#emojiCodeJoinRoomName"))?.focus();
}

async function createRoom(event) {
  event.preventDefault();
  message.textContent = "";
  try {
    const payload = await request("/api/emoji-code/rooms", {
      method: "POST",
      body: JSON.stringify({
        roomName: $("#emojiCodeCreateRoomName").value.trim(),
        playerName: $("#emojiCodeCreatePlayerName").value.trim(),
        emoji: $("#emojiCodeCreateEmoji").value,
        playerLimit: Number($("#emojiCodeCreatePlayerLimit").value),
        rounds: Number($("#emojiCodeCreateRounds").value) || 3,
        testMode: Boolean(testModeInput?.checked),
        botCount: Number(botCountInput?.value) || 3
      })
    });
    enterRoom(payload);
  } catch (error) { message.textContent = error.message; }
}

async function joinRoom(event) {
  event.preventDefault();
  message.textContent = "";
  const roomName = $("#emojiCodeJoinRoomName").value.trim();
  try {
    const payload = await request(`/api/emoji-code/rooms/${encodeURIComponent(roomName)}/join`, {
      method: "POST",
      body: JSON.stringify({ playerName: $("#emojiCodeJoinPlayerName").value.trim(), emoji: $("#emojiCodeJoinEmoji").value })
    });
    enterRoom(payload);
  } catch (error) { message.textContent = error.message; }
}

function enterRoom(payload) {
  room = payload;
  session = { roomName: payload.roomName, playerId: payload.player.id, token: payload.player.token, isHost: payload.player.isHost };
  testViewPlayerId = payload.test?.viewPlayerId || payload.player.id;
  lastEventId = payload.eventId || "";
  lobby.hidden = true;
  game.hidden = false;
  renderRoom();
  clearInterval(pollTimer);
  pollTimer = window.setInterval(pollRoom, 1200);
  view?.scrollTo?.(0, 0);
}

async function pollRoom() {
  if (!session) return;
  try {
    const params = new URLSearchParams({ playerId: session.playerId, token: session.token });
    if (room?.test?.enabled) params.set("viewPlayerId", testViewPlayerId);
    const payload = await request(`/api/emoji-code/rooms/${encodeURIComponent(session.roomName)}?${params}`);
    room = payload;
    session.isHost = Boolean(payload.player?.isHost);
    renderRoom();
  } catch (error) {
    if (/no encontrada|sesión/i.test(error.message)) leaveLocal();
  }
}

async function performAction(action, extra = {}) {
  if (!session) return;
  gameMessage.textContent = "";
  try {
    const payload = await request(`/api/emoji-code/rooms/${encodeURIComponent(session.roomName)}/${action}`, {
      method: "POST",
      body: JSON.stringify({
        playerId: session.playerId,
        token: session.token,
        asPlayerId: room?.test?.enabled ? testViewPlayerId : "",
        ...extra
      })
    });
    room = payload;
    renderRoom();
  } catch (error) { gameMessage.textContent = error.message; }
}

function handlePrimaryAction() {
  if (room?.status === "lobby") return performAction("start");
  if (room?.phase === "result") return performAction("advance");
  if (room?.status === "finished") return performAction("restart");
}

function submitTitle(event) {
  event.preventDefault();
  const title = titleInput.value.trim();
  const code = leaderCodeInput.value.trim();
  if (!title || !isEmojiOnly(code)) {
    gameMessage.textContent = "Escribe el título y un código formado solo por emojis.";
    return;
  }
  titleInput.value = "";
  leaderCodeInput.value = "";
  performAction("title", { title, code });
}

function submitCode(event) {
  event.preventDefault();
  const code = codeInput.value.trim();
  if (!isEmojiOnly(code)) {
    gameMessage.textContent = "El código solo puede contener emojis (máximo 12).";
    return;
  }
  performAction("code", { code });
}

function submitGuess(event) {
  event.preventDefault();
  const guess = guessInput.value.trim();
  if (!guess) return;
  guessInput.value = "";
  hideMovieSuggestions();
  performAction("guess", { guess });
}

function scheduleMovieSearch() {
  clearTimeout(movieSearchTimer);
  if (guessForm.hidden || guessInput.value.trim().length < 2) {
    hideMovieSuggestions();
    return;
  }
  movieSearchTimer = window.setTimeout(searchMovies, 120);
}

async function searchMovies() {
  if (!session || guessForm.hidden) return;
  const query = guessInput.value.trim();
  if (query.length < 2) return hideMovieSuggestions();
  const sequence = ++movieSearchSequence;
  const params = new URLSearchParams({ playerId: session.playerId, token: session.token, q: query });
  if (room?.test?.enabled) params.set("viewPlayerId", testViewPlayerId);
  try {
    const payload = await request(`/api/emoji-code/rooms/${encodeURIComponent(session.roomName)}/movies?${params}`);
    if (sequence !== movieSearchSequence || query !== guessInput.value.trim()) return;
    renderMovieSuggestions(payload.matches || []);
  } catch {
    if (sequence === movieSearchSequence) hideMovieSuggestions();
  }
}

function renderMovieSuggestions(matches) {
  guessSuggestions.replaceChildren(...matches.map((movie) => {
    const button = document.createElement("button");
    button.type = "button";
    button.role = "option";
    button.dataset.title = movie.title;
    const title = document.createElement("strong");
    title.textContent = movie.title;
    const detail = document.createElement("small");
    detail.textContent = movie.year ? String(movie.year) : "Película personalizada";
    button.append(title, detail);
    return button;
  }));
  guessSuggestions.hidden = matches.length === 0;
  guessInput.setAttribute("aria-expanded", matches.length ? "true" : "false");
}

function chooseMovieSuggestion(event) {
  const button = event.target.closest("button[data-title]");
  if (!button) return;
  event.preventDefault();
  guessInput.value = button.dataset.title;
  hideMovieSuggestions();
  guessInput.focus();
}

function handleMovieSearchKeydown(event) {
  if (event.key === "Escape") hideMovieSuggestions();
}

function hideMovieSuggestions() {
  clearTimeout(movieSearchTimer);
  movieSearchSequence += 1;
  guessSuggestions.hidden = true;
  guessSuggestions.replaceChildren();
  guessInput.setAttribute("aria-expanded", "false");
}

function validateEmojiDraft() {
  const valid = !codeInput.value || isEmojiOnly(codeInput.value);
  codeInput.setAttribute("aria-invalid", valid ? "false" : "true");
  codeForm.querySelector("button[type=submit]").disabled = !valid || !codeInput.value.trim();
}

function validateLeaderEmojiDraft() {
  const valid = !leaderCodeInput.value || isEmojiOnly(leaderCodeInput.value);
  leaderCodeInput.setAttribute("aria-invalid", valid ? "false" : "true");
  titleForm.querySelector("button[type=submit]").disabled = !valid;
}

function syncTestMode() {
  const enabled = Boolean(testModeInput?.checked);
  $("#emojiCodeBotCountField").hidden = !enabled;
  const botCount = Math.max(1, Math.min(9, Number(botCountInput?.value) || 3));
  if (botCountInput) botCountInput.value = String(botCount);
  const playerLimit = $("#emojiCodeCreatePlayerLimit");
  if (playerLimit) {
    playerLimit.disabled = enabled;
    if (enabled) playerLimit.value = String(botCount + 1);
  }
}

function renderRoom() {
  if (!room?.player) return;
  const player = room.player;
  const isHost = Boolean(player.isHost);
  const isLobby = room.status === "lobby";
  if (room.test?.enabled && room.test.viewPlayerId) testViewPlayerId = room.test.viewPlayerId;
  $("#emojiCodeRoomLabel").textContent = `Sala: ${room.roomName}`;
  $("#emojiCodeRound").textContent = `${room.roundNumber || 0}/${room.config.rounds}`;
  $("#emojiCodeTurn").textContent = `${room.turnInRound || 0}/${room.turnsPerRound || room.config.playerLimit}`;
  $("#emojiCodeAttempts").textContent = String(room.guessesRemaining ?? 3);
  $("#emojiCodeShareButton").hidden = !isHost;
  $("#emojiCodeRestartButton").hidden = !isHost || isLobby;
  $(".emoji-code-stats").hidden = isLobby;
  $(".emoji-code-stage").classList.toggle("is-lobby", isLobby);
  renderPlayers(isHost);
  renderRole(player);

  titleForm.hidden = !player.canSubmitTitle;
  codeForm.hidden = !player.canSubmitCode;
  guessForm.hidden = !player.canGuess;
  if (guessForm.hidden) hideMovieSuggestions();
  if (!codeForm.hidden && codeInput.dataset.turn !== `${room.roundNumber}:${room.turnInRound}`) {
    codeInput.dataset.turn = `${room.roundNumber}:${room.turnInRound}`;
    codeInput.value = "";
    validateEmojiDraft();
  }
  if (!titleForm.hidden && leaderCodeInput.dataset.turn !== `${room.roundNumber}:${room.turnInRound}`) {
    leaderCodeInput.dataset.turn = `${room.roundNumber}:${room.turnInRound}`;
    titleInput.dataset.suggestion = "";
    titleInput.dataset.userEdited = "false";
    leaderCodeInput.value = "";
    validateLeaderEmojiDraft();
  }
  if (!titleForm.hidden && room.suggestedMovieTitle && titleInput.dataset.suggestion !== room.suggestedMovieTitle) {
    titleInput.value = room.suggestedMovieTitle;
    titleInput.dataset.suggestion = room.suggestedMovieTitle;
    titleInput.dataset.userEdited = "false";
  }
  const showCodes = ["guessing", "result", "finished"].includes(room.phase) && room.codes.length > 0;
  $("#emojiCodeCodesPanel").hidden = !showCodes;
  $("#emojiCodeCodes").replaceChildren(...room.codes.map((item) => makeCodeCard(item)));
  const failedGuesses = room.guesses.filter((guess) => !guess.correct);
  $("#emojiCodeGuessHistoryPanel").hidden = room.phase !== "guessing" || failedGuesses.length === 0;
  $("#emojiCodeGuessHistory").replaceChildren(...failedGuesses.map((guess, index) => {
    const line = document.createElement("p");
    line.className = "is-wrong";
    line.textContent = `${index + 1}. ${guess.text}`;
    return line;
  }));
  renderResult();
  renderPrimary(isHost);
  gameMessage.textContent = statusMessage();
  gameMessage.hidden = isLobby || !gameMessage.textContent;
  if (room.eventId && room.eventId !== lastEventId) lastEventId = room.eventId;
}

function renderPlayers(isHost) {
  const canSwitchView = Boolean(room.test?.enabled && session?.isHost);
  $("#emojiCodePlayers").replaceChildren(...room.players.map((item) => {
    const card = document.createElement("article");
    card.className = `emoji-code-player is-${item.role}${item.connected ? "" : " is-offline"}`;
    card.dataset.playerId = item.id;
    card.style.backgroundColor = item.color;
    if (item.id === room.player.id) card.classList.add("is-current");
    if (canSwitchView) {
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Ver como ${item.name}`);
      card.setAttribute("aria-pressed", item.id === room.player.id ? "true" : "false");
      card.title = `Ver como ${item.name}`;
    }
    const role = item.role === "guesser" ? "Adivina" : item.role === "leader" ? "Líder" : "Equipo";
    card.innerHTML = `<div><strong></strong><small></small></div><b></b>`;
    card.querySelector("strong").textContent = item.name;
    card.querySelector("small").textContent = room.status === "lobby" ? `Jugador ${item.seatNumber}` : `${role}${item.submitted ? " · ✓" : ""}`;
    card.querySelector("b").textContent = `${item.score} pt`;
    if (!canSwitchView && isHost && room.status === "lobby" && item.id !== room.player.id) {
      card.dataset.kickId = item.id;
      card.title = "Toca para expulsar";
    }
    return card;
  }));
}

function renderRole(player) {
  const roleLabel = $("#emojiCodeRoleLabel");
  const roleName = $("#emojiCodeRoleName");
  const roleHint = $("#emojiCodeRoleHint");
  if (room.status === "lobby") {
    roleLabel.textContent = "Preparando la sala";
    roleName.textContent = `${room.players.length}/${room.config.playerLimit} jugadores`;
    roleHint.textContent = "La partida comenzará automáticamente cuando se complete la sala.";
    return;
  }
  if (room.status === "finished") {
    roleLabel.textContent = "Partida terminada";
    roleName.textContent = winnerText();
    roleHint.textContent = "Clasificación final por puntos.";
    return;
  }
  const labels = { guesser: "Te toca adivinar", leader: "Eres el líder", ally: "Estás con el líder" };
  roleLabel.textContent = labels[player.role];
  if (player.role === "guesser") {
    roleName.textContent = room.phase === "guessing" ? "Descifra los códigos" : "Película oculta";
    roleHint.textContent = ["leader", "team_codes"].includes(room.phase) ? `Esperando códigos: ${room.codesSubmitted}/${room.codesRequired}` : "Tienes tres intentos para encontrar el título exacto.";
  } else {
    roleName.textContent = room.movieTitle || (player.role === "leader" ? "Propón una película" : "Esperando al líder");
    roleHint.textContent = room.phase === "team_codes" ? (player.role === "leader" ? "Tu código ya está enviado. Espera al resto del equipo." : "Representa el título usando únicamente emojis.") : `Adivina ${room.guesserName}.`;
  }
}

function renderResult() {
  const panel = $("#emojiCodeResult");
  const result = room.lastTurnResult;
  panel.hidden = room.phase !== "result" || !result;
  if (panel.hidden) return;
  panel.className = `emoji-code-result ${result.correct ? "is-correct" : "is-wrong"}`;
  panel.replaceChildren();
  const title = document.createElement("h2");
  title.textContent = result.correct ? "¡Código descifrado!" : "Código sin resolver";
  const movie = document.createElement("strong");
  movie.textContent = result.movieTitle;
  const points = document.createElement("p");
  points.textContent = result.correct ? `${result.guesserName} +${result.guesserPoints} · autores +${result.codePoints}` : "Sin puntos en este turno";
  panel.append(title, movie, points);
  const guessLimit = Number(room.config.guessLimit || 3);
  if (!result.correct && result.attempts >= guessLimit) {
    const attemptsTitle = document.createElement("h3");
    attemptsTitle.textContent = "Intentos realizados";
    const attempts = document.createElement("ol");
    attempts.className = "emoji-code-result-attempts";
    attempts.replaceChildren(...room.guesses.filter((guess) => !guess.correct).map((guess) => {
      const item = document.createElement("li");
      item.textContent = guess.text;
      return item;
    }));
    panel.append(attemptsTitle, attempts);
  }
}

function renderPrimary(isHost) {
  primaryButton.hidden = false;
  primaryButton.disabled = true;
  if (room.status === "lobby") {
    primaryButton.hidden = true;
  } else if (room.phase === "result") {
    primaryButton.hidden = !isHost;
    primaryButton.disabled = !isHost;
    primaryButton.textContent = "Siguiente turno";
  } else if (room.status === "finished") {
    primaryButton.hidden = !isHost;
    primaryButton.disabled = !isHost;
    primaryButton.textContent = "Jugar otra vez";
  } else {
    primaryButton.hidden = true;
  }
}

function statusMessage() {
  if (room.status === "lobby") return room.player.isHost ? "Comparte el enlace y espera al resto." : "Esperando a que el creador inicie la partida.";
  if (room.status === "finished") return "Todos han sido adivinadores en todas las rondas.";
  if (room.phase === "leader") return room.player.canSubmitTitle ? "Elige una película y crea el primer código." : `${room.leaderName} está preparando la película y su código.`;
  if (room.phase === "team_codes") return room.player.canSubmitCode ? "Ya conoces la película. Escribe tu código secreto." : `Esperando códigos: ${room.codesSubmitted}/${room.codesRequired}.`;
  if (room.phase === "guessing") return room.player.canGuess ? "Compara todos los códigos antes de responder." : `${room.guesserName} está intentando adivinar.`;
  if (room.phase === "result") return room.player.isHost ? "Revisa el resultado y continúa." : "Esperando el siguiente turno.";
  return "";
}

function winnerText() {
  const top = Math.max(...room.players.map((player) => player.score));
  return room.players.filter((player) => player.score === top).map((player) => `${player.emoji} ${player.name}`).join(" · ");
}

function makeCodeCard(item) {
  const card = document.createElement("article");
  card.style.backgroundColor = item.color;
  card.innerHTML = "<strong></strong><span></span>";
  card.querySelector("strong").textContent = item.code;
  card.querySelector("span").textContent = `${item.emoji} ${item.name}`;
  return card;
}

async function handlePlayerCardClick(event) {
  const card = event.target.closest(".emoji-code-player[data-player-id]");
  if (!card || !session?.isHost) return;
  if (room?.test?.enabled) {
    selectTestView(card.dataset.playerId);
    return;
  }
  if (!card.dataset.kickId) return;
  if (window.confirm("¿Expulsar a este jugador?")) await performAction("kick", { targetPlayerId: card.dataset.kickId });
}

function handlePlayerCardKeydown(event) {
  if (!room?.test?.enabled || !["Enter", " "].includes(event.key)) return;
  const card = event.target.closest(".emoji-code-player[data-player-id]");
  if (!card) return;
  event.preventDefault();
  selectTestView(card.dataset.playerId);
}

function selectTestView(playerId) {
  if (!room?.test?.enabled || !session?.isHost || !playerId) return;
  testViewPlayerId = playerId;
  void pollRoom();
}

async function shareRoom() {
  const url = new URL(window.location.href);
  url.searchParams.set("emojicode", session.roomName);
  await navigator.clipboard.writeText(url.toString());
  const button = $("#emojiCodeShareButton");
  button.textContent = "✓ Enlace copiado";
  window.setTimeout(() => { button.textContent = "🔗 Copiar enlace"; }, 1400);
}

function leaveToMenu() {
  releaseRoom();
  const url = new URL(window.location.href);
  url.searchParams.delete("emojicode");
  window.history.replaceState({}, "", url);
  document.querySelector("[data-home-link]")?.click();
}

function releaseRoom() {
  if (!session) return;
  const current = session;
  void fetch(`/api/emoji-code/rooms/${encodeURIComponent(current.roomName)}/leave`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ playerId: current.playerId, token: current.token }),
    keepalive: true
  }).catch(() => {});
  leaveLocal();
}

function leaveLocal() {
  clearInterval(pollTimer);
  pollTimer = null;
  session = null;
  room = null;
  testViewPlayerId = "";
  lobby.hidden = false;
  game.hidden = true;
  showChoice();
}

function isEmojiOnly(value) {
  const compact = String(value || "").replace(/\s/g, "");
  if (!compact || /[\p{L}\p{N}]/u.test(compact.replace(/[0-9#*]\uFE0F?\u20E3/gu, ""))) return false;
  const pictographs = compact.match(/\p{Extended_Pictographic}|\p{Regional_Indicator}|[0-9#*]\uFE0F?\u20E3/gu) || [];
  const graphemes = typeof Intl.Segmenter === "function" ? [...new Intl.Segmenter("es", { granularity: "grapheme" }).segment(compact)].length : pictographs.length;
  return pictographs.length > 0 && graphemes <= 12 && /^[\p{Extended_Pictographic}\p{Regional_Indicator}\p{Emoji_Modifier}\uFE0F\u200D\u20E3\u2640\u2642\u2695\u2764\u3030\u303D\u3297\u3299#*0-9]+$/u.test(compact);
}

async function request(url, options = {}) {
  const response = await fetch(url, { headers: { "Content-Type": "application/json", ...(options.headers || {}) }, ...options });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || "No se pudo completar la acción");
  return payload;
}
