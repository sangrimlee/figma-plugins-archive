import manifest from '../../manifest.json';

import { PluginMessage, PluginMessageType } from '../shared/types';
import changeTextNodesContent from './figma/changeTextNodesContent';
import postPluginMessage from './figma/postPluginMessage';
import { getFormStateFromStroage, setFormStateStorage } from './figma/storage';

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
    case PluginMessageType.INIT:
      const isSelectedTextNode = figma.currentPage.selection.some((node) => node.type === 'TEXT');
      getFormStateFromStroage().then((formState) => {
        figma.ui.postMessage({
          type: PluginMessageType.SET_INITIAL_STATE,
          isSelectedTextNode,
          formState,
        });
      });
      return;
    case PluginMessageType.CHANGE_TEXT_NODE_CONTENT:
      changeTextNodesContent(msg.content);
      return;
    case PluginMessageType.ON_CHANGE_FORM_STATE:
      setFormStateStorage(msg.formState);
      return;
  }
};
