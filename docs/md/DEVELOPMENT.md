# Development

## Setup and commands

Use Node.js 24 or newer and `npm ci` from this project. The local browser suites use installed Google Chrome; on a standalone continuous integration (CI) runner, install it with `npx playwright install --with-deps chrome`.

- From the agent root, `./sh/start.sh github-pages` starts only the website, type-checking it first and choosing a free local port through the shared Port Utility.
- `./sh/kill.sh github-pages` stops only that website lane.
- `./sh/build.sh github-pages` builds the registered target when the repository is clean. During authorized development, `npm run build` is the project-standard build and writes `dist/`.
- `./sh/validate.sh github-pages` runs the complete website gate without starting the API or database. For a standalone clone, set `ASTRO_SCREENSHOT_DIR` to an absolute scratch directory and run `timeout 600s npm run test:generated`.
- `npm run start` previews the production build at `/`. Agent-managed process owners set `ASTRO_PREVIEW_BACKGROUND=1` (or `ASTRO_DEV_BACKGROUND=1` for development) to bypass Astro 7's automatic agent daemonization and retain normal process cleanup. The existing `github-pages` lifecycle selector runs local builds and validation; it does not select the production host.

## Tests and quality gates

`npm run test:generated` runs formatting, linting with a complexity ceiling of 6, Astro type checks, unit coverage, build, adapter integration, Gherkin behavior tests, browser tests, and smoke tests. Unit suites are bounded by 60 seconds and every unit case by one second. Integration, behavior, browser, and smoke suites have explicit positive timeouts. Coverage includes all production logic; shared types and production adapters are excluded and proved through integration/browser tests.

- `npm run test:coverage` measures 100% logic line, branch, function, and statement coverage.
- `npx eslint logic state types astro.config.mjs --rule 'complexity:[error,0]' --format json` reports each measured function complexity; this diagnostic command intentionally exits nonzero because its reporting threshold is zero. The normal lint gate enforces 6.
- Product scenarios live in `tests/bdd/features/product.feature`; compiled reference is maintained by `.scripts/gherkin.py compile module/cecilia-website` from the agent root.
- Browser screenshots first land in the agent-root `tmp/cecilia-website-evidence/astro-static/` directory. Approved copies live in `evidence_gallery/png/`; the gallery index names coverage and test provenance.

## Content and assets

`logic/site.ts` owns the public origin, root base path, locale list, language names, deployed web app destination, public TestFlight invitation, and public Firebase Android invitation. Typed copy lives under `logic/content/`; shared Astro components render each locale. Both native invitations appear in the opening hero and the detailed testing options. iPhone instructions explain installing TestFlight first and returning to the invitation to install Cecilia. The root alone redirects by browser language; explicit locale addresses never redirect. Unsupported browsers and disabled JavaScript retain English. `public/404.html` keeps missing addresses as HTTP 404 on Cloudflare Pages instead of its default single-page application fallback.

Native invitation controls share DownloadBadge.astro. Local icons under public/icons/ come from Font Awesome Free 7.3.1 (CC BY 4.0); retain their embedded attribution comments when updating them. The component uses the canonical destinations in logic/site.ts, translated download labels, and accessible names that identify TestFlight or Firebase.

The app screenshots use illustrative data from the app's existing iOS evidence gallery. WebP origin sidecars and the PNG icon metadata preserve provenance. Nunito Sans is bundled locally through Fontsource; its Open Font License is distributed in `public/fonts/LICENSE.txt`. No app API, analytics, forms, or external font requests are used by the product page.

## Publishing

The public source repository is `Rocha-Moy-Engineering-Technology/cecilia-website`. Production uses the free Cloudflare Pages direct-upload project `mariacecilia`. The canonical address is `https://mariacecilia.app/`; `www.mariacecilia.app` redirects to it while preserving the path and query. English, Spanish, and Portuguese live at `/en/`, `/es/`, and `/pt/`. `.github/workflows/pages.yml` validates pull requests, pushes to `main`, and manual runs; it no longer publishes to GitHub Pages.

Publishing uses the pinned Wrangler CLI. Authenticate once with `npx wrangler login --use-keyring --scopes account:read user:read pages:write`; credentials stay in the operating system keychain. Wrangler's registered OAuth redirect requires `localhost:8976`, a documented exception to the ordinary agent port range. For agent-operated login, check it from the agent root with `.scripts/port_utility.py grab --start 8976 --end 8976`. Changing `--callback-port` changes only the listener; the provider still redirects to 8976, so use the registered port without a forwarding setup.

From the agent root, run the complete validation gate (`./sh/validate.sh github-pages`); then, from this project, run `npm run deploy`. For a standalone clone, use the screenshot environment and validation command described above. The deploy command uploads only the existing `dist/` directory to the registered `mariacecilia` Pages project in the intended Cloudflare account and production branch `main`; it never builds or commits. The custom domain stays associated with the same project. Confirm success with `npx wrangler pages deployment list --project-name=mariacecilia`, then check the live site. Source files, dependencies, and credentials must not be uploaded.

The dashboard's Production direct upload remains a fallback: upload a folder or ZIP containing only `dist/` contents with `index.html` at its root. Direct-upload projects do not automatically deploy repository pushes; switching to Git integration requires a new Cloudflare Pages project. GitHub Pages was turned off for the repository on 2026-11-23, so the former copy at https://rocha-moy-engineering-technology.github.io/cecilia-website/ is no longer published; it was never the production host, and the `.github/` workflow only validates.

Keep the domain associated with the Pages project before changing Domain Name System (DNS) records. Cloudflare manages the Pages certificate and apex record. A proxied `www` record and zone redirect send `www` traffic to the canonical apex. Keep Web Analytics disabled for both the Pages project and the domain: Cloudflare enables domain performance beacons by default on free zones, independently of the Pages setting. Confirm HTTPS, all localized pages and assets, and absence of injected analytics scripts after each upload. Roll back using a previously successful production deployment in Cloudflare Pages. Source commits and pushes remain subject to the workspace's explicit authorization rule.
