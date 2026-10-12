import { describe, expect, test } from 'vitest';
import { chooseLanguage, localePath } from '../../logic/language';

describe('browser language choice (A1.2)', () => {
  test.each([
    [['pt-BR'], 'pt'],
    [['es-MX'], 'es'],
    [['EN-us'], 'en'],
    [['fr-FR', 'pt-PT', 'en'], 'pt'],
    [['ja', 'fr'], 'en'],
    [[], 'en'],
    [[''], 'en'],
    [['pt'], 'pt'],
  ])('selects the first supported language from %j', (languages, expected) => {
    expect(chooseLanguage(languages as string[])).toBe(expected);
  });
  test.each(['en', 'es', 'pt'] as const)(
    'builds the %s project path (A1.3)',
    (locale) => {
      expect(localePath(locale, '/cecilia-website/')).toBe(
        `/cecilia-website/${locale}/`
      );
    }
  );
});
