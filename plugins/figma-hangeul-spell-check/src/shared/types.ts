import type { PluginMessageType, SpellCheckReason } from './enum';

export interface SpellCheckResult {
  reason: SpellCheckReason;
  origin: string;
  checked: string;
}

export type PluginMessage =
  | {
      type: PluginMessageType.ON_CHANGE_SELECTION;
      characters: string[];
    }
  | {
      type: PluginMessageType.SPELL_CHECK_PAGE | PluginMessageType.SPELL_CHECK_SELECTION;
    };

export type PluginMessageEvent = MessageEvent<{ pluginMessage: PluginMessage; pluginId: string }>;
