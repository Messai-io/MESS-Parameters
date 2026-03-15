import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/MESS-Parameters/',
  resolve: {
    alias: {
      '@data': path.resolve(__dirname, '../data'),
      '@params': path.resolve(__dirname, '../parameters'),
    },
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
});
