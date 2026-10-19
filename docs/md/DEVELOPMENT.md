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
- Product scenarios live in `tests/bdd/features/product.feature`; compiled reference is maintained by `gherkin.py compile module/cecilia-website` from the agent root.
- Browser screenshots first land in the agent-root `tmp/cecilia-website-evidence/astro-static/` directory. Approved copies live in `evidence_gallery/png/`; the gallery index names coverage and test provenance.

## Content and assets

`logic/site.ts` owns the public origin, root base path, locale list, language names, deployed web app destination, and public Firebase Android invitation. Typed copy lives under `logic/content/`; shared Astro components render each locale. The root alone redirects by browser language; explicit locale addresses never redirect. Unsupported browsers and disabled JavaScript retain English. `public/404.html` keeps missing addresses as HTTP 404 on Cloudflare Pages instead of its default single-page application fallback.

The app screenshots use illustrative data from the app's existing iOS evidence gallery. WebP origin sidecars and the PNG icon metadata preserve provenance. Nunito Sans is bundled locally through Fontsource; its Open Font License is distributed in `public/fonts/LICENSE.txt`. No app API, analytics, forms, or external font requests are used by the product page.

## Publishing

The public source repository is `Rocha-Moy-Engineering-Technology/cecilia-website`. Production uses the free Cloudflare Pages direct-upload project `mariacecilia`. The canonical address is `https://mariacecilia.app/`; `www.mariacecilia.app` redirects to it while preserving the path and query. English, Spanish, and Portuguese live at `/en/`, `/es/`, and `/pt/`. `.github/workflows/pages.yml` validates pull requests, pushes to `main`, and manual runs; it no longer publishes to GitHub Pages.

To publish an update, run the complete validation gate, then upload only the contents of `dist/` through Cloudflare Dashboard → Workers & Pages → mariacecilia → Create a new deployment → Production. The dashboard accepts a folder or ZIP with `index.html` at its root. Source files, dependencies, and credentials must not be included. Subsequent deployments use the same project and retain its custom domain. Direct-upload projects do not automatically deploy repository pushes; switching to Git integration requires a new Cloudflare Pages project. The existing GitHub Pages copy is a historical deployment and is not the production host.

Keep the domain associated with the Pages project before changing Domain Name System (DNS) records. Cloudflare manages the Pages certificate and apex record. A proxied `www` record and zone redirect send `www` traffic to the canonical apex. Keep Web Analytics disabled for both the Pages project and the domain: Cloudflare enables domain performance beacons by default on free zones, independently of the Pages setting. Confirm HTTPS, all localized pages and assets, and absence of injected analytics scripts after each upload. Roll back using a previously successful production deployment in Cloudflare Pages. Source commits and pushes remain subject to the workspace's explicit authorization rule.
