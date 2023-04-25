/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@sangrimlee/eslint-config/figma-plugin'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['*.config.ts'],
};
