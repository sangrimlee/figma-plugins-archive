import path from 'node:path';

import type { UserConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

interface UserFigmaPluginConfig {
  entry?: string;
  outDir?: string;
}

export const figmaPluginConfig = ({
  entry = 'src/plugin/index.ts',
  outDir = 'dist',
}: UserFigmaPluginConfig = {}): UserConfig => {
  return {
    plugins: [tsconfigPaths()],
    build: {
      lib: {
        name: 'plugin',
        entry: path.join(process.cwd(), entry),
        formats: ['iife'],
        fileName: () => 'code.js',
      },
      target: 'es6',
      outDir: path.join(process.cwd(), outDir),
      emptyOutDir: false,
      minify: 'esbuild',
      sourcemap: false,
    },
  };
};
