import manifest from '../../manifest.json';
import { messageHandler, onChangeDocumentHandler, onChangePageHandler, onChangeSelectionHandler } from './lib/handlers';

figma.skipInvisibleInstanceChildren = true;

figma.showUI(__html__, { title: manifest.name, themeColors: true, width: 384, height: 448 });

figma.on('selectionchange', onChangeSelectionHandler);
figma.on('currentpagechange', onChangePageHandler);
figma.on('documentchange', onChangeDocumentHandler);
figma.ui.onmessage = messageHandler;
