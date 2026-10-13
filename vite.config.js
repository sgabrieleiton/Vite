import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Vite/',              /* <-- ¡Esta línea es la que falta! */
  root: "./",                 /* index.html fuera de src/ */
  publicDir: "./public",
  plugins: [],
  server: { port: 1234 },
  build: {
    outDir: "./dist",
  }
});