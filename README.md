# ROULOGAMES

Browser party-game collection, including:

- MANGOless game
- Impostor GAME
- La resistencia
- Hombres Lobo (automatic narrator)
- Palabra maestra
- Sincronía (2-6 players, cooperative, one device each)
- Shared scoreboard

## Development

```powershell
npm install
npm run dev
npm test
```

Sincronía needs one browser per player: each device only ever receives its own
hand. Open a second private window (or `?mind=<room>` on a phone) to try it.

For single-browser Hombres Lobo QA, enable **Solo test mode** while creating a room. It adds six virtual players, enables Hunter testing, supports player-card viewpoint switching, auto-follows pending actors, and exposes host phase controls.

## Cloudflare Pages

```powershell
npm run cloudflare:pages:build
```

Use `public` as the build output directory. See `CLOUDFLARE_DEPLOY.md` for D1 setup and deploy notes.
