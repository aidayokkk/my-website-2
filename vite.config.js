import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
 
  base: '/my-website-2/',

  build: {
    outDir: 'docs', 
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        app: resolve(import.meta.dirname, 'app.html'),
      },
    },
  },

  server: {
    open: '/app.html', 
  },
});