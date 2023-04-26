import { SpellCheckReason } from '@/shared/enum';
import type { SpellCheckResult } from '@/shared/types';

const ORIGIN_REGEX = /<span (?:[^<>/]+)>([^<>/]+)<\/span>/g;
const RESULT_REGEX = /<em class='([^<>/]+)'>([^<>/]+)<\/em>/g;

export function getSpellCheckReason(reason: string) {
  switch (reason) {
    case 'green_text':
      return SpellCheckReason.WRONG_SPACING;
    case 'red_text':
      return SpellCheckReason.WRONG_SPELLING;
    case 'purple_text':
      return SpellCheckReason.AMBIGUOUS;
    case 'blue_text':
      return SpellCheckReason.STATISTICAL_CORRECTION;
    default:
      throw Error('잘못된 맞춤법 오류입니다.');
  }
}

export function getSpellCheckeResult(origin: string, result: string): SpellCheckResult[] {
  const origins = Array.from(origin.matchAll(ORIGIN_REGEX)).map((matched) => matched[1]);
  return Array.from(result.matchAll(RESULT_REGEX)).map((matched, i) => ({
    reason: getSpellCheckReason(matched[1]),
    origin: origins[i],
    checked: matched[2],
  }));
}

export function joinWithLimit(characters: string[], limit: number) {
  const joined: string[] = [];

  let current = '';

  for (const character of characters) {
    if (limit <= current.length + character.length) {
      joined.push(current);
      current = character;
    } else {
      current = `${current} ${character}`;
    }
  }
  joined.push(current);

  return joined;
}
