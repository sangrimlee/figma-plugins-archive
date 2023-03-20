import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { PluginMessageEvent, PluginMessageType } from '../../shared/types';

interface AppState {
  textNodes: string[];
  isSelectedTextNode: boolean;
}

const AppStateContext = createContext<AppState>({
  textNodes: [],
  isSelectedTextNode: false,
});
AppStateContext.displayName = 'AppStateContext';

export const useAppState = () => useContext(AppStateContext);

interface AppStateProviderProps {
  children: React.ReactNode;
}

export const AppStateProvider = ({ children }: AppStateProviderProps) => {
  const [textNodes, setTextNodes] = useState<string[]>([]);

  const contextValue = useMemo(
    () => ({
      textNodes,
      isSelectedTextNode: textNodes.length !== 0,
    }),
    [textNodes],
  );

  useEffect(() => {
    console.log(textNodes);
  }, [textNodes]);

  useEffect(() => {
    onmessage = ({ data: { pluginMessage: msg } }: PluginMessageEvent) => {
      if (msg.type !== PluginMessageType.SELECTION_CHANGE) {
        return;
      }
      setTextNodes(msg.textNodes);
    };
    return () => {
      onmessage = null;
    };
  }, []);

  return <AppStateContext.Provider value={contextValue}>{children}</AppStateContext.Provider>;
};
