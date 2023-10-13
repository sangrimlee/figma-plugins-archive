export function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function retry<R>(fetchFn: () => Promise<R>, retries: number, delayMs = 500): Promise<R> {
  if (retries === 0) {
    throw new Error('RETRY_EXCEED');
  }
  return fetchFn().catch(() => wait(delayMs).then(() => retry(fetchFn, retries - 1, delayMs)));
}

export function getProxyUrl(url: string | URL) {
  const u = typeof url === 'string' ? url : url.toString();
  return `https://corsproxy.io/?${encodeURIComponent(u)}`;
}

interface HttpRequestOptions {
  proxy: boolean;
  params: Record<string, string | number>;
}

export async function httpRequest(requestUrl: string, options?: RequestInit & Partial<HttpRequestOptions>) {
  const defaultOptions: HttpRequestOptions = {
    proxy: false,
    params: {},
  };

  const { proxy, params, ...init } = { ...defaultOptions, ...options };
  const url = new URL(requestUrl);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.append(key, value.toString());
  }

  const res = await fetch(proxy ? getProxyUrl(url) : url, init);

  if (!res.ok) {
    throw new Error('NETWORK_REQUEST_FAILED');
  }

  return res;
}
