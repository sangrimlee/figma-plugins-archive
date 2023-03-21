import type { PluginMessage } from '@/shared/types';

export function getSelectedTextNode() {
  return figma.currentPage.selection.filter((node) => node.type === 'TEXT') as TextNode[];
}

export function getIsSelectedTextNode() {
  return figma.currentPage.selection.some((node) => node.type === 'TEXT');
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
