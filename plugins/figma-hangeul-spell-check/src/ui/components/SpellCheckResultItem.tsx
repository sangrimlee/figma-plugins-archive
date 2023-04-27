import { ArrowRightIcon, Cross1Icon, DotFilledIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';

import { SpellCheckReason } from '@/shared/enum';
import type { SpellCheckResult } from '@/shared/types';

import { useSpellCheck } from '../context/SpellCheckContext';

const reasonMessage: Record<SpellCheckReason, { label: string; color: string }> = {
  [SpellCheckReason.WRONG_SPELLING]: {
    label: '맞춤법 오류',
    color: 'wrong-red',
  },
  [SpellCheckReason.WRONG_SPACING]: {
    label: '띄어쓰기 오류',
    color: 'wrong-yellow',
  },
  [SpellCheckReason.AMBIGUOUS]: {
    label: '표준어 오류',
    color: 'wrong-blue',
  },
  [SpellCheckReason.STATISTICAL_CORRECTION]: {
    label: '통계적 오류',
    color: 'wrong-purple',
  },
};

interface SpellCheckResultItemProps {
  spellCheckResult: SpellCheckResult;
}

export const SpellCheckResultItem = ({ spellCheckResult }: SpellCheckResultItemProps) => {
  const { removeSpellCheckResult } = useSpellCheck();
  const { label, color } = reasonMessage[spellCheckResult.reason];

  return (
    <div className="border-figma-border relative rounded-md border py-3 px-6">
      <div className="relative mb-2 flex items-center">
        <div className="absolute right-full mr-1">
          <DotFilledIcon className={clsx('h-3 w-3', color)} />
        </div>
        <span className="text-figma-text-secondary text-xs">{label}</span>
      </div>
      <div>
        <p className="mb-2.5">
          <span
            className={clsx(
              'text-sm font-medium',
              'decoration-figma-text-danger underline decoration-wavy underline-offset-4',
            )}
          >
            {spellCheckResult.origin}
          </span>
          <span className="text-figma-icon-secondary">
            <ArrowRightIcon className="ml-1.5 mb-0.5 inline-block h-4 w-4" />
          </span>
        </p>
        <p className="text-sm font-semibold">
          <span className="bg-figma-bg-brand text-figma-text-onbrand inline-flex items-center rounded px-1.5 py-0.5">
            {spellCheckResult.checked}
          </span>
        </p>
      </div>
      <div className="absolute top-2 right-2">
        <button
          type="button"
          className={clsx('p-1 transition-colors', 'text-figma-icon-secondary hover:text-figma-icon-secondary-hover')}
          onClick={() => {
            removeSpellCheckResult(spellCheckResult.origin);
          }}
        >
          <Cross1Icon className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};
