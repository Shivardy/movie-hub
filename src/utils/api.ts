import { Trending, TrendingMovies, TrendingTv } from '../types/Trending';
import { getUrl } from './utils';

export const fetchTrending = async (): Promise<Trending> => {
  // 'https://api.themoviedb.org/3/discover/movie?api_key=f274625ee8526fcb3150182ed7668864&with_original_language=te&release_date.lte=2021-10-20&sort_by=release_date.desc';
  const movieUrl = getUrl('trending/movie/day');
  const tvUrl = getUrl('trending/tv/day');

  const [trendingMovies, trendingShows] = await Promise.all(
    [movieUrl, tvUrl].map(async (url) => {
      const response = await fetch(url);
      return response.json();
    })
  );

  const movie = (trendingMovies as TrendingMovies).results.map(
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

  const tv = (trendingShows as TrendingTv).results.map(
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
  return { movie, tv };
};