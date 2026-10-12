import { LOCALES, SITE } from '../../../../logic/site';
import { localePath } from '../../../../logic/language';
export const prerender = true;
export function GET() {
  const urls = LOCALES.map(
    (locale) =>
      `<url><loc>${SITE.origin}${localePath(locale, SITE.base)}</loc></url>`
  ).join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } }
  );
}
