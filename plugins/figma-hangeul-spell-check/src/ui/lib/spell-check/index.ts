import { requestSpellCheck } from './api';
import { joinWithLimit, removeDuplicate } from './utils';

export async function spellCheck(characters: string[]) {
  const queries = joinWithLimit(characters, 500);

  const results = await Promise.all(queries.map((query) => requestSpellCheck(query)));
  return removeDuplicate(results.flatMap((result) => result));
}
