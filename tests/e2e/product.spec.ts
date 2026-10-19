// Proves tests/bdd/features/product.feature and SDOC A1.1-A1.5.
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { captureRoute, withRuntime } from '../support/runtime-server';
import { SITE } from '../../logic/site';

for (const locale of ['en', 'es', 'pt']) {
  for (const width of [1440, 390]) {
    test(`A1.1/A1.5 ${locale} at ${width}px has usable content and controls`, async ({
      page,
    }) => {
      await withRuntime(async ({ baseURL }) => {
        await page.setViewportSize({ width, height: 960 });
        const errors: string[] = [];
        page.on('pageerror', (error) => errors.push(error.message));
        const response = await page.goto(`${baseURL}/${locale}/`);
        expect(response?.status()).toBe(200);
        await expect(page.locator('html')).toHaveAttribute(
          'lang',
          locale === 'pt' ? 'pt-BR' : locale
        );
        await captureRoute(page, `product-${locale}-${width}-closed`, '/');
        for (const link of await page.locator('.section-nav a').all()) {
          const hash = await link.getAttribute('href');
          await link.click();
          await expect(page.locator(hash!)).toBeInViewport();
        }
        for (const summary of await page.locator('summary').all()) {
          await summary.focus();
          await page.keyboard.press('Enter');
          await expect(summary.locator('..')).toHaveAttribute('open', '');
        }
        expect(
          (
            await new AxeBuilder({ page })
              .withTags(['wcag2a', 'wcag2aa'])
              .analyze()
          ).violations
        ).toEqual([]);
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth
          )
        ).toBe(true);
        await page.evaluate(() => window.scrollTo(0, 0));
        await captureRoute(page, `product-${locale}-${width}`, '/');
        expect(errors).toEqual([]);
      });
    });
  }
}

test('A1.2 root selects the first supported browser language', async ({
  browser,
}) => {
  await withRuntime(async ({ baseURL }) => {
    for (const [languages, expected] of [
      [['fr', 'pt-BR'], 'pt'],
      [['es-AR'], 'es'],
      [['ja'], 'en'],
    ] as const) {
      const context = await browser.newContext();
      await context.addInitScript(
        (value) => Object.defineProperty(navigator, 'languages', { value }),
        languages
      );
      const page = await context.newPage();
      await page.goto(`${baseURL}/`);
      await expect(page).toHaveURL(`${baseURL}/${expected}/`);
      await context.close();
    }
  });
});

test('A1.2/A1.3 explicit locales are preserved and English works without JavaScript', async ({
  browser,
}) => {
  await withRuntime(async ({ baseURL }) => {
    const context = await browser.newContext({ locale: 'pt-BR' });
    const page = await context.newPage();
    await page.goto(`${baseURL}/en/`);
    await expect(page).toHaveURL(`${baseURL}/en/`);
    await context.close();
    const noScript = await browser.newContext({ javaScriptEnabled: false });
    const fallback = await noScript.newPage();
    await fallback.goto(`${baseURL}/`);
    await expect(fallback.locator('html')).toHaveAttribute('lang', 'en');
    await fallback
      .locator('.language-nav')
      .getByRole('link', { name: 'Español' })
      .click();
    await expect(fallback.locator('html')).toHaveAttribute('lang', 'es');
    await noScript.close();
  });
});

test('A1.4 the primary action opens the deployed web app without installation', async ({
  page,
}) => {
  await withRuntime(async ({ baseURL }) => {
    await page.route(SITE.webApp, (route) =>
      route.fulfill({ body: 'Cecilia web app' })
    );
    await page.goto(`${baseURL}/en/`);
    await page.locator('[data-web-app]').first().click();
    await expect(page).toHaveURL(SITE.webApp);
  });
});

// CECILIA-WEB-BDD-001 / SDOC A1.4: public enrollment, not a tester-only release URL.
test('A1.4 the Android action opens the public Firebase self-invitation', async ({
  page,
}) => {
  await withRuntime(async ({ baseURL }) => {
    await page.route(SITE.androidInvite, (route) =>
      route.fulfill({ body: 'Public Android test enrollment' })
    );
    await page.goto(`${baseURL}/pt/`);
    await page.locator('[data-android-invite]').click();
    await expect(page).toHaveURL(SITE.androidInvite);
  });
});
