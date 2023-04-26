import { PluginMessageType } from '@/shared/enum';
import type { PluginMessage, SpellCheckResult } from '@/shared/types';

import { findAllTextNodes } from '../utils/find';
import { postPluginMessage } from '../utils/post-message';
import { replaceNodeCharacter } from '../utils/replace';

const GLOBAL_CONTEXT = {
  content: 'page',
  textNodes: [] as TextNode[],
};

export function handleSetCharacters(nodes: readonly SceneNode[]) {
  const textNodes = findAllTextNodes(nodes);
  const characters = textNodes.map((textNode) => textNode.characters);
  postPluginMessage({
    type: PluginMessageType.SET_CHARACTERS,
    characters,
  });
  GLOBAL_CONTEXT.textNodes = textNodes;
}

export function handleSetSelectionCharacters() {
  const textNodes = findAllTextNodes(figma.currentPage.selection);
  const characters = textNodes.map((textNode) => textNode.characters);
  postPluginMessage({
    type: PluginMessageType.SET_CHARACTERS,
    characters,
  });
  GLOBAL_CONTEXT.textNodes = textNodes;
}

export function onChangeSelectionHandler() {
  if (GLOBAL_CONTEXT.content !== 'layer') {
    return;
  }
  handleSetCharacters(figma.currentPage.selection);
}

export function onChangePageHandler() {
  if (GLOBAL_CONTEXT.content !== 'page') {
    return;
  }
  handleSetCharacters(figma.currentPage.children);
}

export function onChangeContentHandler(content: string) {
  GLOBAL_CONTEXT.content = content;
  if (content !== 'page' && content !== 'layer') {
    return;
  }
  const nodes = content === 'page' ? figma.currentPage.children : figma.currentPage.selection;
  handleSetCharacters(nodes);
}

export async function onReplaceSpellCheckHandler(results: SpellCheckResult[]) {
  await replaceNodeCharacter(GLOBAL_CONTEXT.textNodes, results);
}

export async function messageHandler(msg: PluginMessage) {
  switch (msg.type) {
    case PluginMessageType.ON_CHANGE_CONTENT:
      onChangeContentHandler(msg.content);
      break;
    case PluginMessageType.REPLACE_SPELL_CHECK:
      await onReplaceSpellCheckHandler(msg.results);
      break;
    default:
      break;
  }
}
