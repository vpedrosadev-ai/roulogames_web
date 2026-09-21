import assert from "node:assert/strict";
import {
  EmojiCodeError,
  advanceEmojiCodeTurn,
  createEmojiCodeRoom,
  emojiCodeRoomResponse,
  joinEmojiCodeRoom,
  startEmojiCodeGame,
  submitEmojiCode,
  submitEmojiCodeGuess,
  submitEmojiCodeTitle
} from "../emoji-code-engine.js";

const room = createEmojiCodeRoom({ roomName: "Cine", playerName: "Ana", emoji: "😎", playerLimit: 3, rounds: 2 });
const ana = room.players[0];
const bea = joinEmojiCodeRoom(room, { playerName: "Bea", emoji: "🦊" });
const carlos = joinEmojiCodeRoom(room, { playerName: "Carlos", emoji: "🤖" });
startEmojiCodeGame(room, ana);

assert.equal(room.guesserId, ana.id);
assert.equal(room.leaderId, bea.id);
assert.equal(room.phase, "title");
submitEmojiCodeTitle(room, bea, "Titanic");
assert.equal(emojiCodeRoomResponse(room, ana).movieTitle, "");
assert.equal(emojiCodeRoomResponse(room, carlos).movieTitle, "Titanic");

assert.throws(() => submitEmojiCode(room, ana, "🚢🧊"), EmojiCodeError);
assert.throws(() => submitEmojiCode(room, bea, "barco 🧊"), /solo puede contener emojis/i);
submitEmojiCode(room, bea, "🚢🧊💔");
assert.equal(room.phase, "codes");
assert.deepEqual(emojiCodeRoomResponse(room, ana).codes, []);
submitEmojiCode(room, carlos, "🛳️🌊🥶");
assert.equal(room.phase, "guessing");
assert.equal(emojiCodeRoomResponse(room, ana).codes.length, 2);

submitEmojiCodeGuess(room, ana, "Avatar");
assert.equal(room.phase, "guessing");
assert.equal(emojiCodeRoomResponse(room, ana).guessesRemaining, 2);
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
startEmojiCodeGame(duel, one);
assert.equal(duel.guesserId, one.id);
assert.equal(duel.leaderId, two.id);
submitEmojiCodeTitle(duel, two, "Up");
submitEmojiCode(duel, two, "🎈🏠☁️");
submitEmojiCodeGuess(duel, one, "Up");
advanceEmojiCodeTurn(duel, one);
assert.equal(duel.guesserId, two.id);
assert.equal(duel.leaderId, one.id);

console.log("EMOJI_CODE_ENGINE_OK");
