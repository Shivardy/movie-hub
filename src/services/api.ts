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
