import { ImageType, Size } from '../types/Image';
import environment from './environment';

const { apiKey, baseURL, imageBaseURL } = environment;

export const getUrl = (path: string): string =>
  `${baseURL}${path}?api_key=${apiKey}`;

export function getImageURL<T extends ImageType>(
  path: string,
  type: T,
  size: Size<T>
) {
  return `${imageBaseURL}${size}${path}`;
}
