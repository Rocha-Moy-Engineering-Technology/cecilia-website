import type { Locale } from '../types/site';

export const LOCALES: readonly Locale[] = ['en', 'es', 'pt'];
export const LANGUAGE_NAMES = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
} as const;
export const SITE = {
  origin: 'https://rocha-moy-engineering-technology.github.io',
  base: '/cecilia-website/',
  beta: 'https://testflight.apple.com/join/rfAGkcSr',
} as const;
