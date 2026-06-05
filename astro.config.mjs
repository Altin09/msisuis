import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://msisuis.no',
  output: 'static',
  // Instant root redirect to the default locale (emits content="0",
  // no visible body) — replaces Astro's slower 2s i18n auto-redirect.
  redirects: {
    '/': '/no/',
  },
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'no',
    locales: ['no', 'en', 'sq', 'ar', 'fa', 'tr', 'id', 'ur', 'ce', 'so', 'zgh'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
