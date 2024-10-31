import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/capd-test-docs/app/', 
    server: {
        open: true 
    },
});
