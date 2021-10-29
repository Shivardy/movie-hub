import {
  PublicConfiguration,
  Revalidator,
  RevalidatorOptions,
} from 'swr/dist/types';

export const fetcher = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error('Api Error');
  }
};

export const multiFetcher = (...urls: string[]) =>
  Promise.all(urls.map(fetcher));

export const swrConfig = {
  fetcher,
  revalidateOnFocus: false,
  revalidateIfStale: false,
  onErrorRetry: (
    error: any,
    key: string,
    config: PublicConfiguration,
    revalidate: Revalidator,
    { retryCount }: Required<RevalidatorOptions>
  ) => {
    // Only retry up to 3 times.
    if (retryCount >= 3) return;

    // Retry after 3 seconds.
    setTimeout(() => revalidate({ retryCount }), 3000);
  },
};
