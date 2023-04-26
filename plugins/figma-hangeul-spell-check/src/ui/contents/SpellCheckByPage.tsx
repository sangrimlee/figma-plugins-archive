import { Button } from '../components/Button';
import { NodeBadge } from '../components/NodeBadge';

export const SpellCheckByPage = () => {
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
