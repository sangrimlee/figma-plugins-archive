import manifest from '../../manifest.json';
import { onChangeSelectionHandler } from './lib/handlers';

figma.skipInvisibleInstanceChildren = true;

figma.showUI(__html__, { title: manifest.name, themeColors: true, width: 384, height: 448 });

figma.on('selectionchange', onChangeSelectionHandler);
