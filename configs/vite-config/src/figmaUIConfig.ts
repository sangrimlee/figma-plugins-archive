import path from 'node:path';

import react from '@vitejs/plugin-react-swc';
import type { UserConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import tsconfigPaths from 'vite-tsconfig-paths';

interface UserFigmaUIConfig {
  root?: string;
  outDir?: string;
}

export const figmaUIConfig = ({ root = './src/ui', outDir = './dist' }: UserFigmaUIConfig = {}): UserConfig => {
  return {
    root: path.join(process.cwd(), root),
    plugins: [react(), viteSingleFile(), tsconfigPaths()],
    build: {
      target: 'es6',
      cssCodeSplit: false,
      assetsInlineLimit: 0,
      chunkSizeWarningLimit: 0,
      outDir: path.join(process.cwd(), outDir),
      emptyOutDir: false,
      minify: 'esbuild',
      sourcemap: false,
    },
  };
};
