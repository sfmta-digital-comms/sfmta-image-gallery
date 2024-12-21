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
  // Update this to match your GitHub repository name
  base: '/sfmta-image-gallery/',
  resolve: {
    alias: {
      // Setup any aliases here
    },
  },
});
