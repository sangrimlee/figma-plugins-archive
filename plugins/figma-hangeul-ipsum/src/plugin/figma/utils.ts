import type { GenerateFormState, PluginMessage } from '@/shared/types';

export function isTextNode(node: SceneNode): node is TextNode {
  return node.type === 'TEXT';
}

export function getSelectedTextNode() {
  return figma.currentPage.selection.filter(isTextNode);
}

export function getIsSelectedTextNode() {
  return figma.currentPage.selection.some(isTextNode);
}

export async function changeTextNodeContent(textNode: TextNode, content: string, options: GenerateFormState) {
  if (textNode.fontName !== figma.mixed) {
    await figma.loadFontAsync(textNode.fontName);
  }
  if (options.type === 'replace') {
    textNode.characters = content;
    return;
  }
  const delimeter = options.unit === 'word' ? ' ' : options.unit === 'sentence' ? '\n' : '\n\n';
  textNode.characters += delimeter + content;
}

export function postPluginMessage(message: PluginMessage) {
  figma.ui.postMessage(message);
}
