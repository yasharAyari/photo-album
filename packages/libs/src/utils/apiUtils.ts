import { BASE_URL, IMAGE_URL } from '../constants';

export const isReactNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

export function getImageUrl(urlToken: string): string {
  if (urlToken.length === 0) {
    return urlToken;
  }
  return `${BASE_URL}${IMAGE_URL}${urlToken}.jpg`;
}

export async function fetchData<T>(path: string, options?: RequestInit): Promise<T> {
  const url = isReactNative
    ? BASE_URL // Real API for mobile
    : '';                   // Proxy route for web
  const res = await fetch(`${url}${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API error ${res.status}: ${errorText}`);
  }

  return res.json();
}
