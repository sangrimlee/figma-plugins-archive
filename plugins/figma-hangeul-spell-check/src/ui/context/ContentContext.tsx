import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { PluginMessageType } from '@/shared/enum';

import { usePrevious } from '../hooks/usePrevious';
import { postMessage } from '../lib/message';

interface ContentContextValue {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  setPrevContent: () => void;
}

const ContentContext = createContext<ContentContextValue | null>(null);
ContentContext.displayName = 'ContentContext';

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === null) {
    throw new Error();
  }
  return context;
};

export const ContentProvider = ({ children }: { children: React.ReactNode }) => {
  const [content, setContent] = useState<string>('page');
  const prevContent = usePrevious(content);

  const setPrevContent = useCallback(() => {
    setContent(prevContent ?? 'page');
  }, [prevContent]);

  const contextValue = useMemo(() => ({ content, setContent, setPrevContent }), [content, setPrevContent]);

  useEffect(() => {
    postMessage({
      type: PluginMessageType.ON_CHANGE_CONTENT,
      content,
    });
  }, [content]);

  return <ContentContext.Provider value={contextValue}>{children}</ContentContext.Provider>;
};
