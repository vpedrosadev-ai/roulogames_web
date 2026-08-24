// Controlador de Sincronía. app.js solo lo crea y le avisa de entrar/salir de la
// vista y de los cambios de idioma; todo lo demás vive dentro de este módulo.

import * as api from "./mind-api.js";
import { createMindTranslator } from "./mind-i18n.js";
import { createMindRenderer } from "./mind-render.js";

const SESSION_PREFIX = "roulogames:mind:session:";
// El sondeo se acelera durante el nivel: ver avanzar la pila marca el ritmo.
// En sala de espera basta el ritmo del resto de juegos de Roulogames.
const POLL_ACTIVE_MS = 700;
const POLL_IDLE_MS = 1200;

function query(id) {
  return document.querySelector(id);
}

function collectElements() {
  return {
    view: query("#mindView"),
    navLink: document.querySelector(".nav-link[data-view-target='mindView']"),
    lobby: query("#mindLobby"),
    game: query("#mindGame"),

    eyebrow: query("#mindEyebrow"),
    title: query("#mindTitle"),
    subtitle: query("#mindSubtitle"),
    homeHint: query("#homeMindHint"),
    homePlayers: query("#homeMindPlayers"),

    choice: query("#mindChoice"),
    chooseCreate: query("#mindChooseCreate"),
    chooseJoin: query("#mindChooseJoin"),
    createForm: query("#mindCreateForm"),
    joinForm: query("#mindJoinForm"),
    createTitle: query("#mindCreateTitle"),
    joinTitle: query("#mindJoinTitle"),
    createHint: query("#mindCreateHint"),
    joinHint: query("#mindJoinHint"),
    createRoomName: query("#mindCreateRoomName"),
    createPlayerName: query("#mindCreatePlayerName"),
    joinRoomName: query("#mindJoinRoomName"),
    joinPlayerName: query("#mindJoinPlayerName"),
    lobbyMessage: query("#mindLobbyMessage"),

    roomChipLabel: query("#mindRoomChipLabel"),
    roomLabel: query("#mindRoomLabel"),
    lives: query("#mindLives"),
    stars: query("#mindStars"),
    level: query("#mindLevel"),
    levelWord: query("#mindLevelWord"),
    inviteButton: query("#mindInviteButton"),
    leaveButton: query("#mindLeaveButton"),
    statusBanner: query("#mindStatusBanner"),

    playersTitle: query("#mindPlayersTitle"),
    playersList: query("#mindPlayersList"),
    lobbyActions: query("#mindLobbyActions"),
    startButton: query("#mindStartButton"),
    startHint: query("#mindStartHint"),

    pileLabel: query("#mindPileLabel"),
    pileTop: query("#mindPileTop"),
    pileHistory: query("#mindPileHistory"),
    discardRow: query("#mindDiscardRow"),
    countdown: query("#mindCountdown"),

    readyPanel: query("#mindReadyPanel"),
    readyText: query("#mindReadyText"),
    readyButton: query("#mindReadyButton"),

    starVote: query("#mindStarVote"),
    starVoteTitle: query("#mindStarVoteTitle"),
    starVoteCount: query("#mindStarVoteCount"),
    starYes: query("#mindStarYes"),
    starNo: query("#mindStarNo"),

    resultPanel: query("#mindResultPanel"),
    resultTitle: query("#mindResultTitle"),
    resultDetail: query("#mindResultDetail"),
    resultStats: query("#mindResultStats"),
    restartButton: query("#mindRestartButton"),
    resultHomeButton: query("#mindResultHomeButton"),

    handTitle: query("#mindHandTitle"),
    hand: query("#mindHand"),
    handHint: query("#mindHandHint"),
    starButton: query("#mindStarButton"),
    pauseButton: query("#mindPauseButton")
  };
}

export function createMindController({ getLanguage, showView } = {}) {
  const elements = collectElements();
  if (!elements.view) return { enterView() {}, leaveView() {}, applyLanguage() {}, applyRoomFromUrl() {} };

  const translate = createMindTranslator(getLanguage || (() => "es"));
  const renderer = createMindRenderer(elements, translate);

  let session = null;
  let state = null;
  let pollTimer = null;
  let countdownTimer = null;
  let pendingPlay = false;
  let active = false;

  // --- Sesión ------------------------------------------------------------

  function sessionKey(roomName) {
    return `${SESSION_PREFIX}${String(roomName || "").toLocaleLowerCase()}`;
  }

  function storeSession(value) {
    try {
      localStorage.setItem(sessionKey(value.roomName), JSON.stringify({ ...value, savedAt: Date.now() }));
    } catch {
      // Modo privado o almacenamiento lleno: la partida sigue, solo se pierde la reconexión.
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

  // Solo se sondea despacio cuando no hay partida en curso. Durante el reparto y la
  // preparación también importa la latencia: quien no actúa se entera por el sondeo,
  // y un retraso de casi dos segundos hacía que la mano tardara en aparecer.
  // Sondear más rápido cuesta lecturas, no escrituras: el servidor solo escribe si
  // algo cambió de verdad.
  function pollInterval() {
    if (!state || ["lobby", "victory", "defeat"].includes(state.status)) return POLL_IDLE_MS;
    return POLL_ACTIVE_MS;
  }

  function schedulePoll() {
    clearTimeout(pollTimer);
    if (!session || !active) return;
    pollTimer = setTimeout(pollRoom, pollInterval());
  }

  async function pollRoom() {
    if (!session || !active) return;
    try {
      applyState(await api.fetchRoom(session.roomName, session));
    } catch (error) {
      if (error.status === 401 || error.status === 404) {
        clearSession(session.roomName);
        session = null;
        showLobby();
        setMessage(error.message);
        return;
      }
      // Un fallo de red puntual no debe echar al jugador de la partida.
      setBanner(translate("mind.connectionLost"));
    }
    schedulePoll();
  }

  function startCountdownTicker() {
    clearInterval(countdownTimer);
    countdownTimer = setInterval(() => {
      if (state?.status === "synchronizing") renderer.renderCountdown(state);
    }, 200);
  }

  // --- Estado ------------------------------------------------------------

  function applyState(payload) {
    state = payload;
    if (payload.player?.token) {
      session = { roomName: payload.roomName, playerId: payload.player.id, token: payload.player.token };
      storeSession(session);
    }
    if (!pendingPlay) renderer.setPendingCard(0);
    renderer.render(state);
    showGame();
  }

  function setMessage(text) {
    if (elements.lobbyMessage) elements.lobbyMessage.textContent = text || "";
  }

  function setBanner(text) {
    if (elements.statusBanner) elements.statusBanner.textContent = text;
  }

  function showLobby() {
    clearTimeout(pollTimer);
    clearInterval(countdownTimer);
    state = null;
    if (elements.lobby) elements.lobby.hidden = false;
    if (elements.game) elements.game.hidden = true;
    if (elements.choice) elements.choice.hidden = false;
    if (elements.createForm) elements.createForm.hidden = true;
    if (elements.joinForm) elements.joinForm.hidden = true;
  }

  function showGame() {
    if (elements.lobby) elements.lobby.hidden = true;
    if (elements.game) elements.game.hidden = false;
  }

  function setRoomInUrl(roomName) {
    const url = new URL(window.location.href);
    if (roomName) url.searchParams.set("mind", roomName);
    else url.searchParams.delete("mind");
    window.history.replaceState({}, "", url);
  }

  // --- Acciones ----------------------------------------------------------

  async function guarded(runner) {
    try {
      applyState(await runner());
      setMessage("");
    } catch (error) {
      if (error.status === 401) {
        clearSession(session?.roomName);
        session = null;
        showLobby();
      }
      setBanner(error.message);
    }
  }

  async function handlePlay(card) {
    if (!session || pendingPlay) return;
    pendingPlay = true;
    renderer.setPendingCard(card);
    if (state) renderer.render(state);
    // El actionId hace idempotente el reenvío si la respuesta se pierde por el camino.
    const actionId = `${session.playerId}-${Date.now()}-${card}`;
    try {
      applyState(await api.playCard(session.roomName, session, card, actionId));
    } catch (error) {
      setBanner(error.message);
      if (state) renderer.render(state);
    } finally {
      pendingPlay = false;
      renderer.setPendingCard(0);
      if (state) renderer.render(state);
    }
  }

  async function enterRoom(payload) {
    applyState(payload);
    setRoomInUrl(payload.roomName);
    startCountdownTicker();
    schedulePoll();
  }

  async function restore(roomName) {
    const stored = readSession(roomName);
    if (!stored?.token) return false;
    try {
      const payload = await api.fetchRoom(roomName, stored);
      if (!payload.player) throw new api.MindApiError("Sesión caducada", 401);
      session = stored;
      await enterRoom(payload);
      return true;
    } catch {
      clearSession(roomName);
      return false;
    }
  }

  // --- Eventos -----------------------------------------------------------

  elements.chooseCreate?.addEventListener("click", () => {
    elements.choice.hidden = true;
    elements.createForm.hidden = false;
    elements.createRoomName?.focus();
  });

  elements.chooseJoin?.addEventListener("click", () => {
    elements.choice.hidden = true;
    elements.joinForm.hidden = false;
    elements.joinRoomName?.focus();
  });

  elements.view.querySelectorAll("[data-mind-back]").forEach((button) => {
    button.addEventListener("click", () => {
      setMessage("");
      showLobby();
    });
  });

  elements.createForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const roomName = elements.createRoomName.value.trim();
    const playerName = elements.createPlayerName.value.trim();
    if (!roomName || !playerName) return;
    try {
      await enterRoom(await api.createRoom(roomName, playerName));
      setMessage("");
    } catch (error) {
      setMessage(error.message);
    }
  });

  elements.joinForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const roomName = elements.joinRoomName.value.trim();
    const playerName = elements.joinPlayerName.value.trim();
    if (!roomName || !playerName) return;
    try {
      await enterRoom(await api.joinRoom(roomName, playerName));
      setMessage("");
    } catch (error) {
      setMessage(error.message);
    }
  });

  elements.startButton?.addEventListener("click", () => guarded(() => api.startGame(session.roomName, session)));
  elements.readyButton?.addEventListener("click", () => guarded(() => api.markReady(session.roomName, session)));
  elements.pauseButton?.addEventListener("click", () => guarded(() => api.pauseGame(session.roomName, session)));
  elements.starButton?.addEventListener("click", () => guarded(() => api.proposeStar(session.roomName, session)));
  elements.starYes?.addEventListener("click", () => guarded(() => api.voteStar(session.roomName, session, true, state?.starVote?.id)));
  elements.starNo?.addEventListener("click", () => guarded(() => api.voteStar(session.roomName, session, false, state?.starVote?.id)));
  elements.restartButton?.addEventListener("click", () => guarded(() => api.restartGame(session.roomName, session)));

  elements.hand?.addEventListener("click", (event) => {
    const button = event.target.closest(".mind-number-card");
    if (!button || button.disabled) return;
    handlePlay(Number(button.dataset.card));
  });

  elements.inviteButton?.addEventListener("click", async () => {
    if (!state?.roomName) return;
    const url = new URL(window.location.origin);
    // El enlace de invitación nunca lleva el token privado del jugador.
    url.searchParams.set("mind", state.roomName);
    try {
      await navigator.clipboard.writeText(url.toString());
      setBanner(translate("mind.inviteCopied"));
    } catch {
      setBanner(url.toString());
    }
  });

  elements.leaveButton?.addEventListener("click", () => leaveRoom(true));
  elements.resultHomeButton?.addEventListener("click", () => {
    leaveRoom(true);
    showView?.("homeView");
  });

  function leaveRoom(forget) {
    clearTimeout(pollTimer);
    clearInterval(countdownTimer);
    const current = session;
    if (current) {
      if (forget) clearSession(current.roomName);
      // El aviso de salida es best-effort: si falla, el servidor lo detecta por lastSeen.
      api.leaveRoom(current.roomName, current).catch(() => {});
    }
    session = null;
    state = null;
    setRoomInUrl("");
    showLobby();
  }

  // Reconecta al volver de segundo plano o al recuperar la red.
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && active && session) pollRoom();
  });
  window.addEventListener("online", () => {
    if (active && session) pollRoom();
  });

  return {
    enterView() {
      active = true;
      renderer.applyStaticText();
      if (session) {
        startCountdownTicker();
        schedulePoll();
        showGame();
      } else {
        showLobby();
      }
    },
    leaveView() {
      active = false;
      clearTimeout(pollTimer);
      clearInterval(countdownTimer);
      // Se conserva la sesión guardada para poder volver a la partida.
      setRoomInUrl("");
    },
    applyLanguage() {
      renderer.applyStaticText();
      if (state) renderer.render(state);
    },
    async applyRoomFromUrl() {
      const roomName = new URLSearchParams(window.location.search).get("mind");
      if (!roomName) return false;
      showView?.("mindView");
      active = true;
      const restored = await restore(roomName.trim());
      if (!restored) {
        showLobby();
        if (elements.choice) elements.choice.hidden = true;
        if (elements.joinForm) elements.joinForm.hidden = false;
        if (elements.joinRoomName) elements.joinRoomName.value = roomName.trim();
        elements.joinPlayerName?.focus();
      }
      return true;
    }
  };
}
