import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index:           resolve(__dirname, 'index.html'),
        'victory-paths': resolve(__dirname, 'victory-paths.html'),
        'copilot-chat':  resolve(__dirname, 'copilot-chat.html'),
      },
    },
  },
});
