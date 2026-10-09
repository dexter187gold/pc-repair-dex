# PC REPAIR DEX — Professional website

Premium multi-page marketing site for **PC REPAIR DEX**.

**Contact:** WhatsApp [068 484 0123](https://wa.me/27684840123) · [pcrepairdex@gmail.com](mailto:pcrepairdex@gmail.com)

## Pages

Home · Services · Pricing · How it works · About · Reviews · FAQ · Book · Contact

## Design system

- Dark technical 2026 UI (Instrument Sans + JetBrains Mono)
- Sticky nav + mobile drawer
- Trust strip, stats, terminal panel, pricing cards, timeline, testimonials, FAQ accordion
- Repeated CTA bands, multi-column footer
- SEO meta, skip link, focus states
- Cloudflare SPA via `wrangler.jsonc` (no broken `_redirects`)

## Deploy (Cloudflare)

```text
Build:   npm run build   (or bun run build)
Output:  dist
```

Do **not** use `/* /index.html 200` in `_redirects`.

## Local

```bash
npm install
npm run dev
```
