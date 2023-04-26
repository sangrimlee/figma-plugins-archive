import { ArrowRightIcon } from '@radix-ui/react-icons';

import { PluginMessageType, SpellCheckReason } from '@/shared/enum';
import type { SpellCheckResult } from '@/shared/types';

import { useSpellCheck } from '../context/SpellCheckContext';
import { postMessage } from '../lib/message';
import { Button } from './Button';

const reasonMessage: Record<SpellCheckReason, string> = {
  [SpellCheckReason.AMBIGUOUS]: '표준어 오류',
  [SpellCheckReason.STATISTICAL_CORRECTION]: '통계적 오류',
  [SpellCheckReason.WRONG_SPACING]: '띄어쓰기 오류',
  [SpellCheckReason.WRONG_SPELLING]: '맞춤법 오류',
};

interface SpellCheckResultItemProps {
  spellCheckResult: SpellCheckResult;
}

export const SpellCheckResultItem = ({ spellCheckResult }: SpellCheckResultItemProps) => {
  const { removeSpellCheckResult } = useSpellCheck();

  const replaceSpellCheck = () => {
    postMessage({
      type: PluginMessageType.REPLACE_SPELL_CHECK,
      results: [spellCheckResult],
    });
    removeSpellCheckResult(origin);
  };

  return (
    <div className="border-figma-border rounded-md border p-3 text-sm">
      <div className="mb-2 flex items-center font-bold">{reasonMessage[spellCheckResult.reason]}</div>
      <p className="mb-2">
        <span className="text-figma-text-danger line-through">{spellCheckResult.origin}</span>
        <span className="text-figma-icon-secondary mx-1">
          <ArrowRightIcon className="mb-1 inline-block" />
        </span>
        <span className="text-figma-text-brand">{spellCheckResult.checked}</span>
      </p>
      <div className="flex justify-end gap-x-2">
        <Button variant="brand" size="sm" onClick={replaceSpellCheck}>
          수정
        </Button>
        <Button variant="secondary" size="sm" onClick={() => removeSpellCheckResult(origin)}>
          취소
        </Button>
      </div>
    </div>
  );
};
