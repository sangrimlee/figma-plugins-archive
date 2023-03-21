import { PluginMessageType, StorageKey } from '@/shared/enum';
import type { GenerateFormState } from '@/shared/types';

import { generateContent } from '../lib/generate';
import { getClientStorage, setClientStorage } from './storage';
import { changeTextNodeContent, getIsSelectedTextNode, getSelectedTextNode, postPluginMessage } from './utils';

export async function handleInitMessage() {
  const formState = await getClientStorage<GenerateFormState>(StorageKey.FORM_STATE, { unit: 'word', count: '1' });
  const isSelectedTextNode = getIsSelectedTextNode();
  postPluginMessage({
    type: PluginMessageType.SET_INITIAL_STATE,
    formState,
    isSelectedTextNode,
  });
}

export function handleOnChangeFormStateMessage(formState: GenerateFormState) {
  return setClientStorage<GenerateFormState>(StorageKey.FORM_STATE, formState);
}

export function handleChangeTextNodeContentMessage(formState: GenerateFormState) {
  const content = generateContent(formState);
  return Promise.all(getSelectedTextNode().map((textNode) => changeTextNodeContent(textNode, content)));
}

export function handleChangeSelection() {
  const isSelectedTextNode = getIsSelectedTextNode();
  postPluginMessage({
    type: PluginMessageType.ON_CHANGE_SELECTION,
    isSelectedTextNode,
  });
}
