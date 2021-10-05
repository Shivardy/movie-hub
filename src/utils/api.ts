import { TrendingByDay } from '../types/TrendingByDay';
import environment from './environment';

const { apiKey, baseURL, imageBaseURL } = environment;

export const fetchTrending = async (): Promise<TrendingByDay> => {
  const path = 'trending/movie/day';
  const url = `${baseURL}${path}?api_key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

type ImageType = 'poster' | 'backdrop' | 'profile';
type Size<T extends ImageType> = T extends 'poster'
  ? 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original'
  : T extends 'backdrop'
  ? 'w300' | 'w780' | 'w1280' | 'original'
  : T extends 'profile'
  ? 'w45' | 'w185' | 'original'
  : never;

export function getImageURL<T extends ImageType>(
  path: string,
  type: T,
  size: Size<T>
) {
  return `${imageBaseURL}${size}${path}`;
}
