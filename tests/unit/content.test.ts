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
  test.each(LOCALES)('%s contains every English field', (locale) => {
    expect(shape(content[locale])).toEqual(shape(content.en));
    expect(content[locale].features).toHaveLength(3);
    expect(content[locale].faq).toHaveLength(4);
    expect(content[locale].disclaimer.length).toBeGreaterThan(100);
  });
  test('defines the approved beta destination once (A1.4)', () => {
    expect(SITE.beta).toBe('https://testflight.apple.com/join/rfAGkcSr');
  });
  test('serves the custom domain at its root (A1.3)', () => {
    expect(SITE.origin).toBe('https://mariacecilia.app');
    expect(SITE.base).toBe('/');
  });
});
