import plugin from 'tailwindcss/plugin';

import { darkTheme, lightTheme } from './constants/theme';
import { allVariables, frequentlyUsedVariables } from './constants/variables';
import { createFigmaColorTheme } from './utils/createColorTheme';

interface Options {
  /**
   * The prefix used for the colors. This defaults to `figma`.
   *
   * @defaultValue `figma`
   *
   * @example
   * ```html
   *  <div class="bg-figma-bg-brand"></div>
   * ```
   */
  prefix?: string;
  /**
   * Whether to add figma theme css variables. This defaults to `false`.
   *
   * The following base styles will be added.
   * ```css
   * :root {
   *   --figma-color-bg: 'rgba(255, 255, 255, 1)';
   *   ...
   * }
   * ```
   *
   * @defaultValue `false`
   */
  addRootVariables?: 'light' | 'dark' | false;
  /**
   * Whether to use only frequently used variables. This defaults to `false`.
   *
   * @see {@link https://www.figma.com/plugin-docs/css-variables/#frequently-used-tokens}
   *
   * @defaultValue `false`
   */
  useOnlyFrequentlyUsed?: boolean;
}

export const figmaColorPlugin = plugin.withOptions<Options>(
  ({ addRootVariables = false } = {}) => {
    return ({ addBase }) => {
      if (!addRootVariables) {
        return;
      }
      const theme = addRootVariables === 'light' ? lightTheme : darkTheme;
      addBase({
        ':root': {
          ...theme,
        },
      });
    };
  },
  ({ prefix = 'figma', useOnlyFrequentlyUsed = false } = {}) => {
    const variables = useOnlyFrequentlyUsed ? frequentlyUsedVariables : allVariables;
    return {
      theme: {
        extend: {
          colors: {
            ...createFigmaColorTheme(prefix, variables),
          },
        },
      },
    };
  },
);
