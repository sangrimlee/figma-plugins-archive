export interface GenerateFormState {
  unit: string;
  count: string;
}

export enum PluginMessageType {
  INIT = 'INIT',
  SET_INITIAL_STATE = 'SET_INITIAL_STATE',
  ON_CHANGE_FORM_STATE = 'ON_CHANGE_FORM_STATE',
  SELECTION_CHANGE = 'SELECTION_CHANGE',
  CHANGE_TEXT_NODE_CONTENT = 'CHANGE_TEXT_NODE_CONTENT',
}

export type PluginMessage =
  | { type: PluginMessageType.INIT }
  | {
      type: PluginMessageType.SET_INITIAL_STATE;
      isSelectedTextNode: boolean;
      formState: GenerateFormState;
    }
  | {
      type: PluginMessageType.SELECTION_CHANGE;
      isSelectedTextNode: boolean;
    }
  | {
      type: PluginMessageType.CHANGE_TEXT_NODE_CONTENT;
      content: string;
    }
  | {
      type: PluginMessageType.ON_CHANGE_FORM_STATE;
      formState: GenerateFormState;
    };

export type PluginMessageEvent = MessageEvent<{ pluginMessage: PluginMessage; pluginId: string }>;
