// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercelAdapter from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercelAdapter(),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()],
  env: {
    schema: {
      MAIL_PASS: envField.string({ context: "server", access: "secret", optional: false }),
    }
  }
});