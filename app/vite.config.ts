import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import md from 'vite-plugin-md';

export default defineConfig({
  plugins: [
    react(),
    md({
      markdownIt: {
        html: true,
        linkify: true,
        typographer: true,
      },

      frontmatter: true,
    }),
  ],
  base: '/',
});
