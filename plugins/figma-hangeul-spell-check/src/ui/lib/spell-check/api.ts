import { httpRequest } from './api.utils';
import { getSpellCheckeResult } from './utils';

interface SpellCheckResult {
  errata_count: number;
  origin_html: string;
  html: string;
  notag_html: string;
}

interface SpellCheckResponse {
  message: {
    error?: string;
    result: SpellCheckResult;
  };
}

export async function requestSpellCheck(q: string, passportKey: string) {
  const res = await httpRequest('https://m.search.naver.com/p/csearch/ocontent/util/SpellerProxy', {
    method: 'GET',
    params: {
      q,
      passportKey,
      color_blindness: 0,
    },
  });

  const {
    message: {
      error,
      result: { origin_html: origin, html: result },
    },
  } = (await res.json()) as SpellCheckResponse;

  if (error) {
    throw new Error(error);
  }

  return getSpellCheckeResult(origin, result);
}

export async function requestPassportKey() {
  const res = await httpRequest('https://search.naver.com/search.naver', {
    method: 'GET',
    proxy: true,
    params: {
      query: '맞춤법검사',
    },
  });

  const html = await res.text();
  const matched = /passportKey=([a-zA-Z0-9]+)/.exec(html);
  if (!matched) {
    throw new Error('CAN_NOT_FIND_PASSPORT_KEY');
  }

  return matched[1];
}
