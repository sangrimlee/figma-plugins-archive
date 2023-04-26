import manifest from '../../manifest.json';
import { findAllTextNode } from './utils/find';

figma.showUI(__html__, { title: manifest.name, themeColors: true, width: 440, height: 440 });

figma.on('selectionchange', () => {
  const { selection } = figma.currentPage;
  const textNodes = findAllTextNode(selection);
  console.log(textNodes);
});
