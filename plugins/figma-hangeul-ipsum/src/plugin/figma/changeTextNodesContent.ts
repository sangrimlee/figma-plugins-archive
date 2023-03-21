export default function changeTextNodesContent(content: string) {
  for (const node of figma.currentPage.selection) {
    if (node.type !== 'TEXT') {
      return;
    }
    if (node.fontName === figma.mixed) {
      node.characters = content;
      return;
    }
    figma
      .loadFontAsync(node.fontName)
      .then(() => {
        node.characters = content;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
