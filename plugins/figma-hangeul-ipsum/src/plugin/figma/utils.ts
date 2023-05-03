import type { PluginMessage } from '@/shared/types';

export function isTextNode(node: SceneNode): node is TextNode {
  return node.type === 'TEXT';
}

export function getSelectedTextNode() {
  return figma.currentPage.selection.filter(isTextNode);
}

export function getIsSelectedTextNode() {
  return figma.currentPage.selection.some(isTextNode);
}

export async function changeTextNodeContent(textNode: TextNode, content: string) {
  if (textNode.fontName !== figma.mixed) {
    await figma.loadFontAsync(textNode.fontName);
  }
  textNode.characters = content;
}

export function postPluginMessage(message: PluginMessage) {
  figma.ui.postMessage(message);
}
