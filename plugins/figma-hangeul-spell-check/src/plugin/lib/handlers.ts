import { PluginMessageType } from '@/shared/enum';

import { findAllCharacters } from '../utils/find';
import { postPluginMessage } from '../utils/post-message';

export function onChangeSelectionHandler() {
  const characters = findAllCharacters(figma.currentPage.selection);
  postPluginMessage({
    type: PluginMessageType.ON_CHANGE_SELECTION,
    characters,
  });
}
