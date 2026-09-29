// Controlador de Numbers. app.js solo lo crea y le avisa de entrar/salir de la
// vista, del idioma y del ?numbers= de la URL; todo lo demás vive en este módulo.
//
// El valor propio nunca llega al navegador: el servidor lo omite de la respuesta.
// Este archivo solo pinta "?" en la casilla propia, no esconde nada que tenga.

import * as api from "./numbers-api.js";
import { createNumbersTranslator } from "./numbers-i18n.js";

const SESSION_PREFIX = "roulogames:numbers:session:";
const POLL_MS = 1500;
const WORD_MODES = ["famous", "objects"];

function collectElements() {
  const query = (selector) => document.querySelector(selector);
  return {
    view: query("#numbersView"),
    lobby: query("#numbersLobby"),
    game: query("#numbersGame"),
    choice: query("#numbersChoice"),
    chooseCreate: query("#numbersChooseCreate"),
    chooseJoin: query("#numbersChooseJoin"),
    createForm: query("#numbersCreateForm"),
    joinForm: query("#numbersJoinForm"),
    createRoomName: query("#numbersCreateRoomName"),
    createPlayerName: query("#numbersCreatePlayerName"),
    joinRoomName: query("#numbersJoinRoomName"),
    joinPlayerName: query("#numbersJoinPlayerName"),
    lobbyMessage: query("#numbersLobbyMessage"),
    roomLabel: query("#numbersRoomLabel"),
    modeLabel: query("#numbersModeLabel"),
    roundLabel: query("#numbersRoundLabel"),
    inviteButton: query("#numbersInviteButton"),
    leaveButton: query("#numbersLeaveButton"),
    status: query("#numbersStatus"),
    playersTitle: query("#numbersPlayersTitle"),
    players: query("#numbersPlayers"),
    hostPanel: query("#numbersHostPanel"),
    modeSwitch: query("#numbersModeSwitch"),
    dealButton: query("#numbersDealButton"),
    hostHint: query("#numbersHostHint"),
    waitHint: query("#numbersWaitHint")
  };
}

export function createNumbersController({ getLanguage, showView } = {}) {
  const elements = collectElements();
  if (!elements.view) return { enterView() {}, leaveView() {}, applyLanguage() {}, applyRoomFromUrl() {} };

  const translate = createNumbersTranslator(getLanguage || (() => "es"));

  let session = null;
  let state = null;
  let pollTimer = null;
  let active = false;
  let dealPending = false;
  // Modalidad elegida por el anfitrión en el selector; se aplica al pulsar repartir.
  let selectedMode = "";

  // --- Sesión ------------------------------------------------------------

  function sessionKey(roomName) {
    return `${SESSION_PREFIX}${String(roomName || "").toLocaleLowerCase()}`;
  }

  function storeSession(value) {
    try {
      localStorage.setItem(sessionKey(value.roomName), JSON.stringify(value));
    } catch {
      // Modo privado o almacenamiento lleno: se juega igual, solo se pierde la reconexión.
    }
  }

  function readSession(roomName) {
    try {
      return JSON.parse(localStorage.getItem(sessionKey(roomName)) || "null");
    } catch {
      return null;
    }
  }

  function clearSession(roomName) {
    try {
      localStorage.removeItem(sessionKey(roomName));
    } catch {
      // Sin almacenamiento no hay nada que limpiar.
    }
  }

  // --- Sondeo ------------------------------------------------------------

  function schedulePoll() {
    clearTimeout(pollTimer);
    if (!session || !active) return;
    pollTimer = setTimeout(pollRoom, POLL_MS);
  }

  async function pollRoom() {
    if (!session || !active) return;
    try {
      applyState(await api.fetchRoom(session.roomName, session));
    } catch (error) {
      if (error.status === 401 || error.status === 404) {
        dropSession(error.status === 401 ? translate("numbers.sessionLost") : error.message);
        return;
      }
      // Un fallo de red puntual no debe echar al jugador de la sala.
      setStatus(translate("numbers.connectionLost"), "warn");
    }
    schedulePoll();
  }

  function dropSession(message) {
    const roomName = session?.roomName || "";
    if (roomName) clearSession(roomName);
    session = null;
    state = null;
    showLobby();
    showForm("join");
    if (elements.joinRoomName) elements.joinRoomName.value = roomName;
    setMessage(message);
  }

  // --- Estado ------------------------------------------------------------

  function applyState(payload) {
    const previous = state;
    state = payload;
    session = { roomName: payload.roomName, playerId: payload.player.id, token: payload.player.token };
    storeSession(session);
    if (!selectedMode || !previous || previous.mode !== payload.mode) selectedMode = payload.mode;
    announceChanges(previous, payload);
    render();
    showGame();
  }

  function announceChanges(previous, next) {
    if (!previous || previous.roomName !== next.roomName || next.round === previous.round) return;
    if (next.mode !== previous.mode) setStatus(translate("numbers.newMode", { mode: modeName(next.mode) }), "ok");
    else setStatus(translate("numbers.newRound", { round: next.round }), "ok");
    elements.players?.classList.remove("numbers-dealt");
    // Fuerza el reinicio de la animación de reparto.
    void elements.players?.offsetWidth;
    elements.players?.classList.add("numbers-dealt");
  }

  function modeName(mode) {
    return translate(`numbers.mode.${mode}`);
  }

  function valueText(value) {
    if (!value?.labels) return translate("numbers.unassigned");
    return value.labels[getLanguage?.() || "es"] || value.labels.es || value.id;
  }

  // Todo entra por textContent: los nombres los escriben los jugadores.
  function render() {
    if (!state) return;
    const isHost = Boolean(state.player?.isHost);
    setText(elements.roomLabel, state.roomName);
    setText(elements.modeLabel, modeName(state.mode));
    setText(elements.roundLabel, state.round ? translate("numbers.round", { round: state.round }) : translate("numbers.noRound"));
    setText(elements.playersTitle, translate("numbers.players", { count: state.players.length, max: state.maxPlayers }));
    elements.view.dataset.mode = state.mode;
    renderPlayers();

    if (elements.hostPanel) elements.hostPanel.hidden = !isHost;
    if (elements.waitHint) elements.waitHint.hidden = isHost || state.round > 0;
    if (isHost) renderHostPanel();
  }

  function renderPlayers() {
    const list = elements.players;
    if (!list) return;
    list.replaceChildren(...state.players.map((player) => {
      const item = document.createElement("li");
      item.className = "numbers-player";
      item.dataset.self = String(player.isSelf);
      item.dataset.connected = String(player.connected);

      const head = document.createElement("div");
      head.className = "numbers-player-head";
      const dot = document.createElement("span");
      dot.className = "numbers-player-dot";
      dot.setAttribute("aria-hidden", "true");
      const name = document.createElement("span");
      name.className = "numbers-player-name";
      name.textContent = player.name;
      head.append(dot, name);
      if (player.isSelf) head.append(badge(translate("numbers.you"), "self"));
      if (player.isHost) head.append(badge(translate("numbers.host"), "host"));
      if (!player.connected) head.append(badge(translate("numbers.offline"), "offline"));

      const value = document.createElement("strong");
      value.className = "numbers-player-value";
      if (player.isSelf && player.assigned) {
        value.textContent = "?";
        value.dataset.hidden = "true";
        value.setAttribute("aria-label", translate("numbers.hiddenValue"));
      } else {
        value.textContent = player.isSelf ? translate("numbers.unassigned") : valueText(player.value);
        value.dataset.empty = String(!player.value && !player.isSelf);
      }
      value.dataset.long = String(value.textContent.length > 12);

      item.append(head, value);
      return item;
    }));
  }

  function badge(text, kind) {
    const element = document.createElement("span");
    element.className = "numbers-badge";
    element.dataset.kind = kind;
    element.textContent = text;
    return element;
  }

  function renderHostPanel() {
    elements.modeSwitch?.querySelectorAll("[data-numbers-mode]").forEach((button) => {
      const pressed = button.dataset.numbersMode === selectedMode;
      button.setAttribute("aria-pressed", String(pressed));
      button.textContent = modeName(button.dataset.numbersMode);
    });
    const enoughPlayers = state.players.length >= state.minPlayers;
    const changingMode = state.round > 0 && selectedMode !== state.mode;
    let label = translate("numbers.deal");
    if (dealPending) label = translate("numbers.dealing");
    else if (changingMode) label = translate("numbers.dealMode", { mode: modeName(selectedMode) });
    else if (state.round > 0) label = translate(WORD_MODES.includes(state.mode) ? "numbers.dealAgain.words" : "numbers.dealAgain.numbers");
    setText(elements.dealButton, label);
    if (elements.dealButton) elements.dealButton.disabled = dealPending || !enoughPlayers;

    let hint = "";
    if (!enoughPlayers) hint = translate("numbers.needPlayers", { min: state.minPlayers });
    else if (changingMode) hint = translate("numbers.modeChangeHint");
    else if (state.round > 0) hint = translate("numbers.againHint");
    setText(elements.hostHint, hint);
  }

  function setText(element, text) {
    if (element) element.textContent = text;
  }

  function setMessage(text) {
    setText(elements.lobbyMessage, text || "");
  }

  function setStatus(text, tone = "") {
    if (!elements.status) return;
    elements.status.textContent = text || "";
    elements.status.dataset.tone = tone;
    elements.status.hidden = !text;
  }

  function showLobby() {
    clearTimeout(pollTimer);
    if (elements.lobby) elements.lobby.hidden = false;
    if (elements.game) elements.game.hidden = true;
    showForm("");
  }

  function showForm(kind) {
    if (elements.choice) elements.choice.hidden = Boolean(kind);
    if (elements.createForm) elements.createForm.hidden = kind !== "create";
    if (elements.joinForm) elements.joinForm.hidden = kind !== "join";
  }

  function showGame() {
    if (elements.lobby) elements.lobby.hidden = true;
    if (elements.game) elements.game.hidden = false;
  }

  function setRoomInUrl(roomName) {
    const url = new URL(window.location.href);
    if (roomName) url.searchParams.set("numbers", roomName);
    else url.searchParams.delete("numbers");
    window.history.replaceState({}, "", url);
  }

  function applyStaticText() {
    document.querySelectorAll("[data-numbers-i18n]").forEach((element) => {
      element.textContent = translate(element.dataset.numbersI18n);
    });
    document.querySelectorAll("[data-numbers-i18n-placeholder]").forEach((element) => {
      element.placeholder = translate(element.dataset.numbersI18nPlaceholder);
    });
  }

  // --- Acciones ----------------------------------------------------------

  function enterRoom(payload) {
    state = null;
    setStatus("");
    applyState(payload);
    setRoomInUrl(payload.roomName);
    setMessage("");
    schedulePoll();
  }

  async function restore(roomName) {
    const stored = readSession(roomName);
    if (!stored?.token) return false;
    try {
      session = stored;
      enterRoom(await api.fetchRoom(roomName, stored));
      return true;
    } catch {
      session = null;
      clearSession(roomName);
      return false;
    }
  }

  async function submitLobbyForm(event, runner, onEntered) {
    event.preventDefault();
    const submit = event.currentTarget.querySelector("[type='submit']");
    if (submit?.disabled) return;
    if (submit) submit.disabled = true;
    try {
      const payload = await runner();
      enterRoom(payload);
      onEntered?.(payload);
    } catch (error) {
      setMessage(error.message);
    } finally {
      if (submit) submit.disabled = false;
    }
  }

  async function handleDeal() {
    if (!session || !state || dealPending) return;
    // Se bloquea antes de la petición: una doble pulsación no llega a salir.
    dealPending = true;
    render();
    try {
      applyState(await api.deal(session.roomName, session, selectedMode, state.round));
    } catch (error) {
      if (error.status === 401) {
        dropSession(translate("numbers.sessionLost"));
        return;
      }
      setStatus(error.message, "danger");
    } finally {
      dealPending = false;
      render();
    }
  }

  function leaveRoom() {
    clearTimeout(pollTimer);
    const current = session;
    if (current) {
      clearSession(current.roomName);
      // Best-effort: si falla, los demás lo verán desconectado por lastSeen.
      api.leaveRoom(current.roomName, current).catch(() => {});
    }
    session = null;
    state = null;
    setStatus("");
    setRoomInUrl("");
    showLobby();
  }

  elements.chooseCreate?.addEventListener("click", () => {
    showForm("create");
    elements.createRoomName?.focus();
  });
  elements.chooseJoin?.addEventListener("click", () => {
    showForm("join");
    elements.joinRoomName?.focus();
  });
  elements.view.querySelectorAll("[data-numbers-back]").forEach((button) => {
    button.addEventListener("click", () => {
      setMessage("");
      showForm("");
    });
  });

  elements.createForm?.addEventListener("submit", (event) => {
    const roomName = elements.createRoomName.value.trim();
    const playerName = elements.createPlayerName.value.trim();
    const mode = elements.createForm.querySelector("input[name='numbersCreateMode']:checked")?.value || "numbers";
    submitLobbyForm(event, () => api.createRoom(roomName, playerName, mode));
  });

  elements.joinForm?.addEventListener("submit", (event) => {
    const roomName = elements.joinRoomName.value.trim();
    const playerName = elements.joinPlayerName.value.trim();
    submitLobbyForm(event, () => api.joinRoom(roomName, playerName), (payload) => {
      if (payload.round > 0) setStatus(translate("numbers.lateJoin"), "ok");
    });
  });

  elements.modeSwitch?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-numbers-mode]");
    if (!button || dealPending) return;
    selectedMode = button.dataset.numbersMode;
    render();
  });

  elements.dealButton?.addEventListener("click", handleDeal);
  elements.leaveButton?.addEventListener("click", leaveRoom);

  elements.inviteButton?.addEventListener("click", async () => {
    if (!state?.roomName) return;
    const url = new URL(window.location.origin);
    // El enlace de invitación lleva solo el nombre de sala, nunca el token del jugador.
    url.searchParams.set("numbers", state.roomName);
    try {
      await navigator.clipboard.writeText(url.toString());
      setStatus(translate("numbers.inviteCopied"), "ok");
    } catch {
      setStatus(url.toString());
    }
  });

  // Al volver de segundo plano o recuperar la red, refresca en vez de esperar al siguiente ciclo.
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && active && session) pollRoom();
  });
  window.addEventListener("online", () => {
    if (active && session) pollRoom();
  });

  applyStaticText();

  return {
    enterView() {
      active = true;
      applyStaticText();
      if (session) {
        setRoomInUrl(session.roomName);
        showGame();
        pollRoom();
      } else {
        showLobby();
      }
    },
    leaveView() {
      active = false;
      clearTimeout(pollTimer);
      // Se conserva la sesión para poder volver a la sala desde el menú.
      setRoomInUrl("");
    },
    applyLanguage() {
      applyStaticText();
      render();
    },
    async applyRoomFromUrl() {
      const roomName = new URLSearchParams(window.location.search).get("numbers")?.trim();
      if (!roomName) return false;
      showView?.("numbersView");
      active = true;
      if (!(await restore(roomName))) {
        showLobby();
        showForm("join");
        if (elements.joinRoomName) elements.joinRoomName.value = roomName;
        setRoomInUrl(roomName);
        elements.joinPlayerName?.focus();
      }
      return true;
    }
  };
}
