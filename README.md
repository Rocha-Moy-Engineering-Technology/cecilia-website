# Cecilia website

- `astro.config.mjs` — static website configuration.
- `logic/` — product content, site settings, and language selection.
- `state/` — Astro pages, shared components, styles, and the browser adapter.
- `types/` — shared TypeScript contracts.
- `public/` — app screenshots, icon, platform badge glyphs (`public/icons/`, Font Awesome Free 7.3.1, CC BY 4.0), asset provenance, and font license.
- `tests/` — unit, integration, behavior, browser, and smoke tests.
- `docs/` — product, design, development, and validation records.
- `evidence_gallery/` — visual evidence of the website.
- `.github/` — validation-only workflow; production publishes separately to Cloudflare Pages through `npm run deploy` (see `docs/md/DEVELOPMENT.md`, Publishing).
- `package.json` and `package-lock.json` — commands and pinned dependencies.
- `eslint.config.js`, `vitest.config.ts`, `playwright.config.ts`, and `tsconfig.json` — quality and test configuration.
