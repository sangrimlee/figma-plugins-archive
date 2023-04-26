import { isTextNode } from './check-node';
import { visit } from './visit';

export const findAllCharacters = (nodes: readonly SceneNode[]) => {
  const characters = [];

  for (const rootNode of nodes) {
    for (const node of visit(rootNode)) {
      if (isTextNode(node)) {
        characters.push(node.characters);
      }
    }
  }

  return characters;
};

export function findAllCharactersInSelection() {
  return findAllCharacters(figma.currentPage.selection);
}

export function findAllCharactersInPage() {
  return findAllCharacters(figma.currentPage.children);
}
