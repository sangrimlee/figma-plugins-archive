import { BoxIcon, LayersIcon } from '@radix-ui/react-icons';

import { Button } from '../components/Button';
import { NodeBadge } from '../components/NodeBadge';
import * as Tab from '../components/Tab';

const SpellCheckByLayer = () => {
  return (
    <div className="content-area">
      <div className="mb-4 flex flex-1 flex-col items-center justify-center">
        <div className="space-y-2 text-sm">
          <p className="flex items-center justify-center">
            선택한
            <NodeBadge type="TEXT" />
            <NodeBadge type="FRAME" />
          </p>
          <p className="flex items-center justify-center">
            <NodeBadge type="GROUP" />에 대해서 맞춤법 검사를 실행합니다.
          </p>
        </div>
      </div>
      <Button type="button" aria-label="선택한 레이어에 대한 맞춤법 검사하기" size="md" variant="brand" fullWidth>
        검사하기
      </Button>
    </div>
  );
};

const SpellCheckByPage = () => {
  return (
    <div className="content-area">
      <div className="mb-4 flex flex-1 flex-col items-center justify-center">
        <div className="space-y-2 text-sm">
          <p className="flex items-center justify-center">
            현재 페이지의 모든
            <NodeBadge type="TEXT" />
            <NodeBadge type="FRAME" />
          </p>
          <p className="flex items-center justify-center">
            <NodeBadge type="GROUP" />에 대해서 맞춤법 검사를 실행합니다.
          </p>
        </div>
      </div>
      <Button type="button" aria-label="선택한 레이어에 대한 맞춤법 검사하기" size="md" variant="brand" fullWidth>
        검사하기
      </Button>
    </div>
  );
};

export const SpellCheckTab = () => {
  return (
    <Tab.Root defaultValue="page">
      <Tab.List aria-label="맞춤법 검사 단위 선택">
        <Tab.Trigger value="page">
          <BoxIcon className="mr-2 h-3 w-3" />
          Page
        </Tab.Trigger>
        <Tab.Trigger value="layer">
          <LayersIcon className="mr-2 h-3 w-3" />
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
