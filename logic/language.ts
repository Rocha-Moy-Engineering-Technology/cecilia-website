import type { Locale } from '../types/site';
import { LOCALES } from './site';

export function chooseLanguage(languages: readonly string[]): Locale {
  const codes = languages.map(
    (language) => language.toLowerCase().split('-')[0]
  );
  return (
    (codes.find((code) => LOCALES.includes(code as Locale)) as
      Locale | undefined) ?? 'en'
  );
}

export function localePath(locale: Locale, base: string): string {
  return `${base}${locale}/`;
}
