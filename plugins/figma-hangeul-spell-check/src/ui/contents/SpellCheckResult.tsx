import clsx from 'clsx';

import { Button } from '../components/Button';
import { SpellCheckResultItem } from '../components/SpellCheckResultItem';
import { useContent } from '../context/ContentContext';
import { useSpellCheck } from '../context/SpellCheckContext';

export const SpellCheckResult = () => {
  const { setPrevContent } = useContent();
  const { spellCheckResults } = useSpellCheck();

  return (
    <div>
      <div className="flex h-12 items-center p-4">
        <h1 className="font-bold">검사 결과</h1>
      </div>
      <ul className="space-y-4 px-4 pb-20">
        {spellCheckResults.map((result) => (
          <SpellCheckResultItem key={result.origin} spellCheckResult={result} />
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
        <Button variant="secondary" size="md" onClick={setPrevContent}>
          취소
        </Button>
      </div>
    </div>
  );
};
