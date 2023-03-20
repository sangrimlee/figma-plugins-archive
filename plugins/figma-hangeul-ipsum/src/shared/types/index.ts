export enum PluginMessageType {
  SELECTION_CHANGE = 'SELECTION_CHANGE',
}

export type PluginMessage = {
  type: PluginMessageType.SELECTION_CHANGE;
  textNodes: string[];
};

export type PluginMessageEvent = MessageEvent<{ pluginMessage: PluginMessage; pluginId: string }>;
