
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vite automatically serves files in 'public' from the root path
  publicDir: 'public',
  server: {
    port: 3000,
    host: true
  },
  build: {
    // Redirect output to the requested external folder
    outDir: '../ranches-dist',
    // Required to be true when outDir is outside of root
    emptyOutDir: true,
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'lucide-react', 'react-router-dom'],
        }
      }
    }
  }
});
