import type { PluginMessageType } from './enum';

export type PluginMessage = {
  type: PluginMessageType.ON_CHANGE_SELECTION;
  characters: string[];
};

export type PluginMessageEvent = MessageEvent<{ pluginMessage: PluginMessage; pluginId: string }>;
