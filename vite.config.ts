// the following reference line allows "test" from vitest
// to be used in defineConfig
/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    //increase the size of chunks from 500 to 1000
    chunkSizeWarningLimit: 600,
    //the following will remove warnings for these files:
    //node_modules/js-sha256/src/sha256.js
    //src/context/PropDrilling/L1-SimpleState.jsx
    //src/context/ContextSample/L1-SimpleContext.jsx
    rollupOptions: {
      // external: ['react-redux', 'react-router', 'react-router-dom', 'redux'],
      onwarn: ({ loc }) => {
        if (loc?.file?.match(/sha256.js$|src\/context/)) return;
      },
    },
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  plugins: [
    react(),
    visualizer({
      emitFile: true,
      filename: 'stats.html',
      template: 'sunburst',
    }),
    eslint(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
  },
});
