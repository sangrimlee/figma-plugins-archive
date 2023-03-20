import manifest from '../../manifest.json';
import { PluginMessageType } from '../shared/types';

figma.on('selectionchange', () => {
  const textNodes = figma.currentPage.selection.filter((node) => node.type === 'TEXT').map((node) => node.id);
  figma.ui.postMessage({
    type: PluginMessageType.SELECTION_CHANGE,
    textNodes,
  });
});

figma.showUI(__html__, { title: manifest.name, themeColors: true, width: 440, height: 440 });
