import { PluginMessage } from '../../shared/types';

export default function postPluginMessage(message: PluginMessage | (() => PluginMessage)) {
  if (typeof message === 'function') {
    return figma.ui.postMessage(message());
  }
  return figma.ui.postMessage(message);
}
