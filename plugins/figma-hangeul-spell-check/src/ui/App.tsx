import { BoxIcon, LayersIcon } from '@radix-ui/react-icons';

import * as Tab from './components/Tab';
import { SpellCheckByLayer } from './contents/SpellCheckByLayer';
import { SpellCheckByPage } from './contents/SpellCheckByPage';

const App = () => {
  return (
    <Tab.Root defaultValue="page">
      <Tab.List aria-label="맞춤법 검사 단위">
        <Tab.Trigger value="page">
          <BoxIcon className="mr-2" />
          Page
        </Tab.Trigger>
        <Tab.Trigger value="layer">
          <LayersIcon className="mr-2" />
          Layer
        </Tab.Trigger>
      </Tab.List>
      <Tab.Content value="page">
        <SpellCheckByPage />
      </Tab.Content>
      <Tab.Content value="layer">
        <SpellCheckByLayer />
      </Tab.Content>
    </Tab.Root>
  );
};

export default App;
