import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { PluginMessageType } from '@/shared/enum';
import type { PluginMessageEvent, SpellCheckResult } from '@/shared/types';

interface SpellCheckContextValue {
  characters: string[];
  spellCheckResults: SpellCheckResult[];
  setSpellCheckResults: React.Dispatch<React.SetStateAction<SpellCheckResult[]>>;
  removeSpellCheckResult: (origin: string) => void;
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
  const [spellCheckResults, setSpellCheckResults] = useState<SpellCheckResult[]>([]);

  const removeSpellCheckResult = useCallback((origin: string) => {
    setSpellCheckResults((prev) => prev.filter((result) => result.origin !== origin));
  }, []);

  const contextValue = useMemo(
    () => ({ characters, spellCheckResults, setSpellCheckResults, removeSpellCheckResult }),
    [characters, spellCheckResults, removeSpellCheckResult],
  );

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

  return <SpellCheckContext.Provider value={contextValue}>{children}</SpellCheckContext.Provider>;
};
