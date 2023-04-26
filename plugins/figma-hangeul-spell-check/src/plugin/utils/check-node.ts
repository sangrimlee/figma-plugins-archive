export function isFrameOrGroupNode(node: SceneNode): node is FrameNode | GroupNode {
  return node.type === 'FRAME' || node.type === 'GROUP';
}

export function isTextNode(node: SceneNode): node is TextNode {
  return node.type === 'TEXT';
}
