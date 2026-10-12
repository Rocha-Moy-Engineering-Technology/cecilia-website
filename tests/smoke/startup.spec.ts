import { expect, test } from '@playwright/test';
import { assertSite, htmlRoutes, withRuntime } from '../support/runtime-server';
import { SITE } from '../../logic/site';

test('A1.3/A1.5 production static routes, metadata, and assets resolve', async ({
  request,
}) => {
  await withRuntime(async ({ baseURL }) => {
    await assertSite(baseURL);
    for (const route of htmlRoutes()) {
      const response = await request.get(`${baseURL}${route}`);
      expect(response.status()).toBe(200);
      const html = await response.text();
      expect(html).toContain(
        `href="${SITE.origin}${SITE.base}${route.slice(1)}"`
      );
      expect(html).toContain('hreflang="pt-BR"');
    }
    const sitemap = await request.get(`${baseURL}/sitemap.xml`);
    expect(sitemap.status()).toBe(200);
    expect(await sitemap.text()).toContain(`${SITE.origin}${SITE.base}es/`);
    const missing = await request.get(`${baseURL}/missing-page/`);
    expect(missing.status()).toBe(404);
    for (const locale of ['en', 'es', 'pt']) {
      for (const screen of ['today', 'calendar', 'chart']) {
        const image = await request.get(
          `${baseURL}/screens/${locale}-${screen}.webp`
        );
        expect(image.status()).toBe(200);
        expect(image.headers()['content-type']).toContain('image/webp');
      }
    }
  });
});
