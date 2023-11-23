import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), babel()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    open: true,
  },
  base: '/50projects-record',
  build: {
    rollupOptions: {
      input: {
        index: '/index.html',
        404: '/404.html',
      },
    },
  },
});
