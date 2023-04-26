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
    }
  | {
      type: PluginMessageType.REPLACE_SPELL_CHECK;
      results: SpellCheckResult[];
    }
  | {
      type: PluginMessageType.REPLACE_SPELL_CHECK_SUCCESS;
    };

export type PluginMessageEvent = MessageEvent<{ pluginMessage: PluginMessage; pluginId: string }>;
