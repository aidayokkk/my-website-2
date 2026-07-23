import { defineConfig } from 'vite';

export default defineConfig({
  build: {
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