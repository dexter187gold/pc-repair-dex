# PC REPAIR DEX

Public website for **PC REPAIR DEX** — modern IT support & PC repair (remote · on-site · COD quotes).

Linked product: [SAID](https://github.com/dexter187gold/said).

## Deploy: Cloudflare Pages (recommended)

Static site — no server required. Fast CDN, free SSL, GitHub integration.

1. Push this repo to GitHub (`pc-repair-dex` or `pegasus`).
2. Cloudflare → **Workers & Pages** → **Create** → connect the repo.
3. **Build command:** leave empty (or `echo static`)
4. **Output directory:** `dist`
5. Deploy.

Or upload the `dist/` folder with Wrangler:

```bash
npx wrangler pages deploy dist --project-name=pc-repair-dex
```

### Why not WordPress / Render for this site?

| Platform | Fit |
|----------|-----|
| **Cloudflare Pages** | Best for this marketing site (static, global, free) |
| **Render** | Better for **SAID** backend (Node API) |
| **WordPress** | Heavier; not needed for a 2026 brochure + WhatsApp funnel |

## Configure

Edit `dist/index.html` — set `const WA = '27XXXXXXXXX'` to your WhatsApp number.

## Source

- `dist/` — production static files (serve this)
- `src/` — optional Vite/React source if you extend later
- Design: dark tech 2026, hourly/flat/ad-hoc pricing, SAID link-in
