import type { BrowserLanguagePort } from '../../types/site';
import { chooseLanguage, localePath } from '../../logic/language';

export function redirectToPreferredLanguage(
  browser: BrowserLanguagePort,
  base: string
): void {
  browser.replace(localePath(chooseLanguage(browser.languages), base));
}
