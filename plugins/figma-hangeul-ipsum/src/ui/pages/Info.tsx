import { NodeBadge } from '../components/NodeBadge';

const Info = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <h1 className="mb-4 flex items-center text-sm font-semibold">
        텍스트를 생성하고자하는 <NodeBadge type="TEXT" />를 선택해주세요.
      </h1>
    </div>
  );
};

export default Info;
