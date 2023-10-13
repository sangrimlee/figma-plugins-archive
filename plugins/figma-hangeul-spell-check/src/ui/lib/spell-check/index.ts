import { requestPassportKey, requestSpellCheck } from './api';
import { joinWithLimit, removeDuplicate } from './utils';

export async function spellCheck(characters: string[]) {
  const queries = joinWithLimit(characters, 300);
  const passportKey = await requestPassportKey();
  const results = await Promise.all(queries.map((query) => requestSpellCheck(query, passportKey)));
  return removeDuplicate(results.flatMap((result) => result));
}
