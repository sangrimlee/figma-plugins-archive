import { getSpellCheckeResult } from './utils';

interface SpellCheckResult {
  errata_count: number;
  origin_html: string;
  html: string;
  notag_html: string;
}

interface SpellCheckResponse {
  message: {
    error: string;
    result: SpellCheckResult;
  };
}

export async function requestSpellCheck(query: string, passportKey: string) {
  const url = new URL('https://m.search.naver.com/p/csearch/ocontent/util/SpellerProxy');
  url.searchParams.append('q', query);
  url.searchParams.append('color_blindness', '0');
  url.searchParams.append('passportKey', passportKey);
  url.searchParams.append('where', 'nexearch');

  const res = await fetch(url, { method: 'GET', headers: { referer: 'https://m.search.naver.com' } });

  if (!res.ok) {
    throw new Error('NETWORK_REQUEST_FAILED');
  }

  const {
    message: {
      error,
      result: { origin_html: origin, html: result },
    },
  } = (await res.json()) as SpellCheckResponse;

  if (error === '유효한 키가 아닙니다') {
    throw new Error('INVALID_KEY');
  }

  return getSpellCheckeResult(origin, result);
}

export async function requestPassportKey() {
  const url = new URL('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8');
  url.searchParams.set('query', '맞춤법검사');
  const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(url.toString())}`;
  const res = await fetch(proxyUrl, {
    method: 'GET',
    headers: { referer: 'https://search.naver.com' },
  });

  if (!res.ok) {
    throw new Error('NETWORK_REQUEST_FAILED');
  }

  const html = await res.text();
  const matched = /passportKey=([a-zA-Z0-9]+)/.exec(html);
  if (!matched) {
    throw new Error('CAN_NOT_FIND_PASSPORT_KEY');
  }
  return matched[1];
}
