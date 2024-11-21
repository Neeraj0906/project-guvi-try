import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        // Manual chunking to reduce chunk sizes
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.split('node_modules/')[1].split('/')[0]; // Split by package
          }
        },
      },
    },
    chunkSizeWarningLimit: 600, // Increase the warning limit if necessary
  },
});