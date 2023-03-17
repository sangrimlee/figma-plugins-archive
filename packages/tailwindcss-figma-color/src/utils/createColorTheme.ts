export function createFigmaColorTheme(prefix: string, variables: string[]) {
  const colors: Record<string, string> = {};

  variables.forEach((variable) => {
    const key = variable.replace(/^--figma-color/, prefix);
    colors[key] = `var(${variable})`;
  });

  return colors;
}
