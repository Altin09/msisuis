import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://msisuis.no',
  output: 'static',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'no',
    locales: ['no', 'en', 'sq', 'ar', 'fa', 'tr', 'id', 'ur', 'ce', 'so', 'zgh'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
