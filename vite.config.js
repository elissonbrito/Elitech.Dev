import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' permite publicar em GitHub Pages, Render ou qualquer subpasta.
export default defineConfig({
  plugins: [react()],
  base: './',
});
