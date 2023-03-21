import manifest from '../../manifest.json';
import { PluginMessageType } from '../shared/enum';
import type { PluginMessage } from '../shared/types';
import {
  handleChangeSelection,
  handleChangeTextNodeContentMessage,
  handleInitMessage,
  handleOnChangeFormStateMessage,
} from './figma/message';

figma.showUI(__html__, { title: manifest.name, themeColors: true, width: 440, height: 440 });

figma.on('selectionchange', handleChangeSelection);

// eslint-disable-next-line
figma.ui.onmessage = async (msg: PluginMessage) => {
  switch (msg.type) {
    case PluginMessageType.INIT:
      await handleInitMessage();
      break;
    case PluginMessageType.CHANGE_TEXT_NODE_CONTENT:
      await handleChangeTextNodeContentMessage(msg.formState);
      break;
    case PluginMessageType.ON_CHANGE_FORM_STATE:
      await handleOnChangeFormStateMessage(msg.formState);
      break;
    default:
      break;
  }
};
