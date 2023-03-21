import type { PluginMessageType } from './enum';

export interface GenerateFormState {
  unit: string;
  count: string;
}

export type PluginMessage =
  | { type: PluginMessageType.INIT }
  | {
      type: PluginMessageType.SET_INITIAL_STATE;
      isSelectedTextNode: boolean;
      formState: GenerateFormState;
    }
  | {
      type: PluginMessageType.ON_CHANGE_SELECTION;
      isSelectedTextNode: boolean;
    }
  | {
      type: PluginMessageType.ON_CHANGE_FORM_STATE;
      formState: GenerateFormState;
    }
  | {
      type: PluginMessageType.CHANGE_TEXT_NODE_CONTENT;
      formState: GenerateFormState;
    };

export type PluginMessageEvent = MessageEvent<{ pluginMessage: PluginMessage; pluginId: string }>;
