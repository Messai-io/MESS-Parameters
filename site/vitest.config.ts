import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@data': path.resolve(__dirname, '../data'),
      '@params': path.resolve(__dirname, '../parameters'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    // provenance.json is ~7MB; default 5s times out when the machine is
    // under load (e.g. overnight extraction jobs, CI cold start).
    testTimeout: 30000,
  },
});
