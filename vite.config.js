import { defineConfig } from 'vite';

export default defineConfig({
  base: './',                 /* <-- Cámbialo a './' */
  root: "./",                 
  publicDir: "./public",
  plugins: [],
  server: { port: 1234 },
  build: {
    outDir: "./dist",
  }
});