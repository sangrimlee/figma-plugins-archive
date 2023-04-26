import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { PluginMessageType } from '@/shared/enum';
import type { PluginMessageEvent } from '@/shared/types';

interface SpellCheckContextValue {
  characters: string[];
}

const SpellCheckContext = createContext<SpellCheckContextValue | null>(null);
SpellCheckContext.displayName = 'SpellCheckContext';

export const useSpellCheck = () => {
  const context = useContext(SpellCheckContext);
  if (context === null) {
    throw new Error();
  }
  return context;
};

export const SpellCheckProvider = ({ children }: { children: React.ReactNode }) => {
  const [characters, setCharacters] = useState<string[]>([]);

  useEffect(() => {
    onmessage = ({ data: { pluginMessage: msg } }: PluginMessageEvent) => {
      switch (msg.type) {
        case PluginMessageType.SET_CHARACTERS:
          setCharacters(msg.characters);
          break;
        default:
          break;
      }
    };
    return () => {
      onmessage = null;
    };
  }, []);

  const contextValue = useMemo(() => ({ characters }), [characters]);

  return <SpellCheckContext.Provider value={contextValue}>{children}</SpellCheckContext.Provider>;
};
