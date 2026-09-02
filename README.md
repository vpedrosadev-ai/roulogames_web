# ROULOGAMES

Browser party-game collection, including:

- MANGOless game
- Impostor GAME
- La resistencia
- Hombres Lobo (automatic narrator)
- Palabra maestra
- Duelo de Palabras (Wordle multijugador simultáneo)
- Shared scoreboard

## Development

```powershell
npm install
npm run dev
```

For single-browser Hombres Lobo QA, enable **Solo test mode** while creating a room. It adds six virtual players, enables Hunter testing, supports player-card viewpoint switching, auto-follows pending actors, and exposes host phase controls.

## Cloudflare Pages

```powershell
npm run cloudflare:pages:build
```

Use `public` as the build output directory. See `CLOUDFLARE_DEPLOY.md` for D1 setup and deploy notes.
