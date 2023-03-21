import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { PluginMessageType } from '@/shared/enum';
import type { GenerateFormState, PluginMessageEvent } from '@/shared/types';

interface AppState {
  isSelectedTextNode: boolean;
  formState: GenerateFormState;
  setFormState: <K extends keyof GenerateFormState>(key: K, value: GenerateFormState[K]) => void;
}

const AppStateContext = createContext<AppState | null>(null);
AppStateContext.displayName = 'AppStateContext';

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === null) {
    throw new Error('useAppState should be used in child component of <AppStateProvider />');
  }
  return context;
};

interface AppStateProviderProps {
  children: React.ReactNode;
}

export const AppStateProvider = ({ children }: AppStateProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSelectedTextNode, setIsSelectedTextNode] = useState<boolean>(false);
  const [formState, setOriginFormState] = useState<GenerateFormState>({ unit: 'word', count: '1' });

  const setFormState = useCallback(<K extends keyof GenerateFormState>(key: K, value: GenerateFormState[K]) => {
    setOriginFormState((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  useEffect(() => {
    parent.postMessage(
      {
        pluginMessage: { type: PluginMessageType.INIT },
      },
      'https://www.figma.com',
    );
  }, []);

  useEffect(() => {
    if (!isLoading) {
      parent.postMessage(
        {
          pluginMessage: { type: PluginMessageType.ON_CHANGE_FORM_STATE, formState },
        },
        'https://www.figma.com',
      );
    }
  }, [isLoading, formState]);

  useEffect(() => {
    onmessage = ({ data: { pluginMessage: msg } }: PluginMessageEvent) => {
      switch (msg.type) {
        case PluginMessageType.SET_INITIAL_STATE:
          setIsLoading(false);
          setIsSelectedTextNode(msg.isSelectedTextNode);
          setOriginFormState(msg.formState);
          break;
        case PluginMessageType.ON_CHANGE_SELECTION:
          setIsSelectedTextNode(msg.isSelectedTextNode);
          break;
        default:
          break;
      }
    };
    return () => {
      onmessage = null;
    };
  }, []);

  const contextValue = useMemo(
    () => ({
      isSelectedTextNode,
      formState,
      setFormState,
    }),
    [isSelectedTextNode, formState, setFormState],
  );

  return <AppStateContext.Provider value={contextValue}>{!isLoading && children}</AppStateContext.Provider>;
};
