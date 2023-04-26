import { getSpellCheckeResult } from './utils';

interface SpellCheckResponse {
  errata_count: number;
  origin_html: string;
  html: string;
  notag_html: string;
}

export async function requestSpellCheck(query: string) {
  const url = new URL('https://m.search.naver.com/p/csearch/ocontent/util/SpellerProxy?color_blindness=0');
  url.searchParams.append('q', query);
  const res = await fetch(url, { method: 'GET', headers: { referer: 'https://m.search.naver.com' } });

  if (!res.ok) {
    throw Error('네트워크 요청에 실패하였습니다.');
  }

  const {
    message: {
      result: { origin_html: origin, html: result },
    },
  } = (await res.json()) as { message: { result: SpellCheckResponse } };
  return getSpellCheckeResult(origin, result);
}
