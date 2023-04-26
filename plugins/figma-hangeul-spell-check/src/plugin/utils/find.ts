import { isTextNode } from './check-node';
import { visit } from './visit';

export const findAllTextNodes = (nodes: readonly SceneNode[]) => {
  const textNodes = [];

  for (const rootNode of nodes) {
    for (const node of visit(rootNode)) {
      if (isTextNode(node)) {
        textNodes.push(node);
      }
    }
  }

  return textNodes;
};
