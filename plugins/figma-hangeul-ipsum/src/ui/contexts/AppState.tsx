import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { PluginMessageEvent, PluginMessageType } from '../../shared/types';

interface AppState {
  isSelectedTextNode: boolean;
}

const AppStateContext = createContext<AppState>({
  isSelectedTextNode: false,
});
AppStateContext.displayName = 'AppStateContext';

export const useAppState = () => useContext(AppStateContext);

interface AppStateProviderProps {
  children: React.ReactNode;
}

export const AppStateProvider = ({ children }: AppStateProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSelectedTextNode, setIsSelectedTextNode] = useState<boolean>(false);

  const contextValue = useMemo(
    () => ({
      isSelectedTextNode,
    }),
    [isSelectedTextNode],
  );

  useEffect(() => {
    parent.postMessage(
      {
        pluginMessage: { type: PluginMessageType.INIT },
      },
      'https://www.figma.com',
    );
  }, []);

  useEffect(() => {
    onmessage = ({ data: { pluginMessage: msg } }: PluginMessageEvent) => {
      switch (msg.type) {
        case PluginMessageType.SET_INITIAL_STATE:
          setIsLoading(false);
          setIsSelectedTextNode(msg.isSelectedTextNode);
          return;
        case PluginMessageType.SELECTION_CHANGE:
          setIsSelectedTextNode(msg.isSelectedTextNode);
          return;
      }
    };
    return () => {
      onmessage = null;
    };
  }, []);

  return <AppStateContext.Provider value={contextValue}>{!isLoading && children}</AppStateContext.Provider>;
};
