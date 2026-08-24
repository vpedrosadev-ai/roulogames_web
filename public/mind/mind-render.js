// Render de Sincronía. Todo el texto entra por textContent: los nombres y emojis
// los escriben los jugadores, así que nunca se interpolan como HTML.

const PLAYABLE_STATUSES = ["playing"];
const READY_STATUSES = ["level_preparation", "paused", "level_result"];

export function createMindRenderer(elements, translate) {
  let pendingCard = 0;

  function setText(element, text) {
    if (element) element.textContent = text;
  }

  function setHidden(element, hidden) {
    if (element) element.hidden = Boolean(hidden);
  }

  function renderPlayers(state) {
    const list = elements.playersList;
    if (!list) return;
    list.replaceChildren();
    state.players.forEach((player) => {
      const item = document.createElement("li");
      item.className = "mind-player";
      item.dataset.ready = String(Boolean(player.ready));
      item.dataset.connected = String(Boolean(player.connected));

      const name = document.createElement("span");
      name.className = "mind-player-name";
      name.textContent = `${player.emoji ? `${player.emoji} ` : ""}${player.name}${player.isHost ? " ★" : ""}`;
      item.append(name);

      // Cuántas cartas tiene cada quien es información pública también en la mesa física.
      const count = document.createElement("span");
      count.className = "mind-player-cards";
      count.textContent = `${player.cardCount} ${translate(player.cardCount === 1 ? "mind.card" : "mind.cards")}`;
      item.append(count);

      if (!player.connected) {
        const flag = document.createElement("span");
        flag.className = "mind-player-flag";
        flag.textContent = translate("mind.offline");
        item.append(flag);
      }
      list.append(item);
    });
  }

  function renderPile(state) {
    const top = elements.pileTop;
    if (top) {
      top.textContent = state.pileTop ? String(state.pileTop) : translate("mind.noCard");
      top.dataset.empty = String(!state.pileTop);
    }
    const history = elements.pileHistory;
    if (history) {
      history.replaceChildren();
      state.playedCards.slice(-12).forEach((card) => {
        const item = document.createElement("li");
        item.textContent = String(card);
        history.append(item);
      });
    }
    const discards = elements.discardRow;
    if (discards) {
      const cards = state.discardedCards || [];
      discards.hidden = !cards.length;
      discards.textContent = cards.length ? translate("mind.discarded", { cards: cards.join(", ") }) : "";
    }
  }

  function renderHand(state) {
    const hand = elements.hand;
    if (!hand) return;
    hand.replaceChildren();
    const cards = state.player?.hand || [];
    const playable = Number(state.player?.playableCard || 0);

    if (!cards.length) {
      const empty = document.createElement("li");
      const card = document.createElement("button");
      card.type = "button";
      card.className = "mind-number-card";
      card.dataset.empty = "true";
      card.disabled = true;
      card.textContent = "—";
      empty.append(card);
      hand.append(empty);
      setText(elements.handHint, translate("mind.playHintEmpty"));
      return;
    }

    cards.forEach((value) => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "mind-number-card";
      button.textContent = String(value);
      button.dataset.card = String(value);

      const isPlayable = value === playable && PLAYABLE_STATUSES.includes(state.status) && !pendingCard;
      button.dataset.playable = String(isPlayable);
      // Solo la carta más baja queda habilitada: elimina errores de interfaz que
      // no forman parte del desafío del juego.
      button.disabled = !isPlayable;
      if (pendingCard === value) button.dataset.pending = "true";
      button.setAttribute("aria-label", translate(isPlayable ? "mind.playCardLabel" : "mind.cardLocked", { card: value }));
      item.append(button);
      hand.append(item);
    });

    if (!PLAYABLE_STATUSES.includes(state.status)) setText(elements.handHint, translate("mind.playHintBlocked"));
    else setText(elements.handHint, translate("mind.playHint"));
  }

  function renderBanner(state) {
    const banner = elements.statusBanner;
    if (!banner) return;
    const event = state.lastEvent || {};
    let tone = "";
    let text = "";

    switch (state.status) {
      case "lobby":
        text = state.player?.isHost ? translate("mind.startHint") : translate("mind.waitingHost");
        break;
      case "level_preparation":
        text = translate("mind.prepareText");
        break;
      case "synchronizing":
        text = translate("mind.levelStarted", { level: state.level });
        break;
      case "paused":
        text = event.type === "star-used"
          ? translate("mind.starUsed", { cards: (event.discardedCards || []).join(", ") })
          : translate("mind.pausedText");
        tone = event.type === "star-used" ? "ok" : "";
        break;
      case "star_vote":
        text = translate("mind.starProposed", { name: state.starVote?.proposerName || "" });
        break;
      case "level_result":
        text = translate("mind.levelComplete", { level: state.level });
        tone = "ok";
        break;
      default:
        text = "";
    }

    if (state.status === "playing") {
      if (event.type === "mistake") {
        text = translate("mind.mistake", {
          card: event.playedCard,
          cards: (event.discardedCards || []).join(", ")
        });
        tone = "danger";
      } else if (event.type === "star-rejected") {
        text = translate(event.reason === "timeout" ? "mind.starExpired" : "mind.starRejected");
      } else {
        text = translate("mind.levelStarted", { level: state.level });
      }
    }

    banner.textContent = text;
    banner.dataset.tone = tone;
  }

  function renderReadyPanel(state) {
    const show = READY_STATUSES.includes(state.status) && state.status !== "lobby";
    setHidden(elements.readyPanel, !show);
    if (!show) return;

    const waiting = state.players.filter((player) => !player.ready).length;
    let text = translate("mind.prepareText");
    if (state.status === "paused") text = translate("mind.pausedText");
    if (state.status === "level_result") {
      const event = state.lastEvent || {};
      if (event.granted === "star") text = translate("mind.rewardStar");
      else if (event.granted === "life") text = translate("mind.rewardLife");
      else if (event.rewardLost) text = translate("mind.rewardLost");
      else text = translate("mind.rewardNone");
    }
    setText(elements.readyText, text);

    const ready = Boolean(state.player?.ready);
    if (elements.readyButton) {
      elements.readyButton.disabled = ready;
      elements.readyButton.textContent = ready
        ? translate("mind.readyWaiting")
        : translate("mind.ready");
      elements.readyButton.setAttribute("aria-label", `${translate("mind.ready")} (${waiting})`);
    }
  }

  function renderStarVote(state) {
    const show = state.status === "star_vote" && Boolean(state.starVote);
    setHidden(elements.starVote, !show);
    if (!show) return;
    setText(elements.starVoteTitle, translate("mind.starProposed", { name: state.starVote.proposerName }));
    setText(elements.starVoteCount, translate("mind.starVoteCount", {
      cast: state.starVote.votesCast,
      needed: state.starVote.votesNeeded
    }));
    const voted = Boolean(state.starVote.hasVoted);
    if (elements.starYes) elements.starYes.disabled = voted;
    if (elements.starNo) elements.starNo.disabled = false;
  }

  function renderCountdown(state) {
    const show = state.status === "synchronizing";
    setHidden(elements.countdown, !show);
    if (!show || !elements.countdown) return;
    const remaining = Math.max(0, Number(state.syncEndsAt || 0) - Date.now());
    elements.countdown.textContent = String(Math.ceil(remaining / 1000) || 1);
  }

  function renderResult(state) {
    const finished = ["victory", "defeat"].includes(state.status);
    setHidden(elements.resultPanel, !finished);
    if (!finished) return;

    setText(elements.resultTitle, translate(state.status === "victory" ? "mind.victory" : "mind.defeat"));
    setText(elements.resultDetail, translate(
      state.status === "victory" ? "mind.victoryDetail" : "mind.defeatDetail",
      { level: state.level }
    ));

    const stats = elements.resultStats;
    if (stats) {
      stats.replaceChildren();
      [
        ["mind.statLevel", state.level],
        ["mind.statLives", state.lives],
        ["mind.statStars", state.stars],
        ["mind.statMistakes", state.mistakes]
      ].forEach(([key, value]) => {
        const item = document.createElement("li");
        item.textContent = translate(key, { value });
        stats.append(item);
      });
    }
    setHidden(elements.restartButton, !state.player?.isHost);
  }

  function renderControls(state) {
    const isLobby = state.status === "lobby";
    setHidden(elements.lobbyActions, !isLobby);
    if (isLobby && elements.startButton) {
      const enough = state.players.length >= state.minPlayers;
      elements.startButton.disabled = !state.player?.isHost || !enough;
      setText(elements.startHint, state.player?.isHost
        ? (enough ? "" : translate("mind.startHint"))
        : translate("mind.waitingHost"));
    }

    const playing = state.status === "playing";
    setHidden(elements.starButton, !(playing && state.stars > 0));
    setHidden(elements.pauseButton, !playing);
    setHidden(elements.inviteButton, !isLobby);

    setText(elements.lives, String(state.lives));
    setText(elements.stars, String(state.stars));
    setText(elements.level, state.maxLevel ? `${state.level}/${state.maxLevel}` : String(state.level));
    setText(elements.roomLabel, state.roomName);
  }

  return {
    setPendingCard(card) {
      pendingCard = Number(card) || 0;
    },
    render(state) {
      if (!state) return;
      renderControls(state);
      renderPlayers(state);
      renderPile(state);
      renderHand(state);
      renderBanner(state);
      renderReadyPanel(state);
      renderStarVote(state);
      renderCountdown(state);
      renderResult(state);
    },
    renderCountdown,
    applyStaticText() {
      setText(elements.eyebrow, translate("mind.eyebrow"));
      setText(elements.title, translate("mind.title"));
      setText(elements.subtitle, translate("mind.subtitle"));
      setText(elements.createTitle, translate("mind.createTitle"));
      setText(elements.joinTitle, translate("mind.joinTitle"));
      setText(elements.createHint, translate("mind.createHint"));
      setText(elements.joinHint, translate("mind.joinHint"));
      setText(elements.playersTitle, translate("mind.team"));
      setText(elements.handTitle, translate("mind.yourHand"));
      setText(elements.pileLabel, translate("mind.lastCard"));
      setText(elements.roomChipLabel, translate("mind.room"));
      setText(elements.levelWord, translate("mind.level"));
      setText(elements.homeHint, translate("mind.homeHint"));
      setText(elements.homePlayers, translate("mind.homePlayers"));
      setText(elements.startButton, translate("mind.start"));
      setText(elements.starYes, translate("mind.voteYes"));
      setText(elements.starNo, translate("mind.voteNo"));
      setText(elements.starButton, translate("mind.proposeStar"));
      setText(elements.pauseButton, translate("mind.pause"));
      setText(elements.leaveButton, translate("mind.leave"));
      setText(elements.inviteButton, translate("mind.invite"));
      setText(elements.restartButton, translate("mind.rematch"));
      setText(elements.resultHomeButton, translate("mind.backHome"));

      if (elements.createRoomName) elements.createRoomName.placeholder = translate("mind.roomNamePlaceholder");
      if (elements.createPlayerName) elements.createPlayerName.placeholder = translate("mind.playerNamePlaceholder");
      if (elements.joinRoomName) elements.joinRoomName.placeholder = translate("mind.roomNamePlaceholder");
      if (elements.joinPlayerName) elements.joinPlayerName.placeholder = translate("mind.playerNamePlaceholder");

      if (elements.navLink) {
        const label = elements.navLink.lastChild;
        if (label && label.nodeType === Node.TEXT_NODE) label.textContent = translate("nav.mind");
      }
    }
  };
}
