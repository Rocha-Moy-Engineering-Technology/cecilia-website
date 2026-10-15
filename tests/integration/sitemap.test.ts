import { expect, test } from 'vitest';
import { GET } from '../../state/adapters/inbound/pages/sitemap.xml';

test('sitemap adapter exposes every stable locale URL (A1.3)', async () => {
  const response = GET();
  expect(response.headers.get('content-type')).toBe('application/xml');
  const xml = await response.text();
  for (const locale of ['en', 'es', 'pt']) {
    expect(xml).toContain(`https://mariacecilia.app/${locale}/`);
  }
});
