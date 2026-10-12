import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { SITE } from './logic/site';

export default defineConfig({
  site: SITE.origin,
  base: SITE.base,
  srcDir: './state/adapters/inbound',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
