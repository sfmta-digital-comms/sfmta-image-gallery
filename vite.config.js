import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs', // Output build files to the /docs folder
    emptyOutDir: true, // Clear the folder before building
    rollupOptions: {
      plugins: [], // Add any Rollup plugins you need here
    },
  },
  base: '/sfmta-image-gallery/', // Base URL for GitHub Pages (repository name)
  resolve: {
    alias: {
      // Define any path aliases here, if needed
    },
  },
});
