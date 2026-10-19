import { describe, expect, test } from 'vitest';
import { content } from '../../logic/content';
import { LOCALES, SITE } from '../../logic/site';

function shape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(shape);
  if (typeof value === 'object' && value !== null) {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, shape(item)])
    );
  }
  return typeof value;
}

describe('complete localized product content (A1.1)', () => {
  test.each(LOCALES)(
    '%s gives both reproductive goals equal content',
    (locale) => {
      const goals = content[locale].goals;
      expect(goals.items.map((goal) => goal.id)).toEqual([
        'trying_to_conceive',
        'avoiding_pregnancy',
      ]);
      for (const goal of goals.items) {
        expect(goal.title.length).toBeGreaterThan(5);
        expect(goal.body.length).toBeGreaterThan(30);
        expect(goal.alt.length).toBeGreaterThan(30);
      }
      expect(goals.limit.length).toBeGreaterThan(100);
    }
  );
  test('uses the approved Portuguese identity and audience', () => {
    expect(`${content.pt.hero.first} ${content.pt.hero.second}`).toBe(
      'Seu ciclo. Seus planos.'
    );
    expect(content.pt.hero.body).toBe(
      'Para quem quer engravidar e para quem busca planejamento familiar.'
    );
  });
  test.each(LOCALES)('%s contains every English field', (locale) => {
    expect(shape(content[locale])).toEqual(shape(content.en));
    expect(content[locale].features).toHaveLength(3);
    expect(content[locale].faq).toHaveLength(4);
    expect(content[locale].disclaimer.length).toBeGreaterThan(100);
  });
  test('defines the deployed web app destination once (A1.4)', () => {
    expect(SITE.webApp).toBe('https://cecilia-web-production.up.railway.app/');
    expect(Object.values(SITE).join(' ')).not.toContain('testflight');
  });
  test.each(LOCALES)('%s explains current platform availability', (locale) => {
    const copy = content[locale];
    expect(copy.beta.ios).toContain('iOS');
    expect(copy.beta.androidTitle).toBe('Android');
    expect(copy.beta.androidBody).toContain('Firebase App Distribution');
    expect(copy.beta.androidPending.length).toBeGreaterThan(5);
    expect(JSON.stringify(copy)).not.toContain('TestFlight');
  });
  test('serves the custom domain at its root (A1.3)', () => {
    expect(SITE.origin).toBe('https://mariacecilia.app');
    expect(SITE.base).toBe('/');
  });
});
