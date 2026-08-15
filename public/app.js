const navLinks = document.querySelectorAll(".nav-link");
const homeMenuCards = document.querySelectorAll(".home-menu-card");
const views = document.querySelectorAll(".view");
const mobileNavMoreButton = document.querySelector("#mobileNavMoreButton");
const navMenu = document.querySelector(".nav-menu");
const titleBar = document.querySelector(".title-bar");
const titleHomeLinks = document.querySelectorAll("[data-home-link]");

const form = document.querySelector("#jobForm");
const input = document.querySelector("#input");
const submitButton = document.querySelector("#submitButton");
const clearButton = document.querySelector("#clearButton");
const jobTitle = document.querySelector("#jobTitle");
const jobPercent = document.querySelector("#jobPercent");
const jobBar = document.querySelector("#jobBar");
const jobBarLabel = document.querySelector("#jobBarLabel");
const jobMessage = document.querySelector("#jobMessage");
const downloadLink = document.querySelector("#downloadLink");
const copyButton = document.querySelector("#copyButton");
const items = document.querySelector("#items");

const converterForm = document.querySelector("#converterForm");
const converterInput = document.querySelector("#converterInput");
const targetPlatform = document.querySelector("#targetPlatform");
const convertButton = document.querySelector("#convertButton");
const clearConverterButton = document.querySelector("#clearConverterButton");
const converterTitleText = document.querySelector("#converterTitleText");
const converterCount = document.querySelector("#converterCount");
const converterMessage = document.querySelector("#converterMessage");
const converterBar = document.querySelector("#converterBar");
const converterBarLabel = document.querySelector("#converterBarLabel");
const copyConvertedButton = document.querySelector("#copyConvertedButton");
const convertedItems = document.querySelector("#convertedItems");

const audioForm = document.querySelector("#audioForm");
const audioInput = document.querySelector("#audioInput");
const audioConcurrency = document.querySelector("#audioConcurrency");
const audioButton = document.querySelector("#audioButton");
const clearAudioButton = document.querySelector("#clearAudioButton");
const audioTitleText = document.querySelector("#audioTitleText");
const audioPercent = document.querySelector("#audioPercent");
const audioBar = document.querySelector("#audioBar");
const audioBarLabel = document.querySelector("#audioBarLabel");
const audioMessage = document.querySelector("#audioMessage");
const audioExpiry = document.querySelector("#audioExpiry");
const audioDownloadLink = document.querySelector("#audioDownloadLink");
const retryAudioButton = document.querySelector("#retryAudioButton");
const resumeAudioButton = document.querySelector("#resumeAudioButton");
const audioItems = document.querySelector("#audioItems");

const songSource = document.querySelector("#songSource");
const gameSetup = document.querySelector("#gameSetup");
const groupSetup = document.querySelector("#groupSetup");
const artistLoading = document.querySelector("#artistLoading");
const gameControls = document.querySelector("#gameControls");
const gamePlayArea = document.querySelector("#gamePlayArea");
const multiplayerPlayersPanel = document.querySelector("#multiplayerPlayersPanel");
const multiplayerRoomLabel = document.querySelector("#multiplayerRoomLabel");
const multiplayerPlayersList = document.querySelector("#multiplayerPlayersList");
const setupModeButtons = document.querySelectorAll("[data-setup-mode]");
const startModeButtons = document.querySelectorAll("[data-start-mode]");
const difficultyModeButtons = document.querySelectorAll("[data-difficulty-mode]");
const playerModeButtons = document.querySelectorAll("[data-player-mode]");
const multiplayerSetup = document.querySelector("#multiplayerSetup");
const createRoomName = document.querySelector("#createRoomName");
const createPlayerEmoji = document.querySelector("#createPlayerEmoji");
const createPlayerName = document.querySelector("#createPlayerName");
const joinRoomName = document.querySelector("#joinRoomName");
const joinPlayerEmoji = document.querySelector("#joinPlayerEmoji");
const joinPlayerName = document.querySelector("#joinPlayerName");
const joinRoomButton = document.querySelector("#joinRoomButton");
const multiplayerSetupMessage = document.querySelector("#multiplayerSetupMessage");
const confirmChallengeButton = document.querySelector("#confirmChallengeButton");
let instructionsButton = document.querySelector("#instructionsButton");
let createRoomButton = document.querySelector("#createRoomButton");
let setupRoomLabel = document.querySelector("#setupRoomLabel");
let inviteLinkButton = document.querySelector("#inviteLinkButton");
let inviteJoinSetup = document.querySelector("#inviteJoinSetup");
let inviteRoomLabel = document.querySelector("#inviteRoomLabel");
let invitePlayerEmoji = document.querySelector("#invitePlayerEmoji");
let invitePlayerName = document.querySelector("#invitePlayerName");
let inviteJoinButton = document.querySelector("#inviteJoinButton");
let inviteJoinMessage = document.querySelector("#inviteJoinMessage");
let hostConfigPopup = document.querySelector("#hostConfigPopup");
let hostConfigList = document.querySelector("#hostConfigList");
let hostConfigCloseButton = document.querySelector("#hostConfigCloseButton");
const confirmCategoryButton = document.querySelector("#confirmCategoryButton");
const backToChallengeButton = document.querySelector("#backToChallengeButton");
const changeChallengeButton = document.querySelector("#changeChallengeButton");
const leaderboardButton = document.querySelector("#leaderboardButton");
const activeConfig = document.querySelector("#activeConfig");
const groupButtons = document.querySelector("#groupButtons");
const gameProgress = document.querySelector("#gameProgress");
const scoreTotal = document.querySelector("#scoreTotal");
const artworkProgress = document.querySelector("#artworkProgress");
const gameArtwork = document.querySelector("#gameArtwork");
const clipLength = document.querySelector("#clipLength");
const playClipButton = document.querySelector("#playClipButton");
const skipClipButton = document.querySelector("#skipClipButton");
const clipTrack = document.querySelector("#clipTrack");
const clipTrackBase = document.querySelector("#clipTrackBase");
const clipTrackFill = document.querySelector("#clipTrackFill");
const clipTrackFillWave = document.querySelector("#clipTrackFillWave");
const clipSteps = document.querySelector("#clipSteps");
const gameRound = document.querySelector("#gameRound");
const gameStatus = document.querySelector("#gameStatus");
const guessForm = document.querySelector("#guessForm");
const guessInput = document.querySelector("#guessInput");
const guessButton = document.querySelector("#guessButton");
const showSongsButton = document.querySelector("#showSongsButton");
const suggestionList = document.querySelector("#suggestionList");
const guessList = document.querySelector("#guessList");
const resultBox = document.querySelector("#resultBox");
const resultLabel = document.querySelector("#resultLabel");
const answerText = document.querySelector("#answerText");
const watchLink = document.querySelector("#watchLink");
const shareButton = document.querySelector("#shareButton");
const nextSongButton = document.querySelector("#nextSongButton");
const restartRunButton = document.querySelector("#restartRunButton");
const summaryBox = document.querySelector("#summaryBox");
const finalScore = document.querySelector("#finalScore");
const summaryList = document.querySelector("#summaryList");
const summaryRestartButton = document.querySelector("#summaryRestartButton");
const leaderboardForm = document.querySelector("#leaderboardForm");
const leaderboardName = document.querySelector("#leaderboardName");
const leaderboardSubmitButton = document.querySelector("#leaderboardSubmitButton");
const leaderboardConfig = document.querySelector("#leaderboardConfig");
const leaderboardMessage = document.querySelector("#leaderboardMessage");
const leaderboardList = document.querySelector("#leaderboardList");
const leaderboardTicker = document.querySelector("#leaderboardTicker");
const leaderboardTickerTrack = document.querySelector("#leaderboardTickerTrack");
const leaderboardPopup = document.querySelector("#leaderboardPopup");
const leaderboardPopupConfig = document.querySelector("#leaderboardPopupConfig");
const leaderboardPopupList = document.querySelector("#leaderboardPopupList");
const leaderboardPopupCloseButton = document.querySelector("#leaderboardPopupCloseButton");
const roundPopup = document.querySelector("#roundPopup");
const popupMeta = document.querySelector("#popupMeta");
const popupCover = document.querySelector("#popupCover");
const popupTitle = document.querySelector("#popupTitle");
const popupPoints = document.querySelector("#popupPoints");
const popupSong = document.querySelector("#popupSong");
const popupTime = document.querySelector("#popupTime");
const popupWatchLink = document.querySelector("#popupWatchLink");
const popupNextButton = document.querySelector("#popupNextButton");
const popupSummaryButton = document.querySelector("#popupSummaryButton");
const popupCloseButton = document.querySelector("#popupCloseButton");
const songsPopup = document.querySelector("#songsPopup");
const songsPopupCount = document.querySelector("#songsPopupCount");
const songsPopupList = document.querySelector("#songsPopupList");
const songsPopupCloseButton = document.querySelector("#songsPopupCloseButton");
const customPlaylistPopup = document.querySelector("#customPlaylistPopup");
const customPlaylistForm = document.querySelector("#customPlaylistForm");
const customPlaylistInput = document.querySelector("#customPlaylistInput");
const customPlaylistMessage = document.querySelector("#customPlaylistMessage");
const customPlaylistLoadButton = document.querySelector("#customPlaylistLoadButton");
const customPlaylistCloseButton = document.querySelector("#customPlaylistCloseButton");
const multiplayerPodiumPopup = document.querySelector("#multiplayerPodiumPopup");
const multiplayerPodium = document.querySelector("#multiplayerPodium");
const multiplayerFinalList = document.querySelector("#multiplayerFinalList");
const multiplayerPodiumCloseButton = document.querySelector("#multiplayerPodiumCloseButton");
const impostorLobbyTitle = document.querySelector("#impostorLobbyTitle");
const impostorRoomHeader = document.querySelector("#impostorRoomHeader");
const impostorLobby = document.querySelector("#impostorLobby");
const impostorChoice = document.querySelector("#impostorChoice");
const impostorChooseCreate = document.querySelector("#impostorChooseCreate");
const impostorChooseJoin = document.querySelector("#impostorChooseJoin");
const impostorCreateForm = document.querySelector("#impostorCreateForm");
const impostorCreateRoomName = document.querySelector("#impostorCreateRoomName");
const impostorCreateEmoji = document.querySelector("#impostorCreateEmoji");
const impostorCreatePlayerName = document.querySelector("#impostorCreatePlayerName");
const impostorCreatePlayerLimit = document.querySelector("#impostorCreatePlayerLimit");
const impostorCreateimpostorCount = document.querySelector("#impostorCreateimpostorCount");
const impostorCreateHint = document.querySelector("#impostorCreateHint");
const impostorCreateWordSet = document.querySelector("#impostorCreateWordSet");
const impostorWordSetCards = document.querySelector("#impostorWordSetCards");
const impostorJoinForm = document.querySelector("#impostorJoinForm");
const impostorJoinRoomName = document.querySelector("#impostorJoinRoomName");
const impostorJoinEmoji = document.querySelector("#impostorJoinEmoji");
const impostorJoinPlayerName = document.querySelector("#impostorJoinPlayerName");
const impostorLobbyMessage = document.querySelector("#impostorLobbyMessage");
const impostorGame = document.querySelector("#impostorGame");
const impostorRound = document.querySelector("#impostorRound");
const impostorRoundLabel = document.querySelector("#impostorRoundLabel");
const impostorStartingPlayerChip = document.querySelector("#impostorStartingPlayerChip");
const impostorRoomLabel = document.querySelector("#impostorRoomLabel");
const impostorShareButton = document.querySelector("#impostorShareButton");
const impostorRestartButton = document.querySelector("#impostorRestartButton");
const impostorLeaveButton = document.querySelector("#impostorLeaveButton");
const impostorStartButton = document.querySelector("#impostorStartButton");
const impostorVoteButton = document.querySelector("#impostorVoteButton");
const impostorCircle = document.querySelector("#impostorCircle");
const impostorPlayersList = document.querySelector("#impostorPlayersList");
const impostorGameMessage = document.querySelector("#impostorGameMessage");
const impostorBackButtons = document.querySelectorAll("[data-impostor-back]");
const impostorRoleCard = document.querySelector("#impostorRoleCard");
const impostorRoleLabel = document.querySelector("#impostorRoleLabel");
const impostorSecretWord = document.querySelector("#impostorSecretWord");
const impostorHintText = document.querySelector("#impostorHintText");
const impostorVoteList = document.querySelector("#impostorVoteList");
const impostorGuessButton = document.querySelector("#impostorGuessButton");
const impostorGuessForm = document.querySelector("#impostorGuessForm");
const impostorGuessInput = document.querySelector("#impostorGuessInput");
const impostorVotePopup = document.querySelector("#impostorVotePopup");
const impostorVotePopupTitle = document.querySelector("#impostorVotePopupTitle");
const impostorVotePopupClose = document.querySelector("#impostorVotePopupClose");
const impostorEventPopup = document.querySelector("#impostorEventPopup");
const impostorEventTitle = document.querySelector("#impostorEventTitle");
const impostorEventMessage = document.querySelector("#impostorEventMessage");
const impostorEventClose = document.querySelector("#impostorEventClose");
const impostorGuessPopup = document.querySelector("#impostorGuessPopup");
const impostorGuessPopupClose = document.querySelector("#impostorGuessPopupClose");
const resistanceLobby = document.querySelector("#resistanceLobby");
const resistanceChoice = document.querySelector("#resistanceChoice");
const resistanceChooseCreate = document.querySelector("#resistanceChooseCreate");
const resistanceChooseJoin = document.querySelector("#resistanceChooseJoin");
const resistanceCreateForm = document.querySelector("#resistanceCreateForm");
const resistanceCreateRoomName = document.querySelector("#resistanceCreateRoomName");
const resistanceCreateEmoji = document.querySelector("#resistanceCreateEmoji");
const resistanceCreatePlayerName = document.querySelector("#resistanceCreatePlayerName");
const resistanceCreatePlayerLimit = document.querySelector("#resistanceCreatePlayerLimit");
const resistanceJoinForm = document.querySelector("#resistanceJoinForm");
const resistanceJoinRoomName = document.querySelector("#resistanceJoinRoomName");
const resistanceJoinEmoji = document.querySelector("#resistanceJoinEmoji");
const resistanceJoinPlayerName = document.querySelector("#resistanceJoinPlayerName");
const resistanceLobbyMessage = document.querySelector("#resistanceLobbyMessage");
const resistanceGame = document.querySelector("#resistanceGame");
const resistanceShareButton = document.querySelector("#resistanceShareButton");
const resistanceRestartButton = document.querySelector("#resistanceRestartButton");
const resistanceLeaveButton = document.querySelector("#resistanceLeaveButton");
const resistanceRoomLabel = document.querySelector("#resistanceRoomLabel");
const resistanceMissionTrack = document.querySelector("#resistanceMissionTrack");
const resistanceMissionNumber = document.querySelector("#resistanceMissionNumber");
const resistanceTeamSize = document.querySelector("#resistanceTeamSize");
const resistanceRejectCount = document.querySelector("#resistanceRejectCount");
const resistancePlayers = document.querySelector("#resistancePlayers");
const resistanceRoleCard = document.querySelector("#resistanceRoleCard");
const resistanceRoleLabel = document.querySelector("#resistanceRoleLabel");
const resistanceRoleName = document.querySelector("#resistanceRoleName");
const resistanceRoleHint = document.querySelector("#resistanceRoleHint");
const resistanceGameMessage = document.querySelector("#resistanceGameMessage");
const resistanceTeamPicker = document.querySelector("#resistanceTeamPicker");
const resistanceTeamOptions = document.querySelector("#resistanceTeamOptions");
const resistanceProposeButton = document.querySelector("#resistanceProposeButton");
const resistanceTeamVoteActions = document.querySelector("#resistanceTeamVoteActions");
const resistanceApproveButton = document.querySelector("#resistanceApproveButton");
const resistanceRejectButton = document.querySelector("#resistanceRejectButton");
const resistanceMissionActions = document.querySelector("#resistanceMissionActions");
const resistanceSuccessButton = document.querySelector("#resistanceSuccessButton");
const resistanceSabotageButton = document.querySelector("#resistanceSabotageButton");
const resistanceStartButton = document.querySelector("#resistanceStartButton");
const resistanceBackButtons = document.querySelectorAll("[data-resistance-back]");
const resistanceRoundPopup = document.querySelector("#resistanceRoundPopup");
const resistanceRoundPopupTitle = document.querySelector("#resistanceRoundPopupTitle");
const resistanceRoundPopupClose = document.querySelector("#resistanceRoundPopupClose");
const resistanceRoundPopupBody = document.querySelector("#resistanceRoundPopupBody");
const masterWordLobby = document.querySelector("#masterWordLobby");
const masterWordChoice = document.querySelector("#masterWordChoice");
const masterWordChooseCreate = document.querySelector("#masterWordChooseCreate");
const masterWordChooseJoin = document.querySelector("#masterWordChooseJoin");
const masterWordCreateForm = document.querySelector("#masterWordCreateForm");
const masterWordCreateRoomName = document.querySelector("#masterWordCreateRoomName");
const masterWordCreateEmoji = document.querySelector("#masterWordCreateEmoji");
const masterWordCreatePlayerName = document.querySelector("#masterWordCreatePlayerName");
const masterWordCreatePlayerLimit = document.querySelector("#masterWordCreatePlayerLimit");
const masterWordRoundMode = document.querySelector("#masterWordRoundMode");
const masterWordRoundLimit = document.querySelector("#masterWordRoundLimit");
const masterWordAttemptMode = document.querySelector("#masterWordAttemptMode");
const masterWordAttemptLimit = document.querySelector("#masterWordAttemptLimit");
const masterWordRoundModeButtons = document.querySelectorAll("[data-masterword-round-mode]");
const masterWordAttemptModeButtons = document.querySelectorAll("[data-masterword-attempt-mode]");
const masterWordJoinForm = document.querySelector("#masterWordJoinForm");
const masterWordJoinRoomName = document.querySelector("#masterWordJoinRoomName");
const masterWordJoinEmoji = document.querySelector("#masterWordJoinEmoji");
const masterWordJoinPlayerName = document.querySelector("#masterWordJoinPlayerName");
const masterWordLobbyMessage = document.querySelector("#masterWordLobbyMessage");
const masterWordGame = document.querySelector("#masterWordGame");
const masterWordShareButton = document.querySelector("#masterWordShareButton");
const masterWordRestartButton = document.querySelector("#masterWordRestartButton");
const masterWordLeaveButton = document.querySelector("#masterWordLeaveButton");
const masterWordRoomLabel = document.querySelector("#masterWordRoomLabel");
const masterWordPlayers = document.querySelector("#masterWordPlayers");
const masterWordRoundStatLabel = document.querySelector("#masterWordRoundStatLabel");
const masterWordRound = document.querySelector("#masterWordRound");
const masterWordScore = document.querySelector("#masterWordScore");
const masterWordRoleCard = document.querySelector("#masterWordRoleCard");
const masterWordRoleLabel = document.querySelector("#masterWordRoleLabel");
const masterWordSecretWord = document.querySelector("#masterWordSecretWord");
const masterWordRoleHint = document.querySelector("#masterWordRoleHint");
const masterWordGameMessage = document.querySelector("#masterWordGameMessage");
const masterWordClueForm = document.querySelector("#masterWordClueForm");
const masterWordClueInputs = document.querySelector("#masterWordClueInputs");
const masterWordSubmitClueButton = document.querySelector("#masterWordSubmitClueButton");
const masterWordClueBoard = document.querySelector("#masterWordClueBoard");
const masterWordValidClues = document.querySelector("#masterWordValidClues");
const masterWordRemovedClues = document.querySelector("#masterWordRemovedClues");
const masterWordGuessForm = document.querySelector("#masterWordGuessForm");
const masterWordGuessInput = document.querySelector("#masterWordGuessInput");
const masterWordGuessButton = document.querySelector("#masterWordGuessButton");
const masterWordSkipButton = document.querySelector("#masterWordSkipButton");
const masterWordStartButton = document.querySelector("#masterWordStartButton");
const masterWordBackButtons = document.querySelectorAll("[data-masterword-back]");
const masterWordResultPopup = document.querySelector("#masterWordResultPopup");
const masterWordResultCard = document.querySelector("#masterWordResultCard");
const masterWordResultTitle = document.querySelector("#masterWordResultTitle");
const masterWordResultClose = document.querySelector("#masterWordResultClose");
const masterWordResultBody = document.querySelector("#masterWordResultBody");
const scoreboardLobby = document.querySelector("#scoreboardLobby");
const scoreboardChoice = document.querySelector("#scoreboardChoice");
const scoreboardChooseCreate = document.querySelector("#scoreboardChooseCreate");
const scoreboardChooseJoin = document.querySelector("#scoreboardChooseJoin");
const scoreboardCreateForm = document.querySelector("#scoreboardCreateForm");
const scoreboardCreateRoomName = document.querySelector("#scoreboardCreateRoomName");
const scoreboardCreateHostName = document.querySelector("#scoreboardCreateHostName");
const scoreboardCreateRounds = document.querySelector("#scoreboardCreateRounds");
const scoreboardCreateGameType = document.querySelector("#scoreboardCreateGameType");
const scoreboardCreatePassword = document.querySelector("#scoreboardCreatePassword");
const scoreboardPlayersCanEdit = document.querySelector("#scoreboardPlayersCanEdit");
const scoreboardJoinPanel = document.querySelector("#scoreboardJoinPanel");
const scoreboardRefreshRoomsButton = document.querySelector("#scoreboardRefreshRoomsButton");
const scoreboardRoomList = document.querySelector("#scoreboardRoomList");
const scoreboardBackButtons = document.querySelectorAll("[data-scoreboard-back]");
const scoreboardLobbyMessage = document.querySelector("#scoreboardLobbyMessage");
const scoreboardGame = document.querySelector("#scoreboardGame");
const scoreboardRoomLabel = document.querySelector("#scoreboardRoomLabel");
const scoreboardModeLabel = document.querySelector("#scoreboardModeLabel");
const scoreboardShareButton = document.querySelector("#scoreboardShareButton");
const scoreboardViewerLogButton = document.querySelector("#scoreboardViewerLogButton");
const scoreboardHistoryButton = document.querySelector("#scoreboardHistoryButton");
const scoreboardSettingsButton = document.querySelector("#scoreboardSettingsButton");
const scoreboardManagePlayersButton = document.querySelector("#scoreboardManagePlayersButton");
const scoreboardAddRoundButton = document.querySelector("#scoreboardAddRoundButton");
const scoreboardRoundNavigation = document.querySelector("#scoreboardRoundNavigation");
const scoreboardPreviousRoundButton = document.querySelector("#scoreboardPreviousRoundButton");
const scoreboardNextRoundButton = document.querySelector("#scoreboardNextRoundButton");
const scoreboardSortOrderButton = document.querySelector("#scoreboardSortOrderButton");
const scoreboardResetButton = document.querySelector("#scoreboardResetButton");
const scoreboardFinishButton = document.querySelector("#scoreboardFinishButton");
const scoreboardLeaveButton = document.querySelector("#scoreboardLeaveButton");
const scoreboardGameMessage = document.querySelector("#scoreboardGameMessage");
const scoreboardTable = document.querySelector("#scoreboardTable");
const scoreboardTableHead = document.querySelector("#scoreboardTableHead");
const scoreboardTableBody = document.querySelector("#scoreboardTableBody");
const scoreboardEmptyState = document.querySelector("#scoreboardEmptyState");
const scoreboardSettingsPopup = document.querySelector("#scoreboardSettingsPopup");
const scoreboardSettingsClose = document.querySelector("#scoreboardSettingsClose");
const scoreboardLogButton = document.querySelector("#scoreboardLogButton");
const scoreboardLogPopup = document.querySelector("#scoreboardLogPopup");
const scoreboardLogClose = document.querySelector("#scoreboardLogClose");
const scoreboardLogList = document.querySelector("#scoreboardLogList");
const scoreboardJoinPopup = document.querySelector("#scoreboardJoinPopup");
const scoreboardJoinPopupTitle = document.querySelector("#scoreboardJoinPopupTitle");
const scoreboardJoinPopupClose = document.querySelector("#scoreboardJoinPopupClose");
const scoreboardSpectateButton = document.querySelector("#scoreboardSpectateButton");
const scoreboardNicknameJoinForm = document.querySelector("#scoreboardNicknameJoinForm");
const scoreboardJoinNickname = document.querySelector("#scoreboardJoinNickname");
const scoreboardJoinPasswordField = document.querySelector("#scoreboardJoinPasswordField");
const scoreboardJoinPassword = document.querySelector("#scoreboardJoinPassword");
const scoreboardJoinMessage = document.querySelector("#scoreboardJoinMessage");
const scoreboardPlayersPopup = document.querySelector("#scoreboardPlayersPopup");
const scoreboardPlayersForm = document.querySelector("#scoreboardPlayersForm");
const scoreboardPlayersPopupClose = document.querySelector("#scoreboardPlayersPopupClose");
const scoreboardPlayerCountField = document.querySelector("#scoreboardPlayerCountField");
const scoreboardPlayerCount = document.querySelector("#scoreboardPlayerCount");
const scoreboardPlayerNameFields = document.querySelector("#scoreboardPlayerNameFields");
const scoreboardAddPlayerButton = document.querySelector("#scoreboardAddPlayerButton");
const scoreboardCellPopup = document.querySelector("#scoreboardCellPopup");
const scoreboardCellForm = document.querySelector("#scoreboardCellForm");
const scoreboardCellPopupTitle = document.querySelector("#scoreboardCellPopupTitle");
const scoreboardCellPopupClose = document.querySelector("#scoreboardCellPopupClose");
const scoreboardCellScore = document.querySelector("#scoreboardCellScore");
const scoreboardCellRoleField = document.querySelector("#scoreboardCellRoleField");
const scoreboardCellRole = document.querySelector("#scoreboardCellRole");
const scoreboardClearCellButton = document.querySelector("#scoreboardClearCellButton");
const scoreboardPlayerPopup = document.querySelector("#scoreboardPlayerPopup");
const scoreboardPlayerForm = document.querySelector("#scoreboardPlayerForm");
const scoreboardPlayerPopupTitle = document.querySelector("#scoreboardPlayerPopupTitle");
const scoreboardPlayerPopupClose = document.querySelector("#scoreboardPlayerPopupClose");
const scoreboardPlayerNickname = document.querySelector("#scoreboardPlayerNickname");
const scoreboardPlayerScores = document.querySelector("#scoreboardPlayerScores");
const scoreboardPlayerRoleHistorySection = document.querySelector("#scoreboardPlayerRoleHistorySection");
const scoreboardPlayerRoleHistory = document.querySelector("#scoreboardPlayerRoleHistory");
const scoreboardDeletePlayerButton = document.querySelector("#scoreboardDeletePlayerButton");
const scoreboardPlayerDetailsPopup = document.querySelector("#scoreboardPlayerDetailsPopup");
const scoreboardPlayerDetailsTitle = document.querySelector("#scoreboardPlayerDetailsTitle");
const scoreboardPlayerDetailsClose = document.querySelector("#scoreboardPlayerDetailsClose");
const scoreboardPlayerDetailsRoles = document.querySelector("#scoreboardPlayerDetailsRoles");
const scoreboardRoundPopup = document.querySelector("#scoreboardRoundPopup");
const scoreboardRoundForm = document.querySelector("#scoreboardRoundForm");
const scoreboardRoundPopupTitle = document.querySelector("#scoreboardRoundPopupTitle");
const scoreboardRoundPopupClose = document.querySelector("#scoreboardRoundPopupClose");
const scoreboardRoundScoreControls = document.querySelector("#scoreboardRoundScoreControls");
const scoreboardRoundAmount = document.querySelector("#scoreboardRoundAmount");
const scoreboardBulkRoleControls = document.querySelector("#scoreboardBulkRoleControls");
const scoreboardBulkCrewButton = document.querySelector("#scoreboardBulkCrewButton");
const scoreboardBulkTraitorButton = document.querySelector("#scoreboardBulkTraitorButton");
const scoreboardRoundSelectionFieldset = document.querySelector("#scoreboardRoundSelectionFieldset");
const scoreboardRoundPlayerList = document.querySelector("#scoreboardRoundPlayerList");
const scoreboardTraitorsRoundSection = document.querySelector("#scoreboardTraitorsRoundSection");
const scoreboardRoundWinnerFieldset = document.querySelector("#scoreboardRoundWinnerFieldset");
const scoreboardRoundRoleSummary = document.querySelector("#scoreboardRoundRoleSummary");
const scoreboardSaveRoundWinnerButton = document.querySelector("#scoreboardSaveRoundWinnerButton");
const scoreboardSelectAllPlayers = document.querySelector("#scoreboardSelectAllPlayers");
const scoreboardClearPlayerSelection = document.querySelector("#scoreboardClearPlayerSelection");
const scoreboardDeleteRoundButton = document.querySelector("#scoreboardDeleteRoundButton");
const scoreboardRoundEditActions = document.querySelector("#scoreboardRoundEditActions");
const scoreboardConfirmPopup = document.querySelector("#scoreboardConfirmPopup");
const scoreboardConfirmClose = document.querySelector("#scoreboardConfirmClose");
const scoreboardCancelResetButton = document.querySelector("#scoreboardCancelResetButton");
const scoreboardConfirmResetButton = document.querySelector("#scoreboardConfirmResetButton");
const scoreboardPodiumPopup = document.querySelector("#scoreboardPodiumPopup");
const scoreboardPodium = document.querySelector("#scoreboardPodium");
const scoreboardFinalList = document.querySelector("#scoreboardFinalList");
const scoreboardPodiumClose = document.querySelector("#scoreboardPodiumClose");
const scoreboardNewGameButton = document.querySelector("#scoreboardNewGameButton");
const scoreboardNextGameButton = document.querySelector("#scoreboardNextGameButton");
const scoreboardFinishPopup = document.querySelector("#scoreboardFinishPopup");
const scoreboardFinishPopupClose = document.querySelector("#scoreboardFinishPopupClose");
const scoreboardFinishCurrentButton = document.querySelector("#scoreboardFinishCurrentButton");
const scoreboardFinishAllButton = document.querySelector("#scoreboardFinishAllButton");
const scoreboardHistoryPopup = document.querySelector("#scoreboardHistoryPopup");
const scoreboardHistoryClose = document.querySelector("#scoreboardHistoryClose");
const scoreboardHistoryTable = document.querySelector("#scoreboardHistoryTable");
const languageSelector = document.querySelector("#languageSelector");
const languageButton = document.querySelector("#languageButton");
const languageMenu = document.querySelector("#languageMenu");
const currentLanguageFlag = document.querySelector("[data-current-language-flag]");
const languageOptionButtons = document.querySelectorAll("[data-language-option]");

const CLIP_STEPS = {
  normal: [0.5, 1, 2, 4, 8, 16],
  pro: [0.2, 0.4, 0.8, 1.5, 3, 5]
};
const SCORE_STEPS = [100, 80, 60, 40, 20, 10];
const RUN_LENGTH = 10;
const MULTIPLAYER_EMOJIS = ["🎧", "🎸", "🥭", "🔥", "⭐", "🚀", "👾", "🪩", "🎤", "🏆", "💿", "🕺"];
const impostor_EMOJIS = ["🕵️", "🎭", "🧩", "🔎", "🎩", "😎", "🤓", "👻", "🤖", "🦄", "🌈", "⚡", "🍕", "🎲", "⭐", "🔥"];
const RESISTANCE_EMOJIS = ["🕶️", "📡", "🧨", "🗝️", "🧭", "📻", "🛡️", "⚙️", "🧬", "🚧", "🕯️", "🗡️"];
const MASTER_WORD_EMOJIS = ["\uD83E\uDDE0", "\uD83D\uDCA1", "\uD83D\uDCDD", "\uD83D\uDD0E", "\uD83E\uDDE9", "\uD83D\uDCDA", "\u2728", "\uD83C\uDFAF", "\uD83C\uDF1F", "\uD83D\uDD14", "\uD83C\uDFA8", "\uD83D\uDE80"];
const impostor_ALARM_MS = 2050;
const impostor_ORBIT_MS = 4400;
const impostor_ACTION_FLASH_MS = 760;
const DAILY_STORAGE_PREFIX = "songless-daily:";
const CLIP_WAVE_PATTERN = [
  0.22, 0.34, 0.5, 0.28, 0.66, 0.42, 0.74, 0.38, 0.58, 0.3,
  0.82, 0.48, 0.7, 0.26, 0.54, 0.36, 0.9, 0.44, 0.62, 0.32,
  0.76, 0.4, 0.68, 0.24, 0.52, 0.46, 0.84, 0.35, 0.6, 0.3,
  0.72, 0.5, 0.64, 0.27, 0.56, 0.39, 0.86, 0.43, 0.58, 0.31
];
const LANGUAGE_STORAGE_KEY = "roulos-music-language";
const DEFAULT_LANGUAGE = "es";
const SUPPORTED_LANGUAGES = ["ca", "es", "en"];
const CATEGORY_AUDIO_PATH = "/audio/Categorias/";
const CATEGORY_AUDIO_FILES = new Map([
  ["30-aniversario", "30 aniversario.ogg"],
  ["daftpunk", "Daft Punk.ogg"],
  ["djkraus", "DJ Kraus.ogg"],
  ["espanolo", "Espanolo.ogg"],
  ["shadow", "Shadow Records.ogg"],
  ["skrillex", "Skrillex.ogg"]
]);
const IMPOSTOR_WORD_SET_META = {
  general: { icon: "?", count: 48 },
  celebrities: { icon: "\u2605", count: 115 }
};
const GAME_ENTRY_AUDIO_FILES = ["/audio/GAME_ENTRY_1.ogg", "/audio/GAME_ENTRY_2.ogg"];
const FAIL_AUDIO_FILES = ["/audio/FAIL_1.ogg", "/audio/FAIL_2.ogg", "/audio/FAIL_3.ogg"];
const SUCCESS_AUDIO_FILES = [
  "/audio/SUCCESS_1.ogg",
  "/audio/SUCCESS_2.ogg",
  "/audio/SUCCESS_3.ogg",
  "/audio/SUCCESS_4.ogg",
  "/audio/SUCCESS_5.ogg"
];
const TRANSLATIONS = {
  ca: {
    "aria.appTitle": "Títol de l'aplicació",
    "aria.mainMenu": "Menú principal",
    "aria.language": "Canviar idioma",
    "app.tagline": "Jocs amb energia de mango",
    "nav.generator": "Links YouTube",
    "nav.converter": "Convertidor de playlists",
    "nav.audio": "Descarregador d'àudio",
    "nav.game": "MANGOless game",
    "nav.impostor": "impostor",
    "common.back": "Torna",
    "common.clear": "Neteja",
    "common.close": "Tanca",
    "common.copy": "Copia",
    "common.copied": "Copiat",
    "common.copyCsv": "Copia CSV",
    "common.copyLinks": "Copia enllaços",
    "common.download": "Descarrega {name}",
    "common.job": "Feina {id}",
    "common.pts": "{count} pts",
    "common.progress": "Progrés",
    "common.title": "Títol",
    "common.youtubeLink": "Enllaç de YouTube",
    "generator.title": "Generador d'enllaços de YouTube",
    "generator.subtitle": "Crea un CSV amb títol i enllaç a partir d'URLs, cançons i cerques d'àlbums.",
    "generator.inputLabel": "URLs o cerques",
    "generator.generate": "Genera",
    "generator.csvExport": "Exportació CSV",
    "generator.csvResult": "Resultat CSV",
    "generator.generatedLinks": "Enllaços generats",
    "generator.noJob": "Cap feina",
    "generator.queueing": "A la cua",
    "generator.waiting": "Esperant entrada.",
    "generator.jobFailed": "La feina ha fallat",
    "generator.disconnected": "Desconnectat",
    "converter.title": "Convertidor de playlists",
    "converter.subtitle": "Converteix pistes de playlists entre Spotify i YouTube.",
    "converter.inputLabel": "URL de playlist, pista o vídeo",
    "converter.target": "Converteix a",
    "converter.convert": "Converteix",
    "converter.heading": "Conversió",
    "converter.results": "Resultats",
    "converter.track": "Pista",
    "converter.convertedLink": "Enllaç convertit",
    "converter.convertedLinks": "Enllaços convertits",
    "converter.noConversion": "Cap conversió",
    "converter.converting": "Convertint playlist",
    "converter.failed": "La conversió ha fallat",
    "converter.ready": "Conversió preparada",
    "converter.waiting": "Esperant playlist.",
    "converter.links": "{count} enllaços",
    "converter.to": "{source} a {target}",
    "audio.title": "Descarregador d'àudio",
    "audio.subtitle": "Crea una descàrrega temporal MP3 des d'un vídeo públic de YouTube.",
    "audio.inputLabel": "URLs o cerques",
    "audio.generate": "Genera .MP3",
    "audio.concurrency": "Concurrència MP3",
    "audio.concurrencyHint": "Es recomana deixar-ho en 2.",
    "audio.zipExport": "Exportació ZIP",
    "audio.processingStatus": "Estat del processament d'àudio",
    "audio.noAudio": "Cap àudio",
    "audio.audioJob": "Feina d'àudio",
    "audio.creatingJob": "Creant feina",
    "audio.queueing": "Posant fitxers d'àudio a la cua",
    "audio.failed": "L'àudio ha fallat",
    "audio.retryFailed": "Reintenta fallits",
    "audio.retrying": "Reintentant MP3 fallits",
    "audio.resume": "Reprèn",
    "audio.resuming": "Reprenent MP3 pausats",
    "audio.waiting": "Esperant vídeos.",
    "audio.processing": "Processant àudio",
    "audio.status": "Estat",
    "audio.download": "Descarrega",
    "audio.video": "Vídeo {count}",
    "audio.paused": "Descàrregues pausades. Reprèn per continuar.",
    "audio.expired": "Les descàrregues han caducat.",
    "audio.filesExpired": "Els fitxers d'àudio han caducat",
    "audio.expiredShort": "Caducat",
    "audio.expiresIn": "Les descàrregues caduquen en {time}.",
    "audio.zip": "ZIP",
    "game.title": "MANGOless game",
    "game.sourceInitial": "Tria una categoria. Les cançons es carreguen des de YouTube.",
    "game.setupAria": "Configuració del Mangoless game",
    "game.challenge": "Repte",
    "game.daily": "Diari",
    "game.tenSongs": "10 cançons",
    "game.clipStart": "Inici del fragment",
    "game.intro": "Inici",
    "game.randomMoment": "Moment aleatori",
    "game.difficulty": "Dificultat",
    "game.difficultyNormal": "NORMAL",
    "game.difficultyPro": "PRO",
    "game.chooseArtist": "Tria categoria",
    "game.confirmCategory": "Comença",
    "game.artist": "Categoria",
    "game.artistHint": "Tria una categoria o totes juntes.",
    "game.artistsAria": "Categories",
    "game.loadingArtistSongs": "Carregant cançons de la categoria",
    "game.loading": "CARREGANT...",
    "game.controls": "Controls del joc",
    "game.score": "Puntuació",
    "game.playing": "Reproduint",
    "game.clue": "Pista",
    "game.changeChallenge": "Canvia el repte",
    "game.player": "Reproductor del fragment",
    "game.currentClip": "Fragment actual",
    "game.play": "Play",
    "game.skip": "Salta",
    "game.availableLengths": "Durades disponibles",
    "game.guessing": "Endevinar cançó",
    "game.songTitle": "Títol de la cançó",
    "game.allSongs": "Totes les cançons",
    "game.possibleSongs": "Cançons possibles",
    "game.availableSongs": "{available} disponibles de {total}",
    "game.customPlaylist": "Playlist personalitzada",
    "game.customPlaylistHint": "Enganxa l'URL d'una playlist pública de YouTube.",
    "game.customPlaylistUrl": "URL de playlist de YouTube",
    "game.loadPlaylist": "Carrega playlist",
    "game.loadingPlaylist": "Carregant playlist...",
    "game.guessPlaceholder": "Escriu el títol de la cançó",
    "game.guess": "Prova",
    "game.guesses": "Intents",
    "game.result": "Resultat",
    "game.watch": "Mira",
    "game.share": "Comparteix",
    "game.nextSong": "Cançó següent",
    "game.restart": "Reinicia",
    "game.finalScore": "Puntuació final",
    "game.playAgain": "Torna a jugar",
    "game.summary": "Resum",
    "game.players": "Jugadors",
    "game.solo": "Individual",
    "game.multiplayer": "Multijugador",
    "game.instructions": "Escoltar instruccions",
    "game.createRoom": "Crea una sala",
    "game.joinRoom": "Uneix-te a una sala",
    "game.roomName": "Nom de la sala",
    "game.roomNameLabel": "Nom de la sala",
    "game.copyInviteLink": "Copia l'enllaç d'invitació",
    "game.inviteJoinTitle": "Uneix-te a la sala",
    "game.inviteJoinHint": "Tria icona i nom de jugador.",
    "game.hostConfigTitle": "Configuració de la partida",
    "game.hostConfigHint": "L'amfitrió ha triat aquesta configuració.",
    "game.hostConfigChallenge": "Repte",
    "game.hostConfigClipStart": "Inici del fragment",
    "game.hostConfigDifficulty": "Dificultat",
    "game.hostConfigCategory": "Categoria",
    "game.playerNameShort": "Nom del jugador",
    "game.playerEmoji": "Emoji del jugador",
    "game.createRoomHint": "La sala es crearà després de triar una categoria.",
    "game.joinRoomAction": "Uneix-te a la sala",
    "game.roomAndPlayerRequired": "Escriu el nom de la sala i del jugador.",
    "game.joiningRoom": "Entrant a la sala...",
    "game.joinedRoom": "Has entrat a {name}",
    "game.roomAlreadyStarted": "La sala ja ha començat i no admet jugadors nous.",
    "game.room": "Sala",
    "game.ready": "Preparat",
    "game.disconnected": "Desconnectat",
    "game.waitingPlayersButton": "Esperant jugadors",
    "game.waitingPlayers": "Esperant els altres jugadors...",
    "game.finalPodium": "Podi final",
    "nav.more": "Més seccions",
    "game.leaderboard": "Classificació",
    "game.topTenLeaderboard": "Top 10 de la classificació",
    "game.playerName": "Nom del jugador",
    "game.saveScore": "Desa la puntuació",
    "game.savingScore": "Desant...",
    "game.scoreSaved": "Puntuació desada",
    "game.leaderboardUnavailable": "La classificació no està disponible",
    "game.couldNotSaveScore": "No s'ha pogut desar la puntuació",
    "game.noScoresYet": "Encara no hi ha puntuacions",
    "game.claimFirstPlace": "Aconsegueix el primer lloc",
    "game.allArtists": "Totes les categories",
    "game.youtubeChannel": "Canal de YouTube",
    "game.chooseChallengeStatus": "Tria Individual o Multijugador.",
    "game.chooseArtistStatus": "Tria repte, inici del fragment, dificultat i categoria.",
    "game.selectedCategory": "Categoria seleccionada: {name}.",
    "game.loadingGroup": "Carregant cançons de {name}.",
    "game.loadingSongs": "Carregant cançons.",
    "game.songsUnavailable": "Cançons no disponibles.",
    "game.songLoadFailed": "No s'han pogut carregar les cançons",
    "game.noArtistsLoaded": "No s'ha carregat cap categoria",
    "game.sourceLoaded": "{count} cançons de {channel}. Font: {source}.",
    "game.activeConfig": "{mode}, {clipStart}, {difficulty}, {group}",
    "game.songsFallback": "cançons",
    "game.songComplete": "Cançó completada",
    "game.tryOf": "Intent {current} de {total}",
    "game.randomSuffix": "{seconds} aleatori",
    "game.solved": "Resolt: {points} pts{timestamp}",
    "game.answer": "Resposta{timestamp}",
    "game.fromTimestamp": " des de {time}",
    "game.skipped": "Saltat",
    "game.skipState": "Salt",
    "game.wrongState": "Error",
    "game.songFallback": "Cançó",
    "game.solvedSummary": "{points} pts a {clip}{timestamp}",
    "game.notSolvedSummary": "0 pts, no resolta{timestamp}",
    "game.correct": "Correcte",
    "game.missed": "Fallat",
    "game.unknownSong": "Cançó desconeguda",
    "game.timestamp": "Marca de temps: {time}",
    "game.pressPlay": "Prem play.",
    "game.solvedAt": "Resolt amb {seconds}.",
    "game.noTries": "No queden intents.",
    "game.groupFallback": "Grup",
    "game.progressTen": "{group}: cançó {current}/{total}",
    "game.coverProgressTen": "Cançó {current} de {total}",
    "game.progressDaily": "{group}: diari",
    "game.youtubeUnavailable": "El reproductor de YouTube no està disponible.",
    "game.loadingClip": "Carregant fragment de {seconds}.",
    "game.typeGuess": "Escriu una resposta primer.",
    "game.alreadyTried": "Ja ho has provat.",
    "game.wrongMore": "Error. Més fragment desbloquejat.",
    "game.skippedMore": "Saltat. Més fragment desbloquejat.",
    "game.correctMessage": "Correcte.",
    "game.answerRevealed": "Resposta revelada.",
    "game.playingClip": "Reproduint fragment de {seconds}.",
    "game.heardClip": "Has escoltat {seconds}.",
    "game.youtubeEmbedBlocked": "Aquest reproductor incrustat de YouTube no es pot reproduir aquí.",
    "game.shareRunTitle": "{group} run de 10 cançons",
    "game.shareDailyTitle": "{group} diari {date}",
    "status.queued": "A la cua",
    "status.running": "En curs",
    "status.complete": "Completat",
    "status.partial": "Parcial",
    "status.failed": "Fallat",
    "status.paused": "Pausat",
    "status.expired": "Caducat",
    "link.untitled": "Sense títol",
    "error.backendMissing": "Backend de Cloudflare no configurat. Revisa la comanda de build i el desplegament de _worker.js.",
    "error.nonJson": "El backend de Cloudflare ha retornat una resposta que no és JSON. Revisa Pages Functions/Worker."
  },
  es: {
    "aria.appTitle": "Título de la aplicación",
    "aria.mainMenu": "Menú principal",
    "aria.language": "Cambiar idioma",
    "app.tagline": "Juegos con energía de mango",
    "nav.generator": "Links YouTube",
    "nav.converter": "Conversor de playlists",
    "nav.audio": "Descargador de audio",
    "nav.game": "MANGOless game",
    "nav.impostor": "impostor",
    "common.back": "Volver",
    "common.clear": "Limpiar",
    "common.close": "Cerrar",
    "common.copy": "Copiar",
    "common.copied": "Copiado",
    "common.copyCsv": "Copiar CSV",
    "common.copyLinks": "Copiar enlaces",
    "common.download": "Descargar {name}",
    "common.job": "Tarea {id}",
    "common.pts": "{count} pts",
    "common.progress": "Progreso",
    "common.title": "Título",
    "common.youtubeLink": "Enlace de YouTube",
    "generator.title": "Generador de enlaces de YouTube",
    "generator.subtitle": "Crea un CSV con título y enlace a partir de URLs, canciones y búsquedas de álbumes.",
    "generator.inputLabel": "URLs o búsquedas",
    "generator.generate": "Generar",
    "generator.csvExport": "Exportación CSV",
    "generator.csvResult": "Resultado CSV",
    "generator.generatedLinks": "Enlaces generados",
    "generator.noJob": "Sin tarea",
    "generator.queueing": "En cola",
    "generator.waiting": "Esperando entrada.",
    "generator.jobFailed": "La tarea ha fallado",
    "generator.disconnected": "Desconectado",
    "converter.title": "Conversor de playlists",
    "converter.subtitle": "Convierte pistas de playlists entre Spotify y YouTube.",
    "converter.inputLabel": "URL de playlist, pista o vídeo",
    "converter.target": "Convertir a",
    "converter.convert": "Convertir",
    "converter.heading": "Conversión",
    "converter.results": "Resultados",
    "converter.track": "Pista",
    "converter.convertedLink": "Enlace convertido",
    "converter.convertedLinks": "Enlaces convertidos",
    "converter.noConversion": "Sin conversión",
    "converter.converting": "Convirtiendo playlist",
    "converter.failed": "La conversión ha fallado",
    "converter.ready": "Conversión lista",
    "converter.waiting": "Esperando playlist.",
    "converter.links": "{count} enlaces",
    "converter.to": "{source} a {target}",
    "audio.title": "Descargador de audio",
    "audio.subtitle": "Crea una descarga temporal MP3 desde un vídeo público de YouTube.",
    "audio.inputLabel": "URLs o búsquedas",
    "audio.generate": "Generar .MP3",
    "audio.concurrency": "Concurrencia MP3",
    "audio.concurrencyHint": "Se recomienda dejarlo en 2.",
    "audio.zipExport": "Exportación ZIP",
    "audio.processingStatus": "Estado del procesamiento de audio",
    "audio.noAudio": "Sin audio",
    "audio.audioJob": "Tarea de audio",
    "audio.creatingJob": "Creando tarea",
    "audio.queueing": "Poniendo archivos de audio en cola",
    "audio.failed": "El audio ha fallado",
    "audio.retryFailed": "Reintentar fallidos",
    "audio.retrying": "Reintentando MP3 fallidos",
    "audio.resume": "Reanudar",
    "audio.resuming": "Reanudando MP3 pausados",
    "audio.waiting": "Esperando vídeos.",
    "audio.processing": "Procesando audio",
    "audio.status": "Estado",
    "audio.download": "Descarga",
    "audio.video": "Vídeo {count}",
    "audio.paused": "Descargas pausadas. Reanuda para continuar.",
    "audio.expired": "Las descargas han caducado.",
    "audio.filesExpired": "Los archivos de audio han caducado",
    "audio.expiredShort": "Caducado",
    "audio.expiresIn": "Las descargas caducan en {time}.",
    "audio.zip": "ZIP",
    "game.title": "MANGOless game",
    "game.sourceInitial": "Elige una categoría. Las canciones se cargan desde YouTube.",
    "game.setupAria": "Configuración del Mangoless game",
    "game.challenge": "Reto",
    "game.daily": "Diario",
    "game.tenSongs": "10 canciones",
    "game.clipStart": "Inicio del fragmento",
    "game.intro": "Inicio",
    "game.randomMoment": "Momento aleatorio",
    "game.difficulty": "Dificultad",
    "game.difficultyNormal": "NORMAL",
    "game.difficultyPro": "PRO",
    "game.chooseArtist": "Elige categoría",
    "game.confirmCategory": "Empezar",
    "game.artist": "Categoría",
    "game.artistHint": "Elige una categoría o todas juntas.",
    "game.artistsAria": "Categorías",
    "game.loadingArtistSongs": "Cargando canciones de la categoría",
    "game.loading": "CARGANDO...",
    "game.controls": "Controles del juego",
    "game.score": "Puntuación",
    "game.playing": "Reproduciendo",
    "game.clue": "Pista",
    "game.changeChallenge": "Cambiar reto",
    "game.player": "Reproductor del fragmento",
    "game.currentClip": "Fragmento actual",
    "game.play": "Play",
    "game.skip": "Saltar",
    "game.availableLengths": "Duraciones disponibles",
    "game.guessing": "Adivinar canción",
    "game.songTitle": "Título de la canción",
    "game.allSongs": "Todas las canciones",
    "game.possibleSongs": "Canciones posibles",
    "game.availableSongs": "{available} disponibles de {total}",
    "game.customPlaylist": "Playlist personalizada",
    "game.customPlaylistHint": "Pega la URL de una playlist pública de YouTube.",
    "game.customPlaylistUrl": "URL de playlist de YouTube",
    "game.loadPlaylist": "Cargar playlist",
    "game.loadingPlaylist": "Cargando playlist...",
    "game.guessPlaceholder": "Escribe el título de la canción",
    "game.guess": "Probar",
    "game.guesses": "Intentos",
    "game.result": "Resultado",
    "game.watch": "Ver",
    "game.share": "Compartir",
    "game.nextSong": "Siguiente canción",
    "game.restart": "Reiniciar",
    "game.finalScore": "Puntuación final",
    "game.playAgain": "Jugar otra vez",
    "game.summary": "Resumen",
    "game.players": "Jugadores",
    "game.solo": "Individual",
    "game.multiplayer": "Multijugador",
    "game.instructions": "Escuchar instrucciones",
    "game.createRoom": "Crear sala",
    "game.joinRoom": "Unirse a una sala",
    "game.roomName": "Nombre de la sala",
    "game.roomNameLabel": "Nombre de la sala",
    "game.copyInviteLink": "Copiar enlace de invitación",
    "game.inviteJoinTitle": "Unirse a la sala",
    "game.inviteJoinHint": "Elige icono y nombre de jugador.",
    "game.hostConfigTitle": "Configuración de la partida",
    "game.hostConfigHint": "El anfitrión ha elegido esta configuración.",
    "game.hostConfigChallenge": "Reto",
    "game.hostConfigClipStart": "Inicio del fragmento",
    "game.hostConfigDifficulty": "Dificultad",
    "game.hostConfigCategory": "Categoría",
    "game.playerNameShort": "Nombre del jugador",
    "game.playerEmoji": "Emoji del jugador",
    "game.createRoomHint": "La sala se creará después de elegir una categoría.",
    "game.joinRoomAction": "Unirse a la sala",
    "game.roomAndPlayerRequired": "Escribe el nombre de la sala y del jugador.",
    "game.joiningRoom": "Uniéndose a la sala...",
    "game.joinedRoom": "Te has unido a {name}",
    "game.roomAlreadyStarted": "La sala ya ha empezado y no admite jugadores nuevos.",
    "game.room": "Sala",
    "game.ready": "Listo",
    "game.disconnected": "Desconectado",
    "game.waitingPlayersButton": "Esperando jugadores",
    "game.waitingPlayers": "Esperando a los demás jugadores...",
    "game.finalPodium": "Podio final",
    "nav.more": "Más secciones",
    "game.leaderboard": "Clasificación",
    "game.topTenLeaderboard": "Top 10 de la clasificación",
    "game.playerName": "Nombre del jugador",
    "game.saveScore": "Guardar puntuación",
    "game.savingScore": "Guardando...",
    "game.scoreSaved": "Puntuación guardada",
    "game.leaderboardUnavailable": "La clasificación no está disponible",
    "game.couldNotSaveScore": "No se ha podido guardar la puntuación",
    "game.noScoresYet": "Todavía no hay puntuaciones",
    "game.claimFirstPlace": "Consigue el primer puesto",
    "game.allArtists": "Todas las categorías",
    "game.youtubeChannel": "Canal de YouTube",
    "game.chooseChallengeStatus": "Elige Individual o Multijugador.",
    "game.chooseArtistStatus": "Elige reto, inicio del fragmento, dificultad y categoria.",
    "game.selectedCategory": "Categoría seleccionada: {name}.",
    "game.loadingGroup": "Cargando canciones de {name}.",
    "game.loadingSongs": "Cargando canciones.",
    "game.songsUnavailable": "Canciones no disponibles.",
    "game.songLoadFailed": "No se han podido cargar las canciones",
    "game.noArtistsLoaded": "No se ha cargado ninguna categoría",
    "game.sourceLoaded": "{count} canciones de {channel}. Fuente: {source}.",
    "game.activeConfig": "{mode}, {clipStart}, {difficulty}, {group}",
    "game.songsFallback": "canciones",
    "game.songComplete": "Canción completada",
    "game.tryOf": "Intento {current} de {total}",
    "game.randomSuffix": "{seconds} aleatorio",
    "game.solved": "Resuelta: {points} pts{timestamp}",
    "game.answer": "Respuesta{timestamp}",
    "game.fromTimestamp": " desde {time}",
    "game.skipped": "Saltada",
    "game.skipState": "Salto",
    "game.wrongState": "Error",
    "game.songFallback": "Canción",
    "game.solvedSummary": "{points} pts en {clip}{timestamp}",
    "game.notSolvedSummary": "0 pts, no resuelta{timestamp}",
    "game.correct": "Correcto",
    "game.missed": "Fallado",
    "game.unknownSong": "Canción desconocida",
    "game.timestamp": "Marca de tiempo: {time}",
    "game.pressPlay": "Pulsa play.",
    "game.solvedAt": "Resuelta con {seconds}.",
    "game.noTries": "No quedan intentos.",
    "game.groupFallback": "Grupo",
    "game.progressTen": "{group}: canción {current}/{total}",
    "game.coverProgressTen": "Canción {current} de {total}",
    "game.progressDaily": "{group}: diario",
    "game.youtubeUnavailable": "El reproductor de YouTube no está disponible.",
    "game.loadingClip": "Cargando fragmento de {seconds}.",
    "game.typeGuess": "Escribe una respuesta primero.",
    "game.alreadyTried": "Ya lo has probado.",
    "game.wrongMore": "Error. Más fragmento desbloqueado.",
    "game.skippedMore": "Saltada. Más fragmento desbloqueado.",
    "game.correctMessage": "Correcto.",
    "game.answerRevealed": "Respuesta revelada.",
    "game.playingClip": "Reproduciendo fragmento de {seconds}.",
    "game.heardClip": "Has escuchado {seconds}.",
    "game.youtubeEmbedBlocked": "Este reproductor incrustado de YouTube no se puede reproducir aquí.",
    "game.shareRunTitle": "{group} run de 10 canciones",
    "game.shareDailyTitle": "{group} diario {date}",
    "status.queued": "En cola",
    "status.running": "En curso",
    "status.complete": "Completado",
    "status.partial": "Parcial",
    "status.failed": "Fallado",
    "status.paused": "Pausado",
    "status.expired": "Caducado",
    "link.untitled": "Sin título",
    "error.backendMissing": "Backend de Cloudflare no configurado. Revisa el comando de build y el despliegue de _worker.js.",
    "error.nonJson": "El backend de Cloudflare ha devuelto una respuesta que no es JSON. Revisa Pages Functions/Worker."
  },
  en: {
    "aria.appTitle": "Application title",
    "aria.mainMenu": "Main menu",
    "aria.language": "Change language",
    "app.tagline": "Mango-powered games",
    "nav.generator": "YouTube links",
    "nav.converter": "Playlist converter",
    "nav.audio": "Audio downloader",
    "nav.game": "MANGOless game",
    "nav.impostor": "impostor",
    "common.back": "Back",
    "common.clear": "Clear",
    "common.close": "Close",
    "common.copy": "Copy",
    "common.copied": "Copied",
    "common.copyCsv": "Copy CSV",
    "common.copyLinks": "Copy Links",
    "common.download": "Download {name}",
    "common.job": "Job {id}",
    "common.pts": "{count} pts",
    "common.progress": "Progress",
    "common.title": "Title",
    "common.youtubeLink": "YouTube Link",
    "generator.title": "YouTube links generator",
    "generator.subtitle": "Build title/link CSV from URLs, songs, and album searches.",
    "generator.inputLabel": "URLs or searches",
    "generator.generate": "Generate",
    "generator.csvExport": "CSV export",
    "generator.csvResult": "CSV result",
    "generator.generatedLinks": "Generated links",
    "generator.noJob": "No job",
    "generator.queueing": "Queueing",
    "generator.waiting": "Waiting for input.",
    "generator.jobFailed": "Job failed",
    "generator.disconnected": "Disconnected",
    "converter.title": "Playlist converter",
    "converter.subtitle": "Convert playlist tracks between Spotify and YouTube.",
    "converter.inputLabel": "Playlist, track, or video URL",
    "converter.target": "Convert to",
    "converter.convert": "Convert",
    "converter.heading": "Conversion",
    "converter.results": "Results",
    "converter.track": "Track",
    "converter.convertedLink": "Converted Link",
    "converter.convertedLinks": "Converted links",
    "converter.noConversion": "No conversion",
    "converter.converting": "Converting playlist",
    "converter.failed": "Conversion failed",
    "converter.ready": "Conversion ready",
    "converter.waiting": "Waiting for playlist.",
    "converter.links": "{count} links",
    "converter.to": "{source} to {target}",
    "audio.title": "Audio downloader",
    "audio.subtitle": "Create a temporary MP3 download from a public YouTube video.",
    "audio.inputLabel": "URLs or searches",
    "audio.generate": "Generate .MP3s",
    "audio.concurrency": "MP3 concurrency",
    "audio.concurrencyHint": "Default 2 is recommended.",
    "audio.zipExport": "ZIP export",
    "audio.processingStatus": "Audio processing status",
    "audio.noAudio": "No audio",
    "audio.audioJob": "Audio job",
    "audio.creatingJob": "Creating job",
    "audio.queueing": "Queueing audio files",
    "audio.failed": "Audio failed",
    "audio.retryFailed": "Retry failed",
    "audio.retrying": "Retrying failed MP3 files",
    "audio.resume": "Resume",
    "audio.resuming": "Resuming paused MP3 files",
    "audio.waiting": "Waiting for videos.",
    "audio.processing": "Processing audio",
    "audio.status": "Status",
    "audio.download": "Download",
    "audio.video": "Video {count}",
    "audio.paused": "Downloads paused. Resume to continue.",
    "audio.expired": "Downloads expired.",
    "audio.filesExpired": "Audio files expired",
    "audio.expiredShort": "Expired",
    "audio.expiresIn": "Downloads expire in {time}.",
    "audio.zip": "ZIP",
    "game.title": "MANGOless game",
    "game.sourceInitial": "Choose a category. Songs load from YouTube.",
    "game.setupAria": "Mangoless game setup",
    "game.challenge": "Challenge",
    "game.daily": "Daily",
    "game.tenSongs": "10 songs",
    "game.clipStart": "Clip start",
    "game.intro": "Intro",
    "game.randomMoment": "Random moment",
    "game.difficulty": "Difficulty",
    "game.difficultyNormal": "NORMAL",
    "game.difficultyPro": "PRO",
    "game.chooseArtist": "Choose category",
    "game.confirmCategory": "Start",
    "game.artist": "Category",
    "game.artistHint": "Pick one category or all together.",
    "game.artistsAria": "Categories",
    "game.loadingArtistSongs": "Loading category songs",
    "game.loading": "LOADING...",
    "game.controls": "Game controls",
    "game.score": "Score",
    "game.playing": "Playing",
    "game.clue": "Clue",
    "game.changeChallenge": "Change challenge",
    "game.player": "Song clip player",
    "game.currentClip": "Current clip",
    "game.play": "Play",
    "game.skip": "Skip",
    "game.availableLengths": "Available clip lengths",
    "game.guessing": "Song guessing",
    "game.songTitle": "Song title",
    "game.allSongs": "All songs",
    "game.possibleSongs": "Possible songs",
    "game.availableSongs": "{available} available of {total}",
    "game.customPlaylist": "Custom playlist",
    "game.customPlaylistHint": "Paste a public YouTube playlist URL.",
    "game.customPlaylistUrl": "YouTube playlist URL",
    "game.loadPlaylist": "Load playlist",
    "game.loadingPlaylist": "Loading playlist...",
    "game.guessPlaceholder": "Type song title",
    "game.guess": "Guess",
    "game.guesses": "Guesses",
    "game.result": "Result",
    "game.watch": "Watch",
    "game.share": "Share",
    "game.nextSong": "Next song",
    "game.restart": "Restart",
    "game.finalScore": "Final score",
    "game.playAgain": "Play again",
    "game.summary": "Summary",
    "game.players": "Players",
    "game.solo": "Solo",
    "game.multiplayer": "Multiplayer",
    "game.instructions": "Listen to instructions",
    "game.createRoom": "Create room",
    "game.joinRoom": "Join room",
    "game.roomName": "Room name",
    "game.roomNameLabel": "Room name",
    "game.copyInviteLink": "Copy invite link",
    "game.inviteJoinTitle": "Join room",
    "game.inviteJoinHint": "Choose icon and player name.",
    "game.hostConfigTitle": "Game setup",
    "game.hostConfigHint": "Host chose this configuration.",
    "game.hostConfigChallenge": "Challenge",
    "game.hostConfigClipStart": "Clip start",
    "game.hostConfigDifficulty": "Difficulty",
    "game.hostConfigCategory": "Category",
    "game.playerNameShort": "Player name",
    "game.playerEmoji": "Player emoji",
    "game.createRoomHint": "The room will be created after choosing a category.",
    "game.joinRoomAction": "Join room",
    "game.roomAndPlayerRequired": "Add room name and player name.",
    "game.joiningRoom": "Joining room...",
    "game.joinedRoom": "Joined {name}",
    "game.roomAlreadyStarted": "The room has already started and is closed to new players.",
    "game.room": "Room",
    "game.ready": "Ready",
    "game.disconnected": "Disconnected",
    "game.waitingPlayersButton": "Waiting for players",
    "game.waitingPlayers": "Waiting for the other players...",
    "game.finalPodium": "Final podium",
    "nav.more": "More sections",
    "game.leaderboard": "Leaderboard",
    "game.topTenLeaderboard": "Top 10 leaderboard",
    "game.playerName": "Player name",
    "game.saveScore": "Save score",
    "game.savingScore": "Saving...",
    "game.scoreSaved": "Score saved",
    "game.leaderboardUnavailable": "Leaderboard unavailable",
    "game.couldNotSaveScore": "Could not save score",
    "game.noScoresYet": "No scores yet",
    "game.claimFirstPlace": "Claim first place",
    "game.allArtists": "All categories",
    "game.youtubeChannel": "YouTube channel",
    "game.chooseChallengeStatus": "Choose Solo or Multiplayer.",
    "game.chooseArtistStatus": "Choose challenge, clip start, difficulty, and category.",
    "game.selectedCategory": "Selected category: {name}.",
    "game.loadingGroup": "Loading {name} songs.",
    "game.loadingSongs": "Loading songs.",
    "game.songsUnavailable": "Songs unavailable.",
    "game.songLoadFailed": "Song load failed",
    "game.noArtistsLoaded": "No categories loaded",
    "game.sourceLoaded": "{count} songs from {channel}. Source: {source}.",
    "game.activeConfig": "{mode}, {clipStart}, {difficulty}, {group}",
    "game.songsFallback": "songs",
    "game.songComplete": "Song complete",
    "game.tryOf": "Try {current} of {total}",
    "game.randomSuffix": "{seconds} random",
    "game.solved": "Solved: {points} pts{timestamp}",
    "game.answer": "Answer{timestamp}",
    "game.fromTimestamp": " from {time}",
    "game.skipped": "Skipped",
    "game.skipState": "Skip",
    "game.wrongState": "Wrong",
    "game.songFallback": "Song",
    "game.solvedSummary": "{points} pts at {clip}{timestamp}",
    "game.notSolvedSummary": "0 pts, not solved{timestamp}",
    "game.correct": "Correct",
    "game.missed": "Missed",
    "game.unknownSong": "Unknown song",
    "game.timestamp": "Timestamp: {time}",
    "game.pressPlay": "Press play.",
    "game.solvedAt": "Solved at {seconds}.",
    "game.noTries": "No tries left.",
    "game.groupFallback": "Group",
    "game.progressTen": "{group}: song {current}/{total}",
    "game.coverProgressTen": "Song {current} of {total}",
    "game.progressDaily": "{group}: daily",
    "game.youtubeUnavailable": "YouTube player unavailable.",
    "game.loadingClip": "Loading {seconds} clip.",
    "game.typeGuess": "Type guess first.",
    "game.alreadyTried": "Already tried.",
    "game.wrongMore": "Wrong. More clip unlocked.",
    "game.skippedMore": "Skipped. More clip unlocked.",
    "game.correctMessage": "Correct.",
    "game.answerRevealed": "Answer revealed.",
    "game.playingClip": "Playing {seconds} clip.",
    "game.heardClip": "Heard {seconds}.",
    "game.youtubeEmbedBlocked": "This YouTube embed cannot play here.",
    "game.shareRunTitle": "{group} 10-song run",
    "game.shareDailyTitle": "{group} daily {date}",
    "status.queued": "Queued",
    "status.running": "Running",
    "status.complete": "Complete",
    "status.partial": "Partial",
    "status.failed": "Failed",
    "status.paused": "Paused",
    "status.expired": "Expired",
    "link.untitled": "Untitled",
    "error.backendMissing": "Cloudflare backend not configured. Check build command and _worker.js deployment.",
    "error.nonJson": "Cloudflare backend returned non-JSON response. Check Pages Functions/Worker deployment."
  }
};
const IMPOSTOR_TRANSLATIONS = {
  ca: {
    "home.subtitle": "Tria a quina seccio vols anar.",
    "home.gameHint": "Repte musical",
    "home.impostorHint": "Paraula secreta i votacions",
    "home.resistanceHint": "Missions, espies i vots secrets",
    "home.gamePlayers": "Min. 1 jugador",
    "home.impostorPlayers": "Min. 3 jugadors",
    "home.resistancePlayers": "Min. 5 jugadors",
    "home.masterWordHint": "Pistes secretes i paraules cooperatives",
    "home.masterWordPlayers": "Min. 3 jugadors",
    "home.generatorHint": "Crea llistes CSV",
    "home.converterHint": "Converteix playlists",
    "home.audioHint": "Eines MP3 locals",
    "impostor.title": "Impostor GAME",
    "impostor.subtitle": "Crea o entra en una sala, amaga la paraula secreta i vota sospitosos.",
    "impostor.createRoom": "Crea sala",
    "impostor.joinRoom": "Entra a sala",
    "impostor.roomName": "Nom de la sala",
    "impostor.yourName": "El teu nom",
    "impostor.playerEmoji": "Emoji del jugador",
    "impostor.players": "Jugadors",
    "impostor.impostors": "Impostors",
    "impostor.wordSet": "Llista de paraules",
    "impostor.generalWords": "Paraules generals",
    "impostor.celebritiesWords": "Personatges i celebritats",
    "impostor.wordSetHint": "Tria una llista per aquesta sala.",
    "impostor.wordCount": "{count} paraules",
    "impostor.hintForImpostors": "Pista per als impostors",
    "impostor.room": "Sala",
    "impostor.roomLabel": "SALA: {name}",
    "impostor.shareLink": "Copia enllac",
    "impostor.leaveMenu": "Torna",
    "impostor.restart": "Reinicia",
    "impostor.round": "Ronda",
    "impostor.lobby": "Sala",
    "impostor.result": "Resultat",
    "impostor.vote": "Vota",
    "impostor.yourRole": "El teu rol",
    "impostor.waiting": "Esperant...",
    "impostor.guessTitle": "Prova de l'impostor",
    "impostor.secretWord": "Paraula secreta",
    "impostor.guessWord": "Prova paraula",
    "impostor.notice": "Avís",
    "impostor.waitingPlayers": "Esperant jugadors: {current}/{total}. La partida comenca sola quan la sala estigui plena.",
    "impostor.crewWins": "Guanya la tripulacio.",
    "impostor.impostorsWin": "Guanyen els impostors.",
    "impostor.youWon": "Has guanyat.",
    "impostor.youLost": "Has perdut.",
    "impostor.tieStatus": "Empat. Torneu a votar entre els empatats. {votes}/{total} vots.",
    "impostor.playingStatus": "Parleu, acuseu i voteu. {votes}/{total} vots.",
    "impostor.event.eliminated": "{name} ha estat expulsat. Rol: {role}.",
    "impostor.event.tie": "Empat entre {names}. Torneu a votar.",
    "impostor.event.guessWin": "{name} ha intentat endevinar la paraula \"{guess}\".",
    "impostor.event.guessFail": "{name} ha intentat endevinar la paraula \"{guess}\".",
    "impostor.event.guessWinResult": "{name} ha encertat. Guanyen els impostors.",
    "impostor.event.guessFailResult": "{name} ha fallat i queda fora.",
    "impostor.event.start": "Rols assignats. Mantingues la teva carta en secret.",
    "impostor.expelledCrew": "S'ha expulsat un tripulant.",
    "impostor.expelledImpostor": "S'ha expulsat un impostor.",
    "impostor.voteTiebreak": "Vota el desempat",
    "impostor.role.impostor": "impostor",
    "impostor.role.crew": "tripulacio",
    "impostor.youAreImpostor": "Ets impostor",
    "impostor.youAreCrew": "Ets tripulacio",
    "impostor.findWord": "Descobreix la paraula secreta",
    "impostor.hint": "Pista: {hint}",
    "impostor.youAreOut": "Estas fora.",
    "impostor.out": "Fora",
    "impostor.inGame": "En joc",
    "impostor.voted": "Ha votat",
    "impostor.pendingVote": "Sense votar",
    "impostor.noVoteTargets": "No hi ha objectius de vot.",
    "impostor.voteAfterStart": "Les opcions de vot apareixen quan comenci.",
    "impostor.popup.voteTitle": "Tria vot",
    "impostor.popup.started": "Partida iniciada",
    "impostor.popup.eliminated": "Rol descobert",
    "impostor.popup.tie": "Empat",
    "impostor.popup.finished": "Partida acabada",
    "impostor.popup.restarted": "Partida reiniciada",
    "impostor.popup.roleHeading": "El teu rol",
    "impostor.popup.wordHeading": "La teva paraula",
    "impostor.popup.hintHeading": "La teva pista",
    "impostor.popup.objectiveHeading": "Objectiu",
    "impostor.popup.crewObjective": "Protegeix la paraula i troba l'impostor.",
    "impostor.popup.impostorObjective": "Fes preguntes, despista i intenta descobrir la paraula.",
    "impostor.popup.noHint": "Sense pista activada.",
    "impostor.popup.playerHeading": "Jugador",
    "impostor.popup.revealedRoleHeading": "Rol revelat",
    "impostor.popup.tiedPlayersHeading": "Empatats",
    "impostor.popup.votesHeading": "Vots",
    "impostor.popup.nextStepHeading": "Seguent pas",
    "impostor.popup.guessHeading": "Intent",
    "impostor.popup.winnerHeading": "Guanyador",
    "impostor.popup.yourResultHeading": "El teu resultat",
    "impostor.popup.finalWordHeading": "Paraula final",
    "impostor.popup.activePlayersHeading": "Jugadors actius",
    "impostor.popup.voteCountHeading": "Recompte de vots",
    "impostor.popup.tieHeadline": "Empat en la votacio",
    "impostor.popup.startsHeading": "Primer torn",
    "impostor.wordPrefix": "Paraula: {value}",
    "impostor.hintPrefix": "Pista: {value}",
    "impostor.starts": "Comenca {name}",
    "impostor.startsBadge": "COMENCA",
    "impostor.youStart": "Comences tu",
    "impostor.kickPlayer": "Expulsa jugador",
    "impostor.sessionLost": "Has sortit d'aquesta sala. Torna a entrar amb el teu nom si cal."
  },
  es: {
    "home.subtitle": "Elige a que seccion quieres ir.",
    "home.gameHint": "Reto musical",
    "home.impostorHint": "Palabra secreta y votaciones",
    "home.resistanceHint": "Misiones, espias y votos secretos",
    "home.gamePlayers": "Min. 1 jugador",
    "home.impostorPlayers": "Min. 3 jugadores",
    "home.resistancePlayers": "Min. 5 jugadores",
    "home.masterWordHint": "Pistas secretas y palabras cooperativas",
    "home.masterWordPlayers": "Min. 3 jugadores",
    "home.generatorHint": "Crea listas CSV",
    "home.converterHint": "Convierte playlists",
    "home.audioHint": "Herramientas MP3 locales",
    "impostor.title": "Impostor GAME",
    "impostor.subtitle": "Crea o entra en una sala, esconde la palabra secreta y vota sospechosos.",
    "impostor.createRoom": "Crear sala",
    "impostor.joinRoom": "Unirse a sala",
    "impostor.roomName": "Nombre de la sala",
    "impostor.yourName": "Tu nombre",
    "impostor.playerEmoji": "Emoji del jugador",
    "impostor.players": "Jugadores",
    "impostor.impostors": "Impostores",
    "impostor.wordSet": "Lista de palabras",
    "impostor.generalWords": "Palabras generales",
    "impostor.celebritiesWords": "Personajes y celebridades",
    "impostor.wordSetHint": "Elige una lista para esta sala.",
    "impostor.wordCount": "{count} palabras",
    "impostor.hintForImpostors": "Pista para impostores",
    "impostor.room": "Sala",
    "impostor.roomLabel": "SALA: {name}",
    "impostor.shareLink": "Copiar enlace",
    "impostor.leaveMenu": "Atrás",
    "impostor.restart": "Reiniciar",
    "impostor.round": "Ronda",
    "impostor.lobby": "Sala",
    "impostor.result": "Resultado",
    "impostor.vote": "Votar",
    "impostor.yourRole": "Tu rol",
    "impostor.waiting": "Esperando...",
    "impostor.guessTitle": "Adivinanza del impostor",
    "impostor.secretWord": "Palabra secreta",
    "impostor.guessWord": "Adivinar palabra",
    "impostor.notice": "Aviso",
    "impostor.waitingPlayers": "Esperando jugadores: {current}/{total}. La partida empieza sola cuando la sala este llena.",
    "impostor.crewWins": "Gana la tripulacion.",
    "impostor.impostorsWin": "Ganan los impostores.",
    "impostor.youWon": "Has ganado.",
    "impostor.youLost": "Has perdido.",
    "impostor.tieStatus": "Empate. Votad otra vez entre los empatados. {votes}/{total} votos.",
    "impostor.playingStatus": "Hablad, acusad y votad. {votes}/{total} votos.",
    "impostor.event.eliminated": "{name} ha sido expulsado. Rol: {role}.",
    "impostor.event.tie": "Empate entre {names}. Votad otra vez.",
    "impostor.event.guessWin": "{name} ha intentado adivinar la palabra \"{guess}\".",
    "impostor.event.guessFail": "{name} ha intentado adivinar la palabra \"{guess}\".",
    "impostor.event.guessWinResult": "{name} ha acertado. Ganan los impostores.",
    "impostor.event.guessFailResult": "{name} ha fallado y queda fuera.",
    "impostor.event.start": "Roles asignados. Manten tu carta en secreto.",
    "impostor.expelledCrew": "Se ha expulsado a un tripulante.",
    "impostor.expelledImpostor": "Se ha expulsado a un impostor.",
    "impostor.voteTiebreak": "Vota el desempate",
    "impostor.role.impostor": "impostor",
    "impostor.role.crew": "tripulacion",
    "impostor.youAreImpostor": "Eres impostor",
    "impostor.youAreCrew": "Eres tripulacion",
    "impostor.findWord": "Descubre la palabra secreta",
    "impostor.hint": "Pista: {hint}",
    "impostor.youAreOut": "Estas fuera.",
    "impostor.out": "Fuera",
    "impostor.inGame": "En juego",
    "impostor.voted": "Ha votado",
    "impostor.pendingVote": "Sin votar",
    "impostor.noVoteTargets": "No hay objetivos de voto.",
    "impostor.voteAfterStart": "Las opciones de voto aparecen cuando empiece.",
    "impostor.popup.voteTitle": "Elige voto",
    "impostor.popup.started": "Partida iniciada",
    "impostor.popup.eliminated": "Rol descubierto",
    "impostor.popup.tie": "Empate",
    "impostor.popup.finished": "Partida terminada",
    "impostor.popup.restarted": "Partida reiniciada",
    "impostor.popup.roleHeading": "Tu rol",
    "impostor.popup.wordHeading": "Tu palabra",
    "impostor.popup.hintHeading": "Tu pista",
    "impostor.popup.objectiveHeading": "Objetivo",
    "impostor.popup.crewObjective": "Protege la palabra y encuentra al impostor.",
    "impostor.popup.impostorObjective": "Pregunta, despista e intenta descubrir la palabra.",
    "impostor.popup.noHint": "Sin pista activada.",
    "impostor.popup.playerHeading": "Jugador",
    "impostor.popup.revealedRoleHeading": "Rol revelado",
    "impostor.popup.tiedPlayersHeading": "Empatados",
    "impostor.popup.votesHeading": "Votos",
    "impostor.popup.nextStepHeading": "Siguiente paso",
    "impostor.popup.guessHeading": "Intento",
    "impostor.popup.winnerHeading": "Ganador",
    "impostor.popup.yourResultHeading": "Tu resultado",
    "impostor.popup.finalWordHeading": "Palabra final",
    "impostor.popup.activePlayersHeading": "Jugadores activos",
    "impostor.popup.voteCountHeading": "Recuento de votos",
    "impostor.popup.tieHeadline": "Empate en la votacion",
    "impostor.popup.startsHeading": "Primer turno",
    "impostor.wordPrefix": "Palabra: {value}",
    "impostor.hintPrefix": "Pista: {value}",
    "impostor.starts": "Empieza {name}",
    "impostor.startsBadge": "EMPIEZA",
    "impostor.youStart": "Empiezas tu",
    "impostor.kickPlayer": "Expulsar jugador",
    "impostor.sessionLost": "Has salido de esta sala. Vuelve a entrar con tu nombre si hace falta."
  },
  en: {
    "home.subtitle": "Choose which section you want.",
    "home.gameHint": "Music challenge",
    "home.impostorHint": "Secret word and voting",
    "home.resistanceHint": "Missions, spies, and secret votes",
    "home.gamePlayers": "Min. 1 player",
    "home.impostorPlayers": "Min. 3 players",
    "home.resistancePlayers": "Min. 5 players",
    "home.masterWordHint": "Secret clues and cooperative words",
    "home.masterWordPlayers": "Min. 3 players",
    "home.generatorHint": "Build CSV lists",
    "home.converterHint": "Convert playlists",
    "home.audioHint": "Local MP3 tools",
    "impostor.title": "Impostor GAME",
    "impostor.subtitle": "Create or join a room, hide the secret word, and vote out suspects.",
    "impostor.createRoom": "Create room",
    "impostor.joinRoom": "Join room",
    "impostor.roomName": "Room name",
    "impostor.yourName": "Your name",
    "impostor.playerEmoji": "Player emoji",
    "impostor.players": "Players",
    "impostor.impostors": "Impostors",
    "impostor.wordSet": "Word set",
    "impostor.generalWords": "General words",
    "impostor.celebritiesWords": "Characters and celebrities",
    "impostor.wordSetHint": "Choose a list for this room.",
    "impostor.wordCount": "{count} words",
    "impostor.hintForImpostors": "Hint for impostors",
    "impostor.room": "Room",
    "impostor.roomLabel": "ROOM: {name}",
    "impostor.shareLink": "Share link",
    "impostor.leaveMenu": "Back",
    "impostor.restart": "Restart",
    "impostor.round": "Round",
    "impostor.lobby": "Lobby",
    "impostor.result": "Result",
    "impostor.vote": "Vote",
    "impostor.yourRole": "Your role",
    "impostor.waiting": "Waiting...",
    "impostor.guessTitle": "Impostor guess",
    "impostor.secretWord": "Secret word",
    "impostor.guessWord": "Guess word",
    "impostor.notice": "Notice",
    "impostor.waitingPlayers": "Waiting for players: {current}/{total}. Game starts automatically when room is full.",
    "impostor.crewWins": "Crew wins.",
    "impostor.impostorsWin": "Impostors win.",
    "impostor.youWon": "You won.",
    "impostor.youLost": "You lost.",
    "impostor.tieStatus": "Tie vote. Vote again between tied players. {votes}/{total} votes.",
    "impostor.playingStatus": "Discuss, accuse, then vote. {votes}/{total} votes.",
    "impostor.event.eliminated": "{name} was expelled. Role: {role}.",
    "impostor.event.tie": "Tie between {names}. Vote again.",
    "impostor.event.guessWin": "{name} tried to guess the word \"{guess}\".",
    "impostor.event.guessFail": "{name} tried to guess the word \"{guess}\".",
    "impostor.event.guessWinResult": "{name} guessed correctly. Impostors win.",
    "impostor.event.guessFailResult": "{name} guessed wrong and is out.",
    "impostor.event.start": "Roles assigned. Keep your card secret.",
    "impostor.expelledCrew": "A crew member was expelled.",
    "impostor.expelledImpostor": "An impostor was expelled.",
    "impostor.voteTiebreak": "Vote tiebreak",
    "impostor.role.impostor": "impostor",
    "impostor.role.crew": "crew",
    "impostor.youAreImpostor": "You are an impostor",
    "impostor.youAreCrew": "You are crew",
    "impostor.findWord": "Find the secret word",
    "impostor.hint": "Hint: {hint}",
    "impostor.youAreOut": "You are out.",
    "impostor.out": "Out",
    "impostor.inGame": "In game",
    "impostor.voted": "Voted",
    "impostor.pendingVote": "Not voted",
    "impostor.noVoteTargets": "No vote targets.",
    "impostor.voteAfterStart": "Vote options appear after start.",
    "impostor.popup.voteTitle": "Choose vote",
    "impostor.popup.started": "Game started",
    "impostor.popup.eliminated": "Role revealed",
    "impostor.popup.tie": "Tie",
    "impostor.popup.finished": "Game over",
    "impostor.popup.restarted": "Game restarted",
    "impostor.popup.roleHeading": "Your role",
    "impostor.popup.wordHeading": "Your word",
    "impostor.popup.hintHeading": "Your hint",
    "impostor.popup.objectiveHeading": "Objective",
    "impostor.popup.crewObjective": "Protect the word and find the impostor.",
    "impostor.popup.impostorObjective": "Ask, misdirect, and try to discover the word.",
    "impostor.popup.noHint": "No hint enabled.",
    "impostor.popup.playerHeading": "Player",
    "impostor.popup.revealedRoleHeading": "Revealed role",
    "impostor.popup.tiedPlayersHeading": "Tied players",
    "impostor.popup.votesHeading": "Votes",
    "impostor.popup.nextStepHeading": "Next step",
    "impostor.popup.guessHeading": "Guess",
    "impostor.popup.winnerHeading": "Winner",
    "impostor.popup.yourResultHeading": "Your result",
    "impostor.popup.finalWordHeading": "Final word",
    "impostor.popup.activePlayersHeading": "Active players",
    "impostor.popup.voteCountHeading": "Vote count",
    "impostor.popup.tieHeadline": "Vote tied",
    "impostor.popup.startsHeading": "First turn",
    "impostor.wordPrefix": "Word: {value}",
    "impostor.hintPrefix": "Hint: {value}",
    "impostor.starts": "{name} starts",
    "impostor.startsBadge": "STARTS",
    "impostor.youStart": "You start",
    "impostor.kickPlayer": "Kick player",
    "impostor.sessionLost": "You left this room. Rejoin with your name if needed."
  }
};

const SCOREBOARD_TRANSLATIONS = {
  ca: {
    "scoreboard.title": "Taula de puntuacio",
    "scoreboard.subtitle": "Crea una sala per portar la puntuacio de qualsevol joc, ronda a ronda.",
    "scoreboard.eyebrow": "Marcador compartit",
    "scoreboard.homeHint": "Recompte compartit per rondes",
    "scoreboard.homePlayers": "Sense limit de jugadors",
    "scoreboard.create": "Crea una sala",
    "scoreboard.join": "Uneix-te a una sala",
    "scoreboard.roomName": "Nom de la sala",
    "scoreboard.hostName": "El teu sobrenom",
    "scoreboard.hostPlaceholder": "Sobrenom de l'administrador",
    "scoreboard.roundCount": "Nombre de rondes",
    "scoreboard.sortOrder": "Ordre de puntuacio",
    "scoreboard.highFirst": "Puntuacio mes alta primer",
    "scoreboard.lowFirst": "Puntuacio mes baixa primer",
    "scoreboard.password": "Contrasenya per a jugadors (opcional)",
    "scoreboard.passwordPlaceholder": "Sense contrasenya",
    "scoreboard.passwordHint": "Els espectadors sempre poden entrar sense contrasenya.",
    "scoreboard.playersCanEdit": "Permet que cada jugador editi les seves puntuacions",
    "scoreboard.playersCanEditHint": "Cada sobrenom nomes controla la seva propia fila.",
    "scoreboard.openRooms": "Sales obertes",
    "scoreboard.refresh": "Actualitza",
    "scoreboard.loadingRooms": "Carregant sales actives...",
    "scoreboard.noRooms": "No hi ha sales actives. Crea la primera.",
    "scoreboard.room": "Sala",
    "scoreboard.settings": "Configuracio",
    "scoreboard.configureRoom": "Configura la sala",
    "scoreboard.gameType": "Joc (opcional)",
    "scoreboard.gameTypeNone": "Cap",
    "scoreboard.traitorsAboard": "Traidors a Bord",
    "scoreboard.log": "LOG",
    "scoreboard.logEyebrow": "Activitat de la sala",
    "scoreboard.logLoading": "Carregant activitat...",
    "scoreboard.logEmpty": "Encara no hi ha activitat registrada.",
    "scoreboard.cellRole": "Rol en aquesta ronda",
    "scoreboard.roleHistory": "Historial de rols",
    "scoreboard.noRoleHistory": "Aquest jugador encara no te rols definits.",
    "scoreboard.roleUnknown": "Sense definir",
    "scoreboard.crew": "Tripulant",
    "scoreboard.traitor": "Traidor",
    "scoreboard.impostor": "Impostor",
    "scoreboard.crewPlural": "Tripulants",
    "scoreboard.traitorsPlural": "Traidors",
    "scoreboard.winner": "Guanyador",
    "scoreboard.won": "Victoria",
    "scoreboard.lost": "Derrota",
    "scoreboard.roundRoles": "Rols i bandol guanyador",
    "scoreboard.saveRoles": "Desa rols",
    "scoreboard.roundDetails": "Detalls de la ronda",
    "scoreboard.noRoundRoles": "Encara no hi ha rols definits en aquesta ronda.",
    "scoreboard.bulkRole": "Aplica un rol als jugadors seleccionats",
    "scoreboard.saveWinner": "Desa el bandol guanyador",
    "scoreboard.crewCount": "Tripulant x{count}",
    "scoreboard.traitorCount": "Impostor x{count}",
    "scoreboard.winCount": "Victories {count}",
    "scoreboard.lossCount": "Derrotes {count}",
    "scoreboard.system": "Sistema",
    "scoreboard.logScores": "{actor} ha canviat {count} puntuacions",
    "scoreboard.logRoundBack": "{actor} ha retrocedit la ronda",
    "scoreboard.logRoundForward": "{actor} ha avancat la ronda",
    "scoreboard.logPlayerJoined": "{player} s'ha unit a la sala",
    "scoreboard.logPlayerRejoined": "{player} ha recuperat el seu jugador",
    "scoreboard.logRoundAdded": "{actor} ha afegit una ronda",
    "scoreboard.logRoundDeleted": "{actor} ha eliminat una ronda",
    "scoreboard.logGameRestarted": "{actor} ha iniciat una partida nova",
    "scoreboard.logNextGame": "{actor} ha passat a la partida {game}",
    "scoreboard.logGameFinished": "{actor} ha finalitzat la partida",
    "scoreboard.logSessionFinished": "{actor} ha finalitzat totes les partides",
    "scoreboard.logPlayerRole": "{actor} ha canviat el seu rol",
    "scoreboard.logRoundRoles": "{actor} ha definit els rols de la ronda",
    "scoreboard.logPlayersUpdated": "{actor} ha actualitzat els jugadors",
    "scoreboard.logPlayerRenamed": "{actor} ha canviat un sobrenom",
    "scoreboard.logPlayerRemoved": "{actor} ha eliminat {player}",
    "scoreboard.logSortOrder": "{actor} ha canviat l'ordre",
    "scoreboard.logActivity": "Activitat de {actor}",
    "scoreboard.players": "Jugadors",
    "scoreboard.rounds": "rondes",
    "scoreboard.protected": "Privada",
    "scoreboard.open": "Oberta",
    "scoreboard.share": "Copia l'enllac",
    "scoreboard.addRound": "Afegeix ronda",
    "scoreboard.deleteRound": "Elimina ronda",
    "scoreboard.confirmDeleteRound": "Eliminar la ronda {round} i totes les seves puntuacions?",
    "scoreboard.orderButton": "Ordre: {order}",
    "scoreboard.reset": "Buida taula",
    "scoreboard.finish": "Finalitza",
    "scoreboard.finishChoice": "Tria si vols tancar aquesta partida o tota la sessio.",
    "scoreboard.finishCurrent": "Finalitza la partida actual",
    "scoreboard.finishAll": "Finalitza-les totes",
    "scoreboard.newGame": "Nova partida",
    "scoreboard.nextGame": "Seguent partida",
    "scoreboard.previousRound": "Ronda anterior",
    "scoreboard.nextRound": "Seguent ronda",
    "scoreboard.currentRound": "Ronda actual: {round}",
    "scoreboard.roundAdvanced": "Ha avancat la ronda actual",
    "scoreboard.roundReturned": "Ha retrocedit la ronda actual",
    "scoreboard.playerJoinedNotice": "S'ha unit a la sala",
    "scoreboard.playerRejoinedNotice": "Ha recuperat el control del seu jugador",
    "scoreboard.scoreUpdated": "Puntuacio modificada",
    "scoreboard.history": "Partides anteriors",
    "scoreboard.historyEyebrow": "Puntuacions desades",
    "scoreboard.previousTotal": "Total anterior",
    "scoreboard.game": "Partida {game}",
    "scoreboard.leave": "Surt",
    "scoreboard.hostMode": "Administrador · {order}",
    "scoreboard.playerMode": "Jugador · nomes lectura",
    "scoreboard.playerEditMode": "Jugador · pots editar la teva fila",
    "scoreboard.spectatorMode": "Espectador · nomes lectura",
    "scoreboard.orderHigh": "mes punts guanyen",
    "scoreboard.orderLow": "menys punts guanyen",
    "scoreboard.total": "Total",
    "scoreboard.round": "Ronda",
    "scoreboard.noPlayers": "Encara no hi ha jugadors",
    "scoreboard.noPlayersHint": "L'administrador pot afegir-los amb el boto Jugadors.",
    "scoreboard.enterRoom": "Entra a",
    "scoreboard.spectate": "Entra com a espectador",
    "scoreboard.spectateHint": "Acces directe, sense sobrenom ni contrasenya.",
    "scoreboard.joinNickname": "Entra amb sobrenom",
    "scoreboard.nickname": "Sobrenom",
    "scoreboard.yourNickname": "El teu sobrenom",
    "scoreboard.roomPassword": "Contrasenya",
    "scoreboard.playerCount": "Nombre de jugadors",
    "scoreboard.addPlayer": "Afegeix jugador",
    "scoreboard.removePlayer": "Elimina jugador {number}",
    "scoreboard.savePlayers": "Desa jugadors",
    "scoreboard.editScore": "Edita puntuacio",
    "scoreboard.score": "Puntuacio",
    "scoreboard.blankScore": "En blanc = 0",
    "scoreboard.makeBlank": "Deixa en blanc",
    "scoreboard.save": "Desa",
    "scoreboard.editPlayer": "Edita jugador",
    "scoreboard.kick": "Expulsa jugador",
    "scoreboard.saveChanges": "Desa canvis",
    "scoreboard.multiScore": "Puntuacio multiple",
    "scoreboard.amountToAdd": "Puntuacio que se sumara",
    "scoreboard.selectPlayers": "Selecciona jugadors",
    "scoreboard.all": "Tots",
    "scoreboard.none": "Cap",
    "scoreboard.applyScore": "Suma puntuacio",
    "scoreboard.resetTitle": "Buida tota la taula",
    "scoreboard.resetText": "Totes les puntuacions tornaran a estar en blanc.",
    "scoreboard.cancel": "Cancel·la",
    "scoreboard.finalPodium": "Podi final",
    "scoreboard.gamePodium": "Podi · Partida {game}",
    "scoreboard.overallPodium": "Podi de totes les partides",
    "scoreboard.finished": "Partida finalitzada",
    "scoreboard.allFinished": "Sessio finalitzada",
    "scoreboard.copied": "Enllac copiat",
    "scoreboard.playerAdded": "Sobrenom afegit. La taula es nomes de lectura per a jugadors.",
    "scoreboard.playerAddedEditable": "Sobrenom afegit. Pots editar les puntuacions de la teva fila.",
    "scoreboard.playerReclaimed": "Control del jugador recuperat amb aquest sobrenom.",
    "scoreboard.selectOne": "Selecciona almenys un jugador.",
    "scoreboard.invalidScore": "Introdueix un numero valid, per exemple -5 o 2,5.",
    "scoreboard.position": "Posicio {position}",
    "scoreboard.confirmKick": "Expulsar {name}?",
    "scoreboard.points": "{score} punts",
    "scoreboard.moreChanges": "+{count} canvis mes"
  },
  es: {
    "scoreboard.title": "Tabla de puntuacion",
    "scoreboard.subtitle": "Crea una sala para llevar la puntuacion de cualquier juego, ronda a ronda.",
    "scoreboard.eyebrow": "Marcador compartido",
    "scoreboard.homeHint": "Recuento compartido por rondas",
    "scoreboard.homePlayers": "Sin limite de jugadores",
    "scoreboard.create": "Crear sala",
    "scoreboard.join": "Unirse a una sala",
    "scoreboard.roomName": "Nombre de la sala",
    "scoreboard.hostName": "Tu apodo",
    "scoreboard.hostPlaceholder": "Apodo del administrador",
    "scoreboard.roundCount": "Numero de rondas",
    "scoreboard.sortOrder": "Orden de puntuacion",
    "scoreboard.highFirst": "Mayor puntuacion primero",
    "scoreboard.lowFirst": "Menor puntuacion primero",
    "scoreboard.password": "Contrasena para jugadores (opcional)",
    "scoreboard.passwordPlaceholder": "Sin contrasena",
    "scoreboard.passwordHint": "Espectadores siempre pueden entrar sin contrasena.",
    "scoreboard.playersCanEdit": "Permitir que cada jugador edite sus puntuaciones",
    "scoreboard.playersCanEditHint": "Cada apodo solo controla su propia fila.",
    "scoreboard.openRooms": "Salas abiertas",
    "scoreboard.refresh": "Actualizar",
    "scoreboard.loadingRooms": "Cargando salas activas...",
    "scoreboard.noRooms": "No hay salas activas. Crea la primera.",
    "scoreboard.room": "Sala",
    "scoreboard.settings": "Ajustes",
    "scoreboard.configureRoom": "Configurar sala",
    "scoreboard.gameType": "Juego (opcional)",
    "scoreboard.gameTypeNone": "Ninguno",
    "scoreboard.traitorsAboard": "Traidores a Bordo",
    "scoreboard.log": "LOG",
    "scoreboard.logEyebrow": "Actividad de la sala",
    "scoreboard.logLoading": "Cargando actividad...",
    "scoreboard.logEmpty": "Todavia no hay actividad registrada.",
    "scoreboard.cellRole": "Rol en esta ronda",
    "scoreboard.roleHistory": "Historial de roles",
    "scoreboard.noRoleHistory": "Este jugador todavia no tiene roles definidos.",
    "scoreboard.roleUnknown": "Sin definir",
    "scoreboard.crew": "Tripulante",
    "scoreboard.traitor": "Traidor",
    "scoreboard.impostor": "Impostor",
    "scoreboard.crewPlural": "Tripulantes",
    "scoreboard.traitorsPlural": "Traidores",
    "scoreboard.winner": "Ganador",
    "scoreboard.won": "Victoria",
    "scoreboard.lost": "Derrota",
    "scoreboard.roundRoles": "Roles y bando ganador",
    "scoreboard.saveRoles": "Guardar roles",
    "scoreboard.roundDetails": "Detalles de la ronda",
    "scoreboard.noRoundRoles": "Todavia no hay roles definidos en esta ronda.",
    "scoreboard.bulkRole": "Aplicar rol a los jugadores seleccionados",
    "scoreboard.saveWinner": "Guardar bando ganador",
    "scoreboard.crewCount": "Tripulante x{count}",
    "scoreboard.traitorCount": "Impostor x{count}",
    "scoreboard.winCount": "Victorias {count}",
    "scoreboard.lossCount": "Derrotas {count}",
    "scoreboard.system": "Sistema",
    "scoreboard.logScores": "{actor} cambio {count} puntuaciones",
    "scoreboard.logRoundBack": "{actor} retrocedio la ronda",
    "scoreboard.logRoundForward": "{actor} avanzo la ronda",
    "scoreboard.logPlayerJoined": "{player} se unio a la sala",
    "scoreboard.logPlayerRejoined": "{player} recupero su jugador",
    "scoreboard.logRoundAdded": "{actor} anadio una ronda",
    "scoreboard.logRoundDeleted": "{actor} elimino una ronda",
    "scoreboard.logGameRestarted": "{actor} inicio una partida nueva",
    "scoreboard.logNextGame": "{actor} paso a la partida {game}",
    "scoreboard.logGameFinished": "{actor} finalizo la partida",
    "scoreboard.logSessionFinished": "{actor} finalizo todas las partidas",
    "scoreboard.logPlayerRole": "{actor} cambio su rol",
    "scoreboard.logRoundRoles": "{actor} definio los roles de la ronda",
    "scoreboard.logPlayersUpdated": "{actor} actualizo los jugadores",
    "scoreboard.logPlayerRenamed": "{actor} cambio un apodo",
    "scoreboard.logPlayerRemoved": "{actor} elimino a {player}",
    "scoreboard.logSortOrder": "{actor} cambio el orden",
    "scoreboard.logActivity": "Actividad de {actor}",
    "scoreboard.players": "Jugadores",
    "scoreboard.rounds": "rondas",
    "scoreboard.protected": "Privada",
    "scoreboard.open": "Abierta",
    "scoreboard.share": "Copiar enlace",
    "scoreboard.addRound": "Anadir ronda",
    "scoreboard.deleteRound": "Eliminar ronda",
    "scoreboard.confirmDeleteRound": "Eliminar la ronda {round} y todas sus puntuaciones?",
    "scoreboard.orderButton": "Orden: {order}",
    "scoreboard.reset": "Vaciar tabla",
    "scoreboard.finish": "Finalizar",
    "scoreboard.finishChoice": "Elige si quieres cerrar esta partida o toda la sesion.",
    "scoreboard.finishCurrent": "Finalizar partida actual",
    "scoreboard.finishAll": "Finalizarlas todas",
    "scoreboard.newGame": "Nueva partida",
    "scoreboard.nextGame": "Siguiente partida",
    "scoreboard.previousRound": "Ronda anterior",
    "scoreboard.nextRound": "Siguiente ronda",
    "scoreboard.currentRound": "Ronda actual: {round}",
    "scoreboard.roundAdvanced": "Ha avanzado la ronda actual",
    "scoreboard.roundReturned": "Ha retrocedido la ronda actual",
    "scoreboard.playerJoinedNotice": "Se ha unido a la sala",
    "scoreboard.playerRejoinedNotice": "Ha recuperado el control de su jugador",
    "scoreboard.scoreUpdated": "Puntuacion modificada",
    "scoreboard.history": "Partidas anteriores",
    "scoreboard.historyEyebrow": "Puntuaciones guardadas",
    "scoreboard.previousTotal": "Total anterior",
    "scoreboard.game": "Partida {game}",
    "scoreboard.leave": "Salir",
    "scoreboard.hostMode": "Administrador · {order}",
    "scoreboard.playerMode": "Jugador · solo lectura",
    "scoreboard.playerEditMode": "Jugador · puedes editar tu fila",
    "scoreboard.spectatorMode": "Espectador · solo lectura",
    "scoreboard.orderHigh": "mas puntos ganan",
    "scoreboard.orderLow": "menos puntos ganan",
    "scoreboard.total": "Total",
    "scoreboard.round": "Ronda",
    "scoreboard.noPlayers": "Todavia no hay jugadores",
    "scoreboard.noPlayersHint": "El administrador puede anadirlos desde el boton Jugadores.",
    "scoreboard.enterRoom": "Entrar en",
    "scoreboard.spectate": "Entrar como espectador",
    "scoreboard.spectateHint": "Acceso directo, sin apodo ni contrasena.",
    "scoreboard.joinNickname": "Entrar con apodo",
    "scoreboard.nickname": "Apodo",
    "scoreboard.yourNickname": "Tu apodo",
    "scoreboard.roomPassword": "Contrasena",
    "scoreboard.playerCount": "Numero de jugadores",
    "scoreboard.addPlayer": "Anadir jugador",
    "scoreboard.removePlayer": "Eliminar jugador {number}",
    "scoreboard.savePlayers": "Guardar jugadores",
    "scoreboard.editScore": "Editar puntuacion",
    "scoreboard.score": "Puntuacion",
    "scoreboard.blankScore": "En blanco = 0",
    "scoreboard.makeBlank": "Dejar en blanco",
    "scoreboard.save": "Guardar",
    "scoreboard.editPlayer": "Editar jugador",
    "scoreboard.kick": "Expulsar jugador",
    "scoreboard.saveChanges": "Guardar cambios",
    "scoreboard.multiScore": "Puntuacion multiple",
    "scoreboard.amountToAdd": "Puntuacion que se sumara",
    "scoreboard.selectPlayers": "Selecciona jugadores",
    "scoreboard.all": "Todos",
    "scoreboard.none": "Ninguno",
    "scoreboard.applyScore": "Sumar puntuacion",
    "scoreboard.resetTitle": "Vaciar toda la tabla",
    "scoreboard.resetText": "Todas las puntuaciones volveran a estar en blanco.",
    "scoreboard.cancel": "Cancelar",
    "scoreboard.finalPodium": "Podio final",
    "scoreboard.gamePodium": "Podio · Partida {game}",
    "scoreboard.overallPodium": "Podio de todas las partidas",
    "scoreboard.finished": "Partida finalizada",
    "scoreboard.allFinished": "Sesion finalizada",
    "scoreboard.copied": "Enlace copiado",
    "scoreboard.playerAdded": "Apodo anadido. La tabla es de solo lectura para jugadores.",
    "scoreboard.playerAddedEditable": "Apodo anadido. Puedes editar las puntuaciones de tu fila.",
    "scoreboard.playerReclaimed": "Control del jugador recuperado con ese apodo.",
    "scoreboard.selectOne": "Selecciona al menos un jugador.",
    "scoreboard.invalidScore": "Introduce un numero valido, por ejemplo -5 o 2,5.",
    "scoreboard.position": "Posicion {position}",
    "scoreboard.confirmKick": "Expulsar a {name}?",
    "scoreboard.points": "{score} puntos",
    "scoreboard.moreChanges": "+{count} cambios mas"
  },
  en: {
    "scoreboard.title": "Scoreboard",
    "scoreboard.subtitle": "Create a room to track any game's score, round by round.",
    "scoreboard.eyebrow": "Shared score tracker",
    "scoreboard.homeHint": "Shared round-by-round scoring",
    "scoreboard.homePlayers": "No player limit",
    "scoreboard.create": "Create room",
    "scoreboard.join": "Join a room",
    "scoreboard.roomName": "Room name",
    "scoreboard.hostName": "Your nickname",
    "scoreboard.hostPlaceholder": "Administrator nickname",
    "scoreboard.roundCount": "Number of rounds",
    "scoreboard.sortOrder": "Score order",
    "scoreboard.highFirst": "Highest score first",
    "scoreboard.lowFirst": "Lowest score first",
    "scoreboard.password": "Player password (optional)",
    "scoreboard.passwordPlaceholder": "No password",
    "scoreboard.passwordHint": "Spectators can always enter without a password.",
    "scoreboard.playersCanEdit": "Allow each player to edit their scores",
    "scoreboard.playersCanEditHint": "Each nickname controls only its own row.",
    "scoreboard.openRooms": "Open rooms",
    "scoreboard.refresh": "Refresh",
    "scoreboard.loadingRooms": "Loading active rooms...",
    "scoreboard.noRooms": "No active rooms. Create the first one.",
    "scoreboard.room": "Room",
    "scoreboard.settings": "Settings",
    "scoreboard.configureRoom": "Configure room",
    "scoreboard.gameType": "Game (optional)",
    "scoreboard.gameTypeNone": "None",
    "scoreboard.traitorsAboard": "Traitors Aboard",
    "scoreboard.log": "LOG",
    "scoreboard.logEyebrow": "Room activity",
    "scoreboard.logLoading": "Loading activity...",
    "scoreboard.logEmpty": "No activity recorded yet.",
    "scoreboard.cellRole": "Role this round",
    "scoreboard.roleHistory": "Role history",
    "scoreboard.noRoleHistory": "No roles defined for this player yet.",
    "scoreboard.roleUnknown": "Not defined",
    "scoreboard.crew": "Crewmate",
    "scoreboard.traitor": "Traitor",
    "scoreboard.impostor": "Impostor",
    "scoreboard.crewPlural": "Crewmates",
    "scoreboard.traitorsPlural": "Traitors",
    "scoreboard.winner": "Winner",
    "scoreboard.won": "Win",
    "scoreboard.lost": "Loss",
    "scoreboard.roundRoles": "Roles and winning side",
    "scoreboard.saveRoles": "Save roles",
    "scoreboard.roundDetails": "Round details",
    "scoreboard.noRoundRoles": "No roles are defined for this round yet.",
    "scoreboard.bulkRole": "Apply role to selected players",
    "scoreboard.saveWinner": "Save winning side",
    "scoreboard.crewCount": "Crewmate x{count}",
    "scoreboard.traitorCount": "Impostor x{count}",
    "scoreboard.winCount": "Wins {count}",
    "scoreboard.lossCount": "Losses {count}",
    "scoreboard.system": "System",
    "scoreboard.logScores": "{actor} changed {count} scores",
    "scoreboard.logRoundBack": "{actor} moved round back",
    "scoreboard.logRoundForward": "{actor} moved round forward",
    "scoreboard.logPlayerJoined": "{player} joined room",
    "scoreboard.logPlayerRejoined": "{player} reclaimed their player",
    "scoreboard.logRoundAdded": "{actor} added a round",
    "scoreboard.logRoundDeleted": "{actor} deleted a round",
    "scoreboard.logGameRestarted": "{actor} started a fresh game",
    "scoreboard.logNextGame": "{actor} moved to game {game}",
    "scoreboard.logGameFinished": "{actor} finished game",
    "scoreboard.logSessionFinished": "{actor} finished all games",
    "scoreboard.logPlayerRole": "{actor} changed their role",
    "scoreboard.logRoundRoles": "{actor} set round roles",
    "scoreboard.logPlayersUpdated": "{actor} updated players",
    "scoreboard.logPlayerRenamed": "{actor} renamed a player",
    "scoreboard.logPlayerRemoved": "{actor} removed {player}",
    "scoreboard.logSortOrder": "{actor} changed score order",
    "scoreboard.logActivity": "Activity by {actor}",
    "scoreboard.players": "Players",
    "scoreboard.rounds": "rounds",
    "scoreboard.protected": "Private",
    "scoreboard.open": "Open",
    "scoreboard.share": "Copy link",
    "scoreboard.addRound": "Add round",
    "scoreboard.deleteRound": "Delete round",
    "scoreboard.confirmDeleteRound": "Delete round {round} and all its scores?",
    "scoreboard.orderButton": "Order: {order}",
    "scoreboard.reset": "Clear table",
    "scoreboard.finish": "Finish",
    "scoreboard.finishChoice": "Choose whether to close this game or the whole session.",
    "scoreboard.finishCurrent": "Finish current game",
    "scoreboard.finishAll": "Finish all games",
    "scoreboard.newGame": "New game",
    "scoreboard.nextGame": "Next game",
    "scoreboard.previousRound": "Previous round",
    "scoreboard.nextRound": "Next round",
    "scoreboard.currentRound": "Current round: {round}",
    "scoreboard.roundAdvanced": "Moved current round forward",
    "scoreboard.roundReturned": "Moved current round back",
    "scoreboard.playerJoinedNotice": "Joined room",
    "scoreboard.playerRejoinedNotice": "Reclaimed player control",
    "scoreboard.scoreUpdated": "Score changed",
    "scoreboard.history": "Previous games",
    "scoreboard.historyEyebrow": "Saved scores",
    "scoreboard.previousTotal": "Previous total",
    "scoreboard.game": "Game {game}",
    "scoreboard.leave": "Leave",
    "scoreboard.hostMode": "Administrator · {order}",
    "scoreboard.playerMode": "Player · read only",
    "scoreboard.playerEditMode": "Player · you can edit your row",
    "scoreboard.spectatorMode": "Spectator · read only",
    "scoreboard.orderHigh": "most points win",
    "scoreboard.orderLow": "fewest points win",
    "scoreboard.total": "Total",
    "scoreboard.round": "Round",
    "scoreboard.noPlayers": "No players yet",
    "scoreboard.noPlayersHint": "Administrator can add them with Players button.",
    "scoreboard.enterRoom": "Enter",
    "scoreboard.spectate": "Enter as spectator",
    "scoreboard.spectateHint": "Direct access, no nickname or password.",
    "scoreboard.joinNickname": "Enter with nickname",
    "scoreboard.nickname": "Nickname",
    "scoreboard.yourNickname": "Your nickname",
    "scoreboard.roomPassword": "Password",
    "scoreboard.playerCount": "Number of players",
    "scoreboard.addPlayer": "Add player",
    "scoreboard.removePlayer": "Remove player {number}",
    "scoreboard.savePlayers": "Save players",
    "scoreboard.editScore": "Edit score",
    "scoreboard.score": "Score",
    "scoreboard.blankScore": "Blank = 0",
    "scoreboard.makeBlank": "Leave blank",
    "scoreboard.save": "Save",
    "scoreboard.editPlayer": "Edit player",
    "scoreboard.kick": "Remove player",
    "scoreboard.saveChanges": "Save changes",
    "scoreboard.multiScore": "Multiple scores",
    "scoreboard.amountToAdd": "Score to add",
    "scoreboard.selectPlayers": "Select players",
    "scoreboard.all": "All",
    "scoreboard.none": "None",
    "scoreboard.applyScore": "Add score",
    "scoreboard.resetTitle": "Clear whole table",
    "scoreboard.resetText": "Every score will become blank.",
    "scoreboard.cancel": "Cancel",
    "scoreboard.finalPodium": "Final podium",
    "scoreboard.gamePodium": "Podium · Game {game}",
    "scoreboard.overallPodium": "All-games podium",
    "scoreboard.finished": "Game finished",
    "scoreboard.allFinished": "Session finished",
    "scoreboard.copied": "Link copied",
    "scoreboard.playerAdded": "Nickname added. Players have read-only table access.",
    "scoreboard.playerAddedEditable": "Nickname added. You can edit scores in your row.",
    "scoreboard.playerReclaimed": "Player control reclaimed with that nickname.",
    "scoreboard.selectOne": "Select at least one player.",
    "scoreboard.invalidScore": "Enter a valid number, for example -5 or 2.5.",
    "scoreboard.position": "Position {position}",
    "scoreboard.confirmKick": "Remove {name}?",
    "scoreboard.points": "{score} points",
    "scoreboard.moreChanges": "+{count} more changes"
  }
};

SUPPORTED_LANGUAGES.forEach((language) => {
  Object.assign(TRANSLATIONS[language], IMPOSTOR_TRANSLATIONS[language], SCOREBOARD_TRANSLATIONS[language]);
});
const STATIC_TEXT_TARGETS = [
  ["#homeSubtitle", "home.subtitle"],
  ["#homeGameHint", "home.gameHint"],
  ["#homeImpostorHint", "home.impostorHint"],
  ["#homeResistanceHint", "home.resistanceHint"],
  ["#homeGamePlayers", "home.gamePlayers"],
  ["#homeImpostorPlayers", "home.impostorPlayers"],
  ["#homeResistancePlayers", "home.resistancePlayers"],
  ["#homeMasterWordHint", "home.masterWordHint"],
  ["#homeMasterWordPlayers", "home.masterWordPlayers"],
  ["#homeGeneratorHint", "home.generatorHint"],
  ["#homeConverterHint", "home.converterHint"],
  ["#homeAudioHint", "home.audioHint"],
  [".home-menu-card[data-view-target='gameView'] strong", "nav.game"],
  [".home-menu-card[data-view-target='impostorView'] strong", "impostor.title"],
  [".home-menu-card[data-view-target='generatorView'] strong", "nav.generator"],
  [".home-menu-card[data-view-target='converterView'] strong", "nav.converter"],
  [".home-menu-card[data-view-target='audioView'] strong", "nav.audio"],
  [".title-tagline", "app.tagline"],
  ["#generatorTitle", "generator.title"],
  ["#generatorView .topbar p", "generator.subtitle"],
  ["label[for='input']", "generator.inputLabel"],
  [".csv-panel .section-heading h2", "generator.csvExport"],
  [".csv-panel .meter-row span", "common.progress"],
  ["#generatorView .queue-head span:nth-child(1)", "common.title"],
  ["#generatorView .queue-head span:nth-child(2)", "common.youtubeLink"],
  ["#generatorView .queue-head span:nth-child(3)", "common.copy"],
  ["#converterTitle", "converter.title"],
  ["#converterView .topbar p", "converter.subtitle"],
  ["label[for='converterInput']", "converter.inputLabel"],
  ["label[for='targetPlatform']", "converter.target"],
  [".converter-status .section-heading h2", "converter.heading"],
  [".converter-status .meter-row span", "converter.results"],
  ["#converterView .queue-head span:nth-child(1)", "converter.track"],
  ["#converterView .queue-head span:nth-child(2)", "converter.convertedLink"],
  ["#converterView .queue-head span:nth-child(3)", "common.copy"],
  ["#audioTitle", "audio.title"],
  ["#audioView .topbar p", "audio.subtitle"],
  ["label[for='audioInput']", "audio.inputLabel"],
  [".audio-options label > span", "audio.concurrencyHint"],
  [".audio-status .section-heading h2", "audio.zipExport"],
  [".audio-status .meter-row span", "common.progress"],
  ["#audioView .queue-head span:nth-child(1)", "common.title"],
  ["#audioView .queue-head span:nth-child(2)", "common.youtubeLink"],
  ["#audioView .queue-head span:nth-child(3)", "audio.status"],
  ["#audioView .queue-head span:nth-child(4)", "audio.download"],
  ["#gameTitle", "game.title"],
  ["#songSource", "game.sourceInitial"],
  ["#gameSetup .setup-row:nth-child(1) > label", "game.players"],
  ["#groupSetup .setup-row:nth-child(1) > label", "game.challenge"],
  ["#groupSetup .setup-row:nth-child(2) > label", "game.clipStart"],
  ["#groupSetup .setup-row:nth-child(3) > label", "game.difficulty"],
  ["#groupSetup .section-heading h2", "game.artist"],
  ["#groupSetup .section-heading span", "game.artistHint"],
  ["#inviteJoinSetup .section-heading h2", "game.inviteJoinTitle"],
  ["#inviteJoinSetup .section-heading span", "game.inviteJoinHint"],
  ["#artistLoading strong", "game.loading"],
  [".active-config span", "game.playing"],
  ["#clueLink", "game.clue"],
  [".clip-label", "game.currentClip"],
  ["label[for='guessInput']", "game.songTitle"],
  ["#resultLabel", "game.result"],
  ["#watchLink", "game.watch"],
  [".summary-head span", "game.finalScore"],
  ["#popupMeta", "game.result"],
  ["#popupWatchLink", "game.watch"],
  ["#songsPopupTitle", "game.possibleSongs"],
  [".leaderboard-head > div > span", "game.leaderboard"],
  ["#leaderboardPopupTitle", "game.topTenLeaderboard"],
  [".multiplayer-form:nth-child(1) h3", "game.createRoom"],
  [".multiplayer-form:nth-child(2) h3", "game.joinRoom"],
  [".multiplayer-room-head span", "game.room"],
  ["#multiplayerPodiumTitle", "game.finalPodium"],
  ["#customPlaylistTitle", "game.customPlaylist"],
  ["#customPlaylistHint", "game.customPlaylistHint"],
  ["label[for='customPlaylistInput']", "game.customPlaylistUrl"],
  ["#impostorTitle", "impostor.title"],
  ["#impostorSubtitle", "impostor.subtitle"],
  ["#impostorCreateForm h2", "impostor.createRoom"],
  ["#impostorJoinForm h2", "impostor.joinRoom"],
  ["#impostorCreateForm .impostor-config-grid label:nth-child(1) span", "impostor.players"],
  ["#impostorCreateForm .impostor-config-grid label:nth-child(2) span", "impostor.impostors"],
  ["#impostorWordSetTitle", "impostor.wordSet"],
  ["#impostorWordSetHint", "impostor.wordSetHint"],
  ["#impostorCreateForm .impostor-toggle span", "impostor.hintForImpostors"],
  ["#impostorCreateWordSet option[value='general']", "impostor.generalWords"],
  ["#impostorCreateWordSet option[value='celebrities']", "impostor.celebritiesWords"],
  ["[data-impostor-word-set='general'] strong", "impostor.generalWords"],
  ["[data-impostor-word-set='celebrities'] strong", "impostor.celebritiesWords"],
  ["#impostorRoomText", "impostor.room"],
  ["#impostorRoleLabel", "impostor.yourRole"],
  ["#impostorGuessForm h2", "impostor.guessTitle"],
  ["#impostorVotePopupTitle", "impostor.popup.voteTitle"],
  ["#impostorEventTitle", "impostor.notice"]
];
const STATIC_DIRECT_TEXT_TARGETS = [
  [".audio-options label", "audio.concurrency"]
];
const STATIC_BUTTON_TARGETS = [
  ["[data-view-target='generatorView']", "nav.generator"],
  ["[data-view-target='converterView']", "nav.converter"],
  ["[data-view-target='audioView']", "nav.audio"],
  ["[data-view-target='gameView']", "nav.game"],
  ["[data-view-target='impostorView']", "nav.impostor"],
  ["#submitButton", "generator.generate"],
  ["#clearButton", "common.clear"],
  ["#copyButton", "common.copyCsv"],
  ["#convertButton", "converter.convert"],
  ["#clearConverterButton", "common.clear"],
  ["#copyConvertedButton", "common.copyLinks"],
  ["#audioButton", "audio.generate"],
  ["#clearAudioButton", "common.clear"],
  ["#retryAudioButton", "audio.retryFailed"],
  ["#resumeAudioButton", "audio.resume"],
  ["[data-setup-mode='daily']", "game.daily"],
  ["[data-setup-mode='ten']", "game.tenSongs"],
  ["[data-start-mode='intro']", "game.intro"],
  ["[data-start-mode='random']", "game.randomMoment"],
  ["[data-difficulty-mode='normal']", "game.difficultyNormal"],
  ["[data-difficulty-mode='pro']", "game.difficultyPro"],
  ["[data-player-mode='solo']", "game.solo"],
  ["[data-player-mode='multiplayer']", "game.multiplayer"],
  ["#instructionsButton", "game.instructions"],
  ["#createRoomButton", "game.createRoom"],
  ["#inviteLinkButton", "game.copyInviteLink"],
  ["#inviteJoinButton", "game.joinRoomAction"],
  ["#confirmCategoryButton", "game.confirmCategory"],
  ["#backToChallengeButton", "common.back"],
  ["#changeChallengeButton", "game.changeChallenge"],
  ["#playClipButton", "game.play"],
  ["#skipClipButton", "game.skip"],
  ["#guessButton", "game.guess"],
  ["#showSongsButton", "game.allSongs"],
  ["#shareButton", "game.share"],
  ["#nextSongButton", "game.nextSong"],
  ["#restartRunButton", "game.restart"],
  ["#summaryRestartButton", "game.playAgain"],
  ["#popupNextButton", "game.nextSong"],
  ["#popupSummaryButton", "game.summary"],
  ["#popupCloseButton", "common.close"],
  ["#songsPopupCloseButton", "common.close"],
  ["#leaderboardButton", "game.leaderboard"],
  ["#leaderboardSubmitButton", "game.saveScore"],
  ["#leaderboardPopupCloseButton", "common.close"],
  ["#joinRoomButton", "game.joinRoomAction"],
  ["#multiplayerPodiumCloseButton", "common.close"],
  ["#customPlaylistCloseButton", "common.close"],
  ["#customPlaylistLoadButton", "game.loadPlaylist"],
  ["#impostorChooseCreate", "impostor.createRoom"],
  ["#impostorChooseJoin", "impostor.joinRoom"],
  ["#impostorCreateForm [type='submit']", "impostor.createRoom"],
  ["#impostorJoinForm [type='submit']", "impostor.joinRoom"],
  ["#impostorCreateForm [data-impostor-back]", "common.back"],
  ["#impostorJoinForm [data-impostor-back]", "common.back"],
  ["#impostorShareButton", "impostor.shareLink"],
  ["#impostorRestartButton", "impostor.restart"],
  ["#impostorLeaveButton", "impostor.leaveMenu"],
  ["#impostorVoteButton", "impostor.vote"],
  ["#impostorGuessButton", "impostor.guessWord"],
  ["#impostorGuessForm button[type='submit']", "impostor.guessWord"],
  ["#impostorVotePopupClose", "common.close"],
  ["#impostorEventClose", "common.close"],
  ["#impostorGuessPopupClose", "common.close"]
];
const STATIC_ATTR_TARGETS = [
  [".title-bar", "aria-label", "aria.appTitle"],
  [".top-nav", "aria-label", "aria.mainMenu"],
  ["#languageButton", "aria-label", "aria.language"],
  ["#mobileNavMoreButton", "aria-label", "nav.more"],
  [".csv-panel", "aria-label", "generator.csvResult"],
  ["#generatorView .queue", "aria-label", "generator.generatedLinks"],
  ["#converterView .queue", "aria-label", "converter.convertedLinks"],
  ["#audioView .queue", "aria-label", "audio.processingStatus"],
  ["#gameSetup", "aria-label", "game.setupAria"],
  ["#groupSetup", "aria-label", "game.chooseArtist"],
  ["#groupButtons", "aria-label", "game.artistsAria"],
  ["#createRoomName", "placeholder", "game.roomName"],
  ["#joinRoomName", "placeholder", "game.roomName"],
  ["#createPlayerName", "placeholder", "game.playerNameShort"],
  ["#joinPlayerName", "placeholder", "game.playerNameShort"],
  ["#invitePlayerName", "placeholder", "game.playerNameShort"],
  ["#createPlayerEmoji", "aria-label", "game.playerEmoji"],
  ["#joinPlayerEmoji", "aria-label", "game.playerEmoji"],
  ["#invitePlayerEmoji", "aria-label", "game.playerEmoji"],
  ["#artistLoading", "aria-label", "game.loadingArtistSongs"],
  ["#gameControls", "aria-label", "game.controls"],
  [".score-strip", "aria-label", "game.score"],
  [".player-panel", "aria-label", "game.player"],
  ["#clipSteps", "aria-label", "game.availableLengths"],
  [".guess-panel", "aria-label", "game.guessing"],
  ["#guessInput", "placeholder", "game.guessPlaceholder"],
  ["#guessList", "aria-label", "game.guesses"],
  ["#leaderboardName", "placeholder", "game.playerName"],
  ["#leaderboardTicker", "aria-label", "game.topTenLeaderboard"],
  ["#createRoomName", "placeholder", "game.roomName"],
  ["#joinRoomName", "placeholder", "game.roomName"],
  ["#createPlayerName", "placeholder", "game.playerNameShort"],
  ["#joinPlayerName", "placeholder", "game.playerNameShort"],
  ["#invitePlayerName", "placeholder", "game.playerNameShort"],
  ["#impostorLobby", "aria-label", "impostor.lobby"],
  ["#impostorCreateRoomName", "placeholder", "impostor.roomName"],
  ["#impostorJoinRoomName", "placeholder", "impostor.roomName"],
  ["#impostorCreatePlayerName", "placeholder", "impostor.yourName"],
  ["#impostorJoinPlayerName", "placeholder", "impostor.yourName"],
  ["#impostorCreateEmoji", "aria-label", "impostor.playerEmoji"],
  ["#impostorJoinEmoji", "aria-label", "impostor.playerEmoji"],
  ["#impostorCircle", "aria-label", "impostor.players"],
  ["#impostorGuessInput", "placeholder", "impostor.secretWord"]
];

let events = null;
let audioEvents = null;
let audioExpiryTimer = null;
let currentAudioJob = null;
let currentCsv = "";
let convertedLinks = [];
let groups = [];
let activeGroupId = "all";
let activeGroup = null;
let songs = [];
let songsCache = new Map();
let setupMode = "ten";
let clipStartMode = "random";
let difficultyMode = "normal";
let playerMode = "solo";
let gameMode = "daily";
let gamePhase = "challenge";
let answer = null;
let clipStartSeconds = 0;
let attemptIndex = 0;
let guesses = [];
let eliminatedSongIds = new Set();
let gameOver = false;
let won = false;
let runQueue = [];
let runClipStarts = [];
let runThumbnailPreloads = [];
let runPlanId = 0;
let preparedRunIndex = -1;
let preparedRunPromise = null;
let runIndex = 0;
let runResults = [];
let runComplete = false;
let leaderboardRunId = "";
let leaderboardSubmitted = false;
let multiplayerSession = null;
let multiplayerRoom = null;
let multiplayerPollTimer = null;
let multiplayerAdvanceTimer = null;
let roundPopupAutoCloseTimer = null;
let multiplayerReadyPending = false;
let multiplayerPodiumShown = false;
let multiplayerKnownPlayerIds = new Set();
let multiplayerKnownScores = new Map();
let impostorSession = null;
let impostorRoom = null;
let impostorPollTimer = null;
let impostorLastAssignmentId = "";
let impostorShownEventId = "";
let impostorLastVotesCast = 0;
let impostorOutcomeEventId = "";
let impostorAssignmentTimer = null;
let impostorOrbitFrame = null;
let impostorKnownPlayerIds = new Set();
let impostorChipScaleFrame = null;
let impostorChipResizeObserver = null;
let pendingMultiplayerKickTargetId = "";
let pendingImpostorKickTargetId = "";
let pendingResistanceKickTargetId = "";
let pendingMasterWordKickTargetId = "";
let resistanceSession = null;
let resistanceRoom = null;
let resistancePollTimer = null;
let resistanceShownEventId = "";
let resistanceKnownPlayerIds = new Set();
let masterWordSession = null;
let masterWordRoom = null;
let masterWordPollTimer = null;
let masterWordShownEventId = "";
let masterWordShownResultKey = "";
let masterWordKnownPlayerIds = new Set();
let scoreboardSession = null;
let scoreboardRoom = null;
let scoreboardPollTimer = null;
let scoreboardSelectedRoom = null;
let scoreboardAvailableRooms = [];
let scoreboardEditingCell = null;
let scoreboardEditingPlayerId = "";
let scoreboardEditingRoundIndex = -1;
let scoreboardBulkRole = "";
let scoreboardShownResultId = "";
let scoreboardKnownScoreEventIds = new Set();
let gameCompleteFlybyPending = false;
let inviteRoomName = "";
let youtubeApiPromise = null;
let playerReadyPromise = null;
let player = null;
let playerReady = false;
let currentPlayerVideoId = "";
let clipTimer = null;
let pendingClipSeconds = 0;
let clipPlaybackAuthorized = false;
let clipProgressFrame = null;
let clipProgressStartedAt = 0;
let clipProgressDurationMs = 0;
let gameSoundContext = null;
let feedbackAudio = null;
let categoryAudio = null;
let pendingCuePromise = null;
let currentLanguage = readStoredLanguage();

prepareGameSetupLayout();

navLinks.forEach((button) => {
  button.addEventListener("click", () => {
    showView(button.dataset.viewTarget);
    closeMobileNavMenu();
  });
});
homeMenuCards.forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.viewTarget));
});
titleHomeLinks.forEach((link) => {
  const goHome = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("impostor");
    url.searchParams.delete("resistance");
    url.searchParams.delete("masterword");
    url.searchParams.delete("scoreboard");
    window.history.replaceState({}, "", url);
    showView("homeView");
    closeMobileNavMenu();
  };
  link.addEventListener("click", goHome);
  link.addEventListener("keydown", (event) => {
    if (!["Enter", " "].includes(event.key)) return;
    event.preventDefault();
    goHome();
  });
});
mobileNavMoreButton.addEventListener("click", (event) => {
  event.stopPropagation();
  const open = navMenu.classList.toggle("mobile-menu-open");
  mobileNavMoreButton.setAttribute("aria-expanded", String(open));
});
document.addEventListener("click", (event) => {
  if (!navMenu.contains(event.target)) closeMobileNavMenu();
});

initLanguageSelector();
applyLanguage();
populateMultiplayerEmojis();
populateimpostorEmojis();
populateResistanceEmojis();
populateMasterWordEmojis();
syncMasterWordCreateOptions();
syncimpostorWordSetCards();
syncimpostorConfigLimits();
renderClipWaveTrack();
window.addEventListener("resize", syncClipTrackWidth);
window.addEventListener("resize", syncSongsPopupPosition);
window.addEventListener("resize", () => {
  if (impostorRoom && !document.querySelector("#impostorView")?.hidden) renderimpostorRoom(impostorRoom);
});
window.visualViewport?.addEventListener("resize", syncimpostorChipContentScale);
window.visualViewport?.addEventListener("resize", syncSongsPopupPosition);
window.visualViewport?.addEventListener("scroll", syncSongsPopupPosition);

setupModeButtons.forEach((button) => {
  button.addEventListener("click", () => setSetupMode(button.dataset.setupMode));
});

startModeButtons.forEach((button) => {
  button.addEventListener("click", () => setClipStartMode(button.dataset.startMode));
});

difficultyModeButtons.forEach((button) => {
  button.addEventListener("click", () => setDifficultyMode(button.dataset.difficultyMode));
});
playerModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPlayerMode(button.dataset.playerMode);
    if (playerMode === "solo") showGroupSetup();
  });
});

confirmChallengeButton?.addEventListener("click", showGroupSetup);
instructionsButton?.addEventListener("click", playGameEntryAudio);
createRoomButton?.addEventListener("click", handleCreateRoomSetup);
inviteLinkButton?.addEventListener("click", copyInviteLink);
confirmCategoryButton.addEventListener("click", confirmSelectedSongGroup);
joinRoomButton.addEventListener("click", joinMultiplayerRoom);
inviteJoinButton?.addEventListener("click", joinInviteRoom);
backToChallengeButton.addEventListener("click", showChallengeSetup);
changeChallengeButton.addEventListener("click", showChallengeSetup);
leaderboardButton.addEventListener("click", handleGameControlsAction);
playClipButton.addEventListener("click", playSongClip);
skipClipButton.addEventListener("click", skipGuess);
guessForm.addEventListener("submit", submitGuess);
guessInput.addEventListener("input", renderSuggestions);
guessInput.addEventListener("focus", renderSuggestions);
suggestionList.addEventListener("click", chooseSuggestion);
showSongsButton.addEventListener("click", showSongsPopup);
songsPopupCloseButton.addEventListener("click", hideSongsPopup);
leaderboardPopupCloseButton.addEventListener("click", hideLeaderboardPopup);
customPlaylistForm.addEventListener("submit", loadCustomPlaylist);
customPlaylistCloseButton.addEventListener("click", hideCustomPlaylistPopup);
customPlaylistPopup.addEventListener("click", (event) => {
  if (event.target === customPlaylistPopup) hideCustomPlaylistPopup();
});
songsPopup.addEventListener("click", (event) => {
  if (event.target === songsPopup) hideSongsPopup();
});
leaderboardPopup.addEventListener("click", (event) => {
  if (event.target === leaderboardPopup) hideLeaderboardPopup();
});
hostConfigPopup?.addEventListener("click", (event) => {
  if (event.target === hostConfigPopup) hideHostConfigPopup();
});
multiplayerPodiumPopup.addEventListener("click", (event) => {
  if (event.target === multiplayerPodiumPopup) hideMultiplayerPodium();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMobileNavMenu();
  if (event.key === "Escape" && !songsPopup.hidden) hideSongsPopup();
  if (event.key === "Escape" && !leaderboardPopup.hidden) hideLeaderboardPopup();
  if (event.key === "Escape" && hostConfigPopup && !hostConfigPopup.hidden) hideHostConfigPopup();
  if (event.key === "Escape" && !customPlaylistPopup.hidden) hideCustomPlaylistPopup();
  if (event.key === "Escape" && !multiplayerPodiumPopup.hidden) hideMultiplayerPodium();
  if (event.key === "Escape" && resistanceRoundPopup && !resistanceRoundPopup.hidden) hideResistanceRoundPopup();
  if (event.key === "Escape") closeScoreboardPopups();
});

function closeMobileNavMenu() {
  navMenu.classList.remove("mobile-menu-open");
  mobileNavMoreButton.setAttribute("aria-expanded", "false");
}
shareButton.addEventListener("click", shareResult);
nextSongButton.addEventListener("click", nextRunSong);
restartRunButton.addEventListener("click", () => startGame("ten"));
summaryRestartButton.addEventListener("click", () => startGame("ten"));
leaderboardForm.addEventListener("submit", submitLeaderboardScore);
popupCloseButton.addEventListener("click", () => closeCompletedRoundPopup());
popupNextButton.addEventListener("click", () => {
  hideRoundPopup();
  nextRunSong();
});
popupSummaryButton.addEventListener("click", () => closeCompletedRoundPopup());
multiplayerPodiumCloseButton.addEventListener("click", hideMultiplayerPodium);
hostConfigCloseButton?.addEventListener("click", hideHostConfigPopup);
window.addEventListener("pagehide", () => releaseMultiplayerRoomIfHost({ useBeacon: true }));
multiplayerPlayersList?.addEventListener("click", kickMultiplayerPlayer);
impostorCreateForm?.addEventListener("submit", createimpostorRoom);
impostorJoinForm?.addEventListener("submit", joinimpostorRoom);
impostorChooseCreate?.addEventListener("click", () => showimpostorForm("create"));
impostorChooseJoin?.addEventListener("click", () => showimpostorForm("join"));
impostorBackButtons.forEach((button) => button.addEventListener("click", showimpostorChoice));
impostorShareButton?.addEventListener("click", shareimpostorRoom);
impostorRestartButton?.addEventListener("click", restartimpostorGame);
impostorLeaveButton?.addEventListener("click", leaveimpostorToMenu);
impostorStartButton?.addEventListener("click", startimpostorGame);
impostorVoteButton?.addEventListener("click", showImpostorVotePopup);
impostorCircle?.addEventListener("click", kickimpostorPlayer);
impostorVoteList?.addEventListener("click", voteimpostorPlayer);
impostorEventMessage?.addEventListener("click", voteimpostorPlayer);
impostorGuessButton?.addEventListener("click", showImpostorGuessPopup);
impostorGuessForm?.addEventListener("submit", guessimpostorWord);
impostorCreatePlayerLimit?.addEventListener("input", syncimpostorConfigLimits);
impostorCreatePlayerLimit?.addEventListener("blur", syncimpostorConfigLimits);
impostorCreateimpostorCount?.addEventListener("input", syncimpostorConfigLimits);
impostorWordSetCards?.addEventListener("click", chooseimpostorWordSet);
window.addEventListener("pagehide", () => releaseimpostorRoomIfHost({ useBeacon: true }));
resistanceCreateForm?.addEventListener("submit", createResistanceRoom);
resistanceJoinForm?.addEventListener("submit", joinResistanceRoom);
resistanceChooseCreate?.addEventListener("click", () => showResistanceForm("create"));
resistanceChooseJoin?.addEventListener("click", () => showResistanceForm("join"));
resistanceBackButtons.forEach((button) => button.addEventListener("click", showResistanceChoice));
resistanceShareButton?.addEventListener("click", shareResistanceRoom);
resistanceRestartButton?.addEventListener("click", restartResistanceGame);
resistanceLeaveButton?.addEventListener("click", leaveResistanceToMenu);
resistanceStartButton?.addEventListener("click", startResistanceGame);
resistancePlayers?.addEventListener("click", kickResistancePlayer);
resistanceTeamOptions?.addEventListener("change", syncResistanceTeamSelection);
resistanceProposeButton?.addEventListener("click", proposeResistanceTeam);
resistanceApproveButton?.addEventListener("click", () => voteResistanceTeam(true));
resistanceRejectButton?.addEventListener("click", () => voteResistanceTeam(false));
resistanceSuccessButton?.addEventListener("click", () => voteResistanceMission(false));
resistanceSabotageButton?.addEventListener("click", () => voteResistanceMission(true));
resistanceMissionTrack?.addEventListener("click", showResistanceRoundPopup);
resistanceRoundPopupClose?.addEventListener("click", hideResistanceRoundPopup);
resistanceRoundPopup?.addEventListener("click", (event) => {
  if (event.target === resistanceRoundPopup) hideResistanceRoundPopup();
});
window.addEventListener("pagehide", () => releaseResistanceRoomIfHost({ useBeacon: true }));
masterWordCreateForm?.addEventListener("submit", createMasterWordRoom);
masterWordJoinForm?.addEventListener("submit", joinMasterWordRoom);
masterWordChooseCreate?.addEventListener("click", () => showMasterWordForm("create"));
masterWordChooseJoin?.addEventListener("click", () => showMasterWordForm("join"));
masterWordBackButtons.forEach((button) => button.addEventListener("click", showMasterWordChoice));
masterWordRoundModeButtons.forEach((button) => button.addEventListener("click", () => setMasterWordMode("round", button.dataset.masterwordRoundMode)));
masterWordAttemptModeButtons.forEach((button) => button.addEventListener("click", () => setMasterWordMode("attempt", button.dataset.masterwordAttemptMode)));
masterWordShareButton?.addEventListener("click", shareMasterWordRoom);
masterWordRestartButton?.addEventListener("click", restartMasterWordGame);
masterWordLeaveButton?.addEventListener("click", leaveMasterWordToMenu);
masterWordStartButton?.addEventListener("click", startMasterWordGame);
masterWordPlayers?.addEventListener("click", kickMasterWordPlayer);
masterWordClueForm?.addEventListener("submit", submitMasterWordClues);
masterWordClueInputs?.addEventListener("beforeinput", restrictMasterWordClueInput);
masterWordClueInputs?.addEventListener("input", sanitizeMasterWordClueInput);
masterWordGuessForm?.addEventListener("submit", guessMasterWord);
masterWordSkipButton?.addEventListener("click", skipMasterWord);
masterWordResultClose?.addEventListener("click", hideMasterWordResultPopup);
masterWordResultPopup?.addEventListener("click", (event) => {
  if (event.target === masterWordResultPopup) hideMasterWordResultPopup();
});
window.addEventListener("pagehide", () => releaseMasterWordRoomIfHost({ useBeacon: true }));
scoreboardCreateForm?.addEventListener("submit", createScoreboardRoom);
scoreboardChooseCreate?.addEventListener("click", () => showScoreboardLobbyPanel("create"));
scoreboardChooseJoin?.addEventListener("click", () => showScoreboardLobbyPanel("join"));
scoreboardRefreshRoomsButton?.addEventListener("click", loadScoreboardRooms);
scoreboardBackButtons.forEach((button) => button.addEventListener("click", showScoreboardChoice));
scoreboardRoomList?.addEventListener("click", selectScoreboardRoom);
scoreboardJoinPopupClose?.addEventListener("click", () => hideScoreboardPopup(scoreboardJoinPopup));
scoreboardSpectateButton?.addEventListener("click", joinScoreboardAsSpectator);
scoreboardNicknameJoinForm?.addEventListener("submit", joinScoreboardWithNickname);
scoreboardShareButton?.addEventListener("click", shareScoreboardRoom);
scoreboardViewerLogButton?.addEventListener("click", showScoreboardLog);
scoreboardHistoryButton?.addEventListener("click", showScoreboardHistory);
scoreboardSettingsButton?.addEventListener("click", () => showScoreboardPopup(scoreboardSettingsPopup));
scoreboardSettingsClose?.addEventListener("click", () => hideScoreboardPopup(scoreboardSettingsPopup));
scoreboardLogButton?.addEventListener("click", showScoreboardLog);
scoreboardLogClose?.addEventListener("click", () => hideScoreboardPopup(scoreboardLogPopup));
scoreboardManagePlayersButton?.addEventListener("click", showScoreboardPlayersPopup);
scoreboardAddRoundButton?.addEventListener("click", addScoreboardRound);
scoreboardPreviousRoundButton?.addEventListener("click", () => changeScoreboardCurrentRound("previous"));
scoreboardNextRoundButton?.addEventListener("click", () => changeScoreboardCurrentRound("next"));
scoreboardSortOrderButton?.addEventListener("click", toggleScoreboardSortOrder);
scoreboardResetButton?.addEventListener("click", () => showScoreboardPopup(scoreboardConfirmPopup));
scoreboardFinishButton?.addEventListener("click", finishScoreboardGame);
scoreboardLeaveButton?.addEventListener("click", leaveScoreboardToMenu);
scoreboardTable?.addEventListener("click", handleScoreboardTableClick);
scoreboardPlayersPopupClose?.addEventListener("click", () => hideScoreboardPopup(scoreboardPlayersPopup));
scoreboardPlayersForm?.addEventListener("submit", saveScoreboardPlayers);
scoreboardPlayerCount?.addEventListener("input", syncScoreboardPlayerNameFields);
scoreboardAddPlayerButton?.addEventListener("click", addScoreboardPlayerNameField);
scoreboardPlayerNameFields?.addEventListener("click", removeScoreboardPlayerNameField);
scoreboardCellPopupClose?.addEventListener("click", () => hideScoreboardPopup(scoreboardCellPopup));
scoreboardCellForm?.addEventListener("submit", saveScoreboardCell);
scoreboardClearCellButton?.addEventListener("click", clearScoreboardCell);
scoreboardPlayerPopupClose?.addEventListener("click", () => hideScoreboardPopup(scoreboardPlayerPopup));
scoreboardPlayerDetailsClose?.addEventListener("click", () => hideScoreboardPopup(scoreboardPlayerDetailsPopup));
scoreboardPlayerForm?.addEventListener("submit", saveScoreboardPlayer);
scoreboardDeletePlayerButton?.addEventListener("click", deleteScoreboardPlayer);
scoreboardRoundPopupClose?.addEventListener("click", () => hideScoreboardPopup(scoreboardRoundPopup));
scoreboardRoundForm?.addEventListener("submit", applyScoreboardRoundScore);
scoreboardBulkCrewButton?.addEventListener("click", () => toggleScoreboardBulkRole("crew"));
scoreboardBulkTraitorButton?.addEventListener("click", () => toggleScoreboardBulkRole("traitor"));
scoreboardSelectAllPlayers?.addEventListener("click", () => setScoreboardRoundSelection(true));
scoreboardClearPlayerSelection?.addEventListener("click", () => setScoreboardRoundSelection(false));
scoreboardDeleteRoundButton?.addEventListener("click", deleteScoreboardRound);
scoreboardSaveRoundWinnerButton?.addEventListener("click", saveScoreboardRoundWinner);
scoreboardConfirmClose?.addEventListener("click", () => hideScoreboardPopup(scoreboardConfirmPopup));
scoreboardCancelResetButton?.addEventListener("click", () => hideScoreboardPopup(scoreboardConfirmPopup));
scoreboardConfirmResetButton?.addEventListener("click", resetScoreboardScores);
scoreboardPodiumClose?.addEventListener("click", () => hideScoreboardPopup(scoreboardPodiumPopup));
scoreboardNewGameButton?.addEventListener("click", restartScoreboardGame);
scoreboardNextGameButton?.addEventListener("click", startNewScoreboardGame);
scoreboardFinishPopupClose?.addEventListener("click", () => hideScoreboardPopup(scoreboardFinishPopup));
scoreboardFinishCurrentButton?.addEventListener("click", () => finishScoreboard("finish"));
scoreboardFinishAllButton?.addEventListener("click", () => finishScoreboard("finish-all"));
scoreboardHistoryClose?.addEventListener("click", () => hideScoreboardPopup(scoreboardHistoryPopup));
[scoreboardSettingsPopup, scoreboardLogPopup, scoreboardJoinPopup, scoreboardPlayersPopup, scoreboardCellPopup, scoreboardPlayerPopup, scoreboardPlayerDetailsPopup, scoreboardRoundPopup, scoreboardConfirmPopup, scoreboardPodiumPopup, scoreboardFinishPopup, scoreboardHistoryPopup]
  .filter(Boolean)
  .forEach((popup) => popup.addEventListener("click", (event) => {
    if (event.target === popup) hideScoreboardPopup(popup);
  }));
window.addEventListener("pagehide", () => releaseScoreboardRoomIfHost({ useBeacon: true }));
window.addEventListener("resize", updateViewportChromeVars);
impostorVotePopupClose?.addEventListener("click", hideImpostorVotePopup);
impostorEventClose?.addEventListener("click", hideImpostorEventPopup);
impostorVotePopup?.addEventListener("click", (event) => {
  dismissImpostorPopupOnClick(event, hideImpostorVotePopup);
});
impostorEventPopup?.addEventListener("click", (event) => {
  dismissImpostorPopupOnClick(event, hideImpostorEventPopup);
});
impostorGuessPopupClose?.addEventListener("click", hideImpostorGuessPopup);
impostorGuessPopup?.addEventListener("click", (event) => {
  dismissImpostorPopupOnClick(event, hideImpostorGuessPopup);
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  closeEvents();
  setGeneratorBusy(true);
  jobMessage.textContent = t("generator.queueing");

  try {
    const response = await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: input.value })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || t("generator.jobFailed"));
    renderJob(payload);
    watchJob(payload.id);
  } catch (error) {
    jobMessage.textContent = error.message;
    setGeneratorBusy(false);
  }
});

clearButton.addEventListener("click", () => {
  input.value = "";
  closeEvents();
  renderEmpty();
});

copyButton.addEventListener("click", async () => {
  await navigator.clipboard.writeText(currentCsv);
  flashButton(copyButton, t("common.copied"), t("common.copyCsv"));
});

items.addEventListener("click", copyLinkFromButton);
convertedItems.addEventListener("click", copyLinkFromButton);

converterForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setConverterBusy(true);
  converterMessage.textContent = t("converter.converting");
  convertedItems.replaceChildren();
  convertedLinks = [];

  try {
    const response = await fetch("/api/convert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: converterInput.value,
        target: targetPlatform.value
      })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || t("converter.failed"));
    renderConversion(payload);
  } catch (error) {
    converterMessage.textContent = error.message;
    converterTitleText.textContent = t("converter.failed");
    converterCount.textContent = t("converter.links", { count: 0 });
    setConverterProgress(100);
    copyConvertedButton.hidden = true;
  } finally {
    setConverterBusy(false);
  }
});

clearConverterButton.addEventListener("click", () => {
  converterInput.value = "";
  renderEmptyConversion();
});

copyConvertedButton.addEventListener("click", async () => {
  await navigator.clipboard.writeText(convertedLinks.join("\n"));
  flashButton(copyConvertedButton, t("common.copied"), t("common.copyLinks"));
});

audioForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  closeAudioEvents();
  setAudioBusy(true);
  audioTitleText.textContent = t("audio.creatingJob");
  audioMessage.textContent = t("audio.queueing");
  audioExpiry.textContent = "";
  audioDownloadLink.hidden = true;
  audioDownloadLink.removeAttribute("href");
  retryAudioButton.hidden = true;
  resumeAudioButton.hidden = true;
  audioItems.replaceChildren();

  try {
    const response = await fetch("/api/audio/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: audioInput.value,
        concurrency: audioConcurrency.value
      })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || t("audio.failed"));
    renderAudioJob(payload);
    watchAudioJob(payload.id);
  } catch (error) {
    audioTitleText.textContent = t("audio.failed");
    audioMessage.textContent = error.message;
    audioExpiry.textContent = "";
    setAudioProgress(100);
    audioBar.classList.remove("is-active");
    setAudioBusy(false);
  }
});

clearAudioButton.addEventListener("click", () => {
  audioInput.value = "";
  audioConcurrency.value = "2";
  closeAudioEvents();
  stopAudioExpiryTimer();
  renderEmptyAudio();
});

retryAudioButton.addEventListener("click", async () => {
  if (!currentAudioJob?.id) return;
  closeAudioEvents();
  setAudioBusy(true);
  retryAudioButton.disabled = true;
  audioMessage.textContent = t("audio.retrying");

  try {
    const response = await fetch(`/api/audio/jobs/${currentAudioJob.id}/retry`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ concurrency: audioConcurrency.value })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || t("audio.retryFailed"));
    renderAudioJob(payload);
    watchAudioJob(payload.id);
  } catch (error) {
    audioMessage.textContent = error.message;
    audioBar.classList.remove("is-active");
    setAudioBusy(false);
    retryAudioButton.disabled = false;
  }
});

resumeAudioButton.addEventListener("click", async () => {
  if (!currentAudioJob?.id) return;
  closeAudioEvents();
  setAudioBusy(true);
  resumeAudioButton.disabled = true;
  audioMessage.textContent = t("audio.resuming");

  try {
    const response = await fetch(`/api/audio/jobs/${currentAudioJob.id}/resume`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ concurrency: audioConcurrency.value })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || t("audio.resume"));
    renderAudioJob(payload);
    watchAudioJob(payload.id);
  } catch (error) {
    audioMessage.textContent = error.message;
    audioBar.classList.remove("is-active");
    setAudioBusy(false);
    resumeAudioButton.disabled = false;
  }
});

function initLanguageSelector() {
  if (!languageSelector || !languageButton || !languageMenu) return;

  languageButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const expanded = languageButton.getAttribute("aria-expanded") === "true";
    setLanguageMenuOpen(!expanded);
  });

  languageOptionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.languageOption;
      if (!SUPPORTED_LANGUAGES.includes(language) || language === currentLanguage) {
        setLanguageMenuOpen(false);
        return;
      }
      saveLanguage(language);
      window.location.reload();
    });
  });

  document.addEventListener("click", (event) => {
    if (!languageSelector.contains(event.target)) setLanguageMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setLanguageMenuOpen(false);
  });
}

function setLanguageMenuOpen(value) {
  if (!languageButton || !languageMenu) return;
  languageButton.setAttribute("aria-expanded", String(value));
  languageMenu.hidden = !value;
}

function saveLanguage(language) {
  currentLanguage = language;
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Language selection still works for this page load.
  }
}

function readStoredLanguage() {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return SUPPORTED_LANGUAGES.includes(stored) ? stored : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

function prepareGameSetupLayout() {
  if (!gameSetup || !groupSetup) return;

  if (!setupRoomLabel) {
    setupRoomLabel = document.createElement("div");
    setupRoomLabel.id = "setupRoomLabel";
    setupRoomLabel.className = "setup-room-label";
    setupRoomLabel.hidden = true;
    groupSetup.prepend(setupRoomLabel);
  }

  if (!inviteLinkButton) {
    inviteLinkButton = document.createElement("button");
    inviteLinkButton.type = "button";
    inviteLinkButton.id = "inviteLinkButton";
    inviteLinkButton.className = "secondary invite-link-button";
    inviteLinkButton.hidden = true;
    confirmCategoryButton.after(inviteLinkButton);
  }

  if (!inviteJoinSetup) {
    inviteJoinSetup = document.createElement("section");
    inviteJoinSetup.id = "inviteJoinSetup";
    inviteJoinSetup.className = "invite-join-setup";
    inviteJoinSetup.hidden = true;
    inviteJoinSetup.innerHTML = `
      <div class="section-heading">
        <h2></h2>
        <span></span>
      </div>
      <strong id="inviteRoomLabel" class="invite-room-label"></strong>
      <div class="player-identity-row invite-identity-row">
        <select id="invitePlayerEmoji"></select>
        <input id="invitePlayerName" maxlength="10" placeholder="Player name">
      </div>
      <button type="button" id="inviteJoinButton">Join room</button>
      <div id="inviteJoinMessage" class="message"></div>
    `;
    gameSetup.after(inviteJoinSetup);
    inviteRoomLabel = inviteJoinSetup.querySelector("#inviteRoomLabel");
    invitePlayerEmoji = inviteJoinSetup.querySelector("#invitePlayerEmoji");
    invitePlayerName = inviteJoinSetup.querySelector("#invitePlayerName");
    inviteJoinButton = inviteJoinSetup.querySelector("#inviteJoinButton");
    inviteJoinMessage = inviteJoinSetup.querySelector("#inviteJoinMessage");
  }

  if (!hostConfigPopup) {
    hostConfigPopup = document.createElement("section");
    hostConfigPopup.id = "hostConfigPopup";
    hostConfigPopup.className = "songs-popup host-config-popup";
    hostConfigPopup.hidden = true;
    hostConfigPopup.setAttribute("aria-modal", "true");
    hostConfigPopup.setAttribute("role", "dialog");
    hostConfigPopup.setAttribute("aria-labelledby", "hostConfigTitle");
    hostConfigPopup.innerHTML = `
      <div class="songs-popup-card host-config-card">
        <div class="songs-popup-head">
          <div>
            <h2 id="hostConfigTitle"></h2>
            <span id="hostConfigHint"></span>
          </div>
          <button type="button" id="hostConfigCloseButton" class="secondary compact-button"></button>
        </div>
        <dl id="hostConfigList" class="host-config-list"></dl>
      </div>
    `;
    document.querySelector("#gameView")?.append(hostConfigPopup);
    hostConfigList = hostConfigPopup.querySelector("#hostConfigList");
    hostConfigCloseButton = hostConfigPopup.querySelector("#hostConfigCloseButton");
  }

  const setupRows = Array.from(gameSetup.querySelectorAll(":scope > .setup-row"));
  const configRows = setupRows.slice(0, 3);
  const groupHeading = groupSetup.querySelector(".section-heading");
  configRows.forEach((row) => {
    if (groupHeading) groupSetup.insertBefore(row, groupHeading);
  });

  const playerRow = gameSetup.querySelector(":scope > .setup-row");
  if (playerRow && !instructionsButton) {
    instructionsButton = document.createElement("button");
    instructionsButton.type = "button";
    instructionsButton.id = "instructionsButton";
    instructionsButton.className = "secondary";
    instructionsButton.textContent = "Instructions";
    playerRow.before(instructionsButton);
  }

  const createForm = multiplayerSetup?.querySelector(".multiplayer-form");
  if (createForm && !createRoomButton) {
    createRoomButton = document.createElement("button");
    createRoomButton.type = "button";
    createRoomButton.id = "createRoomButton";
    createRoomButton.textContent = "Create room";
    const hint = createForm.querySelector(":scope > span");
    if (hint) hint.replaceWith(createRoomButton);
    else createForm.append(createRoomButton);
  }

  confirmChallengeButton?.remove();
}

function handleCreateRoomSetup() {
  if (!validateCreateRoomDraft()) return;
  updateSetupRoomLabel();
  showGroupSetup();
}

function validateCreateRoomDraft() {
  const roomName = createRoomName.value.trim();
  const playerName = createPlayerName.value.trim();
  createRoomName.value = roomName;
  createPlayerName.value = playerName;
  if (roomName && playerName) {
    multiplayerSetupMessage.textContent = "";
    return true;
  }
  multiplayerSetupMessage.textContent = t("game.roomAndPlayerRequired");
  if (!roomName) createRoomName.focus();
  else createPlayerName.focus();
  return false;
}

function updateSetupRoomLabel() {
  if (!setupRoomLabel) return;
  const roomName = createRoomName.value.trim();
  setupRoomLabel.textContent = playerMode === "multiplayer" && roomName ? `${t("game.roomNameLabel")}: ${roomName}` : "";
  setupRoomLabel.hidden = !setupRoomLabel.textContent;
  if (inviteLinkButton) inviteLinkButton.hidden = setupRoomLabel.hidden;
}

async function copyInviteLink() {
  await copyRoomInviteLink(createRoomName.value, inviteLinkButton);
}

async function copyActiveRoomInviteLink() {
  await copyRoomInviteLink(multiplayerSession?.roomName || createRoomName.value, leaderboardButton);
}

async function copyRoomInviteLink(roomNameValue, button) {
  const roomName = String(roomNameValue || "").trim();
  if (!roomName || !button) return;
  const url = new URL(window.location.href);
  url.searchParams.set("room", roomName);
  await navigator.clipboard.writeText(url.toString());
  setButtonLabel(button, t("common.copied"));
  setTimeout(() => setButtonLabel(button, getGameControlButtonLabel(button)), 1200);
}

function handleGameControlsAction() {
  if (playerMode === "multiplayer") {
    void copyActiveRoomInviteLink();
    return;
  }
  showLeaderboardPopup();
}

function updateGameControlsActionButton() {
  if (playerMode === "multiplayer") {
    setButtonLabel(leaderboardButton, t("game.copyInviteLink"));
    return;
  }
  leaderboardButton.replaceChildren(document.createTextNode(t("game.leaderboard")));
}

function getGameControlButtonLabel(button) {
  if (button === leaderboardButton && playerMode !== "multiplayer") return t("game.leaderboard");
  return t("game.copyInviteLink");
}

function populateimpostorEmojis() {
  [impostorCreateEmoji, impostorJoinEmoji].filter(Boolean).forEach((select, selectIndex) => {
    select.replaceChildren(...impostor_EMOJIS.map((emoji, index) => {
      const option = document.createElement("option");
      option.value = emoji;
      option.textContent = emoji;
      option.selected = index === selectIndex;
      return option;
    }));
  });
}

function chooseimpostorWordSet(event) {
  const card = event.target.closest("[data-impostor-word-set]");
  if (!card || !impostorCreateWordSet) return;
  impostorCreateWordSet.value = card.dataset.impostorWordSet || "general";
  syncimpostorWordSetCards();
}

function syncimpostorWordSetCards() {
  if (!impostorWordSetCards || !impostorCreateWordSet) return;
  const selected = impostorCreateWordSet.value || "general";
  impostorWordSetCards.querySelectorAll("[data-impostor-word-set]").forEach((card) => {
    const key = card.dataset.impostorWordSet || "general";
    const meta = IMPOSTOR_WORD_SET_META[key] || IMPOSTOR_WORD_SET_META.general;
    card.classList.toggle("is-selected", key === selected);
    card.setAttribute("aria-pressed", String(key === selected));
    const icon = card.querySelector("span");
    const count = card.querySelector("small");
    if (icon) icon.textContent = meta.icon;
    if (count) count.textContent = t("impostor.wordCount", { count: meta.count });
  });
}

function readimpostorInteger(input) {
  const raw = String(input?.value ?? "").trim();
  if (!raw) return null;
  const number = Number(raw);
  if (!Number.isFinite(number)) return null;
  return Math.floor(number);
}

function syncimpostorConfigLimits() {
  if (!impostorCreatePlayerLimit || !impostorCreateimpostorCount) return;
  const playerLimit = readimpostorInteger(impostorCreatePlayerLimit);
  impostorCreatePlayerLimit.setCustomValidity("");
  impostorCreateimpostorCount.setCustomValidity("");
  if (playerLimit === null) {
    impostorCreateimpostorCount.removeAttribute("max");
    return;
  }
  if (playerLimit < 3) {
    impostorCreatePlayerLimit.setCustomValidity("Players must be 3 or more.");
    impostorCreateimpostorCount.removeAttribute("max");
    return;
  }
  const maximpostors = Math.max(1, Math.floor((playerLimit - 1) / 2));
  impostorCreateimpostorCount.max = String(maximpostors);
  const impostorCount = readimpostorInteger(impostorCreateimpostorCount);
  if (impostorCount !== null && impostorCount < 1) impostorCreateimpostorCount.setCustomValidity("Impostors must be 1 or more.");
  if (impostorCount !== null && impostorCount > maximpostors) impostorCreateimpostorCount.setCustomValidity(`Impostors must be between 1 and ${maximpostors} for ${playerLimit} players.`);
}

function getimpostorCreateConfig() {
  const playerLimit = readimpostorInteger(impostorCreatePlayerLimit);
  if (!playerLimit || playerLimit < 3) {
    impostorLobbyMessage.textContent = "Players must be 3 or more.";
    impostorCreatePlayerLimit?.focus();
    return null;
  }
  const maximpostors = Math.max(1, Math.floor((playerLimit - 1) / 2));
  const impostorCount = readimpostorInteger(impostorCreateimpostorCount);
  if (!impostorCount || impostorCount < 1 || impostorCount > maximpostors) {
    impostorLobbyMessage.textContent = `Impostors must be between 1 and ${maximpostors} for ${playerLimit} players.`;
    impostorCreateimpostorCount?.focus();
    return null;
  }
  return { playerLimit, impostorCount };
}

function showimpostorLobby() {
  if (!impostorLobby || !impostorGame) return;
  if (impostorSession) {
    impostorLobby.hidden = true;
    impostorGame.hidden = false;
    impostorLobbyTitle.hidden = true;
    if (impostorRoomHeader) impostorRoomHeader.hidden = false;
    renderimpostorRoom(impostorRoom);
    resetImpostorGameScroll();
    return;
  }
  impostorLobby.hidden = false;
  impostorGame.hidden = true;
  impostorLobbyTitle.hidden = false;
  if (impostorRoomHeader) impostorRoomHeader.hidden = true;
  impostorLobbyMessage.textContent = "";
  const inviteRoom = new URLSearchParams(window.location.search).get("impostor");
  if (inviteRoom) {
    impostorJoinRoomName.value = inviteRoom.trim();
    showimpostorForm("join");
    return;
  }
  showimpostorChoice();
}

function showimpostorChoice() {
  if (!impostorChoice || !impostorCreateForm || !impostorJoinForm) return;
  impostorChoice.hidden = false;
  impostorCreateForm.hidden = true;
  impostorJoinForm.hidden = true;
  impostorLobbyMessage.textContent = "";
}

function showimpostorForm(mode) {
  if (!impostorChoice || !impostorCreateForm || !impostorJoinForm) return;
  impostorChoice.hidden = true;
  impostorCreateForm.hidden = mode !== "create";
  impostorJoinForm.hidden = mode !== "join";
  impostorLobbyMessage.textContent = "";
  if (mode === "create") impostorCreateRoomName.focus();
  if (mode === "join") impostorJoinRoomName.focus();
}

async function createimpostorRoom(event) {
  event.preventDefault();
  impostorLobbyMessage.textContent = "";
  syncimpostorConfigLimits();
  const configInput = getimpostorCreateConfig();
  if (!configInput) return;
  const roomName = impostorCreateRoomName.value.trim();
  const playerName = impostorCreatePlayerName.value.trim();
  impostorCreateRoomName.value = roomName;
  impostorCreatePlayerName.value = playerName;
  try {
    const response = await fetch("/api/impostor/rooms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roomName,
        playerName,
        emoji: impostorCreateEmoji.value,
        config: {
          playerLimit: configInput.playerLimit,
          impostorCount: configInput.impostorCount,
          impostorHint: Boolean(impostorCreateHint?.checked),
          wordSet: impostorCreateWordSet?.value || "general"
        }
      })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "Could not create room");
    enterimpostorRoom(payload);
  } catch (error) {
    impostorLobbyMessage.textContent = error.message;
  }
}

async function joinimpostorRoom(event) {
  event.preventDefault();
  impostorLobbyMessage.textContent = "";
  const roomName = impostorJoinRoomName.value.trim();
  const playerName = impostorJoinPlayerName.value.trim();
  impostorJoinRoomName.value = roomName;
  impostorJoinPlayerName.value = playerName;
  try {
    const response = await fetch(`/api/impostor/rooms/${encodeURIComponent(roomName)}/join`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerName, emoji: impostorJoinEmoji.value })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "Could not join room");
    enterimpostorRoom(payload);
  } catch (error) {
    impostorLobbyMessage.textContent = error.message;
  }
}

function enterimpostorRoom(payload) {
  impostorRoom = payload;
  impostorSession = {
    roomName: payload.roomName,
    playerId: payload.player?.id,
    token: payload.player?.token,
    isHost: Boolean(payload.player?.isHost)
  };
  impostorLastAssignmentId = payload.eventId || "";
  impostorShownEventId = payload.eventId || "";
  impostorLastVotesCast = Number(payload.votesCast || 0);
  impostorOutcomeEventId = "";
  impostorKnownPlayerIds = new Set((payload.players || []).map((player) => player.id));
  impostorLobby.hidden = true;
  impostorGame.hidden = false;
  impostorLobbyTitle.hidden = true;
  if (impostorRoomHeader) impostorRoomHeader.hidden = false;
  impostorShareButton.hidden = !impostorSession.isHost;
  renderimpostorRoom(payload);
  resetImpostorGameScroll();
  startimpostorPolling();
  if (payload.status !== "lobby") announceImpostorEvent(payload, { force: true });
}

function resetImpostorGameScroll() {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.scrollingElement?.scrollTo?.({ top: 0, left: 0, behavior: "auto" });
      document.querySelector("#impostorView")?.scrollTo?.({ top: 0, left: 0, behavior: "auto" });
    });
  });
}

function startimpostorPolling() {
  clearInterval(impostorPollTimer);
  impostorPollTimer = window.setInterval(pollimpostorRoom, 1500);
}

async function pollimpostorRoom() {
  if (!impostorSession) return;
  try {
    const params = new URLSearchParams({ playerId: impostorSession.playerId, token: impostorSession.token });
    const response = await fetch(`/api/impostor/rooms/${encodeURIComponent(impostorSession.roomName)}?${params}`);
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "Room unavailable");
    if (!payload.player) {
      const url = new URL(window.location.href);
      url.searchParams.delete("impostor");
      window.history.replaceState({}, "", url);
      leaveimpostorRoom();
      showimpostorLobby();
      impostorLobbyMessage.textContent = t("impostor.sessionLost");
      return;
    }
    const previousVotesCast = Number(impostorRoom?.votesCast || impostorLastVotesCast || 0);
    const eventChanged = Boolean(impostorRoom && payload.eventId && payload.eventId !== impostorLastAssignmentId);
    const joinedPlayers = (payload.players || []).filter((player) => !impostorKnownPlayerIds.has(player.id));
    impostorRoom = payload;
    if (joinedPlayers.length && (payload.status || "lobby") === "lobby") playPlayerJoinedSound();
    if (!eventChanged && ["playing", "tiebreak"].includes(payload.status) && Number(payload.votesCast || 0) > previousVotesCast) {
      playimpostorAlarmSound("vote");
    }
    impostorLastVotesCast = Number(payload.votesCast || 0);
    impostorKnownPlayerIds = new Set((payload.players || []).map((player) => player.id));
    renderimpostorRoom(payload, { flash: eventChanged });
    if (eventChanged) {
      impostorLastAssignmentId = payload.eventId;
      announceImpostorEvent(payload);
    }
  } catch {
    // Polling can recover on the next tick.
  }
}

async function startimpostorGame() {
  if (!impostorSession) return;
  try {
    if (impostorStartButton) impostorStartButton.disabled = true;
    const response = await fetch(`/api/impostor/rooms/${encodeURIComponent(impostorSession.roomName)}/start`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId: impostorSession.playerId, token: impostorSession.token })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "Could not start game");
    impostorRoom = payload;
    impostorLastAssignmentId = payload.eventId || "";
    impostorLastVotesCast = Number(payload.votesCast || 0);
    renderimpostorRoom(payload, { flash: true });
    announceImpostorEvent(payload, { force: true });
  } catch (error) {
    if (impostorGameMessage) impostorGameMessage.textContent = error.message;
  } finally {
    if (impostorStartButton) impostorStartButton.disabled = false;
  }
}

async function restartimpostorGame() {
  if (!impostorSession?.isHost || !impostorRestartButton) return;
  closeAllImpostorPopups();
  impostorRestartButton.disabled = true;
  try {
    const response = await fetch(`/api/impostor/rooms/${encodeURIComponent(impostorSession.roomName)}/restart`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId: impostorSession.playerId, token: impostorSession.token })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "Could not restart game");
    impostorRoom = payload;
    impostorLastAssignmentId = payload.eventId || "";
    impostorLastVotesCast = Number(payload.votesCast || 0);
    renderimpostorRoom(payload, { flash: true });
    announceImpostorEvent(payload, { force: true });
  } catch (error) {
    if (impostorGameMessage) impostorGameMessage.textContent = error.message;
  } finally {
    impostorRestartButton.disabled = false;
  }
}

async function kickimpostorPlayer(event) {
  const button = event.target.closest("[data-kick-player-id]");
  if (!impostorSession?.isHost) return;
  const chip = event.target.closest(".impostor-chip[data-player-id]");
  if (!button && (!chip || chip.dataset.playerId === impostorSession.playerId || impostorRoom?.status !== "lobby")) return;
  event.preventDefault();
  showImpostorKickPopup(button?.dataset.kickPlayerId || chip.dataset.playerId);
}

function showImpostorKickPopup(targetPlayerId) {
  const target = (impostorRoom?.players || []).find((player) => player.id === targetPlayerId);
  if (!target) return;
  pendingImpostorKickTargetId = targetPlayerId;
  let popup = document.querySelector("#impostorKickPopup");
  if (!popup) {
    popup = document.createElement("section");
    popup.id = "impostorKickPopup";
    popup.className = "impostor-popup impostor-kick-popup";
    popup.setAttribute("role", "dialog");
    popup.setAttribute("aria-modal", "true");
    popup.innerHTML = `
      <div class="impostor-popup-card impostor-kick-popup-card">
        <header>
          <h2>Expulsar jugador</h2>
          <button type="button" class="secondary compact-button" data-impostor-kick-close>Cerrar</button>
        </header>
        <p></p>
        <div class="impostor-kick-popup-actions">
          <button type="button" class="secondary" data-impostor-kick-close>Cancelar</button>
          <button type="button" class="danger" data-impostor-kick-confirm>Expulsar</button>
        </div>
      </div>
    `;
    popup.addEventListener("click", (popupEvent) => {
      const confirmButton = popupEvent.target.closest("[data-impostor-kick-confirm]");
      if (confirmButton) {
        performImpostorKick(pendingImpostorKickTargetId, confirmButton);
        return;
      }
      if (popupEvent.target.closest("[data-impostor-kick-close]")) {
        hideImpostorKickPopup();
        return;
      }
      dismissImpostorPopupOnClick(popupEvent, hideImpostorKickPopup);
    });
    document.body.append(popup);
  }
  popup.querySelector("p").textContent = `¿Quieres expulsar a ${target.name || "este jugador"} de la sala?`;
  popup.hidden = false;
  document.body.classList.add("songs-popup-open");
}

function hideImpostorKickPopup() {
  const popup = document.querySelector("#impostorKickPopup");
  if (popup) popup.hidden = true;
  pendingImpostorKickTargetId = "";
  if (impostorVotePopup?.hidden && impostorEventPopup?.hidden && impostorGuessPopup?.hidden) document.body.classList.remove("songs-popup-open");
}

async function performImpostorKick(targetPlayerId, control = null) {
  if (!targetPlayerId || !impostorSession?.isHost) return;
  if (control) control.disabled = true;
  try {
    const response = await fetch(`/api/impostor/rooms/${encodeURIComponent(impostorSession.roomName)}/kick`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        playerId: impostorSession.playerId,
        token: impostorSession.token,
        targetPlayerId
      })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "Could not kick player");
    hideImpostorKickPopup();
    impostorRoom = payload;
    impostorKnownPlayerIds = new Set((payload.players || []).map((player) => player.id));
    renderimpostorRoom(payload);
  } catch (error) {
    if (impostorGameMessage) impostorGameMessage.textContent = error.message;
    if (control) control.disabled = false;
  }
}

async function voteimpostorPlayer(event) {
  const button = event.target.closest("[data-vote-player-id]");
  if (!button || !impostorSession) return;
  event.preventDefault();
  button.disabled = true;
  try {
    const response = await fetch(`/api/impostor/rooms/${encodeURIComponent(impostorSession.roomName)}/vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        playerId: impostorSession.playerId,
        token: impostorSession.token,
        targetPlayerId: button.dataset.votePlayerId
      })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "Could not vote");
    impostorRoom = payload;
    const eventChanged = Boolean(payload.eventId && payload.eventId !== impostorLastAssignmentId);
    impostorLastAssignmentId = payload.eventId || impostorLastAssignmentId;
    impostorLastVotesCast = Number(payload.votesCast || 0);
    renderimpostorRoom(payload, { flash: true });
    hideImpostorVotePopup();
    hideImpostorEventPopup();
    if (eventChanged) announceImpostorEvent(payload);
    else playimpostorAlarmSound("vote");
  } catch (error) {
    if (impostorGameMessage) impostorGameMessage.textContent = error.message;
    button.disabled = false;
  }
}

async function guessimpostorWord(event) {
  event.preventDefault();
  if (!impostorSession) return;
  const guess = impostorGuessInput.value.trim();
  if (!guess) return;
  try {
    const response = await fetch(`/api/impostor/rooms/${encodeURIComponent(impostorSession.roomName)}/guess`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId: impostorSession.playerId, token: impostorSession.token, guess })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "Could not guess");
    impostorGuessInput.value = "";
    impostorRoom = payload;
    const eventChanged = Boolean(payload.eventId && payload.eventId !== impostorLastAssignmentId);
    impostorLastAssignmentId = payload.eventId || impostorLastAssignmentId;
    impostorLastVotesCast = Number(payload.votesCast || 0);
    renderimpostorRoom(payload, { flash: true });
    hideImpostorGuessPopup();
    if (eventChanged) announceImpostorEvent(payload);
    else playimpostorAlarmSound("guess");
  } catch (error) {
    if (impostorGameMessage) impostorGameMessage.textContent = error.message;
  }
}

function renderimpostorRoom(room = impostorRoom, options = {}) {
  if (!room || !impostorCircle) return;
  const players = [...(room.players || [])].sort((a, b) => a.seatNumber - b.seatNumber);
  const config = room.config || {};
  const currentPlayer = room.player || players.find((player) => player.id === impostorSession?.playerId);
  const activePlayers = players.filter((player) => !player.eliminated);
  const isHost = Boolean(currentPlayer?.isHost && currentPlayer.id === impostorSession?.playerId);
  if (impostorSession) impostorSession.isHost = isHost;
  const status = room.status || "lobby";
  const votesCast = room.votesCast || 0;
  const votesNeeded = activePlayers.length;
  const seatCount = Math.max(1, players.length, Number(config.playerLimit) || 1);
  const compactImpostorLayout = window.matchMedia?.("(max-width: 760px)")?.matches;
  const playerColumns = compactImpostorLayout ? 1 : seatCount >= 5 ? 2 : 1;
  const playerRows = Math.max(1, Math.ceil(seatCount / playerColumns));
  const seatScale = Math.max(0.38, Math.min(0.95, 0.95 - Math.max(0, seatCount - 6) * 0.055 - Math.max(0, playerRows - 8) * 0.035));
  const maxNameLength = Math.max(1, ...players.map((player) => Array.from(player.name || "").length));
  const nameScale = Math.max(0.46, Math.min(1, 1 - Math.max(0, maxNameLength - 8) * 0.04 - Math.max(0, seatCount - 8) * 0.03));
  impostorCircle.style.setProperty("--seat-scale", seatScale.toFixed(2));
  impostorCircle.style.setProperty("--name-scale", nameScale.toFixed(2));
  impostorCircle.style.setProperty("--card-font-scale", Math.min(seatScale, nameScale).toFixed(2));
  impostorCircle.style.setProperty("--player-count", String(seatCount));
  impostorCircle.style.setProperty("--player-columns", String(playerColumns));
  impostorCircle.style.setProperty("--player-rows", String(playerRows));
  impostorRound.textContent = status === "lobby" ? `${players.length}/${config.playerLimit || "?"}` : String(room.roundIndex || 1);
  if (impostorRoundLabel) {
    impostorRoundLabel.textContent = status === "lobby" ? t("impostor.lobby") : status === "finished" ? t("impostor.result") : t("impostor.round");
  }
  if (impostorStartingPlayerChip) {
    const startingPlayerName = room.startingPlayerName || players.find((player) => player.starts)?.name || "";
    impostorStartingPlayerChip.hidden = status === "lobby" || !startingPlayerName;
    impostorStartingPlayerChip.textContent = currentPlayer?.starts ? t("impostor.youStart") : t("impostor.starts", { name: startingPlayerName });
  }
  if (impostorRoomLabel) impostorRoomLabel.textContent = t("impostor.roomLabel", { name: room.roomName || "" });
  impostorShareButton.hidden = !isHost;
  if (impostorRestartButton) {
    impostorRestartButton.hidden = !isHost || status === "lobby";
    impostorRestartButton.disabled = !isHost || players.length < 3;
  }
  if (options.flash) {
    impostorGame?.classList.add("is-impostor-flashing");
    window.setTimeout(() => impostorGame?.classList.remove("is-impostor-flashing"), impostor_ACTION_FLASH_MS);
  }
  if (impostorGameMessage) impostorGameMessage.textContent = getimpostorStatusMessage(room, currentPlayer);
  renderimpostorRoleCard(room, currentPlayer);
  renderimpostorPlayers(players, currentPlayer, status);
  renderimpostorActions(room, currentPlayer);
  if (impostorStartButton) {
    const canStart = isHost && status === "lobby" && players.length === Number(config.playerLimit || 0);
    impostorStartButton.hidden = status !== "lobby" || !isHost;
    impostorStartButton.disabled = !canStart;
    impostorStartButton.textContent = canStart ? "Start game" : `Waiting ${players.length}/${config.playerLimit || "?"}`;
  }
}

function getimpostorStatusMessage(room, currentPlayer) {
  const players = room.players || [];
  const config = room.config || {};
  if (room.status === "lobby") {
    return t("impostor.waitingPlayers", { current: players.length, total: config.playerLimit || "?" });
  }
  if (room.status === "finished") {
    const won = currentPlayer?.won;
    const result = room.winner === "impostors" ? t("impostor.impostorsWin") : t("impostor.crewWins");
    return `${result} ${won ? t("impostor.youWon") : t("impostor.youLost")}`;
  }
  const eventText = formatimpostorEvent(room.lastEvent);
  if (eventText) return eventText;
  if (room.status === "tiebreak") return t("impostor.tieStatus", { votes: room.votesCast || 0, total: room.activeCount || 0 });
  return t("impostor.playingStatus", { votes: room.votesCast || 0, total: room.activeCount || 0 });
}

function formatimpostorEvent(event) {
  if (!event?.type) return "";
  const role = event.role ? t(`impostor.role.${event.role}`) : "";
  if (event.type === "eliminated") return t("impostor.event.eliminated", { name: event.playerName, role });
  if (event.type === "tie") return t("impostor.event.tie", { names: event.names?.join(", ") || t("impostor.players") });
  if (event.type === "guess-win") return t("impostor.event.guessWin", { name: event.playerName, guess: event.guess || "" });
  if (event.type === "guess-fail") return t("impostor.event.guessFail", { name: event.playerName, guess: event.guess || "" });
  if (event.type === "start") {
    const starter = event.startingPlayerName ? ` ${t("impostor.starts", { name: event.startingPlayerName })}.` : "";
    return `${t("impostor.event.start")}${starter}`;
  }
  return "";
}

function formatimpostorGuessResult(event) {
  if (!event?.type) return "";
  if (event.type === "guess-win") return t("impostor.event.guessWinResult", { name: event.playerName || "-" });
  if (event.type === "guess-fail") return t("impostor.event.guessFailResult", { name: event.playerName || "-" });
  return "";
}

function renderimpostorRoleCard(room, currentPlayer) {
  if (!impostorRoleCard || !impostorRoleLabel || !impostorSecretWord || !impostorHintText) return;
  const showRole = room.status !== "lobby" && currentPlayer?.role;
  impostorRoleCard.hidden = !showRole;
  if (!showRole) return;
  impostorRoleCard.classList.toggle("is-impostor", currentPlayer.role === "impostor");
  impostorRoleCard.classList.toggle("is-eliminated", Boolean(currentPlayer.eliminated));
  const isImpostor = currentPlayer.role === "impostor";
  const detail = isImpostor
    ? t("impostor.hintPrefix", { value: currentPlayer.hint || t("impostor.popup.noHint") })
    : t("impostor.wordPrefix", { value: currentPlayer.word || t("impostor.secretWord") });
  impostorRoleLabel.textContent = isImpostor ? t("impostor.role.impostor") : t("impostor.role.crew");
  impostorSecretWord.textContent = detail;
  impostorHintText.textContent = currentPlayer.eliminated ? t("impostor.youAreOut") : currentPlayer.starts ? t("impostor.youStart") : "";
}

function renderimpostorPlayers(players, currentPlayer, status) {
  const revealAll = status === "finished";
  const canKick = impostorSession?.isHost && status === "lobby";
  impostorCircle.replaceChildren(...players.map((player) => {
    const chip = document.createElement("article");
    chip.className = "impostor-chip";
    chip.dataset.playerId = player.id;
    if (player.id === currentPlayer?.id) chip.classList.add("is-current");
    if (!player.connected) chip.classList.add("is-disconnected");
    if (player.eliminated) chip.classList.add("is-eliminated");
    if (player.eliminated && player.role) chip.classList.add(`is-expelled-${player.role}`);
    if (player.hasVoted) chip.classList.add("has-voted");
    if (player.starts) chip.classList.add("is-starting-player");
    const roleText = player.starts && !player.eliminated && !revealAll
      ? t("impostor.startsBadge")
      : player.role && (revealAll || player.eliminated)
        ? `${t(`impostor.role.${player.role}`)}${player.word ? ` - ${player.word}` : ""}`
        : (player.eliminated ? t("impostor.out") : t("impostor.inGame"));
    const voteText = ["playing", "tiebreak"].includes(status) && !player.eliminated
      ? (player.hasVoted ? t("impostor.voted") : t("impostor.pendingVote"))
      : "";
    chip.innerHTML = `<span></span><strong></strong><small></small><b></b>`;
    chip.querySelector("span").textContent = player.emoji;
    chip.querySelector("strong").textContent = player.name;
    chip.querySelector("small").textContent = roleText;
    chip.querySelector("b").textContent = voteText;
    return chip;
  }));
  observeimpostorChipSizing();
  syncimpostorChipContentScale();
}

function observeimpostorChipSizing() {
  if (!window.ResizeObserver || !impostorCircle) return;
  if (!impostorChipResizeObserver) {
    impostorChipResizeObserver = new ResizeObserver(syncimpostorChipContentScale);
  }
  impostorChipResizeObserver.disconnect();
  impostorChipResizeObserver.observe(impostorCircle);
  impostorCircle.querySelectorAll(".impostor-chip").forEach((chip) => impostorChipResizeObserver.observe(chip));
}

function syncimpostorChipContentScale() {
  if (!impostorCircle) return;
  if (impostorChipScaleFrame) window.cancelAnimationFrame(impostorChipScaleFrame);
  impostorChipScaleFrame = window.requestAnimationFrame(() => {
    impostorChipScaleFrame = null;
    impostorCircle.querySelectorAll(".impostor-chip").forEach((chip) => {
      const rect = chip.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const nameLength = chip.querySelector("strong")?.textContent?.length || 1;
      const metaLength = Math.max(
        chip.querySelector("small")?.textContent?.length || 1,
        chip.querySelector("b")?.textContent?.length || 1
      );
      const compact = window.matchMedia?.("(max-width: 760px)")?.matches;
      const heightScale = Math.min(compact ? 4.6 : 3.7, Math.max(0.5, rect.height / (compact ? 58 : 78)));
      const widthScale = Math.min(compact ? 4.1 : 3.4, Math.max(0.58, rect.width / (compact ? 128 : 182)));
      const textLength = Math.max(nameLength, Math.ceil(metaLength * 0.62));
      const nameScale = Math.min(1.12, Math.max(0.56, (compact ? 13 : 12) / Math.max(compact ? 13 : 12, textLength)));
      const textWidthScale = Math.min(1.12, Math.max(0.42, (rect.width - (compact ? 54 : 70)) / Math.max(1, nameLength * (compact ? 12 : 11))));
      const scale = Math.min(heightScale, widthScale) * Math.min(nameScale, textWidthScale);
      const iconSize = Math.max(18, Math.min(rect.height * (compact ? 0.58 : 0.5), rect.width * (compact ? 0.32 : 0.24), compact ? 96 : 118));
      chip.style.setProperty("--chip-content-scale", scale.toFixed(3));
      chip.style.setProperty("--chip-icon-size", `${iconSize.toFixed(1)}px`);
    });
  });
}

function renderimpostorActions(room, currentPlayer) {
  if (!impostorVoteList || !impostorGuessForm) return;
  const status = room.status || "lobby";
  const canVote = ["playing", "tiebreak"].includes(status) && currentPlayer && !currentPlayer.eliminated && !currentPlayer.hasVoted;
  const voteLabel = `${t("impostor.vote")} (${room.votesCast || 0}/${room.activeCount || 0})`;
  const tiedIds = new Set(room.tieCandidates || []);
  const candidates = (room.players || []).filter((player) => {
    if (player.id === currentPlayer?.id || player.eliminated) return false;
    return status !== "tiebreak" || tiedIds.has(player.id);
  });
  impostorVoteList.replaceChildren(...candidates.map((player) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.votePlayerId = player.id;
    button.disabled = !canVote;
    button.innerHTML = `<span></span><strong></strong>`;
    button.querySelector("span").textContent = player.emoji;
    button.querySelector("strong").textContent = player.name;
    return button;
  }));
  if (!candidates.length) {
    const empty = document.createElement("p");
    empty.textContent = status === "lobby" ? t("impostor.voteAfterStart") : t("impostor.noVoteTargets");
    impostorVoteList.replaceChildren(empty);
  }
  if (impostorVoteButton) {
    impostorVoteButton.hidden = !["playing", "tiebreak"].includes(status);
    impostorVoteButton.disabled = !canVote || !candidates.length;
    setButtonLabel(impostorVoteButton, currentPlayer?.hasVoted ? `${t("impostor.voted")} (${room.votesCast || 0}/${room.activeCount || 0})` : voteLabel);
  }
  const canGuess = ["playing", "tiebreak"].includes(status) && currentPlayer?.role === "impostor" && !currentPlayer.eliminated;
  if (impostorGuessButton) {
    impostorGuessButton.hidden = !canGuess;
    impostorGuessButton.disabled = !canGuess;
    impostorGuessButton.setAttribute("aria-hidden", String(!canGuess));
  }
  if (impostorGuessInput) impostorGuessInput.disabled = !canGuess;
}

function showImpostorVotePopup() {
  if (!impostorVotePopup || !impostorRoom) return;
  renderimpostorActions(impostorRoom, impostorRoom.player);
  impostorVotePopup.hidden = false;
  document.body.classList.add("songs-popup-open");
  playimpostorAlarmSound("popup");
}

function hideImpostorVotePopup() {
  if (!impostorVotePopup) return;
  impostorVotePopup.hidden = true;
  if (impostorEventPopup?.hidden && impostorGuessPopup?.hidden) document.body.classList.remove("songs-popup-open");
}

function showImpostorGuessPopup() {
  if (!impostorGuessPopup || !impostorGuessInput) return;
  const player = impostorRoom?.player;
  if (!["playing", "tiebreak"].includes(impostorRoom?.status) || player?.role !== "impostor" || player?.eliminated) return;
  impostorGuessPopup.hidden = false;
  document.body.classList.add("songs-popup-open");
  impostorGuessInput.focus();
}

function hideImpostorGuessPopup() {
  if (!impostorGuessPopup) return;
  impostorGuessPopup.hidden = true;
  if (impostorVotePopup?.hidden && impostorEventPopup?.hidden) document.body.classList.remove("songs-popup-open");
}

function showImpostorEventPopup(title, message, detail = {}) {
  if (!impostorEventPopup || !impostorEventTitle || !impostorEventMessage) return;
  impostorEventTitle.textContent = title || t("impostor.notice");
  impostorEventMessage.replaceChildren();
  impostorEventPopup.classList.toggle("is-crew", detail.role === "crew");
  impostorEventPopup.classList.toggle("is-impostor", detail.role === "impostor");
  if (detail.hero) impostorEventMessage.append(renderImpostorEventHero(detail.hero));
  if (message) {
    const text = document.createElement("p");
    text.className = "impostor-event-lead";
    text.textContent = message;
    impostorEventMessage.append(text);
  }
  if (detail.rows?.length) {
    const grid = document.createElement("div");
    grid.className = "impostor-event-grid";
    detail.rows.forEach((row) => {
      const item = document.createElement("article");
      item.className = row.emphasis ? "is-emphasis" : "";
      const label = document.createElement("span");
      label.textContent = row.label;
      const value = document.createElement("strong");
      value.textContent = row.value;
      item.append(label, value);
      grid.append(item);
    });
    impostorEventMessage.append(grid);
  }
  if (detail.voteResults?.length) impostorEventMessage.append(renderImpostorVoteResults(detail.voteResults));
  if (detail.tieVoteCandidates?.length) impostorEventMessage.append(renderImpostorTieVoteChoices(detail.tieVoteCandidates));
  impostorEventPopup.hidden = false;
  document.body.classList.add("songs-popup-open");
}

function renderImpostorEventHero(hero) {
  const box = document.createElement("section");
  box.className = `impostor-event-hero ${hero.role ? `is-${hero.role}` : ""}`;
  const emoji = document.createElement("span");
  emoji.textContent = hero.emoji || "";
  const copy = document.createElement("div");
  const name = document.createElement("strong");
  name.textContent = hero.name || hero.title || "";
  copy.append(name);
  if (hero.role) {
    const role = document.createElement("small");
    role.textContent = t(`impostor.role.${hero.role}`);
    copy.append(role);
  }
  box.append(emoji, copy);
  return box;
}

function renderImpostorVoteResults(results) {
  const section = document.createElement("section");
  section.className = "impostor-vote-results";
  const title = document.createElement("span");
  title.textContent = t("impostor.popup.voteCountHeading");
  const list = document.createElement("ol");
  results.forEach((result) => {
    const item = document.createElement("li");
    const player = document.createElement("div");
    const emoji = document.createElement("span");
    emoji.textContent = result.emoji || "";
    const name = document.createElement("strong");
    name.textContent = result.name || "-";
    player.append(emoji, name);
    const votes = document.createElement("b");
    votes.textContent = String(result.votes || 0);
    item.append(player, votes);
    list.append(item);
  });
  section.append(title, list);
  return section;
}

function renderImpostorTieVoteChoices(candidates) {
  const section = document.createElement("section");
  section.className = "impostor-tie-vote-choices";
  const title = document.createElement("span");
  title.textContent = t("impostor.voteTiebreak");
  const list = document.createElement("div");
  const canVote = Boolean(impostorRoom?.player && !impostorRoom.player.eliminated && !impostorRoom.player.hasVoted);
  candidates.forEach((candidate) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.votePlayerId = candidate.id;
    button.disabled = !canVote;
    button.innerHTML = `<span></span><strong></strong>`;
    button.querySelector("span").textContent = candidate.emoji || "";
    button.querySelector("strong").textContent = candidate.name || "-";
    list.append(button);
  });
  section.append(title, list);
  return section;
}

function hideImpostorEventPopup() {
  if (!impostorEventPopup) return;
  impostorEventPopup.hidden = true;
  if (impostorVotePopup?.hidden && impostorGuessPopup?.hidden) document.body.classList.remove("songs-popup-open");
}

function dismissImpostorPopupOnClick(event, hidePopup) {
  if (event.target.closest("button, input, textarea, select, option, label, a")) return;
  hidePopup();
}

function closeAllImpostorPopups() {
  if (impostorVotePopup) impostorVotePopup.hidden = true;
  if (impostorEventPopup) impostorEventPopup.hidden = true;
  if (impostorGuessPopup) impostorGuessPopup.hidden = true;
  const kickPopup = document.querySelector("#impostorKickPopup");
  if (kickPopup) kickPopup.hidden = true;
  pendingImpostorKickTargetId = "";
  document.body.classList.remove("songs-popup-open");
}

function announceImpostorEvent(room, { force = false } = {}) {
  if (!room?.eventId || (!force && room.eventId === impostorShownEventId)) return;
  impostorShownEventId = room.eventId;
  if (room.lastEvent?.type === "start") closeAllImpostorPopups();
  const title = getImpostorEventTitle(room);
  const eventMessage = formatimpostorEvent(room.lastEvent);
  const guessResult = formatimpostorGuessResult(room.lastEvent);
  const roleDetails = getImpostorPopupDetails(room);
  const isVoteResult = ["eliminated", "tie"].includes(room.lastEvent?.type);
  const message = isVoteResult ? "" : room.status === "finished"
    ? [eventMessage, guessResult, getimpostorStatusMessage(room, room.player)].filter(Boolean).join(" ")
    : [eventMessage, guessResult].filter(Boolean).join(" ");
  if (message || roleDetails.rows?.length || roleDetails.hero || roleDetails.voteResults?.length || roleDetails.tieVoteCandidates?.length) showImpostorEventPopup(title, message, roleDetails);
  playimpostorAlarmSound(getImpostorEventSoundType(room));
  triggerImpostorOutcomeEffects(room);
}

function getImpostorEventTitle(room) {
  if (room.status === "finished") return t("impostor.popup.finished");
  if (room.lastEvent?.type === "start") {
    return Number(room.roundIndex || 0) > 1 ? t("impostor.popup.restarted") : t("impostor.popup.started");
  }
  if (room.lastEvent?.type === "eliminated") return `${room.lastEvent.emoji || ""} ${room.lastEvent.playerName || t("impostor.popup.eliminated")}`.trim();
  if (room.lastEvent?.type === "guess-fail") return t("impostor.popup.eliminated");
  if (room.lastEvent?.type === "tie") return t("impostor.popup.tieHeadline");
  return t("impostor.notice");
}

function getImpostorPopupDetails(room) {
  const player = room.player;
  const event = room.lastEvent || {};
  const rows = [];
  let accentRole = player?.role || event.role || "";

  if (event.type === "start" && player?.role) {
    const isImpostor = player.role === "impostor";
    rows.push(
      {
        label: t("impostor.popup.roleHeading"),
        value: isImpostor ? t("impostor.youAreImpostor") : t("impostor.youAreCrew"),
        emphasis: true
      },
      {
        label: isImpostor ? t("impostor.popup.hintHeading") : t("impostor.popup.wordHeading"),
        value: isImpostor ? (player.hint || t("impostor.popup.noHint")) : (player.word || t("impostor.secretWord")),
        emphasis: true
      },
      {
        label: t("impostor.popup.objectiveHeading"),
        value: isImpostor ? t("impostor.popup.impostorObjective") : t("impostor.popup.crewObjective")
      },
      {
        label: t("impostor.popup.startsHeading"),
        value: player.starts ? t("impostor.youStart") : t("impostor.starts", { name: room.startingPlayerName || "-" }),
        emphasis: Boolean(player.starts)
      }
    );
    return { role: player.role, rows };
  }

  if (event.type === "eliminated") {
    accentRole = event.role || accentRole;
    const expelledMessage = event.role === "impostor" ? t("impostor.expelledImpostor") : t("impostor.expelledCrew");
    rows.push({ label: t("impostor.popup.nextStepHeading"), value: expelledMessage, emphasis: true });
    if (room.status === "finished") {
      rows.push(
        { label: t("impostor.popup.winnerHeading"), value: getImpostorWinnerText(room), emphasis: true },
        { label: t("impostor.popup.yourResultHeading"), value: player?.won ? t("impostor.youWon") : t("impostor.youLost"), emphasis: true }
      );
    }
    return {
      role: accentRole,
      hero: { emoji: event.emoji, name: event.playerName || "-", role: event.role },
      rows,
      voteResults: event.voteResults || []
    };
  }

  if (event.type === "tie") {
    const tiedIds = new Set(room.tieCandidates || []);
    const tieVoteCandidates = (room.players || [])
      .filter((candidate) => tiedIds.has(candidate.id) && !candidate.eliminated && candidate.id !== player?.id)
      .map((candidate) => ({ id: candidate.id, name: candidate.name, emoji: candidate.emoji }));
    rows.push(
      { label: t("impostor.popup.nextStepHeading"), value: t("impostor.tieStatus", { votes: room.votesCast || 0, total: room.activeCount || 0 }) }
    );
    return {
      role: accentRole,
      hero: { title: t("impostor.popup.tieHeadline") },
      rows,
      voteResults: event.voteResults || [],
      tieVoteCandidates
    };
  }

  if (event.type === "guess-fail") {
    accentRole = event.role || "impostor";
    rows.push(
      { label: t("impostor.popup.playerHeading"), value: event.playerName || "-", emphasis: true },
      { label: t("impostor.popup.guessHeading"), value: event.guess || "-" }
    );
  }

  if (event.type === "guess-win") {
    accentRole = "impostor";
    rows.push(
      { label: t("impostor.popup.playerHeading"), value: event.playerName || "-", emphasis: true },
      { label: t("impostor.popup.guessHeading"), value: event.guess || "-", emphasis: true },
      { label: t("impostor.popup.winnerHeading"), value: t("impostor.impostorsWin"), emphasis: true }
    );
  }

  if (room.status === "finished") {
    rows.push(
      { label: t("impostor.popup.winnerHeading"), value: getImpostorWinnerText(room), emphasis: true },
      { label: t("impostor.popup.yourResultHeading"), value: player?.won ? t("impostor.youWon") : t("impostor.youLost"), emphasis: true }
    );
    if (player?.word) rows.push({ label: t("impostor.popup.finalWordHeading"), value: player.word });
  } else if (event.type && event.type !== "start" && event.type !== "tie") {
    rows.push({
      label: t("impostor.popup.nextStepHeading"),
      value: t("impostor.playingStatus", { votes: room.votesCast || 0, total: room.activeCount || 0 })
    });
  }

  if (!rows.length && room.activeCount) {
    rows.push(
      { label: t("impostor.popup.activePlayersHeading"), value: String(room.activeCount), emphasis: true },
      { label: t("impostor.popup.votesHeading"), value: `${room.votesCast || 0}/${room.activeCount || 0}` }
    );
  }

  return { role: accentRole, rows };
}

function getImpostorWinnerText(room) {
  return room.winner === "impostors" ? t("impostor.impostorsWin") : t("impostor.crewWins");
}

function getImpostorEventSoundType(room) {
  const event = room?.lastEvent || {};
  if (event.type === "eliminated" && event.role === "impostor") return "eliminated-impostor";
  if (event.type === "eliminated" && event.role === "crew") return "eliminated-crew";
  if (room?.status === "finished") return event.type || "finished";
  return event.type || room?.status || "notice";
}

function triggerImpostorOutcomeEffects(room) {
  if (room?.status !== "finished" || !room.eventId || impostorOutcomeEventId === room.eventId) return;
  impostorOutcomeEventId = room.eventId;
  const won = Boolean(room.player?.won);
  window.setTimeout(() => {
    playimpostorAlarmSound(won ? "winner" : "loser");
    triggerGameCompleteFlyby(won ? "/images/game-complete.jpeg" : "/images/you-tried.png");
  }, 380);
}

async function shareimpostorRoom() {
  if (!impostorSession) return;
  const url = new URL(window.location.href);
  url.searchParams.set("impostor", impostorSession.roomName);
  await navigator.clipboard.writeText(url.toString());
  flashButton(impostorShareButton, t("common.copied"), t("impostor.shareLink"));
}

function leaveimpostorToMenu() {
  const url = new URL(window.location.href);
  url.searchParams.delete("impostor");
  window.history.replaceState({}, "", url);
  leaveimpostorRoom();
  showimpostorLobby();
}

function leaveimpostorRoom() {
  releaseimpostorRoomIfHost();
  clearInterval(impostorPollTimer);
  clearTimeout(impostorAssignmentTimer);
  cancelAnimationFrame(impostorOrbitFrame);
  impostorPollTimer = null;
  impostorAssignmentTimer = null;
  impostorOrbitFrame = null;
  impostorSession = null;
  impostorRoom = null;
  impostorLastAssignmentId = "";
  impostorShownEventId = "";
  impostorLastVotesCast = 0;
  impostorOutcomeEventId = "";
  impostorKnownPlayerIds = new Set();
  closeAllImpostorPopups();
  if (impostorLobbyTitle) impostorLobbyTitle.hidden = false;
  if (impostorRoomHeader) impostorRoomHeader.hidden = true;
}

function releaseimpostorRoomIfHost({ useBeacon = false } = {}) {
  const session = impostorSession;
  if (!session?.isHost) return;
  session.isHost = false;
  const url = `/api/impostor/rooms/${encodeURIComponent(session.roomName)}/leave`;
  const body = JSON.stringify({ playerId: session.playerId, token: session.token });
  if (useBeacon && navigator.sendBeacon) {
    navigator.sendBeacon(url, new Blob([body], { type: "application/json" }));
  } else {
    void fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true
    }).catch(() => {});
  }
  clearInterval(impostorPollTimer);
}

function populateMasterWordEmojis() {
  [masterWordCreateEmoji, masterWordJoinEmoji].filter(Boolean).forEach((select, selectIndex) => {
    select.replaceChildren(...MASTER_WORD_EMOJIS.map((emoji, index) => {
      const option = document.createElement("option");
      option.value = emoji;
      option.textContent = emoji;
      option.selected = index === selectIndex;
      return option;
    }));
  });
}

function showMasterWordLobby() {
  if (!masterWordLobby || !masterWordGame) return;
  if (masterWordSession) {
    masterWordLobby.hidden = true;
    masterWordGame.hidden = false;
    renderMasterWordRoom(masterWordRoom);
    return;
  }
  masterWordLobby.hidden = false;
  masterWordGame.hidden = true;
  if (masterWordLobbyMessage) masterWordLobbyMessage.textContent = "";
  const inviteRoom = new URLSearchParams(window.location.search).get("masterword");
  if (inviteRoom && masterWordJoinRoomName) {
    masterWordJoinRoomName.value = inviteRoom.trim();
    showMasterWordForm("join");
    return;
  }
  showMasterWordChoice();
}

function showMasterWordChoice() {
  if (!masterWordChoice || !masterWordCreateForm || !masterWordJoinForm) return;
  masterWordChoice.hidden = false;
  masterWordCreateForm.hidden = true;
  masterWordJoinForm.hidden = true;
  if (masterWordLobbyMessage) masterWordLobbyMessage.textContent = "";
}

function showMasterWordForm(mode) {
  if (!masterWordChoice || !masterWordCreateForm || !masterWordJoinForm) return;
  masterWordChoice.hidden = true;
  masterWordCreateForm.hidden = mode !== "create";
  masterWordJoinForm.hidden = mode !== "join";
  if (masterWordLobbyMessage) masterWordLobbyMessage.textContent = "";
  if (mode === "create") syncMasterWordCreateOptions();
  if (mode === "create") masterWordCreateRoomName?.focus();
  if (mode === "join") masterWordJoinRoomName?.focus();
}

function setMasterWordMode(kind, value) {
  const mode = value === "custom" ? "custom" : "standard";
  const target = kind === "round" ? masterWordRoundMode : masterWordAttemptMode;
  if (target) target.value = mode;
  syncMasterWordCreateOptions();
}

function syncMasterWordCreateOptions() {
  if (masterWordRoundLimit) {
    const customRounds = masterWordRoundMode?.value === "custom";
    masterWordRoundLimit.hidden = !customRounds;
    masterWordRoundLimit.disabled = !customRounds;
    masterWordRoundLimit.required = customRounds;
    if (!customRounds) masterWordRoundLimit.value = "13";
  }
  if (masterWordAttemptLimit) {
    const customAttempts = masterWordAttemptMode?.value === "custom";
    masterWordAttemptLimit.hidden = !customAttempts;
    masterWordAttemptLimit.disabled = !customAttempts;
    masterWordAttemptLimit.required = customAttempts;
    if (!customAttempts) masterWordAttemptLimit.value = "2";
  }
  masterWordRoundModeButtons.forEach((button) => button.classList.toggle("is-selected", button.dataset.masterwordRoundMode === (masterWordRoundMode?.value || "standard")));
  masterWordAttemptModeButtons.forEach((button) => button.classList.toggle("is-selected", button.dataset.masterwordAttemptMode === (masterWordAttemptMode?.value || "standard")));
}

function getMasterWordCreateConfig() {
  const playerLimit = Math.max(3, Math.min(7, Math.floor(Number(masterWordCreatePlayerLimit.value) || 5)));
  const roundMode = masterWordRoundMode?.value === "custom" ? "custom" : "standard";
  const attemptMode = masterWordAttemptMode?.value === "custom" ? "custom" : "standard";
  const maxRounds = roundMode === "custom"
    ? Math.max(1, Math.min(80, Math.floor(Number(masterWordRoundLimit?.value) || 13)))
    : 13;
  const guessLimit = attemptMode === "custom"
    ? Math.max(1, Math.min(5, Math.floor(Number(masterWordAttemptLimit?.value) || 2)))
    : 2;
  masterWordCreatePlayerLimit.value = String(playerLimit);
  if (masterWordRoundLimit) masterWordRoundLimit.value = String(maxRounds);
  if (masterWordAttemptLimit) masterWordAttemptLimit.value = String(guessLimit);
  return { playerLimit, roundMode, maxRounds, attemptMode, guessLimit };
}

async function createMasterWordRoom(event) {
  event.preventDefault();
  masterWordLobbyMessage.textContent = "";
  const roomName = masterWordCreateRoomName.value.trim();
  const playerName = masterWordCreatePlayerName.value.trim();
  const config = getMasterWordCreateConfig();
  masterWordCreateRoomName.value = roomName;
  masterWordCreatePlayerName.value = playerName;
  try {
    const response = await fetch("/api/masterword/rooms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomName, playerName, emoji: masterWordCreateEmoji.value, config })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "No se pudo crear la sala");
    enterMasterWordRoom(payload);
  } catch (error) {
    masterWordLobbyMessage.textContent = error.message;
  }
}

async function joinMasterWordRoom(event) {
  event.preventDefault();
  masterWordLobbyMessage.textContent = "";
  const roomName = masterWordJoinRoomName.value.trim();
  const playerName = masterWordJoinPlayerName.value.trim();
  masterWordJoinRoomName.value = roomName;
  masterWordJoinPlayerName.value = playerName;
  try {
    const response = await fetch(`/api/masterword/rooms/${encodeURIComponent(roomName)}/join`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerName, emoji: masterWordJoinEmoji.value })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "No se pudo entrar en la sala");
    enterMasterWordRoom(payload);
  } catch (error) {
    masterWordLobbyMessage.textContent = error.message;
  }
}

function enterMasterWordRoom(payload) {
  masterWordRoom = payload;
  masterWordSession = { roomName: payload.roomName, playerId: payload.player?.id, token: payload.player?.token, isHost: Boolean(payload.player?.isHost) };
  masterWordShownEventId = payload.eventId || "";
  masterWordShownResultKey = getMasterWordResultKey(payload.lastRoundResult);
  masterWordKnownPlayerIds = new Set((payload.players || []).map((player) => player.id));
  masterWordLobby.hidden = true;
  masterWordGame.hidden = false;
  scrollMasterWordGameTop();
  renderMasterWordRoom(payload);
  startMasterWordPolling();
}

function scrollMasterWordGameTop() {
  const reset = () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    document.scrollingElement?.scrollTo?.(0, 0);
    document.querySelector(".app-shell")?.scrollTo?.(0, 0);
    document.querySelector(".content")?.scrollTo?.(0, 0);
    document.querySelector("#masterWordView")?.scrollTo?.(0, 0);
  };
  reset();
  requestAnimationFrame(() => {
    reset();
    setTimeout(reset, 80);
    setTimeout(reset, 220);
  });
}

function startMasterWordPolling() {
  clearInterval(masterWordPollTimer);
  masterWordPollTimer = window.setInterval(pollMasterWordRoom, 1500);
}

async function pollMasterWordRoom() {
  if (!masterWordSession) return;
  try {
    const params = new URLSearchParams({ playerId: masterWordSession.playerId, token: masterWordSession.token });
    const response = await fetch(`/api/masterword/rooms/${encodeURIComponent(masterWordSession.roomName)}?${params}`);
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "Sala no disponible");
    if (!payload.player) {
      leaveMasterWordRoom();
      masterWordLobbyMessage.textContent = "Has salido de esta sala. Vuelve a entrar con tu nombre si hace falta.";
      return;
    }
    masterWordRoom = payload;
    masterWordSession.isHost = Boolean(payload.player?.isHost);
    masterWordKnownPlayerIds = new Set((payload.players || []).map((player) => player.id));
    renderMasterWordRoom(payload);
    maybeShowMasterWordResultPopup(payload);
    if (payload.eventId && payload.eventId !== masterWordShownEventId) {
      masterWordShownEventId = payload.eventId;
      playimpostorAlarmSound(payload.status === "finished" ? "finished" : "notice");
    }
  } catch {
    // Polling can recover.
  }
}

async function startMasterWordGame() {
  if (!masterWordSession) return;
  try {
    masterWordStartButton.disabled = true;
    const response = await fetch(`/api/masterword/rooms/${encodeURIComponent(masterWordSession.roomName)}/start`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId: masterWordSession.playerId, token: masterWordSession.token })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "No se pudo iniciar");
    masterWordRoom = payload;
    masterWordShownEventId = payload.eventId || "";
    masterWordShownResultKey = getMasterWordResultKey(payload.lastRoundResult);
    renderMasterWordRoom(payload);
    maybeShowMasterWordResultPopup(payload);
  } catch (error) {
    masterWordGameMessage.textContent = error.message;
  } finally {
    masterWordStartButton.disabled = false;
  }
}

async function restartMasterWordGame() {
  if (!masterWordSession?.isHost) return;
  try {
    masterWordRestartButton.disabled = true;
    const response = await fetch(`/api/masterword/rooms/${encodeURIComponent(masterWordSession.roomName)}/restart`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId: masterWordSession.playerId, token: masterWordSession.token })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "No se pudo reiniciar");
    masterWordRoom = payload;
    masterWordShownEventId = payload.eventId || "";
    masterWordShownResultKey = getMasterWordResultKey(payload.lastRoundResult);
    hideMasterWordResultPopup();
    renderMasterWordRoom(payload);
    maybeShowMasterWordResultPopup(payload);
  } catch (error) {
    masterWordGameMessage.textContent = error.message;
  } finally {
    masterWordRestartButton.disabled = false;
  }
}

async function submitMasterWordClues(event) {
  event.preventDefault();
  if (!masterWordSession || !masterWordRoom) return;
  const clues = [...masterWordClueInputs.querySelectorAll("input")].map((input) => sanitizeMasterWordClueValue(input.value));
  try {
    masterWordSubmitClueButton.disabled = true;
    const response = await fetch(`/api/masterword/rooms/${encodeURIComponent(masterWordSession.roomName)}/clue`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId: masterWordSession.playerId, token: masterWordSession.token, clues })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "No se pudo enviar pista");
    masterWordRoom = payload;
    renderMasterWordRoom(payload);
    maybeShowMasterWordResultPopup(payload);
  } catch (error) {
    masterWordGameMessage.textContent = error.message;
  } finally {
    masterWordSubmitClueButton.disabled = false;
  }
}

async function guessMasterWord(event) {
  event.preventDefault();
  if (!masterWordSession) return;
  const guess = masterWordGuessInput.value.trim();
  if (!guess) return;
  try {
    masterWordGuessButton.disabled = true;
    const response = await fetch(`/api/masterword/rooms/${encodeURIComponent(masterWordSession.roomName)}/guess`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId: masterWordSession.playerId, token: masterWordSession.token, guess })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "No se pudo adivinar");
    masterWordGuessInput.value = "";
    masterWordRoom = payload;
    renderMasterWordRoom(payload);
    maybeShowMasterWordResultPopup(payload);
  } catch (error) {
    masterWordGameMessage.textContent = error.message;
  } finally {
    masterWordGuessButton.disabled = false;
  }
}

async function skipMasterWord() {
  if (!masterWordSession) return;
  try {
    masterWordSkipButton.disabled = true;
    const response = await fetch(`/api/masterword/rooms/${encodeURIComponent(masterWordSession.roomName)}/skip`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId: masterWordSession.playerId, token: masterWordSession.token })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "No se pudo pasar");
    masterWordGuessInput.value = "";
    masterWordRoom = payload;
    renderMasterWordRoom(payload);
    maybeShowMasterWordResultPopup(payload);
  } catch (error) {
    masterWordGameMessage.textContent = error.message;
  } finally {
    masterWordSkipButton.disabled = false;
  }
}

function renderMasterWordRoom(room = masterWordRoom) {
  if (!room || !masterWordPlayers) return;
  const players = [...(room.players || [])].sort((a, b) => a.seatNumber - b.seatNumber);
  const player = room.player || players.find((item) => item.id === masterWordSession?.playerId);
  const isHost = Boolean(player?.isHost || masterWordSession?.isHost);
  if (masterWordSession) masterWordSession.isHost = isHost;
  masterWordRoomLabel.textContent = `Sala: ${room.roomName || ""}`;
  if (masterWordRoundStatLabel) masterWordRoundStatLabel.textContent = room.status === "lobby" ? "Jugadores" : "Ronda";
  masterWordRound.textContent = room.status === "lobby" ? `${players.length}/${room.config?.playerLimit || "?"}` : `${room.roundNumber || 0}/${room.maxRounds || 13}`;
  masterWordScore.textContent = String(room.score || 0);
  masterWordShareButton.hidden = !isHost;
  masterWordRestartButton.hidden = !isHost || room.status === "lobby";
  renderMasterWordPlayers(players, player, room);
  renderMasterWordRole(room, player);
  renderMasterWordActions(room, player, players, isHost);
}

function renderMasterWordPlayers(players, currentPlayer, room) {
  const clueSlots = Number(room.clueSlots || 1);
  const canKick = masterWordSession?.isHost && room.status === "lobby";
  masterWordPlayers.replaceChildren(...players.map((item) => {
    const card = document.createElement("article");
    card.className = "masterword-player-card";
    card.dataset.playerId = item.id;
    if (item.id === currentPlayer?.id) card.classList.add("is-current");
    if (item.isActive) card.classList.add("is-active-player");
    if (item.hasSubmitted) card.classList.add("has-submitted");
    if (!item.connected) card.classList.add("is-disconnected");
    const status = item.isActive ? "Adivina" : room.status === "clue" ? (item.hasSubmitted ? "Pistas listas" : `${clueSlots} pista${clueSlots > 1 ? "s" : ""}`) : room.status === "guessing" ? "Ayudante" : room.status === "lobby" ? "En sala" : "Equipo";
    card.innerHTML = `<span></span><strong></strong><small></small><b></b>`;
    card.querySelector("span").textContent = item.emoji || "";
    card.querySelector("strong").textContent = item.name || "";
    card.querySelector("small").textContent = status;
    card.querySelector("b").textContent = item.isActive ? "Jugador activo" : item.hasSubmitted ? "Enviado" : "";
    return card;
  }));
}

function renderMasterWordRole(room, player) {
  const status = room.status || "lobby";
  masterWordRoleCard.hidden = status === "lobby";
  if (status === "lobby") return;
  masterWordRoleCard.classList.toggle("is-active", Boolean(player?.isActive));
  if (status === "finished") {
    masterWordRoleLabel.textContent = "Resultado";
    masterWordSecretWord.textContent = `${room.score || 0}/${room.maxRounds || 13}`;
    masterWordRoleHint.textContent = "";
    return;
  }
  if (player?.isActive) {
    masterWordRoleLabel.textContent = "Te toca adivinar";
    masterWordSecretWord.textContent = status === "guessing" ? "Mira las pistas" : "Palabra oculta";
    masterWordRoleHint.textContent = "";
    return;
  }
  masterWordRoleLabel.textContent = "Palabra misteriosa";
  masterWordSecretWord.textContent = player?.word || "Esperando...";
  masterWordRoleHint.textContent = "";
}

function renderMasterWordActions(room, player, players, isHost) {
  const status = room.status || "lobby";
  masterWordGameMessage.textContent = "";
  masterWordStartButton.hidden = status !== "lobby" || !isHost;
  masterWordStartButton.disabled = !(isHost && players.length >= 3);
  masterWordStartButton.textContent = players.length < 3 ? `Esperando ${players.length}/3` : "Iniciar partida";
  masterWordClueForm.hidden = !player?.canClue;
  masterWordGuessForm.hidden = !player?.canGuess;
  const noVisibleCluesForGuesser = player?.isActive && ["guessing", "finished"].includes(status) && !(room.validClues?.length || 0);
  const submittedClues = room.status === "clue" && player?.hasSubmitted ? (player.submittedClues?.length || 0) : 0;
  const visibleClues = (room.validClues?.length || 0) + (room.removedClues?.length || 0) + submittedClues + (noVisibleCluesForGuesser ? 1 : 0);
  masterWordClueBoard.hidden = !["clue", "guessing", "finished"].includes(status) || !visibleClues;
  if (!masterWordClueForm.hidden) renderMasterWordClueInputs(room, player);
  renderMasterWordValidClues(room);
  masterWordGuessButton.disabled = !player?.canGuess;
  masterWordSkipButton.disabled = !player?.canGuess;
}

function renderMasterWordClueInputs(room, player) {
  const slots = Number(player?.clueSlots || room.clueSlots || 1);
  const activeInput = document.activeElement;
  if (masterWordClueInputs.contains(activeInput) && masterWordClueInputs.querySelectorAll("input").length === slots) return;
  const existing = [...masterWordClueInputs.querySelectorAll("input")].map((input) => input.value);
  masterWordClueInputs.replaceChildren(...Array.from({ length: slots }, (_, index) => {
    const input = document.createElement("input");
    input.maxLength = 28;
    input.required = true;
    input.autocomplete = "off";
    input.pattern = "[\\p{L}\\p{N}]+";
    input.placeholder = slots > 1 ? `Pista ${index + 1}` : "Pista de una palabra";
    input.value = sanitizeMasterWordClueValue(existing[index] || "");
    return input;
  }));
}

function restrictMasterWordClueInput(event) {
  if (!event.target?.matches?.("input")) return;
  if (event.data && sanitizeMasterWordClueValue(event.data) !== event.data) event.preventDefault();
}

function sanitizeMasterWordClueInput(event) {
  const input = event.target?.matches?.("input") ? event.target : null;
  if (!input) return;
  const clean = sanitizeMasterWordClueValue(input.value);
  if (input.value === clean) return;
  const cursor = Math.min(clean.length, input.selectionStart || clean.length);
  input.value = clean;
  input.setSelectionRange?.(cursor, cursor);
}

function sanitizeMasterWordClueValue(value) {
  return String(value || "").replace(/[^\p{L}\p{N}]/gu, "").slice(0, 28);
}

function renderMasterWordValidClues(room) {
  const submittedClues = room.status === "clue" && room.player?.hasSubmitted ? (room.player.submittedClues || []) : [];
  const validClueNodes = submittedClues.map((clue) => {
    const item = document.createElement("span");
    item.className = "masterword-clue-chip is-submitted";
    const word = document.createElement("strong");
    word.textContent = clue.text || "";
    item.append(word);
    return item;
  });
  validClueNodes.push(...(room.validClues || []).map((clue) => {
    const clueAuthor = getMasterWordClueAuthor(clue, room);
    const item = document.createElement("span");
    item.className = "masterword-clue-chip";
    const word = document.createElement("strong");
    const author = buildMasterWordClueAuthorNode(clueAuthor);
    word.textContent = clue.text || "";
    item.append(author, word);
    return item;
  }));
  if (!validClueNodes.length && room.player?.isActive && ["guessing", "finished"].includes(room.status || "")) {
    const item = document.createElement("span");
    item.className = "masterword-clue-chip is-empty";
    const word = document.createElement("strong");
    word.textContent = "Todas las pistas se han eliminado por estar repetidas.";
    item.append(word);
    validClueNodes.push(item);
  }
  masterWordValidClues.replaceChildren(...validClueNodes);
  masterWordRemovedClues?.replaceChildren(...(room.removedClues || []).map((clue) => {
    const clueAuthor = getMasterWordClueAuthor(clue, room);
    const item = document.createElement("article");
    item.className = "masterword-removed-clue";
    const author = buildMasterWordClueAuthorNode(clueAuthor);
    const word = document.createElement("strong");
    const reason = document.createElement("em");
    word.textContent = clue.text || "";
    reason.textContent = clue.reason || "retirada";
    item.append(author, word, reason);
    return item;
  }));
}

function buildMasterWordClueAuthorNode(clueAuthor) {
  const author = document.createElement("small");
  const emoji = document.createElement("span");
  const name = document.createElement("b");
  emoji.textContent = clueAuthor.emoji || "";
  name.textContent = clueAuthor.name || "Jugador";
  author.append(emoji, name);
  return author;
}

function getMasterWordClueAuthor(clue, room) {
  if (clue?.playerName || clue?.emoji) return { name: clue.playerName || "", emoji: clue.emoji || "" };
  const playerId = String(clue?.id || "").split(":")[0];
  const player = (room.players || []).find((item) => item.id === playerId);
  return { name: player?.name || "", emoji: player?.emoji || "" };
}

function getMasterWordStatusMessage(room, player) {
  if (room.status === "lobby") return `Esperando jugadores: ${room.players?.length || 0}/${room.config?.playerLimit || "?"}.`;
  if (room.status === "clue") {
    if (player?.isActive) return withMasterWordResult(room, `Eres el jugador activo. Pistas recibidas: ${room.cluesCast || 0}/${room.clueGivers || 0}.`);
    if (player?.hasSubmitted) return withMasterWordResult(room, "Pista enviada. Espera a los demas.");
    return withMasterWordResult(room, "Escribe una pista secreta. No se mostrara hasta filtrar duplicados.");
  }
  if (room.status === "guessing") {
    if (room.lastEvent?.type === "guess-wrong") return withMasterWordResult(room, `Fallaste "${room.lastEvent.guess || ""}". Intentos restantes: ${room.guessesRemaining || 0}/${room.guessLimit || 2}.`);
    return player?.isActive
      ? withMasterWordResult(room, `Adivina con las pistas validas o pasa. Intentos restantes: ${room.guessesRemaining || 1}/${room.guessLimit || 2}.`)
      : withMasterWordResult(room, `${room.activePlayerName} esta adivinando.`);
  }
  if (room.status === "finished") return getMasterWordResultMessage(room.lastRoundResult) || `Puntuacion final: ${room.score || 0}/${room.maxRounds || 13}.`;
  return "";
}

function withMasterWordResult(room, message) {
  const result = getMasterWordResultMessage(room.lastRoundResult);
  return result ? `${result} ${message}` : message;
}

function getMasterWordResultMessage(result) {
  if (!result) return "";
  if (result.result === "correct") return `${result.activePlayerName || "Jugador"} acerto "${result.guess || result.word || ""}". +1 punto. Total: ${result.score || 0}/${result.maxRounds || 13}.`;
  if (result.result === "wrong") return `${result.activePlayerName || "Jugador"} fallo "${result.guess || ""}". Sin punto. Total: ${result.score || 0}/${result.maxRounds || 13}.`;
  if (result.result === "passed") return `${result.activePlayerName || "Jugador"} paso palabra. Sin punto. Total: ${result.score || 0}/${result.maxRounds || 13}.`;
  return "";
}

function getMasterWordResultKey(result) {
  if (!result) return "";
  return [result.roundNumber || 0, result.result || "", result.guess || "", result.score || 0].join(":");
}

function maybeShowMasterWordResultPopup(room) {
  const result = room?.lastRoundResult;
  if (!result && room?.lastEvent?.type === "guess-wrong") {
    const key = `event:${room.eventId || ""}`;
    if (!room.eventId || key === masterWordShownResultKey) return;
    masterWordShownResultKey = key;
    showMasterWordResultPopup(room, {
      roundNumber: room.roundNumber || room.roundIndex || 0,
      activePlayerName: room.activePlayerName || "Jugador",
      guess: room.lastEvent.guess || "",
      result: "wrong",
      score: room.score || 0,
      maxRounds: room.maxRounds || 13
    });
    return;
  }
  const key = getMasterWordResultKey(result);
  if (!result || !key || key === masterWordShownResultKey) return;
  masterWordShownResultKey = key;
  showMasterWordResultPopup(room, result);
}

function showMasterWordResultPopup(room, result) {
  if (!masterWordResultPopup || !masterWordResultCard || !masterWordResultTitle || !masterWordResultBody) return;
  const isCorrect = result.result === "correct";
  const isFinished = room.status === "finished";
  masterWordResultPopup.hidden = false;
  masterWordResultCard.classList.toggle("is-correct", isCorrect);
  masterWordResultCard.classList.toggle("is-wrong", !isCorrect);
  masterWordResultTitle.textContent = isFinished ? "Resumen final" : (isCorrect ? "Acierto" : "Fallo");
  masterWordResultBody.replaceChildren(...buildMasterWordResultNodes(room, result, isFinished));
  document.body.classList.add("songs-popup-open");
}

function buildMasterWordResultNodes(room, result, isFinished) {
  const nodes = [];
  const headline = document.createElement("strong");
  headline.className = "masterword-popup-headline";
  headline.textContent = getMasterWordResultMessage(result);
  nodes.push(headline);
  const points = document.createElement("p");
  points.textContent = result.result === "correct" ? "Puntos sumados: 1" : "Puntos sumados: 0";
  nodes.push(points);
  if (isFinished) {
    const summary = document.createElement("section");
    summary.className = "masterword-final-summary";
    const title = document.createElement("h3");
    title.textContent = `Puntos finales: ${room.score || 0}/${room.maxRounds || 13}`;
    summary.append(title, ...buildMasterWordContributionRows(room));
    nodes.push(summary);
  }
  return nodes;
}

function buildMasterWordContributionRows(room) {
  const scores = new Map((room.players || []).map((player) => [player.id, { name: player.name, emoji: player.emoji, points: 0 }]));
  (room.history || []).forEach((round) => {
    if (round.result !== "correct") return;
    const entry = scores.get(round.activePlayerId) || { name: round.activePlayerName || "Jugador", emoji: "", points: 0 };
    entry.points += 1;
    scores.set(round.activePlayerId, entry);
  });
  return [...scores.values()].map((entry) => {
    const row = document.createElement("div");
    const player = document.createElement("span");
    const points = document.createElement("strong");
    player.textContent = `${entry.emoji || ""} ${entry.name || "Jugador"}`.trim();
    points.textContent = `${entry.points} pts`;
    row.append(player, points);
    return row;
  });
}

function hideMasterWordResultPopup() {
  if (!masterWordResultPopup) return;
  masterWordResultPopup.hidden = true;
  if (impostorVotePopup?.hidden && impostorEventPopup?.hidden && impostorGuessPopup?.hidden) document.body.classList.remove("songs-popup-open");
}

async function shareMasterWordRoom() {
  if (!masterWordSession) return;
  const url = new URL(window.location.href);
  url.searchParams.set("masterword", masterWordSession.roomName);
  await navigator.clipboard.writeText(url.toString());
  flashButton(masterWordShareButton, "Copiado", "Copiar enlace");
}

function leaveMasterWordToMenu() {
  const url = new URL(window.location.href);
  url.searchParams.delete("masterword");
  window.history.replaceState({}, "", url);
  leaveMasterWordRoom();
  showMasterWordLobby();
}

function leaveMasterWordRoom() {
  releaseMasterWordRoomIfHost();
  clearInterval(masterWordPollTimer);
  masterWordPollTimer = null;
  masterWordSession = null;
  masterWordRoom = null;
  masterWordShownEventId = "";
  masterWordShownResultKey = "";
  masterWordKnownPlayerIds = new Set();
  hideMasterWordResultPopup();
}

function releaseMasterWordRoomIfHost({ useBeacon = false } = {}) {
  const session = masterWordSession;
  if (!session?.isHost) return;
  session.isHost = false;
  const url = `/api/masterword/rooms/${encodeURIComponent(session.roomName)}/leave`;
  const body = JSON.stringify({ playerId: session.playerId, token: session.token });
  if (useBeacon && navigator.sendBeacon) {
    navigator.sendBeacon(url, new Blob([body], { type: "application/json" }));
  } else {
    void fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true }).catch(() => {});
  }
  clearInterval(masterWordPollTimer);
}

function populateResistanceEmojis() {
  [resistanceCreateEmoji, resistanceJoinEmoji].filter(Boolean).forEach((select, selectIndex) => {
    select.replaceChildren(...RESISTANCE_EMOJIS.map((emoji, index) => {
      const option = document.createElement("option");
      option.value = emoji;
      option.textContent = emoji;
      option.selected = index === selectIndex;
      return option;
    }));
  });
}

function showResistanceLobby() {
  if (!resistanceLobby || !resistanceGame) return;
  if (resistanceSession) {
    resistanceLobby.hidden = true;
    resistanceGame.hidden = false;
    renderResistanceRoom(resistanceRoom);
    return;
  }
  resistanceLobby.hidden = false;
  resistanceGame.hidden = true;
  if (resistanceLobbyMessage) resistanceLobbyMessage.textContent = "";
  const inviteRoom = new URLSearchParams(window.location.search).get("resistance");
  if (inviteRoom && resistanceJoinRoomName) {
    resistanceJoinRoomName.value = inviteRoom.trim();
    showResistanceForm("join");
    return;
  }
  showResistanceChoice();
}

function showResistanceChoice() {
  if (!resistanceChoice || !resistanceCreateForm || !resistanceJoinForm) return;
  resistanceChoice.hidden = false;
  resistanceCreateForm.hidden = true;
  resistanceJoinForm.hidden = true;
  if (resistanceLobbyMessage) resistanceLobbyMessage.textContent = "";
}

function showResistanceForm(mode) {
  if (!resistanceChoice || !resistanceCreateForm || !resistanceJoinForm) return;
  resistanceChoice.hidden = true;
  resistanceCreateForm.hidden = mode !== "create";
  resistanceJoinForm.hidden = mode !== "join";
  if (resistanceLobbyMessage) resistanceLobbyMessage.textContent = "";
  if (mode === "create") resistanceCreateRoomName?.focus();
  if (mode === "join") resistanceJoinRoomName?.focus();
}

async function createResistanceRoom(event) {
  event.preventDefault();
  resistanceLobbyMessage.textContent = "";
  const roomName = resistanceCreateRoomName.value.trim();
  const playerName = resistanceCreatePlayerName.value.trim();
  const playerLimit = Math.max(5, Math.min(10, Math.floor(Number(resistanceCreatePlayerLimit.value) || 5)));
  resistanceCreateRoomName.value = roomName;
  resistanceCreatePlayerName.value = playerName;
  resistanceCreatePlayerLimit.value = String(playerLimit);
  try {
    const response = await fetch("/api/resistance/rooms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomName, playerName, emoji: resistanceCreateEmoji.value, config: { playerLimit } })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "No se pudo crear la sala");
    enterResistanceRoom(payload);
  } catch (error) {
    resistanceLobbyMessage.textContent = error.message;
  }
}

async function joinResistanceRoom(event) {
  event.preventDefault();
  resistanceLobbyMessage.textContent = "";
  const roomName = resistanceJoinRoomName.value.trim();
  const playerName = resistanceJoinPlayerName.value.trim();
  resistanceJoinRoomName.value = roomName;
  resistanceJoinPlayerName.value = playerName;
  try {
    const response = await fetch(`/api/resistance/rooms/${encodeURIComponent(roomName)}/join`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerName, emoji: resistanceJoinEmoji.value })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "No se pudo entrar en la sala");
    enterResistanceRoom(payload);
  } catch (error) {
    resistanceLobbyMessage.textContent = error.message;
  }
}

function enterResistanceRoom(payload) {
  resistanceRoom = payload;
  resistanceSession = { roomName: payload.roomName, playerId: payload.player?.id, token: payload.player?.token, isHost: Boolean(payload.player?.isHost) };
  resistanceShownEventId = payload.eventId || "";
  resistanceKnownPlayerIds = new Set((payload.players || []).map((player) => player.id));
  resistanceLobby.hidden = true;
  resistanceGame.hidden = false;
  renderResistanceRoom(payload);
  startResistancePolling();
}

function startResistancePolling() {
  clearInterval(resistancePollTimer);
  resistancePollTimer = window.setInterval(pollResistanceRoom, 1500);
}

async function pollResistanceRoom() {
  if (!resistanceSession) return;
  try {
    const params = new URLSearchParams({ playerId: resistanceSession.playerId, token: resistanceSession.token });
    const response = await fetch(`/api/resistance/rooms/${encodeURIComponent(resistanceSession.roomName)}?${params}`);
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "Sala no disponible");
    if (!payload.player) {
      leaveResistanceRoom();
      resistanceLobbyMessage.textContent = "Has salido de esta sala. Vuelve a entrar con tu nombre si hace falta.";
      return;
    }
    resistanceRoom = payload;
    resistanceSession.isHost = Boolean(payload.player?.isHost);
    resistanceKnownPlayerIds = new Set((payload.players || []).map((player) => player.id));
    renderResistanceRoom(payload);
    if (payload.eventId && payload.eventId !== resistanceShownEventId) {
      resistanceShownEventId = payload.eventId;
      playimpostorAlarmSound(payload.status === "finished" ? "finished" : "notice");
    }
  } catch {
    // Polling can recover.
  }
}

async function startResistanceGame() {
  if (!resistanceSession) return;
  try {
    resistanceStartButton.disabled = true;
    const response = await fetch(`/api/resistance/rooms/${encodeURIComponent(resistanceSession.roomName)}/start`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId: resistanceSession.playerId, token: resistanceSession.token })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "No se pudo iniciar");
    resistanceRoom = payload;
    resistanceShownEventId = payload.eventId || "";
    renderResistanceRoom(payload);
  } catch (error) {
    resistanceGameMessage.textContent = error.message;
  } finally {
    resistanceStartButton.disabled = false;
  }
}

async function restartResistanceGame() {
  if (!resistanceSession?.isHost) return;
  try {
    resistanceRestartButton.disabled = true;
    const response = await fetch(`/api/resistance/rooms/${encodeURIComponent(resistanceSession.roomName)}/restart`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId: resistanceSession.playerId, token: resistanceSession.token })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "No se pudo reiniciar");
    resistanceRoom = payload;
    resistanceShownEventId = payload.eventId || "";
    renderResistanceRoom(payload);
  } catch (error) {
    resistanceGameMessage.textContent = error.message;
  } finally {
    resistanceRestartButton.disabled = false;
  }
}

async function kickResistancePlayer(event) {
  const button = event.target.closest("[data-resistance-kick-id]");
  if (!resistanceSession?.isHost) return;
  if (!button) {
    const card = event.target.closest(".resistance-player-card[data-player-id]");
    if (!card || card.dataset.playerId === resistanceSession.playerId || resistanceRoom?.status !== "lobby") return;
    event.preventDefault();
    showRoomKickPopup("resistance", card.dataset.playerId);
    return;
  }
  event.preventDefault();
  showRoomKickPopup("resistance", button.dataset.resistanceKickId);
}

async function performResistanceKick(targetPlayerId, control = null) {
  if (!targetPlayerId || !resistanceSession?.isHost) return;
  if (control) control.disabled = true;
  try {
    const response = await fetch(`/api/resistance/rooms/${encodeURIComponent(resistanceSession.roomName)}/kick`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId: resistanceSession.playerId, token: resistanceSession.token, targetPlayerId })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "No se pudo expulsar");
    hideRoomKickPopup("resistance");
    resistanceRoom = payload;
    renderResistanceRoom(payload);
  } catch (error) {
    resistanceGameMessage.textContent = error.message;
    if (control) control.disabled = false;
  }
}

async function kickMasterWordPlayer(event) {
  const button = event.target.closest("[data-masterword-kick-id]");
  if (!masterWordSession?.isHost) return;
  if (!button) {
    const card = event.target.closest(".masterword-player-card[data-player-id]");
    if (!card || card.dataset.playerId === masterWordSession.playerId || masterWordRoom?.status !== "lobby") return;
    event.preventDefault();
    showRoomKickPopup("masterword", card.dataset.playerId);
    return;
  }
  event.preventDefault();
  showRoomKickPopup("masterword", button.dataset.masterwordKickId);
}

async function performMasterWordKick(targetPlayerId, control = null) {
  if (!targetPlayerId || !masterWordSession?.isHost) return;
  if (control) control.disabled = true;
  try {
    const response = await fetch(`/api/masterword/rooms/${encodeURIComponent(masterWordSession.roomName)}/kick`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId: masterWordSession.playerId, token: masterWordSession.token, targetPlayerId })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "No se pudo expulsar");
    hideRoomKickPopup("masterword");
    masterWordRoom = payload;
    masterWordKnownPlayerIds = new Set((payload.players || []).map((player) => player.id));
    renderMasterWordRoom(payload);
  } catch (error) {
    masterWordGameMessage.textContent = error.message;
    if (control) control.disabled = false;
  }
}

function showRoomKickPopup(kind, targetPlayerId) {
  const room = kind === "resistance" ? resistanceRoom : kind === "masterword" ? masterWordRoom : multiplayerRoom;
  const target = (room?.players || []).find((player) => player.id === targetPlayerId);
  if (!target) return;
  if (kind === "resistance") pendingResistanceKickTargetId = targetPlayerId;
  else if (kind === "masterword") pendingMasterWordKickTargetId = targetPlayerId;
  else pendingMultiplayerKickTargetId = targetPlayerId;
  let popup = document.querySelector(`#${kind}KickPopup`);
  if (!popup) {
    popup = document.createElement("section");
    popup.id = `${kind}KickPopup`;
    popup.className = "impostor-popup impostor-kick-popup";
    popup.setAttribute("role", "dialog");
    popup.setAttribute("aria-modal", "true");
    popup.innerHTML = `
      <div class="impostor-popup-card impostor-kick-popup-card">
        <header>
          <h2>Expulsar jugador</h2>
          <button type="button" class="secondary compact-button" data-room-kick-close>Cerrar</button>
        </header>
        <p></p>
        <div class="impostor-kick-popup-actions">
          <button type="button" class="secondary" data-room-kick-close>Cancelar</button>
          <button type="button" class="danger" data-room-kick-confirm>Expulsar</button>
        </div>
      </div>
    `;
    popup.addEventListener("click", (popupEvent) => {
      if (popupEvent.target === popup || popupEvent.target.closest("[data-room-kick-close]")) hideRoomKickPopup(kind);
      const confirmButton = popupEvent.target.closest("[data-room-kick-confirm]");
      if (!confirmButton) return;
      if (kind === "resistance") performResistanceKick(pendingResistanceKickTargetId, confirmButton);
      else if (kind === "masterword") performMasterWordKick(pendingMasterWordKickTargetId, confirmButton);
      else performMultiplayerKick(pendingMultiplayerKickTargetId, confirmButton);
    });
    document.body.append(popup);
  }
  popup.querySelector("p").textContent = `Â¿Quieres expulsar a ${target.name || "este jugador"} de la sala?`;
  popup.hidden = false;
  document.body.classList.add("songs-popup-open");
}

function hideRoomKickPopup(kind) {
  const popup = document.querySelector(`#${kind}KickPopup`);
  if (popup) popup.hidden = true;
  if (kind === "resistance") pendingResistanceKickTargetId = "";
  else if (kind === "masterword") pendingMasterWordKickTargetId = "";
  else pendingMultiplayerKickTargetId = "";
  if (impostorVotePopup?.hidden && impostorEventPopup?.hidden && impostorGuessPopup?.hidden) document.body.classList.remove("songs-popup-open");
}

async function proposeResistanceTeam() {
  if (!resistanceSession || !resistanceRoom) return;
  const teamIds = [...resistanceTeamOptions.querySelectorAll("input:checked")].map((input) => input.value);
  try {
    resistanceProposeButton.disabled = true;
    const response = await fetch(`/api/resistance/rooms/${encodeURIComponent(resistanceSession.roomName)}/team`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId: resistanceSession.playerId, token: resistanceSession.token, teamIds })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "No se pudo proponer equipo");
    resistanceRoom = payload;
    renderResistanceRoom(payload);
  } catch (error) {
    resistanceGameMessage.textContent = error.message;
  } finally {
    resistanceProposeButton.disabled = false;
  }
}

async function voteResistanceTeam(approve) {
  if (!resistanceSession) return;
  resistanceApproveButton.disabled = true;
  resistanceRejectButton.disabled = true;
  try {
    const response = await fetch(`/api/resistance/rooms/${encodeURIComponent(resistanceSession.roomName)}/team-vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId: resistanceSession.playerId, token: resistanceSession.token, approve })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "No se pudo votar");
    resistanceRoom = payload;
    renderResistanceRoom(payload);
  } catch (error) {
    resistanceGameMessage.textContent = error.message;
  }
}

async function voteResistanceMission(sabotage) {
  if (!resistanceSession) return;
  resistanceSuccessButton.disabled = true;
  resistanceSabotageButton.disabled = true;
  try {
    const response = await fetch(`/api/resistance/rooms/${encodeURIComponent(resistanceSession.roomName)}/mission-vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId: resistanceSession.playerId, token: resistanceSession.token, sabotage })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "No se pudo ejecutar la mision");
    resistanceRoom = payload;
    renderResistanceRoom(payload);
  } catch (error) {
    resistanceGameMessage.textContent = error.message;
  }
}

function renderResistanceRoom(room = resistanceRoom) {
  if (!room || !resistancePlayers) return;
  const players = [...(room.players || [])].sort((a, b) => a.seatNumber - b.seatNumber);
  const player = room.player || players.find((item) => item.id === resistanceSession?.playerId);
  const isHost = Boolean(player?.isHost || resistanceSession?.isHost);
  resistanceSession.isHost = isHost;
  resistanceRoomLabel.textContent = room.roomName || "";
  resistanceMissionNumber.textContent = room.status === "lobby" ? `${players.length}/${room.config?.playerLimit || "?"}` : String(room.missionNumber || 1);
  resistanceTeamSize.textContent = String(room.teamSize || 0);
  resistanceRejectCount.textContent = `${room.rejectCount || 0}/5`;
  resistanceShareButton.hidden = !isHost;
  resistanceRestartButton.hidden = !isHost || room.status === "lobby";
  renderResistanceMissionTrack(room);
  renderResistancePlayers(players, player, room);
  renderResistanceRole(room, player);
  renderResistanceActions(room, player, players, isHost);
}

function renderResistanceMissionTrack(room) {
  resistanceMissionTrack.replaceChildren(...Array.from({ length: 5 }, (_, index) => {
    const result = room.missionResults?.[index];
    const item = document.createElement(result ? "button" : "span");
    item.className = "resistance-mission-node";
    if (result) {
      item.type = "button";
      item.dataset.resistanceRoundIndex = String(index);
      item.setAttribute("aria-label", `Ver detalle de mision ${index + 1}`);
    }
    if (result) item.classList.add(result.failed ? "is-failed" : "is-success");
    if (!result && index === room.missionIndex && room.status !== "lobby") item.classList.add("is-current");
    item.textContent = String(index + 1);
    return item;
  }));
}

function renderResistancePlayers(players, currentPlayer, room) {
  const canKick = resistanceSession?.isHost && room.status === "lobby";
  resistancePlayers.replaceChildren(...players.map((item) => {
    const card = document.createElement("article");
    card.className = "resistance-player-card";
    card.dataset.playerId = item.id;
    if (item.id === currentPlayer?.id) card.classList.add("is-current");
    if (item.isLeader) card.classList.add("is-leader");
    if (item.onTeam) card.classList.add("is-on-team");
    if (!item.connected) card.classList.add("is-disconnected");
    const status = item.isLeader ? "Lider" : item.onTeam ? "Equipo" : room.status === "lobby" ? "En sala" : "Reserva";
    card.innerHTML = `<span></span><strong></strong><small></small><b></b>`;
    card.querySelector("span").textContent = item.emoji || "";
    card.querySelector("strong").textContent = item.name || "";
    card.querySelector("small").textContent = status;
    card.querySelector("b").textContent = item.hasTeamVoted ? "Voto emitido" : item.hasMissionVoted ? "Accion enviada" : "";
    return card;
  }));
}

function renderResistanceRole(room, player) {
  const showRole = room.status !== "lobby" && player?.role;
  resistanceRoleCard.hidden = !showRole;
  if (!showRole) return;
  const isSpy = player.role === "spy";
  resistanceRoleCard.classList.toggle("is-spy", isSpy);
  resistanceRoleLabel.textContent = "Tu rol";
  resistanceRoleName.textContent = isSpy ? "Espia" : "Resistencia";
  resistanceRoleHint.textContent = isSpy ? `Otros espias: ${(player.spyNames || []).join(", ") || "solo tu"}` : "Aprueba buenos equipos y evita sabotajes.";
}

function renderResistanceActions(room, player, players, isHost) {
  const status = room.status || "lobby";
  resistanceGameMessage.textContent = getResistanceStatusMessage(room, player);
  resistanceTeamPicker.hidden = !(status === "team" && player?.isLeader);
  resistanceTeamVoteActions.hidden = !(status === "voting" && !player?.hasTeamVoted);
  resistanceMissionActions.hidden = !(status === "mission" && player?.onTeam && !player?.hasMissionVoted);
  resistanceStartButton.hidden = status !== "lobby" || !isHost;
  resistanceStartButton.disabled = !(isHost && players.length === Number(room.config?.playerLimit || 0));
  resistanceStartButton.textContent = resistanceStartButton.disabled ? `Esperando ${players.length}/${room.config?.playerLimit || "?"}` : "Iniciar operacion";
  if (!resistanceTeamPicker.hidden) renderResistanceTeamPicker(room, players);
  resistanceSabotageButton.hidden = player?.role !== "spy";
  resistanceApproveButton.disabled = false;
  resistanceRejectButton.disabled = false;
  resistanceSuccessButton.disabled = false;
  resistanceSabotageButton.disabled = false;
}

function renderResistanceTeamPicker(room, players) {
  const current = new Set(room.currentTeam || []);
  resistanceTeamOptions.replaceChildren(...players.map((item) => {
    const label = document.createElement("label");
    label.className = "resistance-team-option";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = item.id;
    input.checked = current.has(item.id);
    const avatar = document.createElement("span");
    avatar.textContent = item.emoji || "";
    const name = document.createElement("strong");
    name.textContent = item.name || "";
    label.append(input, avatar, name);
    return label;
  }));
  syncResistanceTeamSelection();
}

function syncResistanceTeamSelection() {
  if (!resistanceRoom || !resistanceTeamOptions || !resistanceProposeButton) return;
  const checked = [...resistanceTeamOptions.querySelectorAll("input:checked")];
  const max = Number(resistanceRoom.teamSize || 0);
  resistanceTeamOptions.querySelectorAll("input:not(:checked)").forEach((input) => { input.disabled = checked.length >= max; });
  resistanceProposeButton.disabled = checked.length !== max;
  resistanceProposeButton.textContent = `Proponer equipo (${checked.length}/${max})`;
}

function getResistanceStatusMessage(room, player) {
  if (room.status === "lobby") return `Esperando agentes: ${room.players?.length || 0}/${room.config?.playerLimit || "?"}.`;
  if (room.status === "finished") return `${room.winner === "spies" ? "Ganan los espias." : "Gana la resistencia."} ${player?.won ? "Has ganado." : "Has perdido."}`;
  const eventText = formatResistanceEvent(room.lastEvent);
  if (eventText) return eventText;
  if (room.status === "team") return `${room.leaderName} debe proponer ${room.teamSize} agentes para la mision ${room.missionNumber}.`;
  if (room.status === "voting") return `Votacion del equipo: ${room.teamVotesCast || 0}/${room.players?.length || 0}.`;
  if (room.status === "mission") return `Equipo en mision: ${room.missionVotesCast || 0}/${room.currentTeam?.length || 0} acciones.`;
  return "";
}

function formatResistanceEvent(event) {
  if (!event?.type) return "";
  if (event.type === "start") return `Roles asignados. Lider inicial: ${event.leaderName}.`;
  if (event.type === "team-proposed") return `${event.leaderName} propone: ${(event.teamNames || []).join(", ")}.`;
  if (event.type === "team-approved") return `Equipo aprobado (${event.approvals} si, ${event.rejected} no).`;
  if (event.type === "team-rejected") return `Equipo rechazado (${event.approvals} si, ${event.rejected} no). Nuevo lider: ${event.leaderName}.`;
  if (event.type === "five-rejections") return "Cinco equipos rechazados. Los espias toman el control.";
  if (event.type === "mission-succeeded") return `Mision ${event.missionNumber} completada. Sabotajes: ${event.sabotages}.`;
  if (event.type === "mission-failed") return `Mision ${event.missionNumber} saboteada. Sabotajes: ${event.sabotages}/${event.requiredFails}.`;
  return "";
}

function showResistanceRoundPopup(event) {
  const button = event.target.closest("[data-resistance-round-index]");
  if (!button || !resistanceRoundPopup || !resistanceRoundPopupBody || !resistanceRoom) return;
  const index = Number(button.dataset.resistanceRoundIndex);
  const result = resistanceRoom.missionResults?.[index];
  if (!result) return;
  const missionNumber = Number(result.missionNumber || index + 1);
  const playersById = new Map((resistanceRoom.players || []).map((player) => [player.id, player]));
  const supportIds = Object.entries(result.teamVotes || {}).filter(([, approved]) => approved).map(([id]) => id);
  const rejectIds = Object.entries(result.teamVotes || {}).filter(([, approved]) => !approved).map(([id]) => id);
  const missionIds = result.teamIds || [];
  const sabotages = Number(result.sabotages || 0);
  const successes = Number.isFinite(Number(result.successes)) ? Number(result.successes) : Math.max(0, missionIds.length - sabotages);
  resistanceRoundPopupTitle.textContent = `Mision ${missionNumber}: ${result.failed ? "Fracaso" : "Exito"}`;
  resistanceRoundPopupBody.replaceChildren(
    renderResistanceRoundStatGrid([
      { label: "Aciertos", value: String(successes) },
      { label: "Fracasos", value: String(sabotages) },
      { label: "Necesarios", value: `${sabotages}/${result.requiredFails || 1}` }
    ]),
    renderResistanceRoundList("Apoyaron el equipo", supportIds, playersById),
    renderResistanceRoundList("Rechazaron el equipo", rejectIds, playersById),
    renderResistanceRoundList("Participaron en la mision", missionIds, playersById)
  );
  resistanceRoundPopup.hidden = false;
  document.body.classList.add("songs-popup-open");
}

function hideResistanceRoundPopup() {
  if (!resistanceRoundPopup) return;
  resistanceRoundPopup.hidden = true;
  if (impostorVotePopup?.hidden && impostorEventPopup?.hidden && impostorGuessPopup?.hidden) document.body.classList.remove("songs-popup-open");
}

function renderResistanceRoundStatGrid(items) {
  const grid = document.createElement("div");
  grid.className = "resistance-round-stat-grid";
  items.forEach((item) => {
    const card = document.createElement("article");
    const label = document.createElement("span");
    const value = document.createElement("strong");
    label.textContent = item.label;
    value.textContent = item.value;
    card.append(label, value);
    grid.append(card);
  });
  return grid;
}

function renderResistanceRoundList(title, ids, playersById) {
  const section = document.createElement("section");
  section.className = "resistance-round-list";
  const heading = document.createElement("h3");
  heading.textContent = title;
  const list = document.createElement("div");
  list.replaceChildren(...(ids.length ? ids : [""]).map((id) => {
    const player = playersById.get(id);
    const item = document.createElement("span");
    item.textContent = player ? `${player.emoji || ""} ${player.name || ""}`.trim() : (id ? "Jugador desconocido" : "Sin datos");
    return item;
  }));
  section.append(heading, list);
  return section;
}

async function shareResistanceRoom() {
  if (!resistanceSession) return;
  const url = new URL(window.location.href);
  url.searchParams.set("resistance", resistanceSession.roomName);
  await navigator.clipboard.writeText(url.toString());
  flashButton(resistanceShareButton, "Copiado", "Copiar enlace");
}

function leaveResistanceToMenu() {
  const url = new URL(window.location.href);
  url.searchParams.delete("resistance");
  window.history.replaceState({}, "", url);
  leaveResistanceRoom();
  showResistanceLobby();
}

function leaveResistanceRoom() {
  releaseResistanceRoomIfHost();
  clearInterval(resistancePollTimer);
  resistancePollTimer = null;
  resistanceSession = null;
  resistanceRoom = null;
  resistanceShownEventId = "";
  resistanceKnownPlayerIds = new Set();
  hideResistanceRoundPopup();
}

function releaseResistanceRoomIfHost({ useBeacon = false } = {}) {
  const session = resistanceSession;
  if (!session?.isHost) return;
  session.isHost = false;
  const url = `/api/resistance/rooms/${encodeURIComponent(session.roomName)}/leave`;
  const body = JSON.stringify({ playerId: session.playerId, token: session.token });
  if (useBeacon && navigator.sendBeacon) {
    navigator.sendBeacon(url, new Blob([body], { type: "application/json" }));
  } else {
    void fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true }).catch(() => {});
  }
  clearInterval(resistancePollTimer);
}

function showScoreboardLobby() {
  if (!scoreboardLobby || !scoreboardGame) return;
  if (scoreboardSession) {
    scoreboardLobby.hidden = true;
    scoreboardGame.hidden = false;
    renderScoreboardRoom(scoreboardRoom);
    return;
  }
  scoreboardLobby.hidden = false;
  scoreboardGame.hidden = true;
  scoreboardLobbyMessage.textContent = "";
  const inviteRoom = new URLSearchParams(window.location.search).get("scoreboard")?.trim();
  if (inviteRoom) {
    showScoreboardLobbyPanel("join");
    void loadScoreboardRooms(inviteRoom);
    return;
  }
  showScoreboardChoice();
}

function showScoreboardChoice() {
  if (!scoreboardChoice || !scoreboardCreateForm || !scoreboardJoinPanel) return;
  scoreboardChoice.hidden = false;
  scoreboardCreateForm.hidden = true;
  scoreboardJoinPanel.hidden = true;
  scoreboardLobbyMessage.textContent = "";
}

function showScoreboardLobbyPanel(panel) {
  if (!scoreboardChoice || !scoreboardCreateForm || !scoreboardJoinPanel) return;
  scoreboardChoice.hidden = true;
  scoreboardCreateForm.hidden = panel !== "create";
  scoreboardJoinPanel.hidden = panel !== "join";
  scoreboardLobbyMessage.textContent = "";
  if (panel === "create") focusScoreboardInput(scoreboardCreateRoomName);
  if (panel === "join") void loadScoreboardRooms();
}

async function createScoreboardRoom(event) {
  event.preventDefault();
  scoreboardLobbyMessage.textContent = "";
  const roomName = scoreboardCreateRoomName.value.trim();
  const hostName = scoreboardCreateHostName.value.trim();
  const roundCount = Math.max(1, Math.min(80, Math.floor(Number(scoreboardCreateRounds.value) || 1)));
  const gameType = scoreboardCreateGameType?.value === "traitors-aboard" ? "traitors-aboard" : "";
  const sortOrder = scoreboardCreateForm.querySelector("[name='scoreboardSortOrder']:checked")?.value === "asc" ? "asc" : "desc";
  const password = scoreboardCreatePassword.value;
  const playersCanEdit = Boolean(scoreboardPlayersCanEdit?.checked);
  try {
    const response = await fetch("/api/scoreboard/rooms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomName, hostName, roundCount, sortOrder, password, playersCanEdit, gameType })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || t("scoreboard.create"));
    enterScoreboardRoom(payload, { role: "host" });
    showScoreboardPlayersPopup();
  } catch (error) {
    scoreboardLobbyMessage.textContent = error.message;
  }
}

async function loadScoreboardRooms(preferredRoomName = "") {
  if (!scoreboardRoomList) return;
  scoreboardRoomList.replaceChildren();
  const loading = document.createElement("div");
  loading.className = "scoreboard-room-list-empty";
  loading.textContent = t("scoreboard.loadingRooms");
  scoreboardRoomList.append(loading);
  try {
    const response = await fetch("/api/scoreboard/rooms");
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || t("scoreboard.loadingRooms"));
    scoreboardAvailableRooms = Array.isArray(payload.rooms) ? payload.rooms : [];
    renderScoreboardRoomList(scoreboardAvailableRooms);
    const wanted = String(preferredRoomName || new URLSearchParams(window.location.search).get("scoreboard") || "").trim();
    if (wanted) {
      const room = scoreboardAvailableRooms.find((item) => item.roomName.toLocaleLowerCase() === wanted.toLocaleLowerCase());
      if (room) openScoreboardJoinPopup(room);
    }
  } catch (error) {
    loading.textContent = error.message;
  }
}

function renderScoreboardRoomList(rooms) {
  if (!scoreboardRoomList) return;
  if (!rooms.length) {
    const empty = document.createElement("div");
    empty.className = "scoreboard-room-list-empty";
    empty.textContent = t("scoreboard.noRooms");
    scoreboardRoomList.replaceChildren(empty);
    return;
  }
  scoreboardRoomList.replaceChildren(...rooms.map((room) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "scoreboard-room-card";
    button.dataset.roomName = room.roomName;
    const name = document.createElement("strong");
    name.textContent = room.roomName;
    const meta = document.createElement("small");
    const gameLabel = room.gameType === "traitors-aboard" ? ` · ${t("scoreboard.traitorsAboard")}` : "";
    meta.textContent = `${room.playerCount} ${t("scoreboard.players")} · ${room.roundCount} ${t("scoreboard.rounds")} · ${room.sortOrder === "asc" ? t("scoreboard.lowFirst") : t("scoreboard.highFirst")}${gameLabel}`;
    const access = document.createElement("span");
    access.textContent = room.passwordRequired ? t("scoreboard.protected") : t("scoreboard.open");
    button.append(name, meta, access);
    return button;
  }));
}

function selectScoreboardRoom(event) {
  const card = event.target.closest("[data-room-name]");
  if (!card) return;
  const room = scoreboardAvailableRooms.find((item) => item.roomName === card.dataset.roomName);
  if (room) openScoreboardJoinPopup(room);
}

function openScoreboardJoinPopup(room) {
  scoreboardSelectedRoom = room;
  scoreboardJoinPopupTitle.textContent = room.roomName;
  scoreboardJoinPasswordField.hidden = !room.passwordRequired;
  scoreboardJoinPassword.required = Boolean(room.passwordRequired);
  scoreboardJoinPassword.value = "";
  scoreboardJoinNickname.value = "";
  scoreboardJoinMessage.textContent = "";
  showScoreboardPopup(scoreboardJoinPopup);
}

async function joinScoreboardAsSpectator() {
  await joinSelectedScoreboardRoom({ spectator: true });
}

async function joinScoreboardWithNickname(event) {
  event.preventDefault();
  await joinSelectedScoreboardRoom({
    spectator: false,
    nickname: scoreboardJoinNickname.value.trim(),
    password: scoreboardJoinPassword.value
  });
}

async function joinSelectedScoreboardRoom(identity) {
  if (!scoreboardSelectedRoom) return;
  scoreboardJoinMessage.textContent = "";
  try {
    const response = await fetch(`/api/scoreboard/rooms/${encodeURIComponent(scoreboardSelectedRoom.roomName)}/join`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(identity)
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || t("scoreboard.join"));
    enterScoreboardRoom(payload, {
      role: payload.viewer?.role || "spectator",
      playerId: payload.viewer?.playerId || "",
      token: payload.viewer?.token || ""
    });
    scoreboardGameMessage.textContent = payload.viewer?.reclaimed
      ? t("scoreboard.playerReclaimed")
      : payload.viewer?.role === "player" ? t(payload.playersCanEdit ? "scoreboard.playerAddedEditable" : "scoreboard.playerAdded") : "";
    hideScoreboardPopup(scoreboardJoinPopup);
  } catch (error) {
    scoreboardJoinMessage.textContent = error.message;
  }
}

function enterScoreboardRoom(payload, viewer = {}) {
  const privateSession = payload.session || {};
  scoreboardSession = {
    roomName: payload.roomName,
    hostId: privateSession.hostId || "",
    token: privateSession.token || "",
    isHost: Boolean(privateSession.isHost || viewer.role === "host"),
    role: viewer.role || (privateSession.isHost ? "host" : "spectator"),
    playerId: viewer.playerId || "",
    playerToken: viewer.token || ""
  };
  scoreboardRoom = payload;
  scoreboardShownResultId = "";
  scoreboardKnownScoreEventIds = new Set((payload.scoreEvents || []).map((event) => event.id));
  scoreboardLobby.hidden = true;
  scoreboardGame.hidden = false;
  const url = new URL(window.location.href);
  url.searchParams.set("scoreboard", payload.roomName);
  window.history.replaceState({}, "", url);
  clearInterval(scoreboardPollTimer);
  scoreboardPollTimer = window.setInterval(pollScoreboardRoom, 1200);
  renderScoreboardRoom(payload);
}

async function pollScoreboardRoom() {
  if (!scoreboardSession) return;
  try {
    const params = new URLSearchParams();
    if (scoreboardSession.isHost) {
      params.set("hostId", scoreboardSession.hostId);
      params.set("token", scoreboardSession.token);
    }
    const suffix = params.size ? `?${params}` : "";
    const response = await fetch(`/api/scoreboard/rooms/${encodeURIComponent(scoreboardSession.roomName)}${suffix}`);
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "Room unavailable");
    scoreboardRoom = payload;
    renderScoreboardRoom(payload);
  } catch (error) {
    clearInterval(scoreboardPollTimer);
    scoreboardPollTimer = null;
    scoreboardGameMessage.textContent = error.message;
  }
}

function renderScoreboardRoom(room = scoreboardRoom) {
  if (!room || !scoreboardSession) return;
  announceScoreboardScoreEvents(room);
  scoreboardRoomLabel.textContent = room.roomName;
  const order = room.sortOrder === "asc" ? t("scoreboard.orderLow") : t("scoreboard.orderHigh");
  const roleKey = scoreboardSession.isHost
    ? "scoreboard.hostMode"
    : scoreboardSession.role === "player" && room.playersCanEdit ? "scoreboard.playerEditMode"
      : scoreboardSession.role === "player" ? "scoreboard.playerMode" : "scoreboard.spectatorMode";
  const currentRoundLabel = room.playersCanEdit ? ` · ${t("scoreboard.currentRound", { round: Number(room.currentRound || 0) + 1 })}` : "";
  const gameTypeLabel = room.gameType === "traitors-aboard" ? ` · ${t("scoreboard.traitorsAboard")}` : "";
  scoreboardModeLabel.textContent = `${t(roleKey, { order })} · ${t("scoreboard.game", { game: room.gameNumber || 1 })}${gameTypeLabel}${currentRoundLabel}`;
  const hostCanControl = scoreboardSession.isHost && room.status !== "completed";
  document.querySelectorAll(".scoreboard-host-control").forEach((button) => { button.hidden = !hostCanControl; });
  if (scoreboardSettingsButton) scoreboardSettingsButton.hidden = !scoreboardSession.isHost;
  if (scoreboardViewerLogButton) scoreboardViewerLogButton.hidden = scoreboardSession.isHost;
  if (scoreboardFinishButton) scoreboardFinishButton.hidden = !hostCanControl || (room.status === "finished" && !(room.games || []).length);
  if (scoreboardNewGameButton) scoreboardNewGameButton.hidden = !hostCanControl || room.status !== "finished" || room.resultScope === "all";
  if (scoreboardNextGameButton) scoreboardNextGameButton.hidden = !hostCanControl || room.status !== "finished" || room.resultScope === "all";
  const showRoundControls = hostCanControl && room.playersCanEdit && room.status === "active";
  if (scoreboardRoundNavigation) scoreboardRoundNavigation.hidden = !showRoundControls;
  if (scoreboardPreviousRoundButton) {
    scoreboardPreviousRoundButton.disabled = Number(room.currentRound || 0) <= 0;
  }
  if (scoreboardNextRoundButton) {
    scoreboardNextRoundButton.disabled = Number(room.currentRound || 0) >= Number(room.roundCount || 1) - 1;
  }
  if (scoreboardHistoryButton) scoreboardHistoryButton.hidden = Number(room.gameNumber || 1) < 2;
  if (scoreboardSortOrderButton) scoreboardSortOrderButton.textContent = `\u2195 ${t("scoreboard.orderButton", { order })}`;
  if (["finished", "completed"].includes(room.status)) {
    const isOverall = room.resultScope === "all" || room.status === "completed";
    document.querySelector("#scoreboardPodiumEyebrow").textContent = t(isOverall ? "scoreboard.allFinished" : "scoreboard.finished");
    document.querySelector("#scoreboardPodiumTitle").textContent = t(isOverall ? "scoreboard.overallPodium" : "scoreboard.gamePodium", { game: room.gameNumber || 1 });
  }
  scoreboardTable.classList.toggle("is-readonly", !scoreboardSession.isHost && !(scoreboardSession.role === "player" && room.playersCanEdit));
  renderScoreboardTable(room);
  if (["finished", "completed"].includes(room.status) && room.resultId && scoreboardShownResultId !== room.resultId) showScoreboardPodium(room);
}

function renderScoreboardTable(room) {
  const headRow = document.createElement("tr");
  const playerHead = document.createElement("th");
  playerHead.scope = "col";
  playerHead.textContent = t("scoreboard.players");
  headRow.append(playerHead);
  for (let roundIndex = 0; roundIndex < room.roundCount; roundIndex += 1) {
    const cell = document.createElement("th");
    cell.scope = "col";
    const isCurrentRound = Boolean(room.playersCanEdit && roundIndex === Number(room.currentRound || 0));
    cell.classList.toggle("is-current-round", isCurrentRound);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "scoreboard-round-header-button";
    button.dataset.roundIndex = String(roundIndex);
    const canOpenRound = (scoreboardSession.isHost && room.status !== "completed") || room.gameType === "traitors-aboard";
    button.disabled = !canOpenRound;
    if (isCurrentRound) button.setAttribute("aria-current", "true");
    const label = document.createElement("span");
    label.textContent = t("scoreboard.round");
    const number = document.createElement("strong");
    number.textContent = String(roundIndex + 1);
    button.append(label, number);
    cell.append(button);
    headRow.append(cell);
  }
  scoreboardTableHead.replaceChildren(headRow);

  const rankedPlayers = rankScoreboardPlayers(room.players || [], room.sortOrder);
  scoreboardTableBody.replaceChildren(...rankedPlayers.map(({ player, rank, total: totalScore }) => {
    const row = document.createElement("tr");
    const playerCell = document.createElement("td");
    const playerButton = document.createElement("button");
    playerButton.type = "button";
    playerButton.className = "scoreboard-player-cell-button";
    playerButton.dataset.playerId = player.id;
    const canViewRoleHistory = room.gameType === "traitors-aboard";
    playerButton.disabled = !(scoreboardSession.isHost && room.status !== "completed") && !canViewRoleHistory;
    const identity = document.createElement("span");
    identity.className = "scoreboard-player-identity";
    const name = document.createElement("strong");
    name.textContent = player.name;
    const rankChip = document.createElement("small");
    rankChip.className = `scoreboard-rank-chip rank-${Math.min(rank, 4)}`;
    rankChip.textContent = `#${rank}`;
    rankChip.title = t("scoreboard.position", { position: rank });
    identity.append(name, rankChip);
    const totalLabel = document.createElement("small");
    totalLabel.className = "scoreboard-total-label";
    totalLabel.textContent = t("scoreboard.total");
    const totalElement = document.createElement("b");
    totalElement.textContent = formatScoreboardNumber(totalScore);
    playerButton.append(identity, totalLabel, totalElement);
    playerCell.append(playerButton);
    row.append(playerCell);
    for (let roundIndex = 0; roundIndex < room.roundCount; roundIndex += 1) {
      const scoreCell = document.createElement("td");
      scoreCell.classList.toggle("is-current-round", Boolean(room.playersCanEdit && roundIndex === Number(room.currentRound || 0)));
      const button = document.createElement("button");
      const value = player.scores?.[roundIndex] ?? null;
      button.type = "button";
      button.className = `scoreboard-score-cell-button${value === null ? " is-blank" : ""}`;
      button.dataset.playerId = player.id;
      button.dataset.roundIndex = String(roundIndex);
      button.disabled = !canEditScoreboardPlayer(player.id, room, roundIndex);
      if (value !== null) button.textContent = formatScoreboardNumber(value);
      button.setAttribute("aria-label", `${player.name}, ${t("scoreboard.round")} ${roundIndex + 1}: ${value === null ? t("scoreboard.blankScore") : value}`);
      scoreCell.append(button);
      row.append(scoreCell);
    }
    return row;
  }));
  scoreboardEmptyState.hidden = rankedPlayers.length > 0;
}

function sortScoreboardPlayers(players, sortOrder) {
  return rankScoreboardPlayers(players, sortOrder).map(({ player }) => player);
}

function rankScoreboardPlayers(players, sortOrder) {
  const direction = sortOrder === "asc" ? 1 : -1;
  const sorted = [...players].sort((a, b) => direction * (scoreboardPlayerTotal(a) - scoreboardPlayerTotal(b)) || Number(a.position || 0) - Number(b.position || 0) || a.name.localeCompare(b.name));
  let previousTotal = null;
  let previousRank = 0;
  return sorted.map((player, index) => {
    const total = scoreboardPlayerTotal(player);
    if (index === 0 || total !== previousTotal) previousRank = index + 1;
    previousTotal = total;
    return { player, rank: previousRank, total };
  });
}

function scoreboardPlayerTotal(player) {
  return (player.scores || []).reduce((total, value) => total + (Number(value) || 0), 0);
}

function formatScoreboardNumber(value) {
  return Number(value || 0).toLocaleString(currentLanguage, { maximumFractionDigits: 2 });
}

function handleScoreboardTableClick(event) {
  const scoreButton = event.target.closest(".scoreboard-score-cell-button");
  if (scoreButton && canEditScoreboardPlayer(scoreButton.dataset.playerId, scoreboardRoom, Number(scoreButton.dataset.roundIndex))) {
    showScoreboardCellPopup(scoreButton.dataset.playerId, Number(scoreButton.dataset.roundIndex));
    return;
  }
  const playerButton = event.target.closest(".scoreboard-player-cell-button");
  if (playerButton) {
    if (scoreboardSession?.isHost && scoreboardRoom?.status !== "completed") showScoreboardPlayerPopup(playerButton.dataset.playerId);
    else if (scoreboardRoom?.gameType === "traitors-aboard") showScoreboardPlayerDetailsPopup(playerButton.dataset.playerId);
    return;
  }
  const roundButton = event.target.closest(".scoreboard-round-header-button");
  if (roundButton && (scoreboardSession?.isHost || scoreboardRoom?.gameType === "traitors-aboard")) {
    showScoreboardRoundPopup(Number(roundButton.dataset.roundIndex));
  }
}

function canEditScoreboardPlayer(playerId, room = scoreboardRoom, roundIndex = -1) {
  if (!scoreboardSession || !room || room.status === "completed") return false;
  return scoreboardSession.isHost || Boolean(
    room.playersCanEdit
    && room.status === "active"
    && scoreboardSession.role === "player"
    && scoreboardSession.playerId === playerId
    && roundIndex === Number(room.currentRound || 0)
  );
}

function showScoreboardPlayersPopup() {
  if (!scoreboardSession?.isHost || !scoreboardRoom) return;
  const players = scoreboardRoom.players || [];
  scoreboardPlayerCount.value = String(players.length);
  scoreboardPlayerCountField.hidden = players.length > 0;
  scoreboardPlayerNameFields.replaceChildren(...players.map((player, index) => createScoreboardPlayerNameField(index, player)));
  showScoreboardPopup(scoreboardPlayersPopup);
  if (!scoreboardPlayerCountField.hidden) focusScoreboardInput(scoreboardPlayerCount);
}

function syncScoreboardPlayerNameFields() {
  const count = Math.max(0, Math.min(60, Math.floor(Number(scoreboardPlayerCount.value) || 0)));
  const current = Array.from(scoreboardPlayerNameFields.querySelectorAll(".scoreboard-player-name-field input")).map((input) => ({ id: input.dataset.playerId || "", name: input.value }));
  scoreboardPlayerNameFields.replaceChildren(...Array.from({ length: count }, (_, index) => createScoreboardPlayerNameField(index, current[index] || null)));
}

function createScoreboardPlayerNameField(index, player) {
  const field = document.createElement("div");
  field.className = "scoreboard-player-name-field";
  const number = document.createElement("span");
  number.textContent = `#${index + 1}`;
  const input = document.createElement("input");
  input.maxLength = 24;
  input.required = true;
  input.placeholder = `${t("scoreboard.nickname")} ${index + 1}`;
  input.value = player?.name || "";
  input.dataset.playerId = player?.id || "";
  input.setAttribute("aria-label", input.placeholder);
  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "scoreboard-remove-player-button danger";
  removeButton.dataset.scoreboardRemovePlayer = "";
  removeButton.textContent = "\u00d7";
  removeButton.setAttribute("aria-label", t("scoreboard.removePlayer", { number: index + 1 }));
  removeButton.title = removeButton.getAttribute("aria-label");
  field.append(number, input, removeButton);
  return field;
}

function addScoreboardPlayerNameField() {
  const count = scoreboardPlayerNameFields.querySelectorAll(".scoreboard-player-name-field").length;
  if (count >= 60) return;
  scoreboardPlayerNameFields.append(createScoreboardPlayerNameField(count, null));
  renumberScoreboardPlayerNameFields();
}

function removeScoreboardPlayerNameField(event) {
  const button = event.target.closest("[data-scoreboard-remove-player]");
  if (!button) return;
  button.closest(".scoreboard-player-name-field")?.remove();
  renumberScoreboardPlayerNameFields();
}

function renumberScoreboardPlayerNameFields() {
  const fields = Array.from(scoreboardPlayerNameFields.querySelectorAll(".scoreboard-player-name-field"));
  fields.forEach((field, index) => {
    const number = index + 1;
    const input = field.querySelector("input");
    const removeButton = field.querySelector("[data-scoreboard-remove-player]");
    field.querySelector("span").textContent = `#${number}`;
    input.placeholder = `${t("scoreboard.nickname")} ${number}`;
    input.setAttribute("aria-label", input.placeholder);
    const removeLabel = t("scoreboard.removePlayer", { number });
    removeButton.setAttribute("aria-label", removeLabel);
    removeButton.title = removeLabel;
  });
  scoreboardPlayerCount.value = String(fields.length);
}

async function saveScoreboardPlayers(event) {
  event.preventDefault();
  const players = Array.from(scoreboardPlayerNameFields.querySelectorAll(".scoreboard-player-name-field input")).map((input) => ({ id: input.dataset.playerId || "", name: input.value.trim() }));
  try {
    await scoreboardAction("players", { players });
    hideScoreboardPopup(scoreboardPlayersPopup);
  } catch (error) {
    scoreboardGameMessage.textContent = error.message;
  }
}

function showScoreboardCellPopup(playerId, roundIndex) {
  const player = scoreboardRoom?.players?.find((item) => item.id === playerId);
  if (!player) return;
  scoreboardEditingCell = { playerId, roundIndex };
  scoreboardCellPopupTitle.textContent = `${player.name} · ${t("scoreboard.round")} ${roundIndex + 1}`;
  scoreboardCellScore.value = player.scores?.[roundIndex] ?? "";
  scoreboardCellScore.setCustomValidity("");
  const supportsRoles = scoreboardRoom?.gameType === "traitors-aboard";
  scoreboardCellRoleField.hidden = !supportsRoles;
  if (supportsRoles) scoreboardCellRole.value = getScoreboardRoundMeta(scoreboardRoom, roundIndex).roles[playerId] || "";
  showScoreboardPopup(scoreboardCellPopup);
  focusScoreboardInput(scoreboardCellScore, true);
}

async function saveScoreboardCell(event) {
  event.preventDefault();
  if (!scoreboardEditingCell) return;
  const value = parseScoreboardInput(scoreboardCellScore, true);
  if (value === undefined) return;
  await updateScoreboardCell(value);
}

async function clearScoreboardCell() {
  if (!scoreboardEditingCell) return;
  await updateScoreboardCell(null);
}

async function updateScoreboardCell(value) {
  try {
    const desiredRole = scoreboardCellRoleField.hidden ? "" : scoreboardCellRole.value;
    const previousRole = scoreboardEditingCell ? getScoreboardRoundMeta(scoreboardRoom, scoreboardEditingCell.roundIndex).roles[scoreboardEditingCell.playerId] || "" : "";
    const roleChanged = !scoreboardCellRoleField.hidden && desiredRole !== previousRole;
    if (roleChanged) {
      if (scoreboardSession?.isHost) {
        const roundMeta = getScoreboardRoundMeta(scoreboardRoom, scoreboardEditingCell.roundIndex);
        const assignments = Object.entries({ ...roundMeta.roles, [scoreboardEditingCell.playerId]: desiredRole })
          .filter(([, role]) => role)
          .map(([playerId, role]) => ({ playerId, role }));
        await scoreboardAction("round-meta", { roundIndex: scoreboardEditingCell.roundIndex, winner: roundMeta.winner, assignments });
      } else {
        await scoreboardPlayerAction("player-role", { roundIndex: scoreboardEditingCell.roundIndex, role: desiredRole });
      }
    }
    if (scoreboardSession?.isHost) {
      await scoreboardAction("cell", { ...scoreboardEditingCell, value });
    } else {
      await scoreboardPlayerAction("player-cell", { ...scoreboardEditingCell, value });
    }
    hideScoreboardPopup(scoreboardCellPopup);
  } catch (error) {
    scoreboardGameMessage.textContent = error.message;
  }
}

function getScoreboardRoundMeta(room, roundIndex) {
  const source = room?.roundRoles?.[roundIndex];
  return {
    winner: source?.winner === "crew" || source?.winner === "traitors" ? source.winner : "",
    roles: source?.roles && typeof source.roles === "object" ? source.roles : {}
  };
}

function showScoreboardPlayerPopup(playerId) {
  const player = scoreboardRoom?.players?.find((item) => item.id === playerId);
  if (!player) return;
  scoreboardEditingPlayerId = playerId;
  scoreboardPlayerPopupTitle.textContent = player.name;
  scoreboardPlayerNickname.value = player.name;
  scoreboardPlayerScores.replaceChildren(...Array.from({ length: scoreboardRoom.roundCount }, (_, roundIndex) => {
    const label = document.createElement("label");
    label.className = "scoreboard-player-score-field";
    const number = document.createElement("span");
    number.textContent = `${t("scoreboard.round")} ${roundIndex + 1}`;
    const input = document.createElement("input");
    input.type = "text";
    input.inputMode = "text";
    input.autocomplete = "off";
    input.dataset.roundIndex = String(roundIndex);
    input.placeholder = t("scoreboard.blankScore");
    input.value = player.scores?.[roundIndex] ?? "";
    label.append(number, input);
    return label;
  }));
  const supportsRoles = scoreboardRoom.gameType === "traitors-aboard";
  scoreboardPlayerRoleHistorySection.hidden = !supportsRoles;
  if (supportsRoles) renderScoreboardPlayerRoleHistory(scoreboardPlayerRoleHistory, playerId);
  showScoreboardPopup(scoreboardPlayerPopup);
  focusScoreboardInput(scoreboardPlayerNickname);
}

function showScoreboardPlayerDetailsPopup(playerId) {
  const player = scoreboardRoom?.players?.find((item) => item.id === playerId);
  if (!player || scoreboardRoom?.gameType !== "traitors-aboard") return;
  scoreboardPlayerDetailsTitle.textContent = player.name;
  renderScoreboardPlayerRoleHistory(scoreboardPlayerDetailsRoles, playerId);
  showScoreboardPopup(scoreboardPlayerDetailsPopup);
}

function getScoreboardPlayerRoleHistory(room, playerId) {
  if (!room || room.gameType !== "traitors-aboard") return [];
  const games = [
    ...(room.games || []).map((game) => ({ number: game.number, roundRoles: game.roundRoles || [] })),
    { number: room.gameNumber || 1, roundRoles: room.roundRoles || [] }
  ];
  return games.flatMap((game) => (game.roundRoles || []).flatMap((roundMeta, roundIndex) => {
    const role = roundMeta?.roles?.[playerId];
    if (role !== "crew" && role !== "traitor") return [];
    const winner = roundMeta?.winner === "crew" || roundMeta?.winner === "traitors" ? roundMeta.winner : "";
    const won = winner ? (role === "crew" && winner === "crew") || (role === "traitor" && winner === "traitors") : null;
    return [{ gameNumber: Number(game.number || 1), roundIndex, role, winner, won }];
  }));
}

function renderScoreboardPlayerRoleHistory(container, playerId) {
  const entries = getScoreboardPlayerRoleHistory(scoreboardRoom, playerId);
  if (!entries.length) {
    const empty = document.createElement("div");
    empty.className = "scoreboard-role-history-empty";
    empty.textContent = t("scoreboard.noRoleHistory");
    container.replaceChildren(empty);
    return;
  }
  container.replaceChildren(...entries.map((entry) => {
    const row = document.createElement("article");
    row.className = "scoreboard-role-history-item";
    const round = document.createElement("strong");
    round.textContent = `${t("scoreboard.game", { game: entry.gameNumber })} · ${t("scoreboard.round")} ${entry.roundIndex + 1}`;
    const role = document.createElement("span");
    role.className = `scoreboard-role-chip is-${entry.role}`;
    role.textContent = t(entry.role === "crew" ? "scoreboard.crew" : "scoreboard.impostor");
    row.append(round, role);
    if (entry.won !== null) {
      const outcome = document.createElement("span");
      outcome.className = `scoreboard-outcome-chip is-${entry.won ? "win" : "loss"}`;
      outcome.textContent = t(entry.won ? "scoreboard.won" : "scoreboard.lost");
      row.append(outcome);
    }
    return row;
  }));
}

async function saveScoreboardPlayer(event) {
  event.preventDefault();
  const scoreInputs = Array.from(scoreboardPlayerScores.querySelectorAll("input"));
  const scores = scoreInputs.map((input) => parseScoreboardInput(input, true));
  if (scores.includes(undefined)) return;
  try {
    await scoreboardAction("player", { targetPlayerId: scoreboardEditingPlayerId, name: scoreboardPlayerNickname.value.trim(), scores });
    hideScoreboardPopup(scoreboardPlayerPopup);
  } catch (error) {
    scoreboardGameMessage.textContent = error.message;
  }
}

async function deleteScoreboardPlayer() {
  const player = scoreboardRoom?.players?.find((item) => item.id === scoreboardEditingPlayerId);
  if (!player || !window.confirm(t("scoreboard.confirmKick", { name: player.name }))) return;
  try {
    await scoreboardAction("kick", { targetPlayerId: player.id });
    hideScoreboardPopup(scoreboardPlayerPopup);
  } catch (error) {
    scoreboardGameMessage.textContent = error.message;
  }
}

function showScoreboardRoundPopup(roundIndex) {
  if (!scoreboardRoom || roundIndex < 0 || roundIndex >= Number(scoreboardRoom.roundCount || 0)) return;
  const supportsRoles = scoreboardRoom.gameType === "traitors-aboard";
  const canEdit = Boolean(scoreboardSession?.isHost && scoreboardRoom.status !== "completed");
  if (!canEdit && !supportsRoles) return;
  scoreboardEditingRoundIndex = roundIndex;
  toggleScoreboardBulkRole("");
  scoreboardRoundPopupTitle.textContent = `${t("scoreboard.round")} ${roundIndex + 1}`;
  document.querySelector("#scoreboardRoundPopupEyebrow").textContent = t(canEdit ? "scoreboard.multiScore" : "scoreboard.roundDetails");
  scoreboardRoundAmount.value = "0";
  scoreboardRoundAmount.setCustomValidity("");
  scoreboardDeleteRoundButton.disabled = Number(scoreboardRoom?.roundCount || 0) <= 1;
  scoreboardRoundScoreControls.hidden = !canEdit;
  scoreboardRoundSelectionFieldset.hidden = !canEdit;
  scoreboardRoundEditActions.hidden = !canEdit;
  scoreboardBulkRoleControls.hidden = !canEdit || !supportsRoles;
  scoreboardRoundPlayerList.replaceChildren(...sortScoreboardPlayers(scoreboardRoom?.players || [], scoreboardRoom?.sortOrder).map((player) => {
    const label = document.createElement("label");
    label.className = "scoreboard-round-player-option";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = player.id;
    const name = document.createElement("span");
    name.textContent = player.name;
    label.append(input, name);
    return label;
  }));
  scoreboardTraitorsRoundSection.hidden = !supportsRoles;
  if (supportsRoles) {
    const roundMeta = getScoreboardRoundMeta(scoreboardRoom, roundIndex);
    const winnerInput = scoreboardRoundForm.querySelector(`[name='scoreboardRoundWinner'][value='${roundMeta.winner}']`);
    if (winnerInput) winnerInput.checked = true;
    scoreboardRoundWinnerFieldset.hidden = !canEdit;
    scoreboardSaveRoundWinnerButton.hidden = !canEdit;
    renderScoreboardRoundRoleSummary(roundMeta);
  } else {
    scoreboardRoundRoleSummary.replaceChildren();
  }
  showScoreboardPopup(scoreboardRoundPopup);
  if (canEdit) focusScoreboardInput(scoreboardRoundAmount, true);
}

function renderScoreboardRoundRoleSummary(roundMeta) {
  const winner = document.createElement("article");
  winner.className = "scoreboard-round-winner-summary";
  const winnerTitle = document.createElement("strong");
  winnerTitle.textContent = t("scoreboard.winner");
  const winnerChip = document.createElement("span");
  winnerChip.className = `scoreboard-side-chip ${roundMeta.winner === "crew" ? "is-crew" : roundMeta.winner === "traitors" ? "is-traitor" : "is-unknown"}`;
  winnerChip.textContent = roundMeta.winner === "crew"
    ? t("scoreboard.crewPlural")
    : roundMeta.winner === "traitors" ? t("scoreboard.traitorsPlural") : t("scoreboard.roleUnknown");
  winner.append(winnerTitle, winnerChip);
  const roleRows = sortScoreboardPlayers(scoreboardRoom?.players || [], scoreboardRoom?.sortOrder).flatMap((player) => {
    const role = roundMeta.roles[player.id];
    if (role !== "crew" && role !== "traitor") return [];
    const row = document.createElement("article");
    row.className = "scoreboard-round-role-summary-item";
    const name = document.createElement("strong");
    name.textContent = player.name;
    const roleChip = document.createElement("span");
    roleChip.className = `scoreboard-role-chip is-${role}`;
    roleChip.textContent = t(role === "crew" ? "scoreboard.crew" : "scoreboard.impostor");
    row.append(name, roleChip);
    return [row];
  });
  if (!roleRows.length) {
    const empty = document.createElement("div");
    empty.className = "scoreboard-role-history-empty";
    empty.textContent = t("scoreboard.noRoundRoles");
    roleRows.push(empty);
  }
  scoreboardRoundRoleSummary.replaceChildren(winner, ...roleRows);
}

function toggleScoreboardBulkRole(role) {
  scoreboardBulkRole = scoreboardBulkRole === role ? "" : role;
  [[scoreboardBulkCrewButton, "crew"], [scoreboardBulkTraitorButton, "traitor"]].forEach(([button, value]) => {
    if (!button) return;
    const selected = scoreboardBulkRole === value;
    button.setAttribute("aria-pressed", String(selected));
    button.classList.toggle("is-selected", selected);
  });
}

async function saveScoreboardRoundWinner() {
  if (!scoreboardSession?.isHost || scoreboardEditingRoundIndex < 0) return;
  const winner = scoreboardRoundForm.querySelector("[name='scoreboardRoundWinner']:checked")?.value || "";
  const roundMeta = getScoreboardRoundMeta(scoreboardRoom, scoreboardEditingRoundIndex);
  const assignments = Object.entries(roundMeta.roles).map(([playerId, role]) => ({ playerId, role }));
  try {
    await scoreboardAction("round-meta", { roundIndex: scoreboardEditingRoundIndex, winner, assignments });
    hideScoreboardPopup(scoreboardRoundPopup);
  } catch (error) {
    scoreboardGameMessage.textContent = error.message;
  }
}

function setScoreboardRoundSelection(selected) {
  scoreboardRoundPlayerList.querySelectorAll("input[type='checkbox']").forEach((input) => { input.checked = selected; });
}

async function applyScoreboardRoundScore(event) {
  event.preventDefault();
  if (!scoreboardSession?.isHost) return;
  const amount = parseScoreboardInput(scoreboardRoundAmount, false);
  if (amount === undefined) return;
  const playerIds = Array.from(scoreboardRoundPlayerList.querySelectorAll("input:checked")).map((input) => input.value);
  if (!playerIds.length) {
    scoreboardGameMessage.textContent = t("scoreboard.selectOne");
    return;
  }
  try {
    const values = { roundIndex: scoreboardEditingRoundIndex, amount, playerIds };
    if (scoreboardRoom?.gameType === "traitors-aboard") {
      values.role = scoreboardBulkRole;
      values.winner = scoreboardRoundForm.querySelector("[name='scoreboardRoundWinner']:checked")?.value || "";
    }
    await scoreboardAction("round-score", values);
    hideScoreboardPopup(scoreboardRoundPopup);
  } catch (error) {
    scoreboardGameMessage.textContent = error.message;
  }
}

async function addScoreboardRound() {
  try {
    await scoreboardAction("round", {});
  } catch (error) {
    scoreboardGameMessage.textContent = error.message;
  }
}

async function changeScoreboardCurrentRound(direction) {
  try {
    await scoreboardAction("current-round", { direction });
  } catch (error) {
    scoreboardGameMessage.textContent = error.message;
  }
}

async function deleteScoreboardRound() {
  if (!scoreboardRoom || scoreboardRoom.roundCount <= 1 || scoreboardEditingRoundIndex < 0) return;
  const round = scoreboardEditingRoundIndex + 1;
  if (!window.confirm(t("scoreboard.confirmDeleteRound", { round }))) return;
  try {
    await scoreboardAction("delete-round", { roundIndex: scoreboardEditingRoundIndex });
    scoreboardEditingRoundIndex = -1;
    hideScoreboardPopup(scoreboardRoundPopup);
  } catch (error) {
    scoreboardGameMessage.textContent = error.message;
  }
}

async function toggleScoreboardSortOrder() {
  if (!scoreboardRoom) return;
  try {
    await scoreboardAction("sort-order", { sortOrder: scoreboardRoom.sortOrder === "asc" ? "desc" : "asc" });
  } catch (error) {
    scoreboardGameMessage.textContent = error.message;
  }
}

function parseScoreboardInput(input, allowBlank) {
  const raw = input.value.trim();
  if (allowBlank && raw === "") {
    input.setCustomValidity("");
    return null;
  }
  const value = Number(raw.replace(",", "."));
  if (!Number.isFinite(value) || Math.abs(value) > 1_000_000_000) {
    input.setCustomValidity(t("scoreboard.invalidScore"));
    input.reportValidity();
    return undefined;
  }
  input.setCustomValidity("");
  return Math.round(value * 100) / 100;
}

function focusScoreboardInput(input, select = false) {
  if (!input || !window.matchMedia("(min-width: 761px) and (pointer: fine)").matches) return;
  input.focus({ preventScroll: true });
  if (select) input.select();
}

async function resetScoreboardScores() {
  try {
    await scoreboardAction("reset", {});
    scoreboardShownResultId = "";
    hideScoreboardPopup(scoreboardConfirmPopup);
  } catch (error) {
    scoreboardGameMessage.textContent = error.message;
  }
}

async function finishScoreboardGame() {
  if ((scoreboardRoom?.games || []).length) {
    showScoreboardPopup(scoreboardFinishPopup);
    return;
  }
  await finishScoreboard("finish");
}

async function finishScoreboard(action) {
  try {
    await scoreboardAction(action, {});
    hideScoreboardPopup(scoreboardFinishPopup);
  } catch (error) {
    scoreboardGameMessage.textContent = error.message;
  }
}

async function startNewScoreboardGame() {
  try {
    await scoreboardAction("new-game", {});
    scoreboardShownResultId = "";
    hideScoreboardPopup(scoreboardPodiumPopup);
  } catch (error) {
    scoreboardGameMessage.textContent = error.message;
  }
}

async function restartScoreboardGame() {
  try {
    await scoreboardAction("reset", {});
    scoreboardShownResultId = "";
    hideScoreboardPopup(scoreboardPodiumPopup);
  } catch (error) {
    scoreboardGameMessage.textContent = error.message;
  }
}

async function scoreboardAction(action, values) {
  if (!scoreboardSession?.isHost) throw new Error("Only room administrator can edit scoreboard");
  const response = await fetch(`/api/scoreboard/rooms/${encodeURIComponent(scoreboardSession.roomName)}/${action}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ hostId: scoreboardSession.hostId, token: scoreboardSession.token, ...values })
  });
  const payload = await readJsonResponse(response);
  if (!response.ok) throw new Error(payload.error || "Scoreboard update failed");
  scoreboardRoom = payload;
  scoreboardGameMessage.textContent = "";
  renderScoreboardRoom(payload);
  return payload;
}

async function scoreboardPlayerAction(action, values) {
  if (!scoreboardSession?.playerId || !scoreboardSession?.playerToken) throw new Error("Player control unavailable");
  const response = await fetch(`/api/scoreboard/rooms/${encodeURIComponent(scoreboardSession.roomName)}/${action}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ playerId: scoreboardSession.playerId, token: scoreboardSession.playerToken, ...values })
  });
  const payload = await readJsonResponse(response);
  if (!response.ok) throw new Error(payload.error || "Scoreboard update failed");
  scoreboardRoom = payload;
  scoreboardGameMessage.textContent = "";
  renderScoreboardRoom(payload);
  return payload;
}

async function shareScoreboardRoom() {
  if (!scoreboardSession) return;
  const url = new URL(window.location.href);
  url.searchParams.set("scoreboard", scoreboardSession.roomName);
  await navigator.clipboard.writeText(url.toString());
  flashButton(scoreboardShareButton, t("scoreboard.copied"), t("scoreboard.share"));
}

function showScoreboardPodium(room) {
  const isOverall = room.resultScope === "all" || room.status === "completed";
  const rankedPlayers = rankScoreboardPlayers(isOverall ? aggregateScoreboardPlayers(room) : room.players || [], room.sortOrder);
  document.querySelector("#scoreboardPodiumEyebrow").textContent = t(isOverall ? "scoreboard.allFinished" : "scoreboard.finished");
  document.querySelector("#scoreboardPodiumTitle").textContent = t(isOverall ? "scoreboard.overallPodium" : "scoreboard.gamePodium", { game: room.gameNumber || 1 });
  scoreboardPodium.replaceChildren(...rankedPlayers.slice(0, 3).map(({ player, rank }, index) => {
    const place = document.createElement("article");
    place.className = `scoreboard-podium-place place-${index + 1}`;
    place.dataset.rank = `#${rank}`;
    const name = document.createElement("strong");
    name.textContent = player.name;
    const score = document.createElement("b");
    score.textContent = t("scoreboard.points", { score: formatScoreboardNumber(scoreboardPlayerTotal(player)) });
    place.append(name, score);
    const roleStats = createScoreboardTraitorStats(room, player.id, isOverall);
    if (roleStats) place.append(roleStats);
    return place;
  }));
  scoreboardFinalList.replaceChildren(...rankedPlayers.slice(3).map(({ player, rank }) => {
    const row = document.createElement("li");
    const rankLabel = document.createElement("span");
    rankLabel.textContent = `#${rank}`;
    const name = document.createElement("strong");
    name.textContent = player.name;
    const score = document.createElement("b");
    score.textContent = t("scoreboard.points", { score: formatScoreboardNumber(scoreboardPlayerTotal(player)) });
    row.append(rankLabel, name, score);
    const roleStats = createScoreboardTraitorStats(room, player.id, isOverall);
    if (roleStats) row.append(roleStats);
    return row;
  }));
  scoreboardShownResultId = room.resultId;
  showScoreboardPopup(scoreboardPodiumPopup);
  playMultiplayerPodiumFanfare();
}

function createScoreboardTraitorStats(room, playerId, isOverall) {
  if (room.gameType !== "traitors-aboard") return null;
  const entries = getScoreboardPlayerRoleHistory(room, playerId).filter((entry) => isOverall || entry.gameNumber === Number(room.gameNumber || 1));
  const stats = {
    crew: entries.filter((entry) => entry.role === "crew").length,
    traitor: entries.filter((entry) => entry.role === "traitor").length,
    wins: entries.filter((entry) => entry.won === true).length,
    losses: entries.filter((entry) => entry.won === false).length
  };
  const container = document.createElement("small");
  container.className = "scoreboard-traitor-stats";
  [
    t("scoreboard.crewCount", { count: stats.crew }),
    t("scoreboard.traitorCount", { count: stats.traitor }),
    t("scoreboard.winCount", { count: stats.wins }),
    t("scoreboard.lossCount", { count: stats.losses })
  ].forEach((text) => {
    const item = document.createElement("span");
    item.textContent = text;
    container.append(item);
  });
  return container;
}

function aggregateScoreboardPlayers(room) {
  const totals = new Map();
  const add = (player, total) => {
    const existing = totals.get(player.id) || { id: player.id, name: player.name, total: 0, position: totals.size + 1 };
    existing.name = player.name || existing.name;
    existing.total += Number(total || 0);
    totals.set(player.id, existing);
  };
  (room.games || []).forEach((game) => (game.players || []).forEach((player) => add(player, player.total)));
  (room.players || []).forEach((player) => add(player, scoreboardPlayerTotal(player)));
  return [...totals.values()].map((player) => ({ ...player, scores: [player.total] }));
}

function showScoreboardHistory() {
  const games = scoreboardRoom?.games || [];
  if (!games.length) return;
  const players = new Map();
  games.forEach((game) => (game.players || []).forEach((player) => {
    const entry = players.get(player.id) || { id: player.id, name: player.name, totals: new Map(), total: 0, position: players.size + 1 };
    entry.name = player.name || entry.name;
    entry.totals.set(game.number, Number(player.total || 0));
    entry.total += Number(player.total || 0);
    players.set(player.id, entry);
  }));
  (scoreboardRoom?.players || []).forEach((player) => {
    const entry = players.get(player.id) || { id: player.id, name: player.name, totals: new Map(), total: 0, position: players.size + 1 };
    entry.name = player.name;
    players.set(player.id, entry);
  });
  const head = document.createElement("thead");
  const headRow = document.createElement("tr");
  [t("scoreboard.players"), ...games.map((game) => t("scoreboard.game", { game: game.number })), t("scoreboard.previousTotal")].forEach((text) => {
    const cell = document.createElement("th");
    cell.scope = "col";
    cell.textContent = text;
    headRow.append(cell);
  });
  head.append(headRow);
  const body = document.createElement("tbody");
  const historyPlayers = [...players.values()].map((player) => ({ ...player, scores: [player.total] }));
  rankScoreboardPlayers(historyPlayers, scoreboardRoom.sortOrder).forEach(({ player }) => {
    const row = document.createElement("tr");
    const name = document.createElement("th");
    name.scope = "row";
    name.textContent = player.name;
    row.append(name);
    games.forEach((game) => {
      const cell = document.createElement("td");
      cell.textContent = formatScoreboardNumber(player.totals.get(game.number) || 0);
      row.append(cell);
    });
    const total = document.createElement("td");
    total.textContent = formatScoreboardNumber(player.total);
    row.append(total);
    body.append(row);
  });
  scoreboardHistoryTable.replaceChildren(head, body);
  showScoreboardPopup(scoreboardHistoryPopup);
}

async function showScoreboardLog() {
  if (!scoreboardSession) return;
  const loading = document.createElement("div");
  loading.className = "scoreboard-log-empty";
  loading.textContent = t("scoreboard.logLoading");
  scoreboardLogList.replaceChildren(loading);
  showScoreboardPopup(scoreboardLogPopup);
  try {
    const response = await fetch(`/api/scoreboard/rooms/${encodeURIComponent(scoreboardSession.roomName)}/log`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(scoreboardSession.isHost ? { hostId: scoreboardSession.hostId, token: scoreboardSession.token } : {})
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || t("scoreboard.log"));
    renderScoreboardLog(payload.events || []);
  } catch (error) {
    loading.textContent = error.message;
  }
}

function renderScoreboardLog(events) {
  const ordered = [...events].sort((a, b) => Number(a.createdAt || 0) - Number(b.createdAt || 0));
  if (!ordered.length) {
    const empty = document.createElement("div");
    empty.className = "scoreboard-log-empty";
    empty.textContent = t("scoreboard.logEmpty");
    scoreboardLogList.replaceChildren(empty);
    return;
  }
  scoreboardLogList.replaceChildren(...ordered.map((event) => {
    const description = describeScoreboardLogEvent(event);
    const entry = document.createElement("article");
    entry.className = `scoreboard-log-entry is-${event.type || "activity"}`;
    const time = document.createElement("time");
    time.dateTime = new Date(Number(event.createdAt || 0)).toISOString();
    time.textContent = new Date(Number(event.createdAt || 0)).toLocaleTimeString(currentLanguage, { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
    const content = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = description.title;
    const detail = document.createElement("small");
    detail.textContent = `${t("scoreboard.game", { game: event.gameNumber || 1 })}${description.detail ? ` · ${description.detail}` : ""}`;
    content.append(title, detail);
    if (description.items?.length) {
      const list = document.createElement("ul");
      description.items.forEach((text) => {
        const item = document.createElement("li");
        item.textContent = text;
        list.append(item);
      });
      content.append(list);
    }
    entry.append(time, content);
    return entry;
  }));
}

function describeScoreboardLogEvent(event) {
  const actor = event.actorName || t("scoreboard.system");
  const round = `${t("scoreboard.round")} ${Number(event.roundIndex || 0) + 1}`;
  if (event.type === "score") return {
    title: t("scoreboard.logScores", { actor, count: Number(event.changeCount || event.changes?.length || 0) }),
    detail: "",
    items: (event.changes || []).map((change) => `${change.playerName} · ${t("scoreboard.round")} ${Number(change.roundIndex) + 1}: ${change.previousValue === null ? "—" : formatScoreboardNumber(change.previousValue)} → ${change.value === null ? "—" : formatScoreboardNumber(change.value)}`)
  };
  if (event.type === "round") return { title: t(event.direction === "previous" ? "scoreboard.logRoundBack" : "scoreboard.logRoundForward", { actor }), detail: round };
  if (event.type === "join") return { title: t(event.rejoined ? "scoreboard.logPlayerRejoined" : "scoreboard.logPlayerJoined", { player: event.playerName || actor }), detail: "" };
  if (event.type === "round-added") return { title: t("scoreboard.logRoundAdded", { actor }), detail: round };
  if (event.type === "round-deleted") return { title: t("scoreboard.logRoundDeleted", { actor }), detail: round };
  if (event.type === "game-restarted") return { title: t("scoreboard.logGameRestarted", { actor }), detail: "" };
  if (event.type === "next-game") return { title: t("scoreboard.logNextGame", { actor, game: event.nextGameNumber || Number(event.gameNumber || 1) + 1 }), detail: "" };
  if (event.type === "game-finished") return { title: t("scoreboard.logGameFinished", { actor }), detail: "" };
  if (event.type === "session-finished") return { title: t("scoreboard.logSessionFinished", { actor }), detail: "" };
  if (event.type === "player-role") return { title: t("scoreboard.logPlayerRole", { actor }), detail: round, items: [`${event.playerName}: ${event.role ? t(event.role === "crew" ? "scoreboard.crew" : "scoreboard.impostor") : t("scoreboard.roleUnknown")}`] };
  if (event.type === "round-roles") return {
    title: t("scoreboard.logRoundRoles", { actor }),
    detail: `${round} · ${t("scoreboard.winner")}: ${event.winner ? t(event.winner === "crew" ? "scoreboard.crewPlural" : "scoreboard.traitorsPlural") : t("scoreboard.roleUnknown")}`,
    items: (event.assignments || []).map((assignment) => `${assignment.playerName}: ${t(assignment.role === "crew" ? "scoreboard.crew" : "scoreboard.impostor")}`)
  };
  if (event.type === "players-updated") return { title: t("scoreboard.logPlayersUpdated", { actor }), detail: "", items: (event.players || []).map((player) => player.name) };
  if (event.type === "player-renamed") return { title: t("scoreboard.logPlayerRenamed", { actor }), detail: `${event.previousName} → ${event.playerName}` };
  if (event.type === "player-removed") return { title: t("scoreboard.logPlayerRemoved", { actor, player: event.playerName }), detail: "" };
  if (event.type === "sort-order") return { title: t("scoreboard.logSortOrder", { actor }), detail: event.sortOrder === "asc" ? t("scoreboard.lowFirst") : t("scoreboard.highFirst") };
  return { title: t("scoreboard.logActivity", { actor }), detail: "" };
}

function announceScoreboardScoreEvents(room) {
  const unseen = (room.scoreEvents || []).filter((event) => event?.id && !scoreboardKnownScoreEventIds.has(event.id));
  unseen.forEach((event) => scoreboardKnownScoreEventIds.add(event.id));
  const visibleEvents = unseen.filter((event) => !isOwnScoreboardActivityEvent(event));
  if (!visibleEvents.length) return;
  let container = document.querySelector(".scoreboard-activity-notifications");
  if (!container) {
    container = document.createElement("div");
    container.className = "scoreboard-activity-notifications";
    container.setAttribute("aria-live", "assertive");
    document.body.append(container);
  }
  visibleEvents.forEach((event) => {
    const eventType = event.type || "score";
    if (eventType === "round") {
      addScoreboardActivityNotification(container, {
        type: "round",
        icon: event.direction === "previous" ? "\u2190" : "\u2192",
        title: event.actorName,
        detail: t(event.direction === "previous" ? "scoreboard.roundReturned" : "scoreboard.roundAdvanced"),
        badge: t("scoreboard.currentRound", { round: Number(event.roundIndex) + 1 })
      });
      playOtherPlayerCorrectSound(1);
      return;
    }
    if (eventType === "join") {
      addScoreboardActivityNotification(container, {
        type: "join",
        icon: "\u263a",
        title: event.playerName || event.actorName,
        detail: t(event.rejoined ? "scoreboard.playerRejoinedNotice" : "scoreboard.playerJoinedNotice"),
        badge: t("scoreboard.game", { game: event.gameNumber || room.gameNumber || 1 })
      });
      playOtherPlayerCorrectSound(1);
      return;
    }
    const changes = event.changes || [];
    changes.slice(0, 8).forEach((change) => {
      const before = change.previousValue === null ? "—" : formatScoreboardNumber(change.previousValue);
      const after = change.value === null ? "—" : formatScoreboardNumber(change.value);
      addScoreboardActivityNotification(container, {
        type: "score",
        icon: "✎",
        title: `${event.actorName} · ${change.playerName}`,
        detail: t("scoreboard.scoreUpdated"),
        badge: `${t("scoreboard.round")} ${Number(change.roundIndex) + 1}: ${before} → ${after}`
      });
    });
    const hiddenChangeCount = Math.max(0, Number(event.changeCount || changes.length) - Math.min(8, changes.length));
    if (hiddenChangeCount) {
      addScoreboardActivityNotification(container, {
        type: "score",
        icon: "+",
        title: event.actorName,
        detail: t("scoreboard.scoreUpdated"),
        badge: t("scoreboard.moreChanges", { count: hiddenChangeCount })
      });
    }
    playOtherPlayerCorrectSound(Math.max(1, Math.min(3, Number(event.changeCount || changes.length))));
  });
  window.setTimeout(() => { if (!container.childElementCount) container.remove(); }, 4500);
}

function isOwnScoreboardActivityEvent(event) {
  if (!scoreboardSession || !event?.actorId) return false;
  const viewerId = scoreboardSession.isHost ? scoreboardSession.hostId : scoreboardSession.playerId;
  return Boolean(viewerId && event.actorId === viewerId);
}

function addScoreboardActivityNotification(container, { type, icon, title, detail, badge }) {
  const notification = document.createElement("article");
  notification.className = `scoreboard-activity-notification is-${type}`;
  const iconElement = document.createElement("span");
  iconElement.className = "scoreboard-activity-icon";
  iconElement.textContent = icon;
  const copy = document.createElement("div");
  const titleElement = document.createElement("strong");
  titleElement.textContent = title;
  const detailElement = document.createElement("small");
  detailElement.textContent = detail;
  copy.append(titleElement, detailElement);
  const badgeElement = document.createElement("b");
  badgeElement.textContent = badge;
  notification.append(iconElement, copy, badgeElement);
  container.append(notification);
  window.setTimeout(() => notification.remove(), 4200);
}

function showScoreboardPopup(popup) {
  if (!popup) return;
  closeScoreboardPopups(popup);
  popup.hidden = false;
  document.body.classList.add("songs-popup-open");
}

function hideScoreboardPopup(popup) {
  if (popup) popup.hidden = true;
  if (![scoreboardSettingsPopup, scoreboardLogPopup, scoreboardJoinPopup, scoreboardPlayersPopup, scoreboardCellPopup, scoreboardPlayerPopup, scoreboardPlayerDetailsPopup, scoreboardRoundPopup, scoreboardConfirmPopup, scoreboardPodiumPopup, scoreboardFinishPopup, scoreboardHistoryPopup].some((item) => item && !item.hidden)) {
    document.body.classList.remove("songs-popup-open");
  }
}

function closeScoreboardPopups(except = null) {
  [scoreboardSettingsPopup, scoreboardLogPopup, scoreboardJoinPopup, scoreboardPlayersPopup, scoreboardCellPopup, scoreboardPlayerPopup, scoreboardPlayerDetailsPopup, scoreboardRoundPopup, scoreboardConfirmPopup, scoreboardPodiumPopup, scoreboardFinishPopup, scoreboardHistoryPopup]
    .filter((popup) => popup && popup !== except)
    .forEach((popup) => { popup.hidden = true; });
  if (!except) document.body.classList.remove("songs-popup-open");
}

function leaveScoreboardToMenu() {
  const url = new URL(window.location.href);
  url.searchParams.delete("scoreboard");
  window.history.replaceState({}, "", url);
  leaveScoreboardRoom();
  showScoreboardLobby();
}

function leaveScoreboardRoom() {
  releaseScoreboardRoomIfHost();
  clearInterval(scoreboardPollTimer);
  scoreboardPollTimer = null;
  scoreboardSession = null;
  scoreboardRoom = null;
  scoreboardSelectedRoom = null;
  scoreboardAvailableRooms = [];
  scoreboardEditingCell = null;
  scoreboardEditingPlayerId = "";
  scoreboardEditingRoundIndex = -1;
  scoreboardShownResultId = "";
  scoreboardKnownScoreEventIds = new Set();
  closeScoreboardPopups();
}

function releaseScoreboardRoomIfHost({ useBeacon = false } = {}) {
  const session = scoreboardSession;
  if (!session?.isHost) return;
  session.isHost = false;
  const url = `/api/scoreboard/rooms/${encodeURIComponent(session.roomName)}/leave`;
  const body = JSON.stringify({ hostId: session.hostId, token: session.token });
  if (useBeacon && navigator.sendBeacon) {
    navigator.sendBeacon(url, new Blob([body], { type: "application/json" }));
  } else {
    void fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true }).catch(() => {});
  }
  clearInterval(scoreboardPollTimer);
}

function applyScoreboardRoomFromUrl() {
  const roomName = new URLSearchParams(window.location.search).get("scoreboard");
  if (!roomName) return;
  showView("scoreboardView");
}

function applyResistanceRoomFromUrl() {
  const roomName = new URLSearchParams(window.location.search).get("resistance");
  if (!roomName) return;
  showView("resistanceView");
  resistanceJoinRoomName.value = roomName.trim();
  resistanceJoinPlayerName.focus();
}

function applyMasterWordRoomFromUrl() {
  const roomName = new URLSearchParams(window.location.search).get("masterword");
  if (!roomName) return;
  showView("masterWordView");
  masterWordJoinRoomName.value = roomName.trim();
  masterWordJoinPlayerName.focus();
}

function applyInviteRoomFromUrl() {
  const roomName = new URLSearchParams(window.location.search).get("room");
  if (!roomName) return;
  inviteRoomName = roomName.trim();
  if (!inviteRoomName) return;
  showInviteJoinSetup(inviteRoomName);
}

function applyimpostorRoomFromUrl() {
  const roomName = new URLSearchParams(window.location.search).get("impostor");
  if (!roomName) return;
  showView("impostorView");
  impostorJoinRoomName.value = roomName.trim();
  impostorJoinPlayerName.focus();
}

function showInviteJoinSetup(roomName) {
  stopClip();
  hideRoundPopup();
  gamePhase = "invite";
  playerMode = "multiplayer";
  setSetupMode("ten");
  gameSetup.hidden = true;
  groupSetup.hidden = true;
  inviteJoinSetup.hidden = false;
  artistLoading.hidden = true;
  gameControls.hidden = true;
  gamePlayArea.hidden = true;
  leaderboardTicker.hidden = true;
  summaryBox.hidden = true;
  resultBox.hidden = true;
  suggestionList.hidden = true;
  inviteRoomLabel.textContent = `${t("game.roomNameLabel")}: ${roomName}`;
  inviteJoinMessage.textContent = "";
  songSource.textContent = t("game.inviteJoinHint");
  invitePlayerName.focus();
}

function showHostConfigPopup(config) {
  if (!hostConfigPopup || !hostConfigList) return;

  const title = hostConfigPopup.querySelector("#hostConfigTitle");
  const hint = hostConfigPopup.querySelector("#hostConfigHint");
  if (title) title.textContent = t("game.hostConfigTitle");
  if (hint) hint.textContent = t("game.hostConfigHint");
  if (hostConfigCloseButton) hostConfigCloseButton.textContent = t("common.close");

  const rows = [
    [t("game.hostConfigChallenge"), config.mode === "daily" ? t("game.daily") : t("game.tenSongs")],
    [t("game.hostConfigClipStart"), config.clipStart === "intro" ? t("game.intro") : t("game.randomMoment")],
    [t("game.hostConfigDifficulty"), config.difficulty === "pro" ? t("game.difficultyPro") : t("game.difficultyNormal")],
    [t("game.hostConfigCategory"), getConfigGroupName(config.groupId)]
  ];

  hostConfigList.replaceChildren(...rows.map(([label, value]) => {
    const item = document.createElement("div");
    const term = document.createElement("dt");
    const detail = document.createElement("dd");
    term.textContent = label;
    detail.textContent = value;
    item.append(term, detail);
    return item;
  }));

  hostConfigPopup.hidden = false;
}

function hideHostConfigPopup() {
  if (hostConfigPopup) hostConfigPopup.hidden = true;
}

function getConfigGroupName(groupId) {
  if (groupId === "all") return t("game.allArtists");
  return groups.find((group) => group.id === groupId)?.name || groupId || t("game.artist");
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.body.dataset.language = currentLanguage;

  STATIC_TEXT_TARGETS.forEach(([selector, key]) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = t(key);
  });

  STATIC_DIRECT_TEXT_TARGETS.forEach(([selector, key]) => {
    const element = document.querySelector(selector);
    if (element) setLeadingText(element, t(key));
  });

  STATIC_BUTTON_TARGETS.forEach(([selector, key]) => {
    const button = document.querySelector(selector);
    if (button) setButtonLabel(button, t(key));
  });

  STATIC_ATTR_TARGETS.forEach(([selector, attr, key]) => {
    const element = document.querySelector(selector);
    if (element) element.setAttribute(attr, t(key));
  });

  updateLanguageSelector();
  syncimpostorWordSetCards();
  applyScoreboardLanguage();
  if (impostorRoom && !document.querySelector("#impostorView")?.hidden) renderimpostorRoom(impostorRoom);
  if (scoreboardRoom && !document.querySelector("#scoreboardView")?.hidden) renderScoreboardRoom(scoreboardRoom);
}

function applyScoreboardLanguage() {
  const textTargets = [
    ["#homeScoreboardHint", "scoreboard.homeHint"], ["#homeScoreboardPlayers", "scoreboard.homePlayers"],
    [".home-menu-card[data-view-target='scoreboardView'] strong", "scoreboard.title"],
    ["#scoreboardChooseCreate strong", "scoreboard.create"], ["#scoreboardChooseJoin strong", "scoreboard.join"],
    ["#scoreboardEyebrow", "scoreboard.eyebrow"], ["#scoreboardTitle", "scoreboard.title"],
    ["#scoreboardSubtitle", "scoreboard.subtitle"], ["#scoreboardCreateTitle", "scoreboard.create"],
    ["#scoreboardRoomNameLabel", "scoreboard.roomName"], ["#scoreboardHostNameLabel", "scoreboard.hostName"],
    ["#scoreboardRoundsLabel", "scoreboard.roundCount"], ["#scoreboardOrderLabel", "scoreboard.sortOrder"],
    ["#scoreboardGameTypeLabel", "scoreboard.gameType"], ["#scoreboardGameTypeNone", "scoreboard.gameTypeNone"],
    ["#scoreboardDescendingLabel", "scoreboard.highFirst"], ["#scoreboardAscendingLabel", "scoreboard.lowFirst"],
    ["#scoreboardPasswordLabel", "scoreboard.password"], ["#scoreboardPasswordHint", "scoreboard.passwordHint"],
    ["#scoreboardPlayersCanEditLabel", "scoreboard.playersCanEdit"], ["#scoreboardPlayersCanEditHint", "scoreboard.playersCanEditHint"],
    ["#scoreboardJoinTitle", "scoreboard.join"], ["#scoreboardRoomKicker", "scoreboard.room"],
    ["#scoreboardSettingsEyebrow", "scoreboard.configureRoom"], ["#scoreboardSettingsTitle", "scoreboard.settings"],
    ["#scoreboardLogEyebrow", "scoreboard.logEyebrow"], ["#scoreboardLogTitle", "scoreboard.log"],
    ["#scoreboardEmptyTitle", "scoreboard.noPlayers"], ["#scoreboardEmptyHint", "scoreboard.noPlayersHint"],
    ["#scoreboardJoinPopupEyebrow", "scoreboard.enterRoom"], ["#scoreboardSpectateTitle", "scoreboard.spectate"],
    ["#scoreboardSpectateHint", "scoreboard.spectateHint"], ["#scoreboardJoinNicknameLabel", "scoreboard.joinNickname"],
    ["#scoreboardJoinPasswordLabel", "scoreboard.roomPassword"], ["#scoreboardPlayersPopupTitle", "scoreboard.players"],
    ["#scoreboardPlayerCountLabel", "scoreboard.playerCount"], ["#scoreboardCellPopupEyebrow", "scoreboard.editScore"],
    ["#scoreboardCellScoreLabel", "scoreboard.score"], ["#scoreboardCellRoleLabel", "scoreboard.cellRole"],
    ["#scoreboardCellRole option[value='']", "scoreboard.roleUnknown"], ["#scoreboardCellRole option[value='crew']", "scoreboard.crew"], ["#scoreboardCellRole option[value='traitor']", "scoreboard.impostor"],
    ["#scoreboardPlayerPopupEyebrow", "scoreboard.editPlayer"], ["#scoreboardPlayerRoleHistoryTitle", "scoreboard.roleHistory"], ["#scoreboardPlayerDetailsEyebrow", "scoreboard.traitorsAboard"],
    ["#scoreboardPlayerNicknameLabel", "scoreboard.nickname"], ["#scoreboardRoundPopupEyebrow", "scoreboard.multiScore"],
    ["#scoreboardRoundAmountLabel", "scoreboard.amountToAdd"], ["#scoreboardBulkRoleLabel", "scoreboard.bulkRole"], ["#scoreboardRoundPlayersLabel", "scoreboard.selectPlayers"],
    ["#scoreboardTraitorsRoundEyebrow", "scoreboard.traitorsAboard"], ["#scoreboardTraitorsRoundTitle", "scoreboard.roundRoles"], ["#scoreboardRoundWinnerLabel", "scoreboard.winner"],
    ["#scoreboardWinnerUnknown", "scoreboard.roleUnknown"], ["#scoreboardWinnerCrew", "scoreboard.crewPlural"], ["#scoreboardWinnerTraitors", "scoreboard.traitorsPlural"],
    ["#scoreboardConfirmTitle", "scoreboard.resetTitle"], ["#scoreboardConfirmText", "scoreboard.resetText"],
    ["#scoreboardFinishPopupTitle", "scoreboard.finish"], ["#scoreboardFinishPopupText", "scoreboard.finishChoice"],
    ["#scoreboardHistoryEyebrow", "scoreboard.historyEyebrow"], ["#scoreboardHistoryTitle", "scoreboard.history"]
  ];
  textTargets.forEach(([selector, key]) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = t(key);
  });
  const buttons = [
    [".nav-link[data-view-target='scoreboardView']", "scoreboard.title"],
    ["#scoreboardCreateButton", "scoreboard.create"], ["#scoreboardRefreshRoomsButton", "scoreboard.refresh"],
    ["#scoreboardShareButton", "scoreboard.share"], ["#scoreboardViewerLogButton", "scoreboard.log"], ["#scoreboardSettingsButton", "scoreboard.settings"],
    ["#scoreboardSettingsClose", "common.close"], ["#scoreboardLogButton", "scoreboard.log"], ["#scoreboardLogClose", "common.close"],
    ["#scoreboardManagePlayersButton", "scoreboard.players"],
    ["#scoreboardHistoryButton", "scoreboard.history"],
    ["#scoreboardAddRoundButton", "scoreboard.addRound"],
    ["#scoreboardPreviousRoundButton", "scoreboard.previousRound"], ["#scoreboardNextRoundButton", "scoreboard.nextRound"],
    ["#scoreboardResetButton", "scoreboard.reset"],
    ["#scoreboardFinishButton", "scoreboard.finish"], ["#scoreboardLeaveButton", "scoreboard.leave"],
    ["#scoreboardJoinPopupClose", "common.close"],
    ["#scoreboardJoinNicknameButton", "scoreboard.joinNickname"], ["#scoreboardPlayersPopupClose", "common.close"],
    ["#scoreboardAddPlayerButton", "scoreboard.addPlayer"], ["#scoreboardSavePlayersButton", "scoreboard.savePlayers"],
    ["#scoreboardCellPopupClose", "common.close"],
    ["#scoreboardClearCellButton", "scoreboard.makeBlank"], ["#scoreboardSaveCellButton", "scoreboard.save"],
    ["#scoreboardPlayerPopupClose", "common.close"], ["#scoreboardDeletePlayerButton", "scoreboard.kick"],
    ["#scoreboardPlayerDetailsClose", "common.close"],
    ["#scoreboardSavePlayerButton", "scoreboard.saveChanges"], ["#scoreboardRoundPopupClose", "common.close"],
    ["#scoreboardSelectAllPlayers", "scoreboard.all"], ["#scoreboardClearPlayerSelection", "scoreboard.none"],
    ["#scoreboardBulkCrewButton", "scoreboard.crew"], ["#scoreboardBulkTraitorButton", "scoreboard.impostor"],
    ["#scoreboardDeleteRoundButton", "scoreboard.deleteRound"], ["#scoreboardApplyRoundButton", "scoreboard.applyScore"],
    ["#scoreboardSaveRoundWinnerButton", "scoreboard.saveWinner"],
    ["#scoreboardConfirmClose", "common.close"],
    ["#scoreboardCancelResetButton", "scoreboard.cancel"], ["#scoreboardConfirmResetButton", "scoreboard.reset"],
    ["#scoreboardPodiumClose", "common.close"], ["#scoreboardNewGameButton", "scoreboard.newGame"],
    ["#scoreboardNextGameButton", "scoreboard.nextGame"],
    ["#scoreboardFinishPopupClose", "common.close"], ["#scoreboardFinishCurrentButton", "scoreboard.finishCurrent"],
    ["#scoreboardFinishAllButton", "scoreboard.finishAll"], ["#scoreboardHistoryClose", "common.close"]
  ];
  buttons.forEach(([selector, key]) => {
    const button = document.querySelector(selector);
    if (button) setButtonLabel(button, t(key));
  });
  document.querySelectorAll("[data-scoreboard-back]").forEach((button) => setButtonLabel(button, t("common.back")));
  const attrs = [
    ["#scoreboardCreateRoomName", "placeholder", "scoreboard.roomName"],
    ["#scoreboardCreateHostName", "placeholder", "scoreboard.hostPlaceholder"],
    ["#scoreboardCreatePassword", "placeholder", "scoreboard.passwordPlaceholder"],
    ["#scoreboardJoinNickname", "placeholder", "scoreboard.yourNickname"],
    ["#scoreboardJoinPassword", "placeholder", "scoreboard.roomPassword"],
    ["#scoreboardCellScore", "placeholder", "scoreboard.blankScore"]
  ];
  attrs.forEach(([selector, attr, key]) => document.querySelector(selector)?.setAttribute(attr, t(key)));
}

function updateLanguageSelector() {
  if (!languageButton || !languageMenu || !currentLanguageFlag) return;
  languageButton.setAttribute("aria-label", t("aria.language"));
  setFlagContent(currentLanguageFlag, currentLanguage);
  languageOptionButtons.forEach((button) => {
    const language = button.dataset.languageOption;
    button.hidden = language === currentLanguage;
    button.setAttribute("aria-current", String(language === currentLanguage));
  });
}

function setFlagContent(flag, language) {
  flag.className = `language-flag flag-${language}`;
  flag.replaceChildren();
  if (language === "en") {
    for (let index = 0; index < 8; index += 1) flag.append(document.createElement("span"));
  }
}

function setLeadingText(element, value) {
  const textNode = Array.from(element.childNodes).find((node) =>
    node.nodeType === Node.TEXT_NODE && node.textContent.trim()
  );
  if (textNode) {
    textNode.textContent = `${value} `;
  } else {
    element.prepend(document.createTextNode(`${value} `));
  }
}

function setButtonLabel(button, label) {
  const icon = button.querySelector("[aria-hidden='true']") || createButtonIcon(button);
  button.replaceChildren();
  if (icon) {
    button.append(icon, document.createTextNode(` ${label}`));
  } else {
    button.textContent = label;
  }
}

function createButtonIcon(button) {
  const icon = getButtonIcon(button);
  if (!icon) return null;
  const span = document.createElement("span");
  span.className = "button-icon";
  span.setAttribute("aria-hidden", "true");
  span.textContent = icon;
  return span;
}

function getButtonIcon(button) {
  if (button.id === "impostorShareButton") return "\uD83D\uDD17";
  if (button.id === "impostorRestartButton") return "\uD83D\uDD04";
  if (button.dataset.setupMode === "daily") return "📅";
  if (button.dataset.setupMode === "ten") return "🎧";
  if (button.dataset.startMode === "intro") return "⏮";
  if (button.dataset.startMode === "random") return "🎲";
  if (button.dataset.difficultyMode === "normal") return "🟢";
  if (button.dataset.difficultyMode === "pro") return "🔥";
  if (button.dataset.playerMode === "solo") return "1P";
  if (button.dataset.playerMode === "multiplayer") return "MP";
  if (button.id === "instructionsButton") return "?";
  if (button.id === "createRoomButton") return "+";
  if (button.id === "inviteLinkButton") return "🔗";
  if (button.id === "leaderboardButton" && playerMode === "multiplayer") return "🔗";
  return "";
}

function t(key, values = {}) {
  const table = TRANSLATIONS[currentLanguage] || TRANSLATIONS[DEFAULT_LANGUAGE];
  const fallback = TRANSLATIONS.en?.[key] || key;
  return interpolate(table[key] || fallback, values);
}

function interpolate(template, values) {
  return String(template).replace(/\{(\w+)\}/g, (_, name) =>
    Object.prototype.hasOwnProperty.call(values, name) ? values[name] : `{${name}}`
  );
}

function translatedStatus(status) {
  const key = `status.${status}`;
  const value = t(key);
  return value === key ? titleCase(status) : value;
}

function showView(targetId) {
  updateViewportChromeVars();
  if (targetId !== "gameView" && document.querySelector("#gameView")?.classList.contains("active")) leaveMultiplayerRoom();
  if (targetId !== "impostorView" && document.querySelector("#impostorView")?.classList.contains("active")) leaveimpostorRoom();
  if (targetId !== "resistanceView" && document.querySelector("#resistanceView")?.classList.contains("active")) leaveResistanceRoom();
  if (targetId !== "masterWordView" && document.querySelector("#masterWordView")?.classList.contains("active")) leaveMasterWordRoom();
  if (targetId !== "scoreboardView" && document.querySelector("#scoreboardView")?.classList.contains("active")) leaveScoreboardRoom();
  document.body.classList.toggle("arcade-game-active", targetId === "gameView");
  document.body.classList.toggle("impostor-active", targetId === "impostorView");
  document.body.classList.toggle("resistance-active", targetId === "resistanceView");
  document.body.classList.toggle("masterword-active", targetId === "masterWordView");
  document.body.classList.toggle("scoreboard-active", targetId === "scoreboardView");

  views.forEach((view) => {
    const active = view.id === targetId;
    view.hidden = !active;
    view.classList.toggle("active", active);
  });

  navLinks.forEach((button) => {
    button.classList.toggle("active", button.dataset.viewTarget === targetId);
  });

  if (targetId === "gameView" && !groups.length) loadSongGroups();
  if (targetId === "gameView" && gamePhase === "challenge") showChallengeSetup();
  if (targetId === "impostorView") showimpostorLobby();
  if (targetId === "resistanceView") showResistanceLobby();
  if (targetId === "masterWordView") showMasterWordLobby();
  if (targetId === "scoreboardView") showScoreboardLobby();
  if (targetId === "scoreboardView") window.scrollTo(0, 0);
  updateViewportChromeVars();
}

function updateViewportChromeVars() {
  const height = titleBar?.offsetHeight || 62;
  document.documentElement.style.setProperty("--title-bar-height", `${height}px`);
}

function playGameEntryAudio() {
  playRandomFeedbackAudio(GAME_ENTRY_AUDIO_FILES);
}

function playRandomFeedbackAudio(files) {
  if (!files.length) return;
  if (feedbackAudio) {
    feedbackAudio.pause();
    feedbackAudio.currentTime = 0;
  }
  feedbackAudio = new Audio(files[Math.floor(Math.random() * files.length)]);
  feedbackAudio.preload = "auto";
  feedbackAudio.play().catch(() => {
    // Browsers can block sounds when playback is not tied to a user gesture.
  });
}

function stopFeedbackAudio() {
  if (!feedbackAudio) return;
  feedbackAudio.pause();
  feedbackAudio.currentTime = 0;
  feedbackAudio = null;
}

function playCategoryAudio(groupId) {
  const fileName = CATEGORY_AUDIO_FILES.get(groupId);
  if (!fileName) return;

  stopFeedbackAudio();
  if (categoryAudio) {
    categoryAudio.pause();
    categoryAudio.currentTime = 0;
  }

  categoryAudio = new Audio(`${CATEGORY_AUDIO_PATH}${encodeURIComponent(fileName)}`);
  categoryAudio.preload = "auto";
  categoryAudio.volume = 1;
  categoryAudio.play().catch(() => {
    // Category sounds are best-effort; browsers can still block them.
  });
}

async function loadSongGroups() {
  try {
    const response = await fetch("/api/artists");
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || t("game.songLoadFailed"));
    groups = payload.groups || [];
    activeGroup = activeGroupId === "all"
      ? { id: "all", name: t("game.allArtists"), image: groups[0]?.image || "" }
      : groups.find((group) => group.id === activeGroupId) || groups[0] || null;
    activeGroupId = activeGroup?.id || "all";
    renderGroupButtons();
  } catch (error) {
    songSource.textContent = error.message;
    setGameBusy(true);
  }
}

function renderGroupButtons() {
  const allCard = createAllGroupsCard();
  const customCard = createCustomPlaylistCard();
  const cards = groups.map((group) => {
    const songCount = songsCache.get(group.id)?.songs?.length ?? group.songCount ?? group.fallbackCount ?? 0;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `group-card ${group.id === activeGroupId ? "active" : ""}`;
    button.setAttribute("aria-pressed", String(group.id === activeGroupId));
    button.innerHTML = `
      <img src="${group.image || ""}" alt="">
      <span>${group.name}</span>
      <small>${formatSongCount(songCount)}</small>
    `;
    button.addEventListener("click", () => selectSongGroup(group.id));
    return button;
  });
  const categoryCards = [allCard, customCard, ...cards];
  groupButtons.replaceChildren(...categoryCards);
  setCategoryGridColumns(categoryCards.length);
}

function setCategoryGridColumns(count) {
  const columns = Math.max(2, Math.ceil(count / 2));
  groupButtons.style.setProperty("--category-columns", String(columns));
}

function createCustomPlaylistCard() {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "group-card custom-playlist-group-card";
  button.innerHTML = `
    <span class="custom-playlist-icon" aria-hidden="true">+</span>
    <span>${t("game.customPlaylist")}</span>
    <small>${t("game.customPlaylistHint")}</small>
  `;
  button.addEventListener("click", showCustomPlaylistPopup);
  return button;
}

function createAllGroupsCard() {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `group-card all-groups-card ${activeGroupId === "all" ? "active" : ""}`;
  button.setAttribute("aria-pressed", String(activeGroupId === "all"));

  const collage = document.createElement("div");
  collage.className = "group-collage";
  groups.slice(0, 4).forEach((group) => {
    const img = document.createElement("img");
    img.src = group.image || "";
    img.alt = "";
    collage.append(img);
  });

  const title = document.createElement("span");
  title.textContent = t("game.allArtists");
  const count = document.createElement("small");
  const combinedCount = songsCache.get("all")?.songs?.length;
  count.textContent = formatSongCount(combinedCount ?? groups.reduce(
    (total, group) => total + Number(group.songCount || group.fallbackCount || 0),
    0
  ));
  button.append(collage, title, count);
  button.addEventListener("click", () => selectSongGroup("all"));
  return button;
}

function setSetupMode(mode) {
  if (playerMode === "multiplayer") mode = "ten";
  setupMode = mode;
  setupModeButtons.forEach((button) => {
    const active = button.dataset.setupMode === mode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function setClipStartMode(mode) {
  clipStartMode = mode;
  startModeButtons.forEach((button) => {
    const active = button.dataset.startMode === mode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function setDifficultyMode(mode) {
  difficultyMode = mode;
  difficultyModeButtons.forEach((button) => {
    const active = button.dataset.difficultyMode === mode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function populateMultiplayerEmojis() {
  [createPlayerEmoji, joinPlayerEmoji, invitePlayerEmoji].forEach((select) => {
    if (!select) return;
    select.replaceChildren(...MULTIPLAYER_EMOJIS.map((emoji) => {
      const option = document.createElement("option");
      option.value = emoji;
      option.textContent = emoji;
      return option;
    }));
  });
}

function setPlayerMode(mode) {
  playerMode = mode === "multiplayer" ? "multiplayer" : "solo";
  setupModeButtons.forEach((button) => { button.disabled = playerMode === "multiplayer" && button.dataset.setupMode === "daily"; });
  playerModeButtons.forEach((button) => {
    const active = button.dataset.playerMode === playerMode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  multiplayerSetup.hidden = playerMode !== "multiplayer";
  multiplayerSetupMessage.textContent = "";
  if (playerMode === "multiplayer") setSetupMode("ten");
  else leaveMultiplayerRoom();
}

async function createMultiplayerRoom() {
  getGameSoundContext();
  const body = {
    roomName: createRoomName.value,
    playerName: createPlayerName.value,
    emoji: createPlayerEmoji.value,
    config: { groupId: activeGroupId, mode: setupMode, clipStart: clipStartMode, difficulty: difficultyMode }
  };
  const response = await fetch("/api/multiplayer/rooms", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  const payload = await readJsonResponse(response);
  if (!response.ok) throw new Error(payload.error || "Could not create room");
  applyMultiplayerSession(payload);
}

async function joinMultiplayerRoom() {
  await joinRoomWithIdentity({
    roomName: joinRoomName.value,
    playerName: joinPlayerName.value,
    emoji: joinPlayerEmoji.value,
    messageElement: multiplayerSetupMessage,
    button: joinRoomButton
  });
}

async function joinInviteRoom() {
  await joinRoomWithIdentity({
    roomName: inviteRoomName,
    playerName: invitePlayerName.value,
    emoji: invitePlayerEmoji.value,
    messageElement: inviteJoinMessage,
    button: inviteJoinButton
  });
}

async function joinRoomWithIdentity({ roomName, playerName, emoji, messageElement, button }) {
  getGameSoundContext();
  const cleanRoomName = String(roomName || "").trim();
  const cleanPlayerName = String(playerName || "").trim();
  if (!cleanRoomName || !cleanPlayerName) {
    messageElement.textContent = t("game.roomAndPlayerRequired");
    return;
  }

  messageElement.textContent = t("game.joiningRoom");
  button.disabled = true;
  try {
    const response = await fetch(`/api/multiplayer/rooms/${encodeURIComponent(cleanRoomName)}/join`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerName: cleanPlayerName, emoji })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) {
      throw new Error(payload.error === "Room has already started" ? t("game.roomAlreadyStarted") : (payload.error || "Could not join room"));
    }
    applyMultiplayerSession(payload);
    setupMode = payload.config.mode;
    clipStartMode = payload.config.clipStart;
    difficultyMode = payload.config.difficulty;
    setSetupMode(setupMode);
    setClipStartMode(clipStartMode);
    setDifficultyMode(difficultyMode);
    activeGroupId = payload.config.groupId;
    messageElement.textContent = t("game.joinedRoom", { name: payload.roomName });
    showHostConfigPopup(payload.config);
    await loadSongGroup(payload.config.groupId);
  } catch (error) {
    messageElement.textContent = error.message;
  } finally {
    button.disabled = false;
  }
}

function applyMultiplayerSession(payload) {
  multiplayerRoom = payload;
  multiplayerSession = {
    roomName: payload.roomName,
    playerId: payload.player?.id || multiplayerSession?.playerId,
    token: payload.player?.token || multiplayerSession?.token,
    isHost: payload.player?.isHost ?? multiplayerSession?.isHost ?? false
  };
  multiplayerPodiumShown = false;
  multiplayerKnownPlayerIds = new Set(payload.players.map((player) => player.id));
  multiplayerKnownScores = new Map(payload.players.map((player) => [player.id, player.score]));
  playerMode = "multiplayer";
  multiplayerPlayersPanel.hidden = false;
  renderMultiplayerPlayers(payload);
  startMultiplayerPolling();
}

function leaveMultiplayerRoom() {
  releaseMultiplayerRoomIfHost();
  clearInterval(multiplayerPollTimer);
  clearTimeout(multiplayerAdvanceTimer);
  multiplayerPollTimer = null;
  multiplayerAdvanceTimer = null;
  multiplayerSession = null;
  multiplayerRoom = null;
  multiplayerReadyPending = false;
  multiplayerPodiumShown = false;
  multiplayerKnownPlayerIds = new Set();
  multiplayerKnownScores = new Map();
  multiplayerPlayersPanel.hidden = true;
  multiplayerPodiumPopup.hidden = true;
}

function releaseMultiplayerRoomIfHost({ useBeacon = false } = {}) {
  const session = multiplayerSession;
  if (!session?.isHost) return;
  session.isHost = false;
  const url = `/api/multiplayer/rooms/${encodeURIComponent(session.roomName)}/leave`;
  const body = JSON.stringify({ playerId: session.playerId, token: session.token });
  if (useBeacon && navigator.sendBeacon) {
    navigator.sendBeacon(url, new Blob([body], { type: "application/json" }));
    return;
  }
  void fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true
  }).catch(() => {});
}

function startMultiplayerPolling() {
  clearInterval(multiplayerPollTimer);
  multiplayerPollTimer = window.setInterval(pollMultiplayerRoom, 2500);
}

async function pollMultiplayerRoom() {
  if (!multiplayerSession) return;
  try {
    const params = new URLSearchParams({ playerId: multiplayerSession.playerId, token: multiplayerSession.token });
    const response = await fetch(`/api/multiplayer/rooms/${encodeURIComponent(multiplayerSession.roomName)}?${params}`);
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error);
    announceMultiplayerActivity(payload);
    multiplayerRoom = payload;
    renderMultiplayerPlayers(payload);
    scheduleMultiplayerRoundAdvance(payload);
    scheduleMultiplayerFinalPopupClose(payload);
    const currentPlayer = payload.players.find((player) => player.id === multiplayerSession.playerId);
    if (gameOver && currentPlayer && (
      Number(currentPlayer.completedRound ?? -1) < runIndex
      || currentPlayer.score < getTotalPoints()
      || (runComplete && !currentPlayer.finished)
    )) {
      void updateMultiplayerScore();
    }
    if (gameMode === "ten" && payload.roundIndex > runIndex && payload.roundIndex < runQueue.length) {
      multiplayerReadyPending = false;
      stopClip();
      runIndex = payload.roundIndex;
      hideRoundPopup();
      playMultiplayerNextSongSound();
      startRunRound();
    }
    if (payload.status === "finished" && runComplete && roundPopup.hidden && !multiplayerPodiumShown) showMultiplayerPodium();
  } catch {
    // A later poll can recover from a temporary connection failure.
  }
}

function scheduleMultiplayerRoundAdvance(room = multiplayerRoom) {
  clearTimeout(multiplayerAdvanceTimer);
  multiplayerAdvanceTimer = null;
  if (!room?.roundAdvanceAt || !gameOver || runComplete) return;
  multiplayerAdvanceTimer = window.setTimeout(() => {
    multiplayerAdvanceTimer = null;
    void pollMultiplayerRoom();
  }, Math.max(0, Number(room.roundAdvanceAt) - Date.now()) + 80);
}

function announceMultiplayerActivity(room) {
  const joinedPlayers = room.players.filter((player) =>
    player.id !== multiplayerSession?.playerId && !multiplayerKnownPlayerIds.has(player.id)
  );
  const scoringPlayers = room.players
    .filter((player) =>
      player.id !== multiplayerSession?.playerId
      && multiplayerKnownPlayerIds.has(player.id)
      && player.score > (multiplayerKnownScores.get(player.id) || 0)
    )
    .map((player) => ({ ...player, pointsGained: player.score - (multiplayerKnownScores.get(player.id) || 0) }));
  multiplayerKnownPlayerIds = new Set(room.players.map((player) => player.id));
  multiplayerKnownScores = new Map(room.players.map((player) => [player.id, player.score]));
  if (joinedPlayers.length) playPlayerJoinedSound();
  if (scoringPlayers.length) {
    playOtherPlayerCorrectSound(scoringPlayers.length);
    showMultiplayerScoreNotifications(scoringPlayers);
  }
}

function showMultiplayerScoreNotifications(players) {
  let stack = document.querySelector(".multiplayer-score-notifications");
  if (!stack) {
    stack = document.createElement("div");
    stack.className = "multiplayer-score-notifications";
    stack.setAttribute("aria-live", "polite");
    document.body.append(stack);
  }

  players.forEach((player, index) => {
    const notification = document.createElement("article");
    notification.className = "multiplayer-score-notification";
    notification.style.setProperty("--notification-delay", `${index * 120}ms`);

    const emoji = document.createElement("span");
    emoji.textContent = player.emoji;
    const text = document.createElement("strong");
    text.textContent = player.name;
    const points = document.createElement("b");
    points.textContent = `+${player.pointsGained} pts`;
    notification.append(emoji, text, points);
    stack.append(notification);

    window.setTimeout(() => {
      notification.remove();
      if (!stack.children.length) stack.remove();
    }, 3600 + index * 120);
  });
}

function renderMultiplayerPlayers(room = multiplayerRoom) {
  if (!room) return;
  multiplayerRoomLabel.textContent = room.roomName;
  multiplayerPlayersList.replaceChildren(...room.players.map((player) => {
    const row = document.createElement("article");
    row.dataset.playerId = player.id;
    if (player.id === multiplayerSession?.playerId) row.classList.add("is-current");
    if (!player.connected) row.classList.add("is-disconnected");
    const emoji = document.createElement("span");
    emoji.textContent = player.emoji;
    const name = document.createElement("strong");
    name.textContent = player.name;
    const score = document.createElement("b");
    score.textContent = `${player.score} pts`;
    const state = document.createElement("small");
    state.textContent = !player.connected
      ? t("game.disconnected")
      : player.finished || Number(player.completedRound ?? -1) >= room.roundIndex ? "✓" : "";
    row.append(emoji, name, score, state);
    return row;
  }));
}

async function kickMultiplayerPlayer(event) {
  if (!multiplayerSession?.isHost) return;
  const button = event.target.closest("[data-multiplayer-kick-id]");
  const row = button ? null : event.target.closest("article[data-player-id]");
  const targetPlayerId = button?.dataset.multiplayerKickId || row?.dataset.playerId || "";
  if (!targetPlayerId || targetPlayerId === multiplayerSession.playerId || Number(multiplayerRoom?.roundIndex || 0) > 0) return;
  event.preventDefault();
  showMultiplayerKickPopup(targetPlayerId);
}

function showMultiplayerKickPopup(targetPlayerId) {
  const target = (multiplayerRoom?.players || []).find((player) => player.id === targetPlayerId);
  if (!target) return;
  pendingMultiplayerKickTargetId = targetPlayerId;
  showRoomKickPopup("multiplayer", targetPlayerId);
}

async function performMultiplayerKick(targetPlayerId, control = null) {
  if (!targetPlayerId || !multiplayerSession?.isHost) return;
  if (control) control.disabled = true;
  try {
    const response = await fetch(`/api/multiplayer/rooms/${encodeURIComponent(multiplayerSession.roomName)}/kick`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId: multiplayerSession.playerId, token: multiplayerSession.token, targetPlayerId })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || "No se pudo expulsar");
    hideRoomKickPopup("multiplayer");
    multiplayerRoom = payload;
    multiplayerKnownPlayerIds = new Set((payload.players || []).map((player) => player.id));
    renderMultiplayerPlayers(payload);
  } catch (error) {
    gameStatus.textContent = error.message;
    if (control) control.disabled = false;
  }
}

async function updateMultiplayerScore() {
  if (!multiplayerSession) return;
  const response = await fetch(`/api/multiplayer/rooms/${encodeURIComponent(multiplayerSession.roomName)}/score`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      playerId: multiplayerSession.playerId,
      token: multiplayerSession.token,
      score: getTotalPoints(),
      finished: runComplete,
      roundIndex: runIndex
    })
  });
  const payload = await readJsonResponse(response);
  if (response.ok) {
    multiplayerRoom = payload;
    renderMultiplayerPlayers(payload);
    scheduleMultiplayerRoundAdvance(payload);
    scheduleMultiplayerFinalPopupClose(payload);
  }
}

async function readyMultiplayerNextSong() {
  if (!multiplayerSession || multiplayerReadyPending || runComplete) return;
  multiplayerReadyPending = true;
  gameStatus.textContent = t("game.waitingPlayers");
  popupNextButton.disabled = true;
  nextSongButton.disabled = true;
  try {
    const response = await fetch(`/api/multiplayer/rooms/${encodeURIComponent(multiplayerSession.roomName)}/ready`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId: multiplayerSession.playerId, token: multiplayerSession.token, roundIndex: runIndex })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error);
    multiplayerRoom = payload;
    renderMultiplayerPlayers(payload);
    await pollMultiplayerRoom();
  } catch (error) {
    multiplayerReadyPending = false;
    gameStatus.textContent = error.message;
    popupNextButton.disabled = false;
    nextSongButton.disabled = false;
  }
}

function showMultiplayerPodium() {
  if (multiplayerPodiumShown) return;
  if (!multiplayerRoom?.players?.length) return;
  if (multiplayerRoom.status !== "finished") {
    gameStatus.textContent = t("game.waitingPlayers");
    return;
  }
  const players = [...multiplayerRoom.players].sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
  multiplayerPodium.replaceChildren(...players.slice(0, 3).map((player, index) => {
    const item = document.createElement("article");
    item.className = `podium-place place-${index + 1}`;
    const emoji = document.createElement("span");
    emoji.textContent = player.emoji;
    const name = document.createElement("strong");
    name.textContent = player.name;
    const score = document.createElement("b");
    score.textContent = `${player.score} pts`;
    item.append(emoji, name, score);
    return item;
  }));
  multiplayerFinalList.replaceChildren(...players.slice(3).map((player, index) => {
    const item = document.createElement("li");
    const rank = document.createElement("span");
    rank.textContent = `#${index + 4}`;
    const name = document.createElement("strong");
    name.textContent = `${player.emoji} ${player.name}`;
    const score = document.createElement("b");
    score.textContent = `${player.score} pts`;
    item.append(rank, name, score);
    return item;
  }));
  multiplayerPodiumPopup.hidden = false;
  multiplayerPodiumShown = true;
  triggerPendingGameCompleteFlyby();
  playMultiplayerPodiumFanfare();
}

function hideMultiplayerPodium() {
  multiplayerPodiumPopup.hidden = true;
  if (runComplete) releaseMultiplayerRoomIfHost();
}

function showChallengeSetup() {
  stopClip();
  hideRoundPopup();
  if (gamePhase === "play") leaveMultiplayerRoom();
  gamePhase = "challenge";
  setPlayerMode("solo");
  updateSetupRoomLabel();
  gameSetup.hidden = false;
  inviteJoinSetup.hidden = true;
  groupSetup.hidden = true;
  artistLoading.hidden = true;
  gameControls.hidden = true;
  gamePlayArea.hidden = true;
  leaderboardTicker.hidden = true;
  summaryBox.hidden = true;
  resultBox.hidden = true;
  suggestionList.hidden = true;
  songSource.textContent = t("game.chooseChallengeStatus");
}

function showGroupSetup() {
  stopFeedbackAudio();
  gamePhase = "group";
  updateSetupRoomLabel();
  activeGroupId = "all";
  activeGroup = { id: "all", name: t("game.allArtists"), image: groups[0]?.image || "" };
  hideRoundPopup();
  gameSetup.hidden = true;
  inviteJoinSetup.hidden = true;
  groupSetup.hidden = false;
  artistLoading.hidden = true;
  gameControls.hidden = true;
  gamePlayArea.hidden = true;
  leaderboardTicker.hidden = true;
  songSource.textContent = t("game.chooseArtistStatus");
  renderGroupButtons();
}

async function selectSongGroup(groupId) {
  if (groupId !== "all") playCategoryAudio(groupId);
  activeGroupId = groupId;
  renderGroupButtons();
  songSource.textContent = t("game.selectedCategory", {
    name: groupId === "all" ? t("game.allArtists") : (groups.find((group) => group.id === groupId)?.name || t("game.artist"))
  });
}

async function confirmSelectedSongGroup() {
  const groupId = activeGroupId || groups[0]?.id || "all";
  try {
    if (playerMode === "multiplayer" && !multiplayerSession) {
      if (!validateCreateRoomDraft()) {
        const validationMessage = t("game.roomAndPlayerRequired");
        showChallengeSetup();
        setPlayerMode("multiplayer");
        multiplayerSetupMessage.textContent = validationMessage;
        return;
      }
      await createMultiplayerRoom();
    }
    await loadSongGroup(groupId);
  } catch (error) {
    leaveMultiplayerRoom();
    multiplayerSetupMessage.textContent = error.message;
    showChallengeSetup();
    setPlayerMode("multiplayer");
  }
}

async function loadSongGroup(groupId) {
  stopClip();
  hideRoundPopup();
  setGameBusy(true);
  setArtistCardsBusy(true);
  artistLoading.hidden = false;
  artistLoading.scrollIntoView({ block: "center", behavior: "smooth" });
  summaryBox.hidden = true;
  resultBox.hidden = true;
  songSource.textContent = t("game.loadingGroup", {
    name: groupId === "all" ? t("game.allArtists") : (groups.find((group) => group.id === groupId)?.name || t("game.artist"))
  });
  gameStatus.textContent = t("game.loadingSongs");

  if (songsCache.has(groupId)) {
    setActiveGroup(groupId, songsCache.get(groupId));
    return;
  }

  try {
    const payload = groupId === "all"
      ? await loadAllSongGroups()
      : await fetchSongGroup(groupId);
    songsCache.set(groupId, payload);
    if (groupId !== "all") songsCache.delete("all");
    setActiveGroup(groupId, payload);
  } catch (error) {
    gameStatus.textContent = error.message;
    songSource.textContent = t("game.songsUnavailable");
    setGameBusy(true);
    setArtistCardsBusy(false);
    artistLoading.hidden = true;
  }
}

async function fetchSongGroup(groupId) {
  const response = await fetch(`/api/artists/${encodeURIComponent(groupId)}/songs`);
  const payload = await readJsonResponse(response);
  if (!response.ok || payload.error) throw new Error(payload.error || t("game.songLoadFailed"));
  return payload;
}

async function loadAllSongGroups() {
  const results = await Promise.allSettled(groups.map(async (group) => ({
    groupId: group.id,
    payload: songsCache.has(group.id) ? songsCache.get(group.id) : await fetchSongGroup(group.id)
  })));
  results
    .filter((result) => result.status === "fulfilled")
    .forEach((result) => songsCache.set(result.value.groupId, result.value.payload));
  const payloads = results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value.payload);
  if (!payloads.length) throw new Error(t("game.noArtistsLoaded"));
  const allSongs = payloads.flatMap((payload) =>
    (payload.songs || []).map((song) => ({
      ...song,
      groupId: payload.group?.id,
      groupName: payload.group?.name,
      groupImage: payload.group?.image
    }))
  );
  return {
    group: {
      id: "all",
      name: t("game.allArtists"),
      image: groups[0]?.image || ""
    },
    channel: t("game.allArtists"),
    source: payloads.map((payload) => payload.source).filter(Boolean).join(", "),
    songs: uniqueSongsByVideo(allSongs)
  };
}

function setActiveGroup(groupId, payload) {
  activeGroupId = groupId;
  activeGroup = payload.group || groups.find((group) => group.id === groupId);
  songs = payload.songs || [];
  renderGroupButtons();
  setArtistCardsBusy(false);
  songSource.textContent = t("game.sourceLoaded", {
    count: songs.length,
    channel: payload.channel,
    source: payload.source
  });
  startGame(setupMode);
}

function startGame(mode = "daily") {
  if (!songs.length) return;

  stopClip();
  hideRoundPopup();
  gamePhase = "play";
  gameMode = mode;
  runComplete = false;
  gameCompleteFlybyPending = false;
  summaryBox.hidden = true;
  gameSetup.hidden = true;
  inviteJoinSetup.hidden = true;
  groupSetup.hidden = true;
  artistLoading.hidden = true;
  gameControls.hidden = false;
  gamePlayArea.hidden = false;
  leaderboardTicker.hidden = mode !== "ten";
  updateGameControlsActionButton();
  activeConfig.textContent = t("game.activeConfig", {
    mode: mode === "ten" ? t("game.tenSongs") : t("game.daily"),
    clipStart: clipStartMode === "random" ? t("game.randomMoment") : t("game.intro"),
    difficulty: difficultyMode === "pro" ? t("game.difficultyPro") : t("game.difficultyNormal"),
    group: activeGroup?.name || t("game.songsFallback")
  });

  multiplayerPlayersPanel.hidden = playerMode !== "multiplayer";
  if (playerMode === "multiplayer") {
    startMultiplayerRun();
    return;
  }

  if (mode === "ten") {
    startRun();
    leaderboardTickerTrack.replaceChildren();
    void loadLeaderboard();
    return;
  }

  startDaily();
}
function startDaily() {
  answer = songs[getDailyIndex(songs.length)];
  attemptIndex = 0;
  guesses = [];
  eliminatedSongIds = new Set();
  gameOver = false;
  won = false;
  clipStartSeconds = chooseClipStart(answer);
  runQueue = [];
  runClipStarts = [];
  runThumbnailPreloads = [];
  runPlanId += 1;
  preparedRunIndex = -1;
  preparedRunPromise = null;
  runIndex = 0;
  runResults = [];

  restoreDailyGame();
  currentPlayerVideoId = "";
  pendingCuePromise = null;
  prepareCurrentSongAudio();
  renderGame(t("game.pressPlay"));
}

function startRun() {
  runQueue = sampleSongs(songs, Math.min(RUN_LENGTH, songs.length));
  runClipStarts = runQueue.map((song) => chooseClipStart(song));
  runThumbnailPreloads = preloadRunThumbnails(runQueue);
  runPlanId += 1;
  preparedRunIndex = -1;
  preparedRunPromise = null;
  runIndex = 0;
  runResults = [];
  leaderboardRunId = crypto.randomUUID();
  leaderboardSubmitted = false;
  startRunRound();
}

function startRunRound() {
  answer = runQueue[runIndex];
  attemptIndex = 0;
  guesses = [];
  eliminatedSongIds = new Set();
  gameOver = false;
  won = false;
  multiplayerReadyPending = false;
  popupNextButton.disabled = false;
  nextSongButton.disabled = false;
  clipStartSeconds = getRunClipStart(runIndex, answer);
  if (preparedRunIndex === runIndex && preparedRunPromise) {
    pendingCuePromise = preparedRunPromise;
  } else {
    currentPlayerVideoId = "";
    pendingCuePromise = null;
    prepareCurrentSongAudio();
  }
  renderGame(t("game.pressPlay"));
}

function getRunClipStart(index, song) {
  if (Number.isFinite(runClipStarts[index])) return runClipStarts[index];
  const startSeconds = chooseClipStart(song);
  runClipStarts[index] = startSeconds;
  return startSeconds;
}

function preloadRunThumbnails(queue) {
  return queue
    .filter((song) => song?.thumbnail)
    .map((song) => {
      const image = new Image();
      image.decoding = "async";
      image.src = song.thumbnail;
      return image;
    });
}

function restoreDailyGame() {
  const stored = readDailyState();
  if (!stored || stored.answerId !== answer.id) return;
  const steps = getClipSteps();
  attemptIndex = clampNumber(stored.attemptIndex, 0, steps.length - 1);
  guesses = Array.isArray(stored.guesses) ? stored.guesses.slice(0, steps.length) : [];
  guesses.filter((guess) => guess.kind === "wrong").forEach((guess) => eliminateSongGuess(guess.value));
  gameOver = Boolean(stored.gameOver);
  won = Boolean(stored.won);
  if (stored.clipStartMode === clipStartMode && stored.difficultyMode === difficultyMode) clipStartSeconds = clampNumber(stored.clipStartSeconds, 0, 3600);
}

function renderGame(message = "") {
  if (!answer) return;

  syncClipTrackWidth();
  const steps = getClipSteps();
  const currentSeconds = steps[Math.min(attemptIndex, steps.length - 1)];
  const currentPoints = getCurrentPoints();
  const totalPoints = getTotalPoints();
  const visibleScore = gameMode === "ten" ? totalPoints : currentPoints;
  const thumbnail = answer.thumbnail || "";

  clipLength.textContent = clipStartMode === "random"
    ? t("game.randomSuffix", { seconds: formatSeconds(currentSeconds) })
    : formatSeconds(currentSeconds);
  resetClipProgress();
  gameRound.textContent = gameOver
    ? t("game.songComplete")
    : t("game.tryOf", { current: attemptIndex + 1, total: steps.length });
  gameStatus.textContent = message || getDefaultGameStatus();
  gameProgress.textContent = getProgressText();
  scoreTotal.textContent = `${visibleScore} pts`;
  if (artworkProgress) {
    artworkProgress.hidden = gameMode !== "ten";
    artworkProgress.textContent = t("game.coverProgressTen", {
      current: runIndex + 1,
      total: runQueue.length || RUN_LENGTH
    });
  }
  guessInput.value = "";

  gameArtwork.style.backgroundImage = thumbnail
    ? `linear-gradient(180deg, rgba(23, 33, 27, 0.1), rgba(23, 33, 27, 0.8)), url("${thumbnail}")`
    : "";
  gameArtwork.classList.toggle("is-veiled", !gameOver);
  gameArtwork.classList.toggle("is-hidden-artwork", difficultyMode === "pro" && !gameOver);
  gamePlayArea.classList.toggle("pro-mode", difficultyMode === "pro");

  clipSteps.replaceChildren(...steps.map((seconds, index) => {
    const step = document.createElement("div");
    step.className = "step";
    if (index < attemptIndex || gameOver) step.classList.add("used");
    if (index === attemptIndex && !gameOver) step.classList.add("active");
    step.textContent = `${formatSeconds(seconds)} ${SCORE_STEPS[index]}`;
    return step;
  }));

  guessList.replaceChildren(...guesses.map((guess, index) => renderGuess(guess, index)));
  renderSuggestions();

  const summaryOnly = gameMode === "ten" && runComplete;
  const waitingForMultiplayer = playerMode === "multiplayer" && gameMode === "ten" && gameOver && !runComplete;
  gamePlayArea.classList.toggle("summary-only", summaryOnly);
  resultBox.hidden = !gameOver || summaryOnly;
  const timestampText = clipStartMode === "random"
    ? t("game.fromTimestamp", { time: formatTimestamp(clipStartSeconds) })
    : "";
  resultLabel.textContent = won
    ? t("game.solved", { points: currentPoints, timestamp: timestampText })
    : t("game.answer", { timestamp: timestampText });
  answerText.textContent = answer.answer;
  watchLink.href = timedWatchLink(answer.link, clipStartSeconds);
  nextSongButton.hidden = gameMode !== "ten" || !gameOver || runIndex >= runQueue.length - 1;
  nextSongButton.textContent = waitingForMultiplayer ? t("game.waitingPlayersButton") : t("game.nextSong");
  nextSongButton.disabled = waitingForMultiplayer;
  restartRunButton.hidden = gameMode !== "ten" || playerMode === "multiplayer";
  summaryRestartButton.hidden = playerMode === "multiplayer";

  summaryBox.hidden = !(gameMode === "ten" && runComplete);
  if (gameMode === "ten" && runComplete) renderRunSummary();

  setGameBusy(false);
  guessInput.disabled = gameOver;
  guessButton.disabled = gameOver;
  skipClipButton.disabled = gameOver;
  playClipButton.disabled = gameOver;
}

function renderGuess(guess, index) {
  const row = document.createElement("article");
  row.className = `guess-item ${guess.kind}`;

  const number = document.createElement("span");
  number.textContent = String(index + 1);

  const value = document.createElement("strong");
  value.textContent = guess.value || t("game.skipped");

  const state = document.createElement("small");
  state.textContent = guess.kind === "correct"
    ? `${guess.points} pts`
    : guess.kind === "skip" ? t("game.skipState") : t("game.wrongState");

  row.append(number, value, state);
  return row;
}

function renderSuggestions() {
  if (!songs.length || gameOver || guessInput.disabled) {
    suggestionList.hidden = true;
    suggestionList.replaceChildren();
    return;
  }

  const query = normalizeGuess(guessInput.value);
  if (!query) {
    suggestionList.hidden = true;
    suggestionList.replaceChildren();
    return;
  }

  const matches = songs
    .filter((song) => !eliminatedSongIds.has(song.videoId))
    .map((song) => ({ song, score: suggestionScore(song, query) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map((item) => item.song);

  suggestionList.hidden = !matches.length;
  suggestionList.replaceChildren(...matches.map(renderSuggestionCard));
}

function renderSuggestionCard(song) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "suggestion-card";
  button.dataset.answer = song.answer;

  const img = document.createElement("img");
  img.src = song.thumbnail || "";
  img.alt = "";

  const text = document.createElement("span");
  const title = document.createElement("strong");
  title.textContent = song.answer;
  const meta = document.createElement("small");
  meta.textContent = song.groupName || activeGroup?.name || t("game.songFallback");
  text.append(title, meta);

  button.append(img, text);
  return button;
}

function chooseSuggestion(event) {
  const button = event.target.closest(".suggestion-card");
  if (!button) return;
  const value = button.dataset.answer || "";
  guessInput.value = value;
  suggestionList.hidden = true;
  suggestionList.replaceChildren();
  submitGuessValue(value);
}

function startMultiplayerRun() {
  const seed = multiplayerRoom?.seed || multiplayerSession?.roomName || "multiplayer";
  runQueue = seededSampleSongs(songs, Math.min(RUN_LENGTH, songs.length), seed);
  runClipStarts = runQueue.map((song, index) => chooseSeededClipStart(song, `${seed}:${index}`));
  runThumbnailPreloads = preloadRunThumbnails(runQueue);
  runPlanId += 1;
  preparedRunIndex = -1;
  preparedRunPromise = null;
  runIndex = clampNumber(multiplayerRoom?.roundIndex || 0, 0, Math.max(0, runQueue.length - 1));
  runResults = [];
  leaderboardSubmitted = false;
  startRunRound();
}

function showSongsPopup() {
  const availableSongs = songs
    .filter((song) => !eliminatedSongIds.has(song.videoId))
    .sort((a, b) => a.answer.localeCompare(b.answer, currentLanguage));
  songsPopupCount.textContent = t("game.availableSongs", {
    available: availableSongs.length,
    total: songs.length
  });
  songsPopupList.replaceChildren(...availableSongs.map((song) => {
    const item = document.createElement("article");
    const image = document.createElement("img");
    image.src = song.thumbnail || "";
    image.alt = "";
    image.loading = "lazy";
    const title = document.createElement("span");
    title.textContent = song.answer;
    item.append(image, title);
    return item;
  }));
  songsPopupList.scrollTop = 0;
  document.body.classList.add("songs-popup-open");
  syncSongsPopupPosition();
  songsPopup.hidden = false;
}

function hideSongsPopup() {
  document.body.classList.remove("songs-popup-open");
  songsPopup.style.removeProperty("--songs-popup-top");
  songsPopup.hidden = true;
}

function syncSongsPopupPosition() {
  if (window.innerWidth > 900 || !titleBar) {
    songsPopup.style.removeProperty("--songs-popup-top");
    return;
  }
  const titleBottom = Math.max(0, Math.ceil(titleBar.getBoundingClientRect().bottom));
  songsPopup.style.setProperty("--songs-popup-top", `${titleBottom + 6}px`);
}

function showCustomPlaylistPopup() {
  customPlaylistMessage.textContent = "";
  customPlaylistPopup.hidden = false;
  customPlaylistInput.focus();
}

function hideCustomPlaylistPopup() {
  customPlaylistPopup.hidden = true;
}

async function loadCustomPlaylist(event) {
  event.preventDefault();
  const input = customPlaylistInput.value.trim();
  if (!input) return;
  customPlaylistLoadButton.disabled = true;
  customPlaylistInput.disabled = true;
  customPlaylistMessage.textContent = t("game.loadingPlaylist");
  try {
    const response = await fetch("/api/game/custom-playlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok || payload.error) throw new Error(payload.error || t("game.songLoadFailed"));
    songsCache.set("custom", payload);
    hideCustomPlaylistPopup();
    setActiveGroup("custom", payload);
  } catch (error) {
    customPlaylistMessage.textContent = error.message;
  } finally {
    customPlaylistLoadButton.disabled = false;
    customPlaylistInput.disabled = false;
  }
}

function eliminateSongGuess(value) {
  const normalizedValue = normalizeGuess(value);
  const guessedSong = songs.find((song) => (
    normalizeGuess(song.answer) === normalizedValue || normalizeGuess(song.title) === normalizedValue
  ));
  if (guessedSong) eliminatedSongIds.add(guessedSong.videoId);
}

function suggestionScore(song, query) {
  const answerText = normalizeGuess(song.answer);
  const titleText = normalizeGuess(song.title);
  const artistText = normalizeGuess(song.artist);
  if (answerText === query || titleText === query) return 100;
  if (answerText.startsWith(query) || titleText.startsWith(query)) return 80;
  if (answerText.includes(query) || titleText.includes(query)) return 55;
  if (artistText.includes(query)) return 20;
  return 0;
}

function renderRunSummary() {
  const total = getTotalPoints();
  finalScore.textContent = `${total} pts`;
  renderLeaderboard();
  summaryList.replaceChildren(...runResults.map((result, index) => {
    const row = document.createElement("a");
    row.className = `summary-item ${result.solved ? "is-solved" : "is-missed"}`;
    row.href = timedWatchLink(result.song.link, result.startSeconds || 0);
    row.target = "_blank";
    row.rel = "noreferrer";

    const number = document.createElement("span");
    number.textContent = String(index + 1);

    const image = document.createElement("img");
    image.src = result.song.thumbnail || "";
    image.alt = "";
    image.loading = "lazy";

    const title = document.createElement("strong");
    title.textContent = result.song.answer;

    const points = document.createElement("b");
    points.className = "summary-points";
    points.textContent = `${result.points || 0} pts`;

    const meta = document.createElement("small");
    const timestampText = result.startSeconds
      ? t("game.fromTimestamp", { time: formatTimestamp(result.startSeconds) })
      : "";
    meta.textContent = result.solved
      ? t("game.solvedSummary", { points: result.points, clip: formatSeconds(result.clip), timestamp: timestampText })
      : t("game.notSolvedSummary", { timestamp: timestampText });

    row.append(number, image, title, points, meta);
    return row;
  }));
}

async function renderLeaderboard() {
  leaderboardConfig.textContent = activeConfig.textContent;
  leaderboardForm.hidden = leaderboardSubmitted;
  leaderboardMessage.textContent = "";
  await loadLeaderboard();
}

async function loadLeaderboard() {
  const configKey = getLeaderboardConfigKey();
  try {
    const response = await fetch(`/api/leaderboard?config=${encodeURIComponent(configKey)}`);
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || t("game.leaderboardUnavailable"));
    renderLeaderboardEntries(payload.entries || []);
    renderLeaderboardTicker(payload.entries || []);
    renderLeaderboardPopupEntries(payload.entries || []);
  } catch (error) {
    leaderboardMessage.textContent = error.message;
    leaderboardList.replaceChildren();
    renderLeaderboardTicker([]);
    renderLeaderboardPopupEntries([]);
  }
}

async function submitLeaderboardScore(event) {
  event.preventDefault();
  if (!runComplete || leaderboardSubmitted) return;
  leaderboardSubmitButton.disabled = true;
  leaderboardMessage.textContent = t("game.savingScore");
  try {
    const response = await fetch("/api/leaderboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        configKey: getLeaderboardConfigKey(),
        playerName: leaderboardName.value,
        runId: leaderboardRunId,
        score: getTotalPoints()
      })
    });
    const payload = await readJsonResponse(response);
    if (!response.ok) throw new Error(payload.error || t("game.couldNotSaveScore"));
    leaderboardSubmitted = true;
    leaderboardForm.hidden = true;
    leaderboardMessage.textContent = t("game.scoreSaved");
    renderLeaderboardEntries(payload.entries || []);
    renderLeaderboardTicker(payload.entries || []);
    renderLeaderboardPopupEntries(payload.entries || []);
  } catch (error) {
    leaderboardMessage.textContent = error.message;
  } finally {
    leaderboardSubmitButton.disabled = false;
  }
}

function renderLeaderboardEntriesLegacy(entries) {
  leaderboardList.replaceChildren(...entries.map((entry) => {
    const row = document.createElement("li");
    const name = document.createElement("strong");
    name.textContent = entry.playerName;
    const score = document.createElement("b");
    score.textContent = `${entry.score} pts`;
    row.append(name, score);
    return row;
  }));
}

function renderLeaderboardTickerLegacy(entries) {
  if (gameMode !== "ten") {
    leaderboardTicker.hidden = true;
    return;
  }
  leaderboardTicker.hidden = false;
  const values = entries.length
    ? entries.map((entry) => `${entry.rank}. ${entry.playerName} · ${entry.score} pts`)
    : ["No scores yet · Complete game and claim first place"];
  leaderboardTickerTrack.replaceChildren(...values.map((value) => {
    const item = document.createElement("span");
    item.className = "leaderboard-ticker-entry";
    const [rankAndName, score = ""] = value.split(" · ");
    const name = document.createElement("strong");
    name.textContent = rankAndName;
    const points = document.createElement("b");
    points.textContent = score;
    item.append(name, points);
    return item;
  }));
}

function createLeaderboardRow(entry) {
  const row = document.createElement("li");
  const rank = document.createElement("span");
  rank.className = "leaderboard-rank";
  rank.textContent = `#${entry.rank}`;
  const name = document.createElement("strong");
  name.textContent = entry.playerName;
  const date = document.createElement("time");
  date.textContent = formatLeaderboardDate(entry.createdAt);
  const score = document.createElement("b");
  score.textContent = `${entry.score} pts`;
  row.append(rank, name, date, score);
  return row;
}

function renderLeaderboardPopupEntries(entries) {
  leaderboardPopupConfig.textContent = activeConfig.textContent;
  leaderboardPopupList.replaceChildren(...uniqueLeaderboardEntries(entries).slice(0, 10).map(createLeaderboardRow));
}

async function showLeaderboardPopup() {
  leaderboardPopup.hidden = false;
  leaderboardPopupConfig.textContent = activeConfig.textContent;
  await loadLeaderboard();
}

function hideLeaderboardPopup() {
  leaderboardPopup.hidden = true;
}

function formatLeaderboardDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat(currentLanguage, { day: "2-digit", month: "short", year: "numeric" }).format(date);
}

function renderLeaderboardEntries(entries) {
  leaderboardList.replaceChildren(...uniqueLeaderboardEntries(entries).slice(0, 10).map(createLeaderboardRow));
}

function renderLeaderboardTicker(entries) {
  if (gameMode !== "ten") {
    leaderboardTicker.hidden = true;
    return;
  }
  leaderboardTicker.hidden = false;
  const uniqueEntries = uniqueLeaderboardEntries(entries);
  const values = uniqueEntries.length ? uniqueEntries.slice(0, 10) : [null];
  leaderboardTickerTrack.replaceChildren(...values.map((entry) => {
    const item = document.createElement("span");
    item.className = "leaderboard-ticker-entry";
    const rank = document.createElement("span");
    rank.className = "leaderboard-ticker-rank";
    rank.textContent = entry ? `#${entry.rank}` : "#1";
    const name = document.createElement("strong");
    name.textContent = entry?.playerName || t("game.noScoresYet");
    const points = document.createElement("b");
    points.textContent = entry ? `${entry.score} pts` : t("game.claimFirstPlace");
    const date = document.createElement("time");
    date.textContent = entry ? formatLeaderboardDate(entry.createdAt) : "";
    item.append(rank, name, points, date);
    return item;
  }));
}

function uniqueLeaderboardEntries(entries) {
  const seen = new Set();
  return entries
    .filter((entry) => {
      const key = String(entry.playerName || "").trim().toLocaleLowerCase();
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .map((entry, index) => ({ ...entry, rank: index + 1 }));
}

function getLeaderboardConfigKey() {
  return `${activeGroupId}:${gameMode}:${clipStartMode}:${difficultyMode}:${runQueue.length || RUN_LENGTH}`;
}

function showRoundPopup(success) {
  const points = success ? SCORE_STEPS[attemptIndex] : 0;
  const isFinalRunSong = gameMode === "ten" && runIndex >= runQueue.length - 1;
  const isMultiplayerFinalSong = playerMode === "multiplayer" && isFinalRunSong;
  clearTimeout(roundPopupAutoCloseTimer);
  roundPopupAutoCloseTimer = null;
  popupMeta.textContent = success ? t("game.correct") : t("game.missed");
  popupTitle.textContent = answer?.answer || t("game.unknownSong");
  popupPoints.textContent = `${points} pts`;
  popupCover.src = answer?.thumbnail || "";
  popupCover.hidden = !answer?.thumbnail;
  popupSong.textContent = "";
  popupTime.textContent = t("game.timestamp", { time: formatTimestamp(clipStartSeconds) });
  popupWatchLink.href = timedWatchLink(answer?.link || "#", clipStartSeconds);
  popupNextButton.hidden = gameMode !== "ten" || isFinalRunSong;
  popupNextButton.textContent = playerMode === "multiplayer" ? t("game.waitingPlayersButton") : t("game.nextSong");
  popupNextButton.disabled = playerMode === "multiplayer";
  popupSummaryButton.hidden = gameMode !== "ten" || !isFinalRunSong || isMultiplayerFinalSong;
  popupCloseButton.hidden = (gameMode === "ten" && !isFinalRunSong) || isMultiplayerFinalSong;
  roundPopup.classList.toggle("is-correct", success);
  roundPopup.classList.toggle("is-wrong", !success);
  roundPopup.hidden = false;
  roundPopup.scrollTo({ top: 0, behavior: "smooth" });
  roundPopup.querySelector(".round-popup-card")?.scrollIntoView({ block: "start", behavior: "smooth" });
  if (isMultiplayerFinalSong) scheduleMultiplayerFinalPopupClose(multiplayerRoom);
}

function hideRoundPopup() {
  clearTimeout(roundPopupAutoCloseTimer);
  roundPopupAutoCloseTimer = null;
  roundPopup.hidden = true;
}

function closeCompletedRoundPopup({ force = false } = {}) {
  if (!force && playerMode === "multiplayer" && runComplete) return;
  hideRoundPopup();
  triggerPendingGameCompleteFlyby();
  if (playerMode === "multiplayer" && runComplete) showMultiplayerPodium();
}

function scheduleMultiplayerFinalPopupClose(room = multiplayerRoom) {
  if (playerMode !== "multiplayer" || !runComplete || room?.status !== "finished" || roundPopup.hidden) return;
  clearTimeout(roundPopupAutoCloseTimer);
  const closeAt = Number(room.roundAdvanceAt || 0) || Date.now() + 3_000;
  roundPopupAutoCloseTimer = window.setTimeout(
    () => closeCompletedRoundPopup({ force: true }),
    Math.max(0, closeAt - Date.now())
  );
}

function getDefaultGameStatus() {
  if (!gameOver) return t("game.pressPlay");
  if (won) return t("game.solvedAt", { seconds: formatSeconds(getClipSteps()[attemptIndex]) });
  return t("game.noTries");
}

function getClipSteps() {
  return CLIP_STEPS[difficultyMode] || CLIP_STEPS.normal;
}

function getProgressText() {
  const groupName = activeGroup?.name || t("game.groupFallback");
  if (gameMode === "ten") {
    return t("game.progressTen", { group: groupName, current: runIndex + 1, total: runQueue.length });
  }
  return t("game.progressDaily", { group: groupName });
}

function getCurrentPoints() {
  return won ? SCORE_STEPS[attemptIndex] : 0;
}

function getTotalPoints() {
  return runResults.reduce((sum, result) => sum + result.points, 0);
}

async function cuePlayer() {
  const songToCue = answer;
  const startSeconds = clipStartSeconds;
  return cueSongAudio(songToCue, startSeconds, {
    isStillValid: () => answer === songToCue
  });
}

function prepareCurrentSongAudio() {
  pendingCuePromise = cuePlayer();
  return pendingCuePromise;
}

async function cueSongAudio(song, startSeconds, { isStillValid = () => true } = {}) {
  if (!song?.videoId) return;

  try {
    await ensureYouTubePlayer();
    if (!isStillValid()) return;
    mutePlayerForCue();
    currentPlayerVideoId = song.videoId;
    player.cueVideoById({ videoId: song.videoId, startSeconds });
    mutePlayerForCue();
  } catch {
    gameStatus.textContent = t("game.youtubeUnavailable");
  }
}

function mutePlayerForCue() {
  try {
    player?.mute?.();
  } catch {
    // Best-effort guard against preload/cue audio leaks.
  }
}

function unmutePlayerForClip() {
  try {
    player?.setVolume?.(100);
    player?.unMute?.();
  } catch {
    // The clip can still play if the iframe does not expose volume controls.
  }
}

function prepareRunSongAudio(index) {
  const song = runQueue[index];
  if (!song) return Promise.resolve();

  const planId = runPlanId;
  const startSeconds = getRunClipStart(index, song);
  preparedRunIndex = index;
  preparedRunPromise = cueSongAudio(song, startSeconds, {
    isStillValid: () => gameMode === "ten" && runPlanId === planId && runQueue[index] === song
  });
  return preparedRunPromise;
}

function prepareNextRunSongAudio() {
  if (gameMode !== "ten" || runComplete || runIndex >= runQueue.length - 1) return;
  prepareRunSongAudio(runIndex + 1);
}

async function playSongClip() {
  if (!answer || gameOver) return;

  const steps = getClipSteps();
  const seconds = steps[Math.min(attemptIndex, steps.length - 1)];
  playClipButton.disabled = true;
  gameStatus.textContent = t("game.loadingClip", { seconds: formatSeconds(seconds) });
  pulseInteraction("play");

  try {
    await (pendingCuePromise || prepareCurrentSongAudio());
    await ensureYouTubePlayer();
    if (!answer || gameOver) return;
    pendingClipSeconds = seconds;
    clipPlaybackAuthorized = false;
    clearTimeout(clipTimer);
    unmutePlayerForClip();

    if (currentPlayerVideoId !== answer.videoId) {
      currentPlayerVideoId = answer.videoId;
      player.loadVideoById({ videoId: answer.videoId, startSeconds: clipStartSeconds });
    } else {
      player.seekTo(clipStartSeconds, true);
      player.playVideo();
      if (player.getPlayerState?.() === 1) startClipTimer(seconds);
    }
  } catch {
    gameStatus.textContent = t("game.youtubeUnavailable");
    playClipButton.disabled = false;
  }
}

function submitGuess(event) {
  event.preventDefault();
  submitGuessValue(guessInput.value.trim());
}

function submitGuessValue(value) {
  if (gameOver || !answer) return;

  suggestionList.hidden = true;
  if (!value) {
    gameStatus.textContent = t("game.typeGuess");
    return;
  }

  const normalizedValue = normalizeGuess(value);
  if (guesses.some((guess) => normalizeGuess(guess.value) === normalizedValue)) {
    gameStatus.textContent = t("game.alreadyTried");
    return;
  }

  if (isCorrectGuess(value)) {
    guesses.push({ kind: "correct", value, clip: getClipSteps()[attemptIndex], points: SCORE_STEPS[attemptIndex] });
    pulseInteraction("correct");
    finishGame(true);
    return;
  }

  guesses.push({ kind: "wrong", value, clip: getClipSteps()[attemptIndex], points: 0 });
  eliminateSongGuess(value);
  pulseInteraction("wrong");
  advanceRound(t("game.wrongMore"), "fail");
}

function skipGuess() {
  if (gameOver || !answer) return;
  guesses.push({ kind: "skip", value: t("game.skipped"), clip: getClipSteps()[attemptIndex], points: 0 });
  pulseInteraction("skip");
  advanceRound(t("game.skippedMore"), "skip");
}

function advanceRound(message, sound = "") {
  stopClip();
  if (attemptIndex >= getClipSteps().length - 1) {
    finishGame(false);
    return;
  }

  if (sound === "fail") playRandomFeedbackAudio(FAIL_AUDIO_FILES);
  if (sound === "skip") playFartSound();
  attemptIndex += 1;
  saveDailyState();
  renderGame(message);
}

function finishGame(success) {
  stopClip();
  gameOver = true;
  won = success;
  if (success) {
    playRandomFeedbackAudio(SUCCESS_AUDIO_FILES);
  } else {
    playRandomFeedbackAudio(FAIL_AUDIO_FILES);
  }

  if (gameMode === "ten") recordRunResult(success);
  if (gameMode === "ten" && runIndex >= runQueue.length - 1) runComplete = true;
  if (playerMode === "multiplayer") void updateMultiplayerScore();

  saveDailyState();
  renderGame(success ? t("game.correctMessage") : t("game.answerRevealed"));
  showRoundPopup(success);
  if (success && attemptIndex === 0) triggerPerfectGuessRain();
  if (gameMode === "daily" || runComplete) gameCompleteFlybyPending = true;
  prepareNextRunSongAudio();
}

function triggerPendingGameCompleteFlyby() {
  if (!gameCompleteFlybyPending) return;
  if (playerMode === "multiplayer" && runComplete && multiplayerRoom?.status !== "finished") return;
  gameCompleteFlybyPending = false;
  if (playerMode !== "multiplayer" || isCurrentMultiplayerWinner()) {
    triggerGameCompleteFlyby();
  } else {
    triggerGameCompleteFlyby("/images/you-tried.png");
  }
}

function isCurrentMultiplayerWinner() {
  if (!multiplayerSession?.playerId || !multiplayerRoom?.players?.length) return false;
  const winner = [...multiplayerRoom.players]
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))[0];
  return winner?.id === multiplayerSession.playerId;
}

function triggerGameCompleteFlyby(imageSource = "/images/game-complete.jpeg") {
  document.querySelector(".game-complete-flybys")?.remove();
  const flybys = document.createElement("div");
  flybys.className = "game-complete-flybys";
  flybys.setAttribute("aria-hidden", "true");
  document.body.append(flybys);

  const margin = Math.max(window.innerWidth, window.innerHeight) * 0.75;
  const paths = [
    [[-margin, window.innerHeight * 0.2], [window.innerWidth + margin, window.innerHeight * 0.75]],
    [[window.innerWidth + margin, window.innerHeight * 0.75], [-margin, window.innerHeight * 0.2]],
    [[window.innerWidth * 0.2, -margin], [window.innerWidth * 0.75, window.innerHeight + margin]],
    [[window.innerWidth * 0.75, window.innerHeight + margin], [window.innerWidth * 0.2, -margin]],
    [[-margin, -margin], [window.innerWidth + margin, window.innerHeight + margin]],
    [[window.innerWidth + margin, window.innerHeight + margin], [-margin, -margin]],
    [[window.innerWidth + margin, -margin], [-margin, window.innerHeight + margin]],
    [[-margin, window.innerHeight + margin], [window.innerWidth + margin, -margin]]
  ];
  const selectedPaths = [...paths].sort(() => Math.random() - 0.5).slice(0, 4);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const animations = selectedPaths.map(([start, end], index) => {
    const image = document.createElement("img");
    image.className = "game-complete-flyby";
    image.src = imageSource;
    image.alt = "";
    image.style.width = `${Math.min(window.innerWidth * 0.42, 210 + Math.random() * 130)}px`;
    flybys.append(image);

    const rotation = -14 + Math.random() * 28;
    const duration = reducedMotion ? 1200 : 5000 + Math.random() * 2000;
    const delay = reducedMotion ? index * 100 : index * 350 + Math.random() * 450;
    const startTransform = `translate3d(${start[0]}px, ${start[1]}px, 0) rotate(${rotation}deg) scale(0.9)`;
    const endTransform = `translate3d(${end[0]}px, ${end[1]}px, 0) rotate(${-rotation}deg) scale(1.02)`;
    return image.animate([
      { transform: startTransform, opacity: 0 },
      { transform: startTransform, opacity: 1, offset: 0.06 },
      { transform: endTransform, opacity: 1, offset: 0.94 },
      { transform: endTransform, opacity: 0 }
    ], {
      duration,
      delay,
      easing: "linear",
      fill: "forwards"
    }).finished;
  });

  Promise.allSettled(animations).finally(() => flybys.remove());
}

function triggerPerfectGuessRain() {
  document.querySelector(".perfect-guess-rain")?.remove();
  const rain = document.createElement("div");
  rain.className = "perfect-guess-rain";
  rain.setAttribute("aria-hidden", "true");

  for (let index = 0; index < 40; index += 1) {
    const image = document.createElement("img");
    image.src = "/images/perfect-guess.png";
    image.alt = "";
    image.style.setProperty("--rain-left", `${Math.random() * 100}vw`);
    image.style.setProperty("--rain-size", `${70 + Math.random() * 100}px`);
    image.style.setProperty("--rain-delay", `${-Math.random() * 1.8}s`);
    image.style.setProperty("--rain-duration", `${3.2 + Math.random() * 2.2}s`);
    image.style.setProperty("--rain-drift", `${-150 + Math.random() * 300}px`);
    image.style.setProperty("--rain-spin", `${-2 + Math.random() * 4}turn`);
    rain.append(image);
  }

  document.body.append(rain);
  window.setTimeout(() => rain.remove(), 6200);
}

function recordRunResult(success) {
  const result = {
    song: answer,
    solved: success,
    clip: success ? getClipSteps()[attemptIndex] : null,
    startSeconds: clipStartSeconds,
    points: success ? SCORE_STEPS[attemptIndex] : 0,
    guesses: guesses.length
  };
  runResults[runIndex] = result;
}

function nextRunSong() {
  if (gameMode !== "ten" || !gameOver || runIndex >= runQueue.length - 1) return;
  if (playerMode === "multiplayer") return;
  stopClip();
  runIndex += 1;
  startRunRound();
}

function isCorrectGuess(value) {
  const normalizedValue = normalizeGuess(value);
  return [answer.answer, answer.title, `${answer.artist} ${answer.title}`, answer.rawTitle]
    .map(normalizeGuess)
    .includes(normalizedValue);
}

function startClipTimer(seconds) {
  clearTimeout(clipTimer);
  pendingClipSeconds = 0;
  clipPlaybackAuthorized = true;
  playClipButton.disabled = false;
  gameArtwork.classList.add("is-playing");
  gamePlayArea.classList.add("is-playing");
  startClipProgress(seconds);
  gameStatus.textContent = t("game.playingClip", { seconds: formatSeconds(seconds) });
  clipTimer = setTimeout(() => {
    stopClip({ completeProgress: true });
    if (!gameOver) gameStatus.textContent = t("game.heardClip", { seconds: formatSeconds(seconds) });
  }, seconds * 1000);
}

function stopClip({ completeProgress = false } = {}) {
  clearTimeout(clipTimer);
  clipTimer = null;
  pendingClipSeconds = 0;
  clipPlaybackAuthorized = false;
  gameArtwork.classList.remove("is-playing");
  gamePlayArea.classList.remove("is-playing");
  if (completeProgress) {
    finishClipProgress();
  } else {
    resetClipProgress();
  }
  playClipButton.disabled = false;
  try {
    player?.pauseVideo();
    player?.seekTo(clipStartSeconds, true);
    mutePlayerForCue();
  } catch {
    // Player can be absent before first user play.
  }
}

function startClipProgress(seconds) {
  cancelClipProgressFrame();
  syncClipTrackWidth();
  clipProgressStartedAt = performance.now();
  clipProgressDurationMs = Math.max(1, seconds * 1000);
  clipTrack?.classList.add("is-playing");
  setClipProgress(0);
  renderClipProgress();
}

function renderClipProgress() {
  const elapsed = performance.now() - clipProgressStartedAt;
  const ratio = Math.min(1, elapsed / clipProgressDurationMs);
  setClipProgress(ratio * 100);
  if (ratio < 1) clipProgressFrame = requestAnimationFrame(renderClipProgress);
}

function finishClipProgress() {
  cancelClipProgressFrame();
  clipTrack?.classList.remove("is-playing");
  setClipProgress(100);
}

function resetClipProgress() {
  cancelClipProgressFrame();
  clipTrack?.classList.remove("is-playing");
  setClipProgress(0);
}

function renderClipWaveTrack() {
  if (!clipTrackBase || !clipTrackFillWave) return;
  syncClipTrackWidth();
  clipTrackBase.replaceChildren(...createClipWaveBars());
  clipTrackFillWave.replaceChildren(...createClipWaveBars());
}

function createClipWaveBars() {
  return CLIP_WAVE_PATTERN.map((rest, index) => {
    const bar = document.createElement("span");
    const peak = Math.min(0.98, rest + 0.24 + ((index % 5) * 0.04));
    const mid = Math.max(0.18, rest - 0.1 + ((index % 3) * 0.04));
    bar.className = "clip-track-bar";
    bar.style.setProperty("--rest", `${Math.round(rest * 100)}%`);
    bar.style.setProperty("--peak", `${Math.round(peak * 100)}%`);
    bar.style.setProperty("--mid", `${Math.round(mid * 100)}%`);
    bar.style.setProperty("--delay", `${-(index % 10) * 0.075}s`);
    return bar;
  });
}

function syncClipTrackWidth() {
  if (!clipTrack) return;
  const width = clipTrack.clientWidth || 460;
  clipTrack.style.setProperty("--clip-track-width", `${width}px`);
}

function setClipProgress(value) {
  if (!clipTrackFill) return;
  const percent = `${clampNumber(value, 0, 100)}%`;
  clipTrackFill.style.width = percent;
}

function cancelClipProgressFrame() {
  if (clipProgressFrame) cancelAnimationFrame(clipProgressFrame);
  clipProgressFrame = null;
}

function ensureYouTubePlayer() {
  if (playerReady) return Promise.resolve(player);
  if (playerReadyPromise) return playerReadyPromise;

  playerReadyPromise = loadYouTubeApi().then((YT) => new Promise((resolve) => {
    player = new YT.Player("youtubePlayer", {
      width: "320",
      height: "180",
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        playsinline: 1,
        rel: 0
      },
      events: {
        onReady: () => {
          playerReady = true;
          resolve(player);
        },
        onStateChange: onYouTubeStateChange,
        onError: onYouTubeError
      }
    });
  }));

  return playerReadyPromise;
}

function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (youtubeApiPromise) return youtubeApiPromise;

  youtubeApiPromise = new Promise((resolve, reject) => {
    const previousReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof previousReady === "function") previousReady();
      resolve(window.YT);
    };

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    script.onerror = () => reject(new Error(t("game.youtubeUnavailable")));
    document.head.append(script);
  });

  return youtubeApiPromise;
}

function onYouTubeStateChange(event) {
  if (event.data === window.YT.PlayerState.PLAYING && pendingClipSeconds) {
    const seconds = pendingClipSeconds;
    pendingClipSeconds = 0;
    startClipTimer(seconds);
    return;
  }

  if (event.data === window.YT.PlayerState.PLAYING && !clipPlaybackAuthorized) {
    try {
      mutePlayerForCue();
      player?.pauseVideo();
      player?.seekTo(clipStartSeconds, true);
    } catch {
      // Ignore unexpected playback races from cueing/preloading.
    }
  }
}

function onYouTubeError() {
  playClipButton.disabled = false;
  gameStatus.textContent = t("game.youtubeEmbedBlocked");
}

async function shareResult() {
  await navigator.clipboard.writeText(makeShareText());
  flashButton(shareButton, t("common.copied"), t("game.share"));
}

function makeShareText() {
  if (gameMode === "ten") {
    const marks = runResults.map((result) => result.solved ? result.points : 0).join("/");
    return [
      t("game.shareRunTitle", { group: activeGroup?.name || t("game.songsFallback") }),
      `${getTotalPoints()} pts`,
      marks
    ].join("\n");
  }

  const result = won ? `${SCORE_STEPS[attemptIndex]} pts` : "0 pts";
  const marks = getClipSteps().map((_, index) => {
    const guess = guesses[index];
    if (!guess) return "[ ]";
    if (guess.kind === "correct") return "[O]";
    if (guess.kind === "skip") return "[-]";
    return "[X]";
  }).join("");

  return [
    t("game.shareDailyTitle", { group: activeGroup?.name || t("game.songFallback"), date: getDailyKey() }),
    `${result} ${marks}`,
    answer.link
  ].join("\n");
}

function saveDailyState() {
  if (gameMode !== "daily" || !answer) return;
  try {
    localStorage.setItem(dailyStorageKey(), JSON.stringify({
      answerId: answer.id,
      clipStartMode,
      difficultyMode,
      clipStartSeconds,
      attemptIndex,
      guesses,
      gameOver,
      won
    }));
  } catch {
    // Local storage can be disabled.
  }
}

function readDailyState() {
  try {
    const raw = localStorage.getItem(dailyStorageKey());
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function dailyStorageKey() {
  return `${DAILY_STORAGE_PREFIX}${activeGroupId}:${clipStartMode}:${difficultyMode}:${getDailyKey()}`;
}

function getDailyIndex(length) {
  const day = Math.floor(Date.now() / 86_400_000);
  return (day + hashString(activeGroupId)) % length;
}

function getDailyKey() {
  return new Date().toISOString().slice(0, 10);
}

function sampleSongs(source, count) {
  const pool = [...source];
  for (let index = pool.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
  }
  return pool.slice(0, count);
}

function chooseClipStart(song) {
  if (clipStartMode !== "random") return 0;

  const duration = Number(song?.durationSeconds || 0);
  const steps = getClipSteps();
  const maxClip = steps[steps.length - 1];
  const maxStart = duration > maxClip + 20 ? Math.max(0, Math.floor(duration - maxClip - 4)) : 90;
  const minStart = maxStart > 20 ? 12 : 0;
  const span = Math.max(1, maxStart - minStart);

  if (gameMode === "daily" || setupMode === "daily") {
    return minStart + (hashString(`${activeGroupId}:${getDailyKey()}:${song?.videoId}`) % span);
  }

  return minStart + Math.floor(Math.random() * span);
}

function uniqueSongsByVideo(songList) {
  const seenVideos = new Set();
  const seenSongs = new Set();
  return songList.filter((song) => {
    if (!song?.videoId || seenVideos.has(song.videoId)) return false;
    const songKey = normalizeGuess(song.answer || `${song.artist || ""} ${song.title || ""}`);
    if (songKey && seenSongs.has(songKey)) return false;
    seenVideos.add(song.videoId);
    if (songKey) seenSongs.add(songKey);
    return true;
  });
}

function seededSampleSongs(source, count, seed) {
  const pool = [...source];
  let state = hashString(seed) || 1;
  for (let index = pool.length - 1; index > 0; index -= 1) {
    state = (state * 1664525 + 1013904223) >>> 0;
    const swapIndex = state % (index + 1);
    [pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
  }
  return pool.slice(0, count);
}

function chooseSeededClipStart(song, seed) {
  if (clipStartMode !== "random") return 0;
  const duration = Number(song?.durationSeconds || 0);
  const steps = getClipSteps();
  const maxClip = steps[steps.length - 1];
  const maxStart = duration > maxClip + 20 ? Math.max(0, Math.floor(duration - maxClip - 4)) : 90;
  const minStart = maxStart > 20 ? 12 : 0;
  return minStart + (hashString(`${seed}:${song?.videoId}`) % Math.max(1, maxStart - minStart));
}

function formatSeconds(value) {
  return `${value}s`;
}

function formatSongCount(value) {
  return `${Number(value) || 0} ${t("game.songsFallback")}`;
}

function formatTimestamp(value) {
  const total = Math.max(0, Math.floor(Number(value) || 0));
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function timedWatchLink(link, seconds) {
  if (!link || link === "#") return "#";
  try {
    const url = new URL(link, window.location.href);
    url.searchParams.set("t", `${Math.max(0, Math.floor(seconds || 0))}s`);
    return url.toString();
  } catch {
    return link;
  }
}

function normalizeGuess(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/\p{M}+/gu, "")
    .toLowerCase()
    .replace(/[ßẞ]/g, "ss")
    .replace(/[æÆ]/g, "ae")
    .replace(/[œŒ]/g, "oe")
    .replace(/[øØ]/g, "o")
    .replace(/[łŁ]/g, "l")
    .replace(/[đĐðÐ]/g, "d")
    .replace(/[þÞ]/g, "th")
    .replace(/\[[^\]]+\]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, "");
}

function clampNumber(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number)) return min;
  return Math.max(min, Math.min(max, number));
}

function hashString(value) {
  let hash = 0;
  for (const char of String(value)) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return hash;
}

function setGameBusy(value) {
  playClipButton.disabled = value;
  skipClipButton.disabled = value;
  guessInput.disabled = value;
  guessButton.disabled = value;
}

function setArtistCardsBusy(value) {
  groupButtons.querySelectorAll("button").forEach((button) => {
    button.disabled = value;
  });
  groupSetup.classList.toggle("is-loading", value);
}

function pulseInteraction(kind) {
  const className = `feedback-${kind}`;
  gamePlayArea.classList.remove("feedback-play", "feedback-correct", "feedback-wrong", "feedback-skip", "feedback-select");
  void gamePlayArea.offsetWidth;
  gamePlayArea.classList.add(className);
  setTimeout(() => gamePlayArea.classList.remove(className), 700);
}

function getGameSoundContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!gameSoundContext) gameSoundContext = new AudioContextClass();
  if (gameSoundContext.state === "suspended") void gameSoundContext.resume();
  return gameSoundContext;
}

function playFartSound() {
  const context = getGameSoundContext();
  if (!context) return;

  const now = context.currentTime;
  const duration = 0.46 + Math.random() * 0.14;
  const master = context.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.68, now + 0.035);
  master.gain.exponentialRampToValueAtTime(0.16, now + duration * 0.7);
  master.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  master.connect(context.destination);

  const lowTone = context.createOscillator();
  lowTone.type = "sawtooth";
  lowTone.frequency.setValueAtTime(58 + Math.random() * 22, now);
  lowTone.frequency.exponentialRampToValueAtTime(32 + Math.random() * 10, now + duration);

  const lowFilter = context.createBiquadFilter();
  lowFilter.type = "lowpass";
  lowFilter.frequency.setValueAtTime(185, now);
  lowFilter.frequency.exponentialRampToValueAtTime(95, now + duration);
  lowFilter.Q.setValueAtTime(2.4, now);
  lowTone.connect(lowFilter).connect(master);
  lowTone.start(now);
  lowTone.stop(now + duration);

  const noise = context.createBufferSource();
  const bufferSize = Math.floor(context.sampleRate * duration);
  const buffer = context.createBuffer(1, bufferSize, context.sampleRate);
  const data = buffer.getChannelData(0);
  for (let index = 0; index < bufferSize; index += 1) {
    const fade = 1 - index / bufferSize;
    const wobble = Math.sin(index * 0.045) * 0.25 + 0.75;
    data[index] = (Math.random() * 2 - 1) * fade * wobble;
  }
  noise.buffer = buffer;

  const noiseFilter = context.createBiquadFilter();
  noiseFilter.type = "bandpass";
  noiseFilter.frequency.setValueAtTime(85 + Math.random() * 35, now);
  noiseFilter.Q.setValueAtTime(0.8, now);

  const noiseGain = context.createGain();
  noiseGain.gain.setValueAtTime(0.0001, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.48, now + 0.025);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  noise.connect(noiseFilter).connect(noiseGain).connect(master);
  noise.start(now);
  noise.stop(now + duration);
}

function playPlayerJoinedSound() {
  const context = getGameSoundContext();
  if (!context) return;

  const now = context.currentTime;
  const master = context.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.2, now + 0.025);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);
  master.connect(context.destination);

  [523.25, 659.25, 783.99].forEach((frequency, index) => {
    const tone = context.createOscillator();
    const gain = context.createGain();
    const start = now + index * 0.11;
    tone.type = "square";
    tone.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.42, start + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.25);
    tone.connect(gain).connect(master);
    tone.start(start);
    tone.stop(start + 0.27);
  });
}

function playOtherPlayerCorrectSound(count = 1) {
  const context = getGameSoundContext();
  if (!context) return;

  const now = context.currentTime;
  const master = context.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.16, now + 0.02);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 0.85);
  master.connect(context.destination);

  const notes = [659.25, 783.99, 1046.5, 1318.51];
  notes.slice(0, Math.min(notes.length, 2 + count)).forEach((frequency, index) => {
    const tone = context.createOscillator();
    const gain = context.createGain();
    const start = now + index * 0.085;
    tone.type = index === notes.length - 1 ? "square" : "triangle";
    tone.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.5, start + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.22);
    tone.connect(gain).connect(master);
    tone.start(start);
    tone.stop(start + 0.24);
  });
}

function playMultiplayerNextSongSound() {
  const context = getGameSoundContext();
  if (!context) return;

  const now = context.currentTime;
  const master = context.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.22, now + 0.02);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);
  master.connect(context.destination);

  [392, 523.25, 659.25, 783.99].forEach((frequency, index) => {
    const tone = context.createOscillator();
    const gain = context.createGain();
    const start = now + index * 0.12;
    tone.type = index < 3 ? "square" : "triangle";
    tone.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.5, start + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.28);
    tone.connect(gain).connect(master);
    tone.start(start);
    tone.stop(start + 0.3);
  });
}

function playimpostorAlarmSound(eventType = "notice") {
  const context = getGameSoundContext();
  if (!context) return;

  const now = context.currentTime;
  const patterns = {
    start: { notes: [392, 523.25, 659.25, 783.99], type: "triangle", step: 0.11, volume: 0.2, duration: 0.9 },
    vote: { notes: [330, 247], type: "square", step: 0.07, volume: 0.12, duration: 0.34 },
    popup: { notes: [740, 880], type: "sine", step: 0.08, volume: 0.1, duration: 0.38 },
    tie: { notes: [392, 392, 370, 370], type: "sawtooth", step: 0.13, volume: 0.18, duration: 0.82 },
    eliminated: { notes: [880, 660, 440, 220], type: "sawtooth", step: 0.12, volume: 0.22, duration: 0.78 },
    "eliminated-crew": { notes: [659.25, 493.88, 392, 246.94], type: "sawtooth", step: 0.12, volume: 0.22, duration: 0.82 },
    "eliminated-impostor": { notes: [196, 293.66, 392, 587.33, 783.99], type: "triangle", step: 0.09, volume: 0.22, duration: 0.82 },
    "guess-fail": { notes: [523.25, 349.23, 196], type: "square", step: 0.12, volume: 0.2, duration: 0.72 },
    "guess-win": { notes: [523.25, 659.25, 783.99, 1046.5, 1318.51], type: "triangle", step: 0.09, volume: 0.22, duration: 0.88 },
    winner: { notes: [523.25, 659.25, 783.99, 1046.5, 1318.51, 1567.98], type: "triangle", step: 0.08, volume: 0.24, duration: 1.05 },
    loser: { notes: [392, 329.63, 261.63, 196, 146.83], type: "sawtooth", step: 0.12, volume: 0.2, duration: 0.95 },
    finished: { notes: [659.25, 783.99, 987.77, 1318.51], type: "triangle", step: 0.1, volume: 0.22, duration: 0.9 },
    notice: { notes: [880, 660, 880, 660], type: "sawtooth", step: 0.18, volume: 0.18, duration: 0.9 }
  };
  const pattern = patterns[eventType] || patterns.notice;
  const master = context.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(pattern.volume, now + 0.025);
  master.gain.exponentialRampToValueAtTime(0.0001, now + pattern.duration);
  master.connect(context.destination);

  pattern.notes.forEach((frequency, index) => {
    const start = now + index * pattern.step;
    const tone = context.createOscillator();
    const gain = context.createGain();
    tone.type = pattern.type;
    tone.frequency.setValueAtTime(frequency, start);
    tone.frequency.linearRampToValueAtTime(frequency * (eventType === "guess-win" ? 1.04 : 0.96), start + 0.12);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.5, start + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.18);
    tone.connect(gain).connect(master);
    tone.start(start);
    tone.stop(start + 0.2);
  });

  if (!["eliminated", "eliminated-crew", "eliminated-impostor", "guess-fail", "tie", "loser"].includes(eventType)) return;
  const pulse = context.createOscillator();
  const pulseGain = context.createGain();
  pulse.type = "triangle";
  pulse.frequency.setValueAtTime(eventType === "tie" ? 140 : eventType === "eliminated-impostor" ? 180 : 90, now);
  pulseGain.gain.setValueAtTime(0.0001, now);
  pulseGain.gain.exponentialRampToValueAtTime(0.16, now + 0.04);
  pulseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.78);
  pulse.connect(pulseGain).connect(master);
  pulse.start(now);
  pulse.stop(now + 0.82);
}

function playMultiplayerPodiumFanfare() {
  const context = getGameSoundContext();
  if (!context) return;

  const now = context.currentTime;
  const master = context.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.24, now + 0.04);
  master.gain.setValueAtTime(0.24, now + 1.25);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);
  master.connect(context.destination);

  const notes = [
    [523.25, 0, 0.3],
    [659.25, 0.22, 0.3],
    [783.99, 0.44, 0.42],
    [1046.5, 0.78, 0.95]
  ];

  notes.forEach(([frequency, offset, duration]) => {
    [-7, 0, 7].forEach((detune, voiceIndex) => {
      const tone = context.createOscillator();
      const filter = context.createBiquadFilter();
      const gain = context.createGain();
      const start = now + offset;
      const end = start + duration;

      tone.type = voiceIndex === 1 ? "sawtooth" : "square";
      tone.frequency.setValueAtTime(frequency, start);
      tone.detune.setValueAtTime(detune, start);
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(2200, start);
      filter.Q.setValueAtTime(4.5, start);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(voiceIndex === 1 ? 0.2 : 0.07, start + 0.025);
      gain.gain.setValueAtTime(voiceIndex === 1 ? 0.16 : 0.05, Math.max(start + 0.03, end - 0.09));
      gain.gain.exponentialRampToValueAtTime(0.0001, end);
      tone.connect(filter).connect(gain).connect(master);
      tone.start(start);
      tone.stop(end + 0.02);
    });
  });
}

function watchJob(id) {
  events = new EventSource(`/api/jobs/${id}/events`);
  events.onmessage = (event) => {
    const job = JSON.parse(event.data);
    renderJob(job);
    if (["complete", "partial", "failed"].includes(job.status)) {
      closeEvents();
      setGeneratorBusy(false);
    }
  };
  events.onerror = () => {
    jobMessage.textContent = t("generator.disconnected");
    closeEvents();
    setGeneratorBusy(false);
  };
}

function watchAudioJob(id) {
  audioEvents = new EventSource(`/api/audio/jobs/${id}/events`);
  audioEvents.onmessage = (event) => {
    const job = JSON.parse(event.data);
    renderAudioJob(job);
    if (["complete", "partial", "failed", "paused", "expired"].includes(job.status)) {
      closeAudioEvents();
      setAudioBusy(false);
    }
  };
  audioEvents.onerror = () => {
    audioMessage.textContent = t("generator.disconnected");
    closeAudioEvents();
    setAudioBusy(false);
  };
}

async function readJsonResponse(response) {
  const text = await response.text();
  if (!text) {
    throw new Error(t("error.backendMissing"));
  }

  try {
    return JSON.parse(text);
  } catch {
    throw new Error(t("error.nonJson"));
  }
}

function renderJob(job) {
  jobTitle.textContent = t("common.job", { id: job.id.slice(0, 8) });
  jobPercent.textContent = `${job.progress}%`;
  jobBar.style.width = `${job.progress}%`;
  jobBarLabel.textContent = `${job.progress}%`;
  jobBar.classList.toggle("is-active", ["queued", "running"].includes(job.status));
  jobMessage.textContent = job.message;
  currentCsv = job.csv || "";

  if (job.artifact) {
    downloadLink.hidden = false;
    downloadLink.href = job.artifact.url;
    downloadLink.textContent = t("common.download", { name: job.artifact.name });
    copyButton.hidden = false;
  } else {
    downloadLink.hidden = true;
    downloadLink.removeAttribute("href");
    copyButton.hidden = true;
  }

  items.replaceChildren(...(job.rows || []).map((row) => renderLinkRow(row.title, row.link)));
}

function renderConversion(payload) {
  convertedLinks = payload.rows.map((row) => row.link);
  converterTitleText.textContent = t("converter.to", {
    source: titleCase(payload.source),
    target: titleCase(payload.target)
  });
  converterCount.textContent = t("converter.links", { count: payload.rows.length });
  converterMessage.textContent = payload.message || t("converter.ready");
  setConverterProgress(100);
  converterBar.classList.remove("is-active");
  copyConvertedButton.hidden = !convertedLinks.length;
  convertedItems.replaceChildren(...payload.rows.map((row) => renderLinkRow(row.title, row.link, row.matchTitle)));
}

function renderAudioJob(job) {
  currentAudioJob = job;
  audioTitleText.textContent = job.name || (job.id ? t("common.job", { id: job.id.slice(0, 8) }) : t("audio.audioJob"));
  audioMessage.textContent = job.message || t("audio.processing");
  setAudioProgress(job.progress || 0);
  audioBar.classList.toggle("is-active", ["queued", "running"].includes(job.status));
  if (job.status === "paused") {
    audioExpiry.textContent = t("audio.paused");
    stopAudioExpiryTimer();
  } else {
    updateAudioExpiry(job);
  }

  const readyItems = (job.items || []).filter((item) => item.status === "complete");
  const canDownloadZip = Boolean(job.artifact) || (["queued", "running", "paused"].includes(job.status) && readyItems.length > 0);
  if (canDownloadZip) {
    audioDownloadLink.hidden = false;
    audioDownloadLink.href = job.artifact?.url || `/api/audio/jobs/${job.id}/download`;
    audioDownloadLink.textContent = t("common.download", { name: job.artifact?.name || t("audio.zip") });
  } else {
    audioDownloadLink.hidden = true;
    audioDownloadLink.removeAttribute("href");
  }

  const hasFailed = (job.items || []).some((item) => item.status === "failed");
  const hasPaused = (job.items || []).some((item) => item.status === "paused");
  retryAudioButton.hidden = !hasFailed || ["queued", "running"].includes(job.status);
  retryAudioButton.disabled = ["queued", "running"].includes(job.status);
  resumeAudioButton.hidden = !hasPaused || ["queued", "running"].includes(job.status);
  resumeAudioButton.disabled = ["queued", "running"].includes(job.status);

  audioItems.replaceChildren(...(job.items || []).map(renderAudioItem));
  if (job.expiresAt && !audioExpiryTimer && ["complete", "partial"].includes(job.status)) {
    audioExpiryTimer = setInterval(() => updateAudioExpiry(currentAudioJob), 1000);
  }
}

function renderAudioItem(item) {
  const row = document.createElement("article");
  row.className = "item audio-item";

  const source = document.createElement("div");
  source.className = "source";
  const strong = document.createElement("strong");
  strong.textContent = item.title || t("audio.video", { count: item.index + 1 });
  source.append(strong);
  if (item.fileName) {
    const small = document.createElement("small");
    small.textContent = item.fileName;
    source.append(small);
  }

  const links = document.createElement("div");
  links.className = "links";
  const anchor = document.createElement("a");
  anchor.href = item.url;
  anchor.target = "_blank";
  anchor.rel = "noreferrer";
  anchor.textContent = item.url;
  links.append(anchor);

  const status = document.createElement("div");
  status.className = "audio-status-cell";
  const pill = document.createElement("span");
  pill.className = `status-pill ${item.status}`;
  pill.textContent = item.message || translatedStatus(item.status);

  const progress = document.createElement("div");
  progress.className = "mini-progress";
  const progressBar = document.createElement("span");
  progressBar.style.width = `${item.progress || 0}%`;
  const progressText = document.createElement("strong");
  progressText.textContent = `${item.progress || 0}%`;
  progress.append(progressBar, progressText);
  status.append(pill, progress);

  const download = document.createElement("div");
  download.className = "copy-cell";
  if (item.downloadUrl) {
    const anchor = document.createElement("a");
    anchor.className = "download small-download";
    anchor.href = item.downloadUrl;
    anchor.textContent = "MP3";
    download.append(anchor);
  } else {
    const waiting = document.createElement("span");
    waiting.className = "muted-cell";
    waiting.textContent = "-";
    download.append(waiting);
  }

  row.append(source, links, status, download);
  return row;
}

function updateAudioExpiry(job) {
  if (!job?.expiresAt) {
    audioExpiry.textContent = "";
    stopAudioExpiryTimer();
    return;
  }

  const remaining = Date.parse(job.expiresAt) - Date.now();
  if (remaining <= 0) {
    audioExpiry.textContent = t("audio.expired");
    stopAudioExpiryTimer();
    if (currentAudioJob && currentAudioJob.status !== "expired") {
      currentAudioJob = {
        ...currentAudioJob,
        status: "expired",
        message: t("audio.filesExpired"),
        artifact: null,
        items: currentAudioJob.items.map((item) =>
          item.status === "complete"
            ? { ...item, status: "expired", message: t("audio.expiredShort"), downloadUrl: null }
            : item
        )
      };
      renderAudioJob(currentAudioJob);
    }
    return;
  }

  audioExpiry.textContent = t("audio.expiresIn", { time: formatDuration(remaining) });
}

function stopAudioExpiryTimer() {
  if (audioExpiryTimer) clearInterval(audioExpiryTimer);
  audioExpiryTimer = null;
}

function renderLinkRow(title, link, subtitle = "") {
  const row = document.createElement("article");
  row.className = "item";

  const source = document.createElement("div");
  source.className = "source";
  const strong = document.createElement("strong");
  strong.textContent = title || t("link.untitled");
  source.append(strong);
  if (subtitle && subtitle !== title) {
    const small = document.createElement("small");
    small.textContent = subtitle;
    source.append(small);
  }

  const links = document.createElement("div");
  links.className = "links";
  const anchor = document.createElement("a");
  anchor.href = link;
  anchor.target = "_blank";
  anchor.rel = "noreferrer";
  anchor.textContent = link;
  links.append(anchor);

  const copy = document.createElement("div");
  copy.className = "copy-cell";
  const button = document.createElement("button");
  button.type = "button";
  button.className = "secondary copy-link";
  button.dataset.link = link;
  button.textContent = t("common.copy");
  copy.append(button);

  row.append(source, links, copy);
  return row;
}

function renderEmpty() {
  jobTitle.textContent = t("generator.noJob");
  jobPercent.textContent = "0%";
  jobBar.style.width = "0%";
  jobBarLabel.textContent = "0%";
  jobBar.classList.remove("is-active");
  jobMessage.textContent = t("generator.waiting");
  downloadLink.hidden = true;
  downloadLink.removeAttribute("href");
  copyButton.hidden = true;
  currentCsv = "";
  items.replaceChildren();
  setGeneratorBusy(false);
}

function renderEmptyConversion() {
  converterTitleText.textContent = t("converter.noConversion");
  converterCount.textContent = t("converter.links", { count: 0 });
  converterMessage.textContent = t("converter.waiting");
  setConverterProgress(0);
  converterBar.classList.remove("is-active");
  copyConvertedButton.hidden = true;
  convertedLinks = [];
  convertedItems.replaceChildren();
  setConverterBusy(false);
}

function renderEmptyAudio() {
  currentAudioJob = null;
  audioTitleText.textContent = t("audio.noAudio");
  audioMessage.textContent = t("audio.waiting");
  audioExpiry.textContent = "";
  audioDownloadLink.hidden = true;
  audioDownloadLink.removeAttribute("href");
  retryAudioButton.hidden = true;
  retryAudioButton.disabled = false;
  resumeAudioButton.hidden = true;
  resumeAudioButton.disabled = false;
  setAudioProgress(0);
  audioBar.classList.remove("is-active");
  audioItems.replaceChildren();
  setAudioBusy(false);
}

async function copyLinkFromButton(event) {
  const button = event.target.closest(".copy-link");
  if (!button) return;
  await navigator.clipboard.writeText(button.dataset.link || "");
  flashButton(button, t("common.copied"), t("common.copy"));
}

function closeEvents() {
  if (events) events.close();
  events = null;
}

function closeAudioEvents() {
  if (audioEvents) audioEvents.close();
  audioEvents = null;
}

function setGeneratorBusy(value) {
  submitButton.disabled = value;
  submitButton.querySelector("span").textContent = value ? "..." : ">";
  if (value && jobBar.style.width === "0%") {
    jobBar.style.width = "12%";
    jobBarLabel.textContent = "12%";
    jobPercent.textContent = "12%";
  }
  jobBar.classList.toggle("is-active", value);
}

function setConverterBusy(value) {
  convertButton.disabled = value;
  convertButton.querySelector("span").textContent = value ? "..." : ">";
  if (value) setConverterProgress(68);
  converterBar.classList.toggle("is-active", value);
}

function setAudioBusy(value) {
  audioButton.disabled = value;
  audioConcurrency.disabled = value;
  audioButton.querySelector("span").textContent = value ? "..." : ">";
  if (value && audioBar.style.width === "0%") setAudioProgress(8);
  audioBar.classList.toggle("is-active", value);
}

function setConverterProgress(value) {
  const percent = `${value}%`;
  converterBar.style.width = percent;
  converterBarLabel.textContent = percent;
}

function setAudioProgress(value) {
  const percent = `${value}%`;
  audioBar.style.width = percent;
  audioBarLabel.textContent = percent;
  audioPercent.textContent = percent;
}

function flashButton(button, text, restore) {
  button.textContent = text;
  setTimeout(() => {
    button.textContent = restore;
  }, 1200);
}

function titleCase(value) {
  return String(value || "").replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatDateTime(value) {
  return new Date(value).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function formatDuration(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

renderEmpty();
renderEmptyConversion();
renderEmptyAudio();
updateViewportChromeVars();
showChallengeSetup();
applyInviteRoomFromUrl();
applyimpostorRoomFromUrl();
applyResistanceRoomFromUrl();
applyMasterWordRoomFromUrl();
applyScoreboardRoomFromUrl();
setGameBusy(true);
loadSongGroups();
