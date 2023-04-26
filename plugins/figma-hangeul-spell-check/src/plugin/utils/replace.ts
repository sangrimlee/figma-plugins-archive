import type { SpellCheckResult } from '@/shared/types';

export function replaceCharacter(character: string, results: SpellCheckResult[]) {
  return results.reduce((prev, result) => prev.replaceAll(result.origin, result.checked), character);
}

export async function replaceTextNode(textNode: TextNode, results: SpellCheckResult[]) {
  if (textNode.fontName !== figma.mixed) {
    await figma.loadFontAsync(textNode.fontName);
  }
  textNode.characters = replaceCharacter(textNode.characters, results);
}

export function replaceNodeCharacter(textNodes: TextNode[], results: SpellCheckResult[]) {
  return Promise.all(textNodes.map((textNode) => replaceTextNode(textNode, results)));
}
