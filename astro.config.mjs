// @ts-check
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://davidguerrero.co',
  integrations: [robotsTxt(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  }
});