import { PluginMessageType } from '@/shared/enum';
import type { PluginMessage } from '@/shared/types';

import { findAllCharactersInPage, findAllCharactersInSelection } from '../utils/find';
import { postPluginMessage } from '../utils/post-message';

const GLOBAL_CONTEXT = {
  content: 'page',
};

export function onChangeSelectionHandler() {
  if (GLOBAL_CONTEXT.content !== 'layer') {
    return;
  }
  postPluginMessage({
    type: PluginMessageType.SET_CHARACTERS,
    characters: findAllCharactersInSelection(),
  });
}

export function onChangeContentHandler(content: string) {
  GLOBAL_CONTEXT.content = content;
  if (content === 'page') {
    postPluginMessage({
      type: PluginMessageType.SET_CHARACTERS,
      characters: findAllCharactersInPage(),
    });
  }
  if (content === 'layer') {
    postPluginMessage({
      type: PluginMessageType.SET_CHARACTERS,
      characters: findAllCharactersInSelection(),
    });
  }
}

export function messageHandler(msg: PluginMessage) {
  switch (msg.type) {
    case PluginMessageType.ON_CHANGE_CONTENT:
      onChangeContentHandler(msg.content);
      break;
    default:
      break;
  }
}
