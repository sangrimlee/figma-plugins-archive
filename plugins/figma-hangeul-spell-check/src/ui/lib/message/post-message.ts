import type { PluginMessage } from '@/shared/types';

export function postMessage(pluginMessage: PluginMessage) {
  parent.postMessage(
    {
      pluginMessage,
    },
    'https://www.figma.com',
  );
}
