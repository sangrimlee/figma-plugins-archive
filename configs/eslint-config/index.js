/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['simple-import-sort'],
  extends: ['airbnb-base', 'turbo', 'prettier'],
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
  },
};
