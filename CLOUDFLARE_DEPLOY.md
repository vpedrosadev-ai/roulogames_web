# Cloudflare Pages: ROULOGAMES

ROULOGAMES is a static Pages app with a bundled Worker backend for MANGOless game and Impostor GAME.

## Build Settings

Use these Cloudflare Pages settings:

```text
Framework preset: None
Build command: npm run cloudflare:pages:build
Build output directory: public
```

The build command copies:

```text 
worker.js -> public/_worker.js
```

## D1 Storage

Rooms, multiplayer state, and leaderboard data use the `LEADERBOARD_DB` D1 binding.

The current `wrangler.jsonc` keeps the existing D1 database ID so the migrated app can run without losing state. To create a fresh ROULOGAMES database instead:

```powershell
npx wrangler d1 create roulogames-leaderboard
npx wrangler d1 execute roulogames-leaderboard --remote --file migrations/0001_leaderboard.sql
npx wrangler d1 execute roulogames-leaderboard --remote --file migrations/0002_multiplayer.sql
```

Then replace `database_name` and `database_id` in `wrangler.jsonc`.

## Deploy

After connecting the GitHub repo to Cloudflare Pages, deploy with the settings above. A successful build log includes:

```text
Cloudflare Pages build ready: public/_worker.js created
```

## Local Run

```powershell
npm install
npm run dev
```

Open the local URL printed by the server.
