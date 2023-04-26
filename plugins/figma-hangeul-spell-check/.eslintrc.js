/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@sangrimlee/eslint-config/figma-plugin'],
  rules: {
    'no-restricted-syntax': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['*.config.ts'],
};
