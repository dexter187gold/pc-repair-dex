# PC REPAIR DEX (website)

Public multi-page site for **PC REPAIR DEX**.

- WhatsApp: **068 484 0123**
- Email: **pcrepairdex@gmail.com**
- Mythos roadmap: **website pages only** — see `docs/MYTHOS_WEBSITE_ROADMAP.md`
- **Not** an invoicing app (that stays in [SAID](https://github.com/dexter187gold/said))

## Pages

Home · Services · Pricing · Process · About · FAQ · Book · Roadmap · Contact

## Deploy (Cloudflare)

- Build: `npm run build` or `bun run build`
- Output: `dist`
- SPA: `wrangler.jsonc` → `assets.not_found_handling: single-page-application`
- **Do not** add `/* /index.html` in `_redirects` (causes infinite loop)

## Local

```bash
npm install
npm run dev
```
