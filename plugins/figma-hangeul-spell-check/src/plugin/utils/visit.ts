import { isFrameOrGroupNode } from './check-node';

export function* visit(node: SceneNode): Generator<SceneNode, void> {
  yield node;
  if (isFrameOrGroupNode(node)) {
    for (const child of node.children) {
      yield* visit(child);
    }
  }
}
