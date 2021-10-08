import { Trending, TrendingMovies, TrendingTv } from '../types/Trending';
import { getUrl } from './utils';

export const fetchTrending = async (): Promise<Trending> => {
  const movieUrl = getUrl('trending/movie/day');
  const tvUrl = getUrl('trending/tv/day');

  const [trendingMovies, trendingShows] = await Promise.all(
    [movieUrl, tvUrl].map(async (url) => {
      const response = await fetch(url);
      return response.json();
    })
  );

  const movie = (trendingMovies as TrendingMovies).results.map(
    ({ title, id, backdrop_path, poster_path, vote_average }) => ({
      title,
      id,
      backdrop_path,
      poster_path,
      vote_average,
    })
  );

  const tv = (trendingShows as TrendingTv).results.map(
    ({ name, id, backdrop_path, poster_path, vote_average }) => ({
      title: name,
      id,
      backdrop_path,
      poster_path,
      vote_average,
    })
  );
  return { movie, tv };
};
