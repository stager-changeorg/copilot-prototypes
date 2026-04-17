import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/agentation-widget.jsx'),
      name: 'AgentationWidget',
      formats: ['iife'],
      fileName: () => 'agentation-widget.js',
    },
    outDir: 'public',
    emptyOutDir: false,
  },
});
