import astro from 'eslint-plugin-astro';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    files: [
      'logic/**/*.ts',
      'state/**/*.{ts,astro}',
      'types/**/*.ts',
      'astro.config.mjs',
    ],
    rules: { complexity: ['error', 6] },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    ignores: [
      '.astro/',
      'coverage/',
      'dist/',
      'node_modules/',
      'playwright-report/',
      'test-results/',
      'tests/.features-gen/',
    ],
  },
];
