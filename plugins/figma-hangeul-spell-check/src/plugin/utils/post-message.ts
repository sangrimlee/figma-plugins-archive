import type { PluginMessage } from '@/shared/types';

export function postPluginMessage(message: PluginMessage) {
  figma.ui.postMessage(message);
}
