# Validation record

Verified on October 12, 2026, using the current local production build.

## Results

- Root workspace validation entry point `./sh/validate.sh github-pages` passed the complete gate independently of the API/database.
- Website: 31 tests passed — 15 unit, 2 adapter integration, 4 Gherkin behavior, 9 browser, and 1 smoke.
- Context tooling: all 18 unit tests passed. The changed lifecycle declaration has measured 100% line coverage.
- Website production logic: measured 100% line, branch, function, and statement coverage; the complete unit suite took 229 milliseconds on the recorded final product run.
- Highest measured website function cyclomatic complexity: 3; the source lint gate enforces at most 6. The changed Python lifecycle declaration defines no functions; its lint complexity gate passes.
- Formatting, ESLint, Astro type checking, static build, Gherkin ownership/parity, and dependency audit passed. npm audit reports zero vulnerabilities.
- All three locales passed desktop 1440px and mobile 390px accessibility, keyboard, no-overflow, asset loading, and browser-runtime checks. Twelve full-page closed/expanded FAQ captures are indexed in evidence_gallery/index.html.
- Independent design review matched the user-pinned product plan and six layouts. Its sole FAQ focus/answer overlap finding was fixed; the same reviewer reopened all six recaptures and scored that fix resolved/ship. No broader QUALITY BAR or comp comparison is claimed.
- Raster provenance scan: 10 shipping rasters, zero missing origins. App screen content uses illustrative data.

## Reproduction

From the agent root:

```sh
./sh/validate.sh github-pages
uv run agent_commons/agent_tools/scripts/gherkin.py check module/cecilia-website
```

From this project:

```sh
npm run test:coverage
npx eslint logic state types astro.config.mjs --rule 'complexity:[error,0]' --format json
npm audit
```

The zero-threshold diagnostic intentionally exits 1 to report each function's measured score; the highest score is 3. Normal `npm run lint` is the enforcing pass/fail gate.

From agent_context/agent_tools/code/python:

```sh
timeout 60s uv run --group dev pytest --cov=context_supervised_hooks.spec --cov-report=term-missing --cov-fail-under=100 -q
```

## Publication status

The public repository exists and GitHub Pages is configured with build_type workflow and HTTPS enforced. The user published the website implementation at e033c22. Its first Actions run was rejected before jobs started because runner.temp was used in job-level env. The corrected workflow now defines the screenshot directory at step level, where that context is available. The TestFlight installation clarification is also prepared locally. Publication verification remains pending until the corrected revision reaches main and a deployment succeeds.

## TestFlight instruction follow-up

The helper under the primary beta action and numbered steps now explain: install TestFlight if needed, return to this page, and tap the invitation again to install Cecilia. English, Spanish, and Brazilian Portuguese were updated without changing the invitation or page structure. Root validation passed all 31 tests; twelve captures were refreshed. The initial direct test invocation omitted ASTRO_SCREENSHOT_DIR; the canonical root dispatcher supplied it and the complete rerun passed. The corrected Pages workflow also passed actionlint using `go run github.com/rhysd/actionlint/cmd/actionlint@latest .github/workflows/pages.yml`.

## Review conclusion

No additional improvements identified for the code touched in this task. Website documentation is up-to-date with the changes made. The pre-existing app deployment-note discrepancy is recorded separately in the workspace task and was not modified.
