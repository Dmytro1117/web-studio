import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: 'src/index.html',
        portfolio: 'src/portfolio.html',
      },
    },
  },
  plugins: [],
});
