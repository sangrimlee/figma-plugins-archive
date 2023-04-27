import { CheckCircledIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';

import { PluginMessageType } from '@/shared/enum';

import { Button } from '../components/Button';
import { SpellCheckResultItem } from '../components/SpellCheckResultItem';
import { useContent } from '../context/ContentContext';
import { useSpellCheck } from '../context/SpellCheckContext';
import { postMessage } from '../lib/message';

const SpellCheckResultList = () => {
  const { spellCheckResults } = useSpellCheck();

  return (
    <ul className="space-y-4 px-4 pb-20">
      {spellCheckResults.map((result) => (
        <SpellCheckResultItem key={result.origin} spellCheckResult={result} />
      ))}
    </ul>
  );
};

export const SpellCheckResult = () => {
  const { setPrevContent } = useContent();
  const { spellCheckResults } = useSpellCheck();

  const replaceAllSpellCheck = () => {
    postMessage({
      type: PluginMessageType.REPLACE_SPELL_CHECK,
      results: spellCheckResults,
    });
  };

  return (
    <div>
      <div className="mt-3 mb-2.5 px-4">
        <h1 className="font-bold tracking-tight">검사 결과</h1>
      </div>
      {spellCheckResults.length === 0 ? (
        <div className="mt-10 flex justify-center">
          <div
            className={clsx(
              'flex items-center rounded-md py-1.5 px-2.5',
              'bg-figma-bg-success-tertiary text-figma-text-success',
            )}
          >
            <CheckCircledIcon className="mr-1 h-4 w-4" />
            <div className="text-sm font-medium">수정할 내용이 없습니다.</div>
          </div>
        </div>
      ) : (
        <SpellCheckResultList />
      )}
      <div
        className={clsx(
          'fixed inset-x-0 bottom-0 z-10 flex items-center justify-end gap-x-2 border-t p-3',
          'bg-figma-bg border-figma-border ',
        )}
      >
        <Button variant="brand" size="md" disabled={spellCheckResults.length === 0} onClick={replaceAllSpellCheck}>
          모두 수정
        </Button>
        <Button variant="secondary" size="md" onClick={setPrevContent}>
          취소
        </Button>
      </div>
    </div>
  );
};
