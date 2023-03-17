/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@sangrimlee/eslint-config'],
  ignorePatterns: ['tsup.config.ts'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
