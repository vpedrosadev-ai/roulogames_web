import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const html = await readFile(new URL("../public/index.html", import.meta.url), "utf8");
const script = await readFile(new URL("../public/emoji-code.js", import.meta.url), "utf8");
const styles = await readFile(new URL("../public/emoji-code.css", import.meta.url), "utf8");

const ids = [...script.matchAll(/\$\("#([A-Za-z0-9_-]+)"\)/g)].map((match) => match[1]);
for (const id of new Set(ids)) assert.match(html, new RegExp(`id=["']${id}["']`), `Missing #${id} in index.html`);

assert.match(html, /data-view-target="emojiCodeView"/);
assert.match(html, /id="emojiCodeCreateRounds"[^>]*value="3"/);
assert.match(html, /id="emojiCodeCreatePlayerLimit"[^>]*min="2"[^>]*max="10"/);
assert.match(html, /id="emojiCodeCreateTestMode"/);
assert.match(html, /id="emojiCodeCreateBotCount"[^>]*min="1"[^>]*max="9"/);
assert.match(html, /id="emojiCodeLeaderCodeInput"[^>]*maxlength="64"/);
assert.match(html, /id="emojiCodeCodeInput"[^>]*maxlength="64"/);
assert.match(html, /id="emojiCodeGuessHistoryPanel"[^>]*hidden/);
assert.match(html, /\/emoji-code\.css/);
assert.match(html, /\/emoji-code\.js/);
assert.match(styles, /@media \(max-width: 760px\)/);
assert.match(styles, /grid-template-columns:\s*minmax\(108px, 35vw\)\s+minmax\(0, 1fr\)/);
assert.match(styles, /\.emoji-code-view \[hidden\]\s*\{\s*display:\s*none\s*!important/);
assert.match(styles, /\.emoji-code-home-card,\s*\.word-duel-home-card\s*\{[^}]*grid-column:\s*span 3/s);
assert.match(script, /viewPlayerId/);
assert.match(script, /asPlayerId/);
assert.match(script, /selectTestView/);
assert.match(script, /failedGuesses/);
assert.match(script, /emojiCodeGuessHistoryPanel/);

console.log("EMOJI_CODE_UI_CONTRACT_OK");
