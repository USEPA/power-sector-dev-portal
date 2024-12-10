import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import md from 'vite-plugin-md';

export default defineConfig({
  plugins: [
    react(),   // Vite React plugin
    md(),      // Additional plugin, e.g., for handling markdown with frontmatter
  ],
  base: '/',
});
