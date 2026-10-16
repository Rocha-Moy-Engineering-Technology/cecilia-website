// Proves tests/bdd/features/product.feature (SDOC A1.1-A1.5).
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../support/fixtures';
import { SITE } from '../../../logic/site';

const { Given, When, Then } = createBdd(test);
Then(
  'both reproductive goals and forecast limitations are visible',
  async ({ page }) => {
    await expect(page.locator('.goal')).toHaveCount(2);
    await expect(
      page.locator('[data-goal="trying_to_conceive"] h3')
    ).toBeVisible();
    await expect(
      page.locator('[data-goal="avoiding_pregnancy"] h3')
    ).toBeVisible();
    await expect(
      page.locator('[data-goal="avoiding_pregnancy"] .goal-limit')
    ).toBeVisible();
    for (const img of await page.locator('.goal img').all()) {
      await img.scrollIntoViewIfNeeded();
      await expect(img).toHaveJSProperty('complete', true);
      expect(
        await img.evaluate((element: HTMLImageElement) => element.naturalWidth)
      ).toBeGreaterThan(0);
    }
  }
);
Given(
  'I open the product page in {string}',
  async ({ page, siteURL }, locale: string) => {
    await page.goto(`${siteURL}/${locale}/`);
  }
);
Then(
  'the cycle features and example screens are available',
  async ({ page }) => {
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('.feature')).toHaveCount(3);
    await expect(page.locator('.feature h3')).toHaveCount(3);
    await expect(page.locator('.feature img')).toHaveCount(3);
    await expect(page.locator('.disclaimer')).toContainText('Cecilia');
  }
);
Then(
  "every beta button opens Cecilia's TestFlight invitation",
  async ({ page }) => {
    const links = page.locator('[data-beta]');
    await expect(links).toHaveCount(2);
    for (const link of await links.all())
      await expect(link).toHaveAttribute('href', SITE.beta);
  }
);
When('I open the first frequently asked question', async ({ page }) => {
  await page.locator('summary').first().click();
});
Then('its answer is visible', async ({ page }) => {
  await expect(page.locator('details').first().locator('p')).toBeVisible();
});
When('I follow the features navigation link', async ({ page }) => {
  await page.locator('.section-nav a').first().click();
});
Then('I reach the features section', async ({ page }) => {
  expect(new URL(page.url()).hash).toBe('#features');
});
When('I select Português', async ({ page }) => {
  await page
    .locator('.language-nav')
    .getByRole('link', { name: 'Português' })
    .click();
});
Then('the Portuguese product page is displayed', async ({ page }) => {
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
  await expect(page.locator('.language-nav [aria-current]')).toHaveText(
    'Português'
  );
});
