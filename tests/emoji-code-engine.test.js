import assert from "node:assert/strict";
import {
  EmojiCodeError,
  advanceEmojiCodeTurn,
  createEmojiCodeRoom,
  emojiCodeRoomResponse,
  joinEmojiCodeRoom,
  resolveEmojiCodeTestViewPlayer,
  submitEmojiCode,
  submitEmojiCodeGuess,
  submitEmojiCodeTitle
} from "../emoji-code-engine.js";

const room = createEmojiCodeRoom({ roomName: "Cine", playerName: "Ana", emoji: "😎", playerLimit: 3, rounds: 2 });
const ana = room.players[0];
const bea = joinEmojiCodeRoom(room, { playerName: "Bea", emoji: "🦊" });
assert.equal(room.status, "lobby");
const carlos = joinEmojiCodeRoom(room, { playerName: "Carlos", emoji: "🤖" });

assert.equal(room.status, "playing");
assert.equal(room.guesserId, ana.id);
assert.equal(room.leaderId, bea.id);
assert.equal(room.phase, "leader");
submitEmojiCodeTitle(room, bea, "Titanic", "🚢🧊💔");
assert.equal(emojiCodeRoomResponse(room, ana).movieTitle, "");
assert.equal(emojiCodeRoomResponse(room, carlos).movieTitle, "Titanic");

assert.throws(() => submitEmojiCode(room, ana, "🚢🧊"), EmojiCodeError);
assert.throws(() => submitEmojiCode(room, carlos, "barco 🧊"), /solo puede contener emojis/i);
assert.equal(room.phase, "team_codes");
assert.deepEqual(emojiCodeRoomResponse(room, ana).codes, []);
submitEmojiCode(room, carlos, "🛳️🌊🥶");
assert.equal(room.phase, "guessing");
assert.equal(emojiCodeRoomResponse(room, ana).codes.length, 2);

submitEmojiCodeGuess(room, ana, "Avatar");
assert.equal(room.phase, "guessing");
assert.equal(emojiCodeRoomResponse(room, ana).guessesRemaining, 2);
assert.deepEqual(emojiCodeRoomResponse(room, carlos).guesses, [{ text: "Avatar", correct: false }]);
submitEmojiCodeGuess(room, ana, "Títánic!");
assert.equal(room.phase, "result");
assert.equal(ana.score, 7);
assert.equal(bea.score, 2);
assert.equal(carlos.score, 2);

advanceEmojiCodeTurn(room, ana);
assert.equal(room.guesserId, bea.id);
assert.equal(room.leaderId, carlos.id);
assert.equal(emojiCodeRoomResponse(room, bea).roundNumber, 1);
assert.equal(emojiCodeRoomResponse(room, bea).turnInRound, 2);

const duel = createEmojiCodeRoom({ roomName: "Duo", playerName: "Uno", emoji: "🐼", playerLimit: 2, rounds: 1 });
const one = duel.players[0];
const two = joinEmojiCodeRoom(duel, { playerName: "Dos", emoji: "🐸" });
assert.equal(duel.guesserId, one.id);
assert.equal(duel.leaderId, two.id);
submitEmojiCodeTitle(duel, two, "Up", "🎈🏠☁️");
assert.equal(duel.phase, "guessing");
submitEmojiCodeGuess(duel, one, "Up");
advanceEmojiCodeTurn(duel, one);
assert.equal(duel.guesserId, two.id);
assert.equal(duel.leaderId, one.id);

const botRoom = createEmojiCodeRoom({ roomName: "Bots", playerName: "Tester", emoji: "🧪", rounds: 3, testMode: true, botCount: 3 });
assert.equal(botRoom.players.length, 4);
assert.equal(botRoom.status, "playing");
assert.equal(botRoom.phase, "guessing");
assert.equal(botRoom.codes[botRoom.leaderId], "🚢🧊💔");
assert.equal(emojiCodeRoomResponse(botRoom, botRoom.players[0]).testMode, true);
const botViewer = resolveEmojiCodeTestViewPlayer(botRoom, botRoom.players[0], botRoom.players[1].id);
const botViewResponse = emojiCodeRoomResponse(botRoom, botViewer, botRoom.players[0]);
assert.equal(botViewResponse.player.id, botRoom.players[1].id);
assert.equal(botViewResponse.player.token, botRoom.players[0].token);
assert.equal(botViewResponse.player.isHost, true);
assert.equal(botViewResponse.player.viewingAs, true);
assert.equal(botViewResponse.test.viewPlayerId, botRoom.players[1].id);
assert.equal(resolveEmojiCodeTestViewPlayer(botRoom, botRoom.players[1], botRoom.players[0].id), botRoom.players[1]);

console.log("EMOJI_CODE_ENGINE_OK");
