import path from 'node:path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  root: path.resolve(__dirname, 'src', 'ui'),
  plugins: [react(), viteSingleFile()],
  build: {
    target: 'es6',
    cssCodeSplit: false,
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 0,
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: false,
    minify: 'esbuild',
  },
});
