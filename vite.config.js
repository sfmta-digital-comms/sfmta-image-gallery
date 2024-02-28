import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [], // Add any Rollup plugins you need here
    }
  },
  server: {
    proxy: {
      // Proxy API requests if needed
    }
  },
  // Add this to handle SPA fallback in production
  base: '/',
  resolve: {
    alias: {
      // Setup any aliases here
    },
  },
});
