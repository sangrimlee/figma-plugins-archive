# Figma Plugins

[![Figma Badge](https://img.shields.io/badge/Figma-%40sangrimlee-blueviolet?labelColor=24292E)](https://figma.com/@sangrimlee) [![CI Badge](https://github.com/sangrimlee/figma-plugins/actions/workflows/ci.yml/badge.svg)](https://github.com/sangrimlee/figma-plugins/actions?query=workflow:ci)

![figma-plugin](https://user-images.githubusercontent.com/56021431/235989478-bed98a9f-8b05-400e-84b7-74b6353d1d0d.png)

## Plugins

| 이름                                                                   | 설명                        | 링크                                                                                                                                    |
| :--------------------------------------------------------------------- | :-------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [한글입숨](https://www.figma.com/community/plugin/1218854890608417355) | 무의미한 한글 텍스트 생성기 | [Repository](./plugins/figma-hangeul-ipsum/README.md), [Figma Plugin](https://www.figma.com/community/plugin/1218854890608417355)       |
| [한글맞춤](https://www.figma.com/community/plugin/1233034736208451985) | 한국어 맞춤법 검사기        | [Repository](./plugins/figma-hangeul-spell-check/README.md), [Figma Plugin](https://www.figma.com/community/plugin/1233034736208451985) |

## Skill Stack

- **Base**: [React](https://react.dev/), [TypeScript](https://typescriptlang.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/)
- **Build**: [Vite](https://vitejs.dev/), [tsup](https://tsup.egoist.dev/)
- **Other**: [pnpm](https://pnpm.io), [turborepo](https://turbo.build)

## Internal packages

- [tailwindcss-figma-color](./packages/tailwindcss-figma-color/README.md): Tailwind CSS Plugin for Figma Plugin color tokens.
