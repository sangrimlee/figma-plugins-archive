/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', '@sangrimlee/eslint-config'],
  rules: {
    'no-param-reassign': 'off',
    'no-restricted-globals': 'off',
    'react/no-danger': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
  },
};
