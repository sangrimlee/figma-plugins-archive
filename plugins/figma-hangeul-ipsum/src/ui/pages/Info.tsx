import { NodeBadge } from '../components/NodeBadge';
import { Tip } from '../components/Tip';

const Info = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <h1 className="mb-8 flex items-center text-sm font-semibold">
        텍스트를 생성하고자 하는 <NodeBadge type="TEXT" />를 선택해 주세요.
      </h1>
      <Tip />
    </div>
  );
};

export default Info;
