import { PluginMessage } from '../../shared/types';

export default function postPluginMessage(message: PluginMessage) {
  figma.ui.postMessage(message);
}
