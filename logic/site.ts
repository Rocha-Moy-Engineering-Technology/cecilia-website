import type { Locale } from '../types/site';

export const LOCALES: readonly Locale[] = ['en', 'es', 'pt'];
export const LANGUAGE_NAMES = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
} as const;
export const SITE = {
  origin: 'https://mariacecilia.app',
  base: '/',
  webApp: 'https://cecilia-web-production.up.railway.app/',
} as const;
