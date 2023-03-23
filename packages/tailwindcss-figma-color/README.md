![Tailwind CSS Figma Color](https://user-images.githubusercontent.com/56021431/227128997-f88dbe9b-14a8-4bcb-8915-791f98a3cd68.png)

# Tailwind CSS Figma Color

Add figma color variables to your Figma Plugin + Tailwind CSS project.

---

## Installation

### npm

```sh
npm install -D @sangrimlee/tailwindcss-figma-color
```

### yarn

```sh
yarn add @sangrimlee/tailwindcss-figma-color
```

### pnpm

```sh
pnpm install @sangrimlee/tailwindcss-figma-color
```

---

## Documentation

Add Tailwind CSS color for styling [Figma Plugin](https://www.figma.com/plugin-docs/) use with css variables provided by Figma.

For more information, please visit [Figma Plugin - CSS Variables and Theming](https://www.figma.com/plugin-docs/css-variables/).

### Configuration

```js
// tailwind.config.js
const { figmaColorPlugin } = require('@sangrimlee/tailwindcss-figma-color');

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

### Options

- `prefix`: `string` (defaultValue: `figma`)
  - **prefix** color for theme
  - ex: `bg-${prefix}-bg-brand`
- `addRootVariables`: `light | dark | false` (defaultValue: `false`)
  - add css variables in `:root`
- `useOnlyFrequentlyUsed`: `boolan` (defaultValue: `false`)
  - Whether to use only frequently used variables
  - https://www.figma.com/plugin-docs/css-variables/#frequently-used-tokens

### Example

```html
<html class="bg-figma-bg text-figma-text">
  <!-- ... -->
</html>
```
