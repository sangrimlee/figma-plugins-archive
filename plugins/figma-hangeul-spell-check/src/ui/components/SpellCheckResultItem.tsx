import { ArrowRightIcon, DotFilledIcon } from '@radix-ui/react-icons';

import { Button } from './Button';

const a = `이 거친 이성은 끝까지 튼튼하며, 무한한 할지라도 힘있다.`;

const b = `미묘한 열매를 없으면, 그들은 청춘의 속잎나고, 무엇을 우는 풍부하게 있는가?  무엇을 우는 풍부하게 있는가?`;

export const SpellCheckResultItem = () => {
  return (
    <div className="border-figma-border rounded-md border p-3 text-sm">
      <div className="mb-2 flex items-center font-bold">맞춤법 오류</div>
      <p className="mb-2">
        <span className="text-figma-text-danger line-through">{a}</span>
        <span className="text-figma-icon-secondary mx-2">
          <ArrowRightIcon className="mb-1 inline-block" />
        </span>
        <span className="text-figma-text-brand">{b}</span>
      </p>
      <div className="flex justify-end gap-x-2">
        <Button variant="brand" size="sm">
          수정
        </Button>
        <Button variant="secondary" size="sm">
          취소
        </Button>
      </div>
    </div>
  );
};
