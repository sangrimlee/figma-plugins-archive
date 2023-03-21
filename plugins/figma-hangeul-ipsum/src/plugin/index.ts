import manifest from '../../manifest.json';

import { PluginMessage, PluginMessageType } from '../shared/types';
import changeTextNodesContent from './figma/changeTextNodesContent';
import postPluginMessage from './figma/postPluginMessage';

figma.showUI(__html__, { title: manifest.name, themeColors: true, width: 440, height: 440 });

figma.on('selectionchange', () => {
  const isSelectedTextNode = figma.currentPage.selection.some((node) => node.type === 'TEXT');

  postPluginMessage({
    type: PluginMessageType.SELECTION_CHANGE,
    isSelectedTextNode,
  });
});

figma.ui.onmessage = (msg: PluginMessage) => {
  switch (msg.type) {
    case PluginMessageType.CHANGE_TEXT_NODE_CONTENT:
      changeTextNodesContent(msg.content);
      return;
    case PluginMessageType.INIT:
      postPluginMessage(() => {
        const isSelectedTextNode = figma.currentPage.selection.some((node) => node.type === 'TEXT');
        return {
          type: PluginMessageType.SET_INITIAL_STATE,
          isSelectedTextNode,
        };
      });
      return;
  }
};
