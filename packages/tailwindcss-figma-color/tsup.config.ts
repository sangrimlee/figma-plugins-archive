import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  outDir: './dist',
  format: ['cjs'],
  sourcemap: true,
  clean: true,
  dts: true,
});