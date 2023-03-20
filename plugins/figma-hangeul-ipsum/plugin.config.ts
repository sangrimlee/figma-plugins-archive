import path from 'path';

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      name: 'plugin',
      entry: path.resolve(__dirname, 'src', 'plugin', 'index.ts'),
      formats: ['es'],
      fileName: () => 'code.js',
    },
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: false,
    minify: 'esbuild',
  },
});
