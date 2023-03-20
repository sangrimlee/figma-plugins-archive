const figmaColorPlugin = require('@sangrimlee/tailwindcss-figma-color').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/ui/index.html', './src/ui/**/*.{ts,tsx}'],
  plugins: [figmaColorPlugin],
};
