const { figmaColorPlugin } = require('@sangrimlee/tailwindcss-figma-color');

const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/ui/index.html', './src/ui/**/*.{ts,tsx}'],
  safelist: [
    /* Color for spell check reason */
    { pattern: /wrong-(red|yelloow|blue|violet)/ },
  ],
  plugins: [
    figmaColorPlugin({
      addRootVariables: isProduction ? false : 'light',
      useOnlyFrequentlyUsed: false,
    }),
  ],
};
