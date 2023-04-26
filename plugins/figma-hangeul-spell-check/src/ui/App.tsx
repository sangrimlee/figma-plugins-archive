import { SpellCheckResult } from './contents/SpellCheckResult';
import { SpellCheckTab } from './contents/SpellCheckTab';
import { useContent } from './context/ContentContext';

const App = () => {
  const { content } = useContent();

  return content !== 'result' ? <SpellCheckTab /> : <SpellCheckResult />;
};

export default App;
