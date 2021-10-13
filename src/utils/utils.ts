import { ImageType, Media, Size } from '../types/common';
import { MovieResult } from '../types/Movies';
import { TVResult } from '../types/Tv';
import environment from './environment';

const { apiKey, baseURL, imageBaseURL } = environment;

export const getUrl = (path: string, queryString = ''): string =>
  `${baseURL}${path}?api_key=${apiKey}${queryString}`;

export function getImageURL<T extends ImageType>(
  path: string,
  type: T,
  size: Size<T>
) {
  return `${imageBaseURL}${size}${path}`;
}

export const getMoviesFromApiResult = (results: MovieResult[]): Media[] => {
  const movies = results.map(
    ({
      title,
      id,
      backdrop_path,
      poster_path,
      vote_average,
      release_date,
    }) => ({
      title,
      id,
      backdrop_path,
      poster_path,
      vote_average,
      release_date,
    })
  );
  return movies;
};

export const getTVsFromApiResult = (results: TVResult[]): Media[] => {
  const tvs = results.map(
    ({
      name,
      id,
      backdrop_path,
      poster_path,
      vote_average,
      first_air_date,
    }) => ({
      title: name,
      release_date: first_air_date,
      id,
      backdrop_path,
      poster_path,
      vote_average,
    })
  );
  return tvs;
};
