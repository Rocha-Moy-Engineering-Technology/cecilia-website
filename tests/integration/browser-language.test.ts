import { expect, test } from 'vitest';
import { redirectToPreferredLanguage } from '../../state/adapters/browser-language';

test('browser adapter replaces the root with its preferred locale (A1.2)', () => {
  const destinations: string[] = [];
  redirectToPreferredLanguage(
    { languages: ['es-AR'], replace: (url) => destinations.push(url) },
    '/cecilia-website/'
  );
  expect(destinations).toEqual(['/cecilia-website/es/']);
});
