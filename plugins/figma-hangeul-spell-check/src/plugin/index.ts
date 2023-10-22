import manifest from '../../manifest.json';
import { messageHandler, onChangeDocumentHandler, onChangePageHandler, onChangeSelectionHandler } from './lib/handlers';
import { debounce } from './utils/debounce';

figma.skipInvisibleInstanceChildren = true;

figma.showUI(__html__, { title: manifest.name, themeColors: true, width: 384, height: 448 });

figma.on('selectionchange', onChangeSelectionHandler);
figma.on('currentpagechange', onChangePageHandler);
figma.on('documentchange', debounce(onChangeDocumentHandler, 300));
figma.ui.onmessage = messageHandler;
