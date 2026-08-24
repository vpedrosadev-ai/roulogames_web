# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```powershell
npm install
npm run dev                      # Node dev server (server.js) on http://127.0.0.1:3025, PORT env overrides
npm test                         # node --test over tests/**/*.test.js (~50s: one suite boots a real server)
npm run cloudflare:dev           # wrangler dev against worker.js + D1
npm run cloudflare:pages:build   # copies worker.js -> public/_worker.js plus the shared engines
npm run cloudflare:deploy        # wrangler deploy
```

Run a single file with `node --test tests/mind-engine.test.js`, a single case with `--test-name-pattern`.

`tests/` covers the Sincronía rules engine (`mind-engine.test.js`, pure functions) and the HTTP layer (`mind-api.test.js`, which spawns `server.js` on port 3099 and plays a full 12-level game). Nothing else in the repo has tests, there is no linter, and there is no build step for the frontend — `public/` is served as-is. For everything else verification is manual: run `npm run dev` and exercise the game in the browser. For Hombres Lobo, enable **Solo test mode** when creating a room (adds virtual bot players, host phase controls, and player-viewpoint switching so one browser can drive a full game).

## Architecture

### Two parallel backends implementing the same API

The same HTTP API is implemented **twice**, and both must be edited together:

| | `server.js` (~5.7k lines) | `worker.js` (~4.7k lines) |
|---|---|---|
| Runtime | Node 20+, `node:http` | Cloudflare Worker (`export default { fetch }`) |
| Room state | in-memory `Map` per game (`wolfRooms`, `impostorRooms`, …) | D1 table `multiplayer_rooms`, one JSON blob per room |
| Leaderboard | `storage/leaderboard.json` | D1 table `leaderboard_scores` |
| Static files | `serveStatic()` from `public/` | `env.ASSETS.fetch(request)` |
| Audio downloader | yt-dlp + FFmpeg subprocesses, SSE progress | `unsupportedAudioDownload()` → 501 |

Both files open with a long chain of `if (method && pathname)` route checks followed by regex matches for `/api/<game>/rooms/:name/:action`. **When you add or change an endpoint or game rule, mirror it in both files** — the route lists, the normalizers, and the response shapes are duplicated almost line for line. Diffing the two route blocks is the fastest way to spot drift.

`wolf-engine.js` and `mind-engine.js` are the exceptions: shared, runtime-agnostic rules engines (Hombres Lobo; Sincronía) imported by both backends, which only wrap them with persistence + auth. **New game logic belongs in a shared module like these, not duplicated a third time.** Both are copied into `public/` by `scripts/build-pages.js` — anything `worker.js` imports must be added there or the Pages deploy breaks at runtime.

### D1 storage model (`worker.js`)

All room types share the single `multiplayer_rooms(room_key, state_json, updated_at)` table, namespaced by key prefix:

- MANGOless multiplayer: bare key, no prefix (`listActiveGameRooms` selects `room_key NOT LIKE '%:%'`)
- `impostor:`, `resistance:`, `masterword:`, `wolf:`, `mind:`, `scoreboard:` — see the `*StorageKey()` helpers

Writes use **optimistic concurrency**: read the row with its `updated_at` as `_version`, `UPDATE … WHERE updated_at = ?`, and retry on zero `meta.changes`. Two retry styles exist — `mutateWolfRoomWorker()` / `mutateMindRoomWorker()` re-run the whole mutation against fresh state (preferred for new code; this is also what serializes simultaneous plays), while `saveMultiplayerRoom()`/`saveScoreboardRoom()` reload and run a game-specific `merge*Rooms()` function to reconcile. `_version` and `_removedPlayerIds` are stripped before serializing.

`getMindRoomWorker()` deliberately breaks the pattern for reads: polling is by far the most frequent request, so it loads the row without writing and only pays a CAS write when a timed phase actually fired or the player's `lastSeen` heartbeat is older than `MIND_HEARTBEAT_MS`. Copying the unconditional write-on-every-poll used by the older games would burn D1's write quota (four players at a 700 ms poll is ~20k writes/hour).

The Node server has no equivalent concurrency problem (single process, shared Maps), so this whole layer exists only on the worker side.

### Game session model

Every game follows the same client/server contract:

1. `POST /api/<game>/rooms` creates a room; the creator becomes host.
2. `POST /api/<game>/rooms/:name/join` returns `{ playerId, token }`.
3. All later calls authenticate with that pair (`authenticate*Player`) and refresh `lastSeen` via `touch*Room`; host-only actions check `hostId`.
4. The client **polls** `GET /api/<game>/rooms/:name?playerId=…&token=…` every 1.2–2.5s (see the `*PollTimer` intervals in `app.js`). There are no WebSockets. SSE exists only for the Node-only CSV/audio jobs.
5. `*RoomResponse(room, privatePlayer)` decides what each player is allowed to see — secret roles, the impostor word, wolf identities are filtered per-viewer here. **Never return the raw room object.**

Time-based phases (wolf nights, narration windows) advance lazily: `advanceWolfTimedPhases(room)` is called at the top of every read and mutation rather than from a timer, so an idle room only moves forward when someone polls it.

Room "aliveness" for the public directory is derived from host `lastSeen` (`is*HostConnected`) plus a joinability check — rooms are not explicitly closed.

### Frontend (`public/`)

A single static page. `index.html` holds every screen as a `<section class="view">`; `app.js` (~11.6k lines, one module, no bundler) queries all elements up front and swaps views with `showView(targetId)`, which also leaves the room of the outgoing game and toggles a `<body>` class per game (`wolf-active`, `scoreboard-active`, …) that `styles.css` keys off. Each game occupies a contiguous region of `app.js` with a consistent naming prefix (`wolf*`, `impostor*`, `resistance*`, `masterWord*`, `scoreboard*`, `multiplayer*`).

**Sincronía is the exception and the pattern to follow for new games.** It lives in `public/mind/` (`mind.js` controller, `mind-api.js`, `mind-render.js`, `mind-i18n.js`, `mind.css`) and `app.js` only creates the controller and calls `enterView()` / `leaveView()` / `applyLanguage()` / `applyRoomFromUrl()` on it. Note that `navLinks` / `homeMenuCards` / `views` are **static NodeLists** captured at module load, so a new game's nav button, home card, and `<section class="view">` must be present in `index.html` — creating them from JS leaves them out of those collections.

`.home-menu-grid` is a **6-column** grid where every card declares its own `grid-column: span N` (all the game cards use `span 3`). A new card without that rule silently falls back to `span 1` and renders at a third of the width of its neighbours. The Sincronía rule lives in `mind.css` and is deliberately *not* scoped under `body.mind-active`, since the home page is shown before that class is set.

Two CSS gotchas in `public/mind/mind.css` worth repeating for any new game stylesheet: a `display` declared on a class beats the browser's `[hidden] { display: none }`, so containers toggled via the `hidden` property need `:not([hidden])` on their display rule; and a sticky panel needs an **opaque** background, since the shared panel token is translucent and lets scrolled content show through.

Sessions survive reloads via `localStorage` (e.g. `WOLF_SESSION_STORAGE_KEY`), and `?wolf=<room>` in the URL auto-joins an invited player.

**i18n:** `TRANSLATIONS` in `app.js` covers `ca` / `es` / `en` (default `es`). There are **no `data-i18n` attributes** — `applyLanguage()` walks hardcoded `STATIC_TEXT_TARGETS` / `STATIC_BUTTON_TARGETS` / `STATIC_ATTR_TARGETS` arrays of `[selector, key]` pairs. New user-facing text needs an entry in all three language maps *and* a selector row in the right target list.

Sincronía keeps its own `MIND_TRANSLATIONS` in `public/mind/mind-i18n.js` instead, so the game is self-contained; `applyLanguage()` in `app.js` just calls `mindController.applyLanguage()`. Its server never sends prose — `lastEvent.type` carries a code (`mistake`, `star-used`, `level-complete`, …) that the client translates, which is why changing language mid-game re-renders without touching state.

**Audio:** UI feedback sounds live in `public/audio/`. The Hombres Lobo narration (`public/audio/wolf/*.wav`) is **pre-generated**, not synthesized at runtime — `scripts/generate-wolf-audio.ps1` drives the Windows SAPI Spanish voice and requires a Spanish voice installed. Regenerate it if you add a narrated phase.

### Song data (MANGOless game)

`SONG_GROUPS` (duplicated in both backends) defines the categories. `getSongGroupPayload()` resolves songs through a fallback chain: `LOCKED_SONG_SNAPSHOTS` (hardcoded, wins immediately) → in-memory cache → YouTube Data API (needs `YOUTUBE_API_KEY`) → scraped channel/playlist page → `group.fallbackSongs`. A locked snapshot means API changes cannot break that category, so prefer adding one over relying on the network.

## Environment

Node server (`.env` / shell): `PORT`, `YOUTUBE_API_KEY`, `YOUTUBE_SEARCH_API=1` (gates the search API), `SPOTIFY_CLIENT_ID`/`SPOTIFY_CLIENT_SECRET` (Spotify playlist import), `YTDLP_BIN`, `FFMPEG_DIR`/`FFMPEG_BIN`, `AUDIO_*_TTL_MINUTES`. Worker: `YOUTUBE_SEARCH_API` var in `wrangler.jsonc`, `LEADERBOARD_DB` D1 binding.

`CLOUDFLARE_DEPLOY.md` references `migrations/0001_leaderboard.sql` and `0002_multiplayer.sql`, but **the `migrations/` directory does not exist in this repo** — the deployed D1 database (`music-tools-leaderboard`, id in `wrangler.jsonc`) already has the schema. A fresh database needs those tables created by hand: `leaderboard_scores(run_id, config_key, player_name, score, created_at)` and `multiplayer_rooms(room_key, state_json, updated_at)`.

## Conventions

- ESM everywhere (`"type": "module"`), no dependencies at runtime — `wrangler` is the only devDependency.
- Zero-dependency, framework-free by design; keep it that way.
- Function names for the Impostor game use a lowercase `impostor` mid-identifier (`createimpostorRoom`, `voteimpostorPlayer`, `impostor_WORD_SETS`). It looks like a typo but is consistent across all three files — match it rather than "fixing" one call site.
- All input from clients goes through a `normalize*` function that clamps lengths and coerces types before touching state.
- User-facing strings are Spanish in the wolf and mind code paths and English in the older ones; follow whatever the surrounding game uses.
- Sincronía's card values are server-only. `mindRoomResponse()` returns other players' `cardCount` but never their `hand`, and hands stay hidden even after the game ends. Any change there needs the privacy tests in `tests/` to still pass.
- Sincronía's `/play` accepts an `actionId` and replays are idempotent (the room keeps the last 40 in `recentActions`). Play validity is checked against the hand — the card must still be present and still be the lowest — rather than against a client-supplied revision, so a legitimate fast follow-up play is never rejected while a stale request for an already-discarded card is.
