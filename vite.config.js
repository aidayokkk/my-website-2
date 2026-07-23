import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({

  base: '/my-website-2/',

  build: {
    outDir: 'docs', 
    rollupOptions: {
      input: {
  
        app: resolve(import.meta.dirname, 'app.html'),
      },
    },
  },

  server: {
    open: '/app.html',
  },
});