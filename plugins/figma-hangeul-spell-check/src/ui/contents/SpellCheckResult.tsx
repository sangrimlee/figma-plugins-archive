import clsx from 'clsx';

import { Button } from '../components/Button';
import { SpellCheckResultItem } from '../components/SpellCheckResultItem';

export const SpellCheckResult = () => {
  return (
    <div>
      <div className="flex h-12 items-center p-4">
        <h1 className="font-bold">검사 결과</h1>
      </div>
      <ul className="space-y-4 px-4 pb-20">
        {[1, 2, 3, 4, 5].map((v) => (
          <SpellCheckResultItem key={v} />
        ))}
      </ul>
      <div
        className={clsx(
          'fixed inset-x-0 bottom-0 z-10 flex items-center justify-end gap-x-2 border-t p-3',
          'bg-figma-bg border-figma-border ',
        )}
      >
        <Button variant="brand" size="md">
          모두 수정
        </Button>
        <Button variant="secondary" size="md">
          취소
        </Button>
      </div>
    </div>
  );
};
