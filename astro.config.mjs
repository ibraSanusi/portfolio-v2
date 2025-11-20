// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercelAdapter from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercelAdapter(),
  vite: {
    plugins: [tailwindcss()]
  },
  env: {
    schema: {
      MAIL_PASS: envField.string({ context: "server", access: "secret", optional: false }),
    }
  }
});