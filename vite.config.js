import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Determine whether we are in production mode
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs', // Use the docs directory for production builds
    emptyOutDir: true, // Clear the docs folder before building
    rollupOptions: {
      plugins: [], // Add any Rollup plugins here if needed
    },
  },
  base: isProduction ? '/sfmta-image-gallery/' : '/', // Use base path only in production
  resolve: {
    alias: {
      // Setup any path aliases if needed
    },
  },
});
