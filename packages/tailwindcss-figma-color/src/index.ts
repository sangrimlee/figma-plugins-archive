import plugin from 'tailwindcss/plugin';

import { darkTheme, lightTheme } from './constants/theme';
import { allVariables, frequentlyUsedVariables } from './constants/variables';
import { createFigmaColorTheme } from './utils/createColorTheme';

interface Options {
  prefix?: string;
  addRootVariables?: 'light' | 'dark';
  useOnlyFrequentlyUsed?: boolean;
}

const figmaColorPlugin = plugin.withOptions<Options>(
  ({ addRootVariables } = {}) => {
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
export default figmaColorPlugin;
