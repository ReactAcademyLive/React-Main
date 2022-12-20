import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    //increase the size of chunks from 500 to 1000
    chunkSizeWarningLimit: 1000,
    //the following will remove warnings for these files:
    //node_modules/js-sha256/src/sha256.js
    //src/context/PropDrilling/L1-SimpleState.jsx
    //src/context/ContextSample/L1-SimpleContext.jsx
    rollupOptions: {
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
    visualizer({ emitFile: true, file: 'stats.html', template: 'sunburst' }),
  ],
});
