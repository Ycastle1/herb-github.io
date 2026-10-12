import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ycastle1.github.io',
  base: '/herb-github.io',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
  markdown: { shikiConfig: { theme: 'github-dark' } },
});
