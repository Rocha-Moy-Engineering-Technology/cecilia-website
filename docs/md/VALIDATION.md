# Validation record

## October 18, 2026: women as the central marketing theme

The website now defines Cecilia prominently as an app for women in the hero, search/social titles, introduction, audience FAQ question and footer in English, Portuguese and Spanish. The existing cycle/plans headline, canonical audience sentences, real app screens, equal goal explanations, safety copy and access paths are preserved. Production is published. Live verification passed all six language/viewport combinations, including exact hero definition, page/social title, intro/footer wording, audience question, keyboard navigation/FAQ and no overflow/errors/analytics. All 47 hosted files match validated dist byte for byte. PRODUCT.md, SURFACE.md and DESIGN.md record the women-centered direction for future marketing.

The new BDD step was written first and failed in all three locales on the missing definition; the language-switch case remained green. The complete `./sh/validate.sh github-pages` gate passed all 41 tests, including the women-definition BDD step in all three languages and six desktop/mobile accessibility runs. The completed component passed the Impeccable detector with no findings. `npm run test:coverage` measured 100% production-logic line/statement/branch/function coverage (620ms); `npx eslint logic state types astro.config.mjs --rule 'complexity:[error,0]' --format json` measured a maximum of 3 in the touched component (diagnostic deliberately exits 1).

Every poster size now leads the audience block with “Um aplicativo para mulheres.” in bold plum type. The exact two-goal audience and website/open-test invitation remain. Native dimensions, 14 QR decodes, A3 PNG dimensions/QR and ZIP integrity/byte equality passed; pixels outside the positioning block are unchanged. Master and all-size montage were visually inspected. PDF titles and subjects also carry the women-centered positioning.

## October 18, 2026: explicit audience of women in all languages

The latest user direction makes the audience explicit in every language: English “For women trying to conceive and women seeking family planning.”; Portuguese “Para mulheres que querem engravidar e mulheres que buscam planejamento familiar.”; Spanish “Para mujeres que quieren concebir y mujeres que buscan planificación familiar.” Applied to hero text, metadata and corresponding FAQ descriptions. Product guidance records Cecilia as an app for women; app goal labels and forecast/safety information remain intact.

The final `./sh/validate.sh github-pages` gate passed all 41 tests. Production is published: all six live locale/viewport combinations passed exact hero, metadata and FAQ text, image loading, FAQ interaction, no overflow and no injected analytics. All 47 hosted files match validated dist byte for byte. The previous ad-hoc FAQ mismatch was superseded by successful full final DOM text readback.

The Portuguese poster audience uses the same wording, balanced over two lines. Master, six native print PDFs, A3 PNG, print instructions and ZIP were regenerated. Exact audience and unchanged website/open-test invitation, native page sizes, 14 PDF QR decodes, A3 PNG dimensions/QR and ZIP integrity/byte equality passed. Only the audience region changed visually; master and all-size montage were reviewed.

`npm run test:coverage` measured 100% lines/statements/branches/functions (367ms). `npx eslint logic/content/en.ts logic/content/pt.ts logic/content/es.ts --rule 'complexity:[error,0]' --format json` reports no functions: all three edited production files hold only constant content, so no touched-function complexity score applies.

## October 18, 2026: English family-planning terminology

The English audience sentence now reads “For people trying to conceive and people seeking family planning.” The same term replaces “people planning their families” in metadata and the matching FAQ description. English root and localized static output both contain the corrected wording. Other languages, app goal labels and poster artifacts are unchanged.

`npm run test:coverage` measured 100% of production logic lines/statements/branches/functions (270ms). `npx eslint logic/content/en.ts --rule 'complexity:[error,0]' --format json` returned no messages: the edited file contains zero executable functions, so no touched-function complexity score applies.

## October 18, 2026: public Android self-enrollment

Android release 1.1.0 (1) is uploaded. The public app-only invitation is https://appdistribution.firebase.dev/i/650e791b9c851d73, without a group or domain restriction. Signed-out verification opens Google sign-in; signed-in verification shows one Cecilia Android app (app.mariacecilia.cecilia) and a self-enrollment form. No enrollment or email submission was performed. An initial shared-group invitation exposed the legacy iOS build, so it was replaced before publication; no pre-existing invitation was changed.

The final `./sh/validate.sh github-pages` gate passed 41 tests: 24 unit, 2 adapter integration, 4 behavior, 10 browser and 1 smoke. The measured coverage run took 566 milliseconds. Production publication succeeded. Live browser checks passed en/es/pt at 1440px and 390px, and the actual Android action reached the Android-only enrollment form. All 47 hosted files match the validated build byte for byte. All three website languages now have an Android test action and Firebase/Google-account guidance, alongside existing web access and the iOS coming-soon notice. Posters remain website-only and unchanged. `npm run test:coverage` measures 100% of production logic lines/statements/branches/functions. `npx eslint logic state types astro.config.mjs --rule 'complexity:[error,0]' --format json` measures a maximum of 3 in the touched component (diagnostic deliberately exits 1). The completed UI detector returned no findings. Desktop, phone and intermediate testing-options renders were visually checked with no overflow.

## October 18, 2026: friendly invitation to discover Cecilia and the open test

The final poster invitation reads: “Escaneie o QR code e visite nosso site para conhecer melhor a Cecilia e saber como participar do teste aberto.” It communicates both website purposes without describing distribution channels or installation steps. Updated all seven PDFs, the A3 PNG, print instructions, and ZIP. Exact wording, native dimensions, 14 PDF QR decodes, PNG dimensions/QR and ZIP integrity/byte equality pass; surrounding rendered pixels are unchanged. Master and all-size montage were visually reviewed. Website source and deployment remain unchanged.

## October 18, 2026: poster correction

The user clarified that posters should only introduce the website. Removed the test-version badge, platform availability and distribution/install instructions from the master, every print size, and printing notes; the invitation now says “Escaneie o QR code e conheça a Cecilia no site.” The safety wording remains. The website was not changed.

All seven PDFs passed website-only text checks, exact native page dimensions, and QR decoding at both 720px and 1200px. The A3 PNG passed 3508×4961 dimensions and QR decoding; all ZIP entries match the corrected PDFs/instructions. Rendered pixels outside the badge, invitation paragraph and footer regions are unchanged. All sizes were visually reviewed. No software source changed; artifact checks replace unrelated software-suite reruns for this correction.

## October 18, 2026: web-first testing invitation

The website now opens the deployed web app directly, states that iOS testing is coming soon, and explains that the Firebase Android invitation is being prepared. The user confirmed Android setup remains in progress. No TestFlight link or installation instruction remains in shipping copy.

- `./sh/validate.sh github-pages` passed: 23 unit, 2 adapter integration, 4 behavior, 9 browser, and 1 smoke test (39 total).
- `npm run test:coverage`: 100% lines, statements, branches, and functions. The full unit run took 606 milliseconds, including coverage instrumentation.
- `npx eslint logic state types astro.config.mjs --rule 'complexity:[error,0]' --format json`: highest measured complexity in the touched component is 3; the diagnostic deliberately exits 1, while the enforcing lint gate passed.
- All three languages passed 1440px/390px accessibility, keyboard, overflow, asset, and runtime checks. Twelve refreshed closed/expanded FAQ screenshots live in the evidence gallery.
- The completed product component passed the Impeccable detector with no findings. Existing cream/plum identity, real app screenshots, goals, and safety wording were preserved.
- Poster master, six native print PDFs, A3 PNG, instructions, and ZIP were updated. Seven page sizes, 14 PDF QR decodes at 720px/1200px, A3 PNG dimensions/QR, and ZIP integrity/byte equality passed; all print variants were visually reviewed. The QR still opens https://mariacecilia.app/.

Production publication succeeded on October 18, 2026 at https://8cf55b02.mariacecilia-4i7.pages.dev, serving https://mariacecilia.app/. All 47 hosted files matched the validated build byte for byte. Live browser checks passed all three languages at desktop/mobile sizes, keyboard navigation, expandable questions, image loading, availability notices, the actual web-app action, and absence of injected analytics. Missing paths return 404; the www redirect preserves path and query.

The dated record below describes earlier checks and publication history.

## Historical record

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

Verified live on October 12, 2026. Revision `5167b70d27503f06de6edbd445bed4da5b73be1d` completed both build and deploy successfully in [GitHub Actions](https://github.com/Rocha-Moy-Engineering-Technology/cecilia-website/actions/runs/38274362335). The [public website](https://rocha-moy-engineering-technology.github.io/cecilia-website/), all three localized pages, and localized example images return HTTP 200. Each language includes the updated TestFlight installation guidance and the approved invitation link. GitHub Pages uses workflow builds and enforces HTTPS.

## TestFlight instruction follow-up

The helper under the primary beta action and numbered steps now explain: install TestFlight if needed, return to this page, and tap the invitation again to install Cecilia. English, Spanish, and Brazilian Portuguese were updated without changing the invitation or page structure. Root validation passed all 31 tests; twelve captures were refreshed. The initial direct test invocation omitted ASTRO_SCREENSHOT_DIR; the canonical root dispatcher supplied it and the complete rerun passed. The corrected Pages workflow also passed actionlint using `go run github.com/rhysd/actionlint/cmd/actionlint@latest .github/workflows/pages.yml`.

## Review conclusion

No additional improvements identified for the code touched in this task. Website documentation is up-to-date with the changes made. The pre-existing app deployment-note discrepancy is recorded separately in the workspace task and was not modified.
