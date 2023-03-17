# Tailwind CSS Figma Color

Add figma color variables to your Tailwind CSS project.

## Installation

```sh
npm install @sangrimlee/tailwindcss-figma-color
```

```js
// tailwind.config.js
const figmaColorPlugin = require('@sangrimlee/tailwindcss-figma-color');

module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    figmaColorPlugin,

    // Or with options:
    figmaColorPlugin({
      // prefix for color
      prefix: 'figma'
      // add default root variables
      addRootVariables: 'light',
      // use only Frequnetly Used Variables
      useOnlyFrequentlyUsed: true,
    })
  ],
}
```

## Documentation

Add Tailwind CSS color for styling [Figma Plugin](https://www.figma.com/plugin-docs/) use with css variables provided by Figma.

For more information, please visit [Figma Plugin - CSS Variables and Theming](https://www.figma.com/plugin-docs/css-variables/).

### Example:

```html
<html class="bg-figma-bg text-figma-text">
  <!-- ... -->
</html>
```
