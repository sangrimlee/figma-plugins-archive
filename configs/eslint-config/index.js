/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['simple-import-sort', '@typescript-eslint/eslint-plugin'],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'turbo',
    'prettier',
  ],
  rules: {
    'arrow-body-style': 'off',
    'no-nested-ternary': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: false,
        fixStyle: 'separate-type-imports',
      },
    ],
  },
  ignorePatterns: [
    '**/.next/**',
    '**/.turbo/**',
    '**/node_modules/**',
    '**/build/**',
    '**/dist/**',
    '**/*.js',
    '**/*.mjs',
    '**/*.jsx',
  ],
};
