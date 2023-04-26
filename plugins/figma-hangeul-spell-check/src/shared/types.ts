import type { PluginMessageType, SpellCheckReason } from './enum';

export interface SpellCheckResult {
  reason: SpellCheckReason;
  origin: string;
  checked: string;
}

export type PluginMessage =
  | {
      type: PluginMessageType.SET_CHARACTERS;
      characters: string[];
    }
  | {
      type: PluginMessageType.ON_CHANGE_CONTENT;
      content: string;
    };

export type PluginMessageEvent = MessageEvent<{ pluginMessage: PluginMessage; pluginId: string }>;
