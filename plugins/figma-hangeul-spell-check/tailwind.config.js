const { figmaColorPlugin } = require('@sangrimlee/tailwindcss-figma-color');

const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/ui/index.html', './src/ui/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        hide: {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
          },
        },
        slideDown: {
          from: {
            opacity: 0,
            transform: 'translateY(calc(-100% + var(--viewport-padding)))',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        hideToast: 'hide 150ms ease-in',
        showToast: 'slideDown 200ms ease-out',
      },
    },
  },
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
