import { requestPassportKey, requestSpellCheck } from './api';
import { retry } from './api.utils';
import { joinWithLimit, removeDuplicate } from './utils';

export async function spellCheck(characters: string[]) {
  const queries = joinWithLimit(characters, 300);
  const passportKey = await requestPassportKey();
  const results = await Promise.all(queries.map((query) => retry(() => requestSpellCheck(query, passportKey), 2)));
  return removeDuplicate(results.flatMap((result) => result));
}
