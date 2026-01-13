
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
    outDir: 'dist',
    target: 'esnext',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'lucide-react'],
        }
      }
    }
  }
});
