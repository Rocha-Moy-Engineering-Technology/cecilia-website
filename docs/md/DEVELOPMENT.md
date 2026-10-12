# Development

## Setup and commands

Use Node.js 24 or newer and `npm ci` from this project. The local browser suites use installed Google Chrome; on a standalone continuous integration (CI) runner, install it with `npx playwright install --with-deps chrome`.

- From the agent root, `./sh/start.sh github-pages` starts only the website, type-checking it first and choosing a free local port through the shared Port Utility.
- `./sh/kill.sh github-pages` stops only that website lane.
- `./sh/build.sh github-pages` builds the registered target when the repository is clean. During authorized development, `npm run build` is the project-standard build and writes `dist/`.
- `./sh/validate.sh github-pages` runs the complete website gate without starting the API or database. For a standalone clone, set `ASTRO_SCREENSHOT_DIR` to an absolute scratch directory and run `timeout 600s npm run test:generated`.
- `npm run start` previews the production build beneath its configured repository base path. Agent-managed process owners set `ASTRO_PREVIEW_BACKGROUND=1` (or `ASTRO_DEV_BACKGROUND=1` for development) to bypass Astro 7's automatic agent daemonization and retain normal process cleanup.

## Tests and quality gates

`npm run test:generated` runs formatting, linting with a complexity ceiling of 6, Astro type checks, unit coverage, build, adapter integration, Gherkin behavior tests, browser tests, and smoke tests. Unit suites are bounded by 60 seconds and every unit case by one second. Integration, behavior, browser, and smoke suites have explicit positive timeouts. Coverage includes all production logic; shared types and production adapters are excluded and proved through integration/browser tests.

- `npm run test:coverage` measures 100% logic line, branch, function, and statement coverage.
- `npx eslint logic state types astro.config.mjs --rule 'complexity:[error,0]' --format json` reports each measured function complexity; this diagnostic command intentionally exits nonzero because its reporting threshold is zero. The normal lint gate enforces 6.
- Product scenarios live in `tests/bdd/features/product.feature`; compiled reference is maintained by `gherkin.py compile module/cecilia-website` from the agent root.
- Browser screenshots first land in the agent-root `tmp/cecilia-website-evidence/astro-static/` directory. Approved copies live in `evidence_gallery/png/`; the gallery index names coverage and test provenance.

## Content and assets

`logic/site.ts` owns the public origin, repository base path, locale list, language names, and TestFlight invitation. Typed copy lives under `logic/content/`; shared Astro components render each locale. The root alone redirects by browser language; explicit locale addresses never redirect. Unsupported browsers and disabled JavaScript retain English.

The app screenshots use illustrative data from the app's existing iOS evidence gallery. WebP origin sidecars and the PNG icon metadata preserve provenance. Nunito Sans is bundled locally through Fontsource; its Open Font License is distributed in `public/fonts/LICENSE.txt`. No app API, analytics, forms, or external font requests are used by the product page.

## Publishing

The public repository is `Rocha-Moy-Engineering-Technology/cecilia-website`. GitHub Pages must use the GitHub Actions source. `.github/workflows/pages.yml` validates pull requests, and builds/publishes `dist/` after a push to `main` or a manual run. The expected address is `https://rocha-moy-engineering-technology.github.io/cecilia-website/`.

The scaffold's initial main commit was published by the approved canonical creation workflow. Later implementation commits and pushes follow the workspace's explicit authorization rule. A configured Pages site is not evidence of a successful publication: verify the action and the live localized pages after the website implementation reaches main. To roll back, publish an authorized earlier successful website revision.
