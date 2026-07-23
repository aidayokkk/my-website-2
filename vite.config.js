import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'docs', 
    rollupOptions: {
      input: {
        main: './app.html', 
      },
    },
  },
  server: {
    open: '/app.html', 
  },
});