// Proves tests/bdd/features/product.feature and SDOC A1.1-A1.5.
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { captureRoute, withRuntime } from '../support/runtime-server';
import { SITE } from '../../logic/site';
import { content } from '../../logic/content';

for (const locale of ['en', 'es', 'pt']) {
  for (const width of [1440, 390]) {
    test(`A1.1/A1.5 ${locale} at ${width}px has usable content and controls`, async ({
      page,
    }) => {
      await withRuntime(async ({ baseURL }) => {
        await page.setViewportSize({
          width,
          height: width === 390 ? 740 : 960,
        });
        const errors: string[] = [];
        page.on('pageerror', (error) => errors.push(error.message));
        const response = await page.goto(`${baseURL}/${locale}/`);
        expect(response?.status()).toBe(200);
        const badges = page.locator('.hero .download-badge');
        await expect(badges).toHaveCount(2);
        const badgeCopy = content[locale as keyof typeof content].beta;
        for (const [platform, action] of [
          ['ios', badgeCopy.iosAction],
          ['android', badgeCopy.androidAction],
        ]) {
          const badge = page.locator(`.hero [data-${platform}-invite]`);
          await expect(badge).toHaveAccessibleName(action);
          await expect(badge.locator('img')).toHaveAttribute(
            'src',
            `/icons/${platform}.svg`
          );
          await expect(badge.locator('img')).toHaveJSProperty('complete', true);
          expect(
            await badge
              .locator('img')
              .evaluate((img: HTMLImageElement) => img.naturalWidth)
          ).toBeGreaterThan(0);
        }
        const firstBadge = await badges.nth(0).boundingBox();
        const secondBadge = await badges.nth(1).boundingBox();
        expect(firstBadge?.width).toBeCloseTo(secondBadge?.width ?? 0, 0);
        expect(firstBadge?.height).toBeCloseTo(secondBadge?.height ?? 0, 0);
        expect(firstBadge?.y).toBeCloseTo(secondBadge?.y ?? 0, 0);
        await expect(page.locator('html')).toHaveAttribute(
          'lang',
          locale === 'pt' ? 'pt-BR' : locale
        );
        await expect(page.locator('.hero [data-ios-invite]')).toHaveAttribute(
          'href',
          SITE.iosInvite
        );
        await expect(page.locator('.hero [data-ios-invite]')).toBeInViewport({
          ratio: 1,
        });
        await expect(
          page.locator('.hero [data-android-invite]')
        ).toBeInViewport({
          ratio: 1,
        });
        await expect(page.locator('[data-ios-setup]')).toHaveText(
          content[locale as keyof typeof content].beta.iosSetup
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

// CECILIA-WEB-BDD-001 / SDOC A1.4: installing TestFlight precedes joining Cecilia.
test('A1.4 the iPhone action opens the public TestFlight invitation', async ({
  page,
}) => {
  await withRuntime(async ({ baseURL }) => {
    await page.route(SITE.iosInvite, (route) =>
      route.fulfill({ body: 'Public Cecilia TestFlight invitation' })
    );
    await page.goto(`${baseURL}/en/`);
    await page.locator('.hero [data-ios-invite]').click();
    await expect(page).toHaveURL(SITE.iosInvite);
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
    await page.locator('.hero [data-android-invite]').click();
    await expect(page).toHaveURL(SITE.androidInvite);
  });
});
