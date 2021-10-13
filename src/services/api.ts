import { Media } from '../types/common';
import {
  GenreMovies,
  PopularMovies,
  TrendingMovies,
  UpcomingMovies,
} from '../types/Movies';
import { GenreTv, TrendingTv } from '../types/Tv';
import {
  getMoviesFromApiResult,
  getTVsFromApiResult,
  getUrl,
} from '../utils/utils';

export const fetchTrendingTV = async (): Promise<Media[]> => {
  const response = await fetch(getUrl('trending/tv/day'));
  const data = await response.json();
  const tv = getTVsFromApiResult((data as TrendingTv).results);
  return tv;
};

export const fetchTrendingMovies = async (): Promise<Media[]> => {
  const response = await fetch(getUrl('trending/movie/day'));
  const data = await response.json();
  const movies = getMoviesFromApiResult((data as TrendingMovies).results);
  return movies;
};

export const fetchPopularMovies = async (): Promise<Media[]> => {
  const response = await fetch(getUrl('movie/popular'));
  const data = await response.json();
  const movies = getMoviesFromApiResult((data as PopularMovies).results);
  return movies;
};

export const fetchUpcomingMovies = async (): Promise<Media[]> => {
  const response = await fetch(getUrl('movie/upcoming'));
  const data = await response.json();
  const movies = getMoviesFromApiResult((data as UpcomingMovies).results);
  return movies;
};

export const fetchMoviesByGenre = async (
  genreId: number
): Promise<{ genreId: number; data: Media[] }> => {
  const url = getUrl('discover/movie', `&with_genres=${genreId}`);
  const response = await fetch(url);
  const data = await response.json();
  const movies = getMoviesFromApiResult((data as GenreMovies).results);
  return { genreId, data: movies };
};

export const fetchTvByGenre = async (
  genreId: number
): Promise<{ genreId: number; data: Media[] }> => {
  const url = getUrl('discover/tv', `&with_genres=${genreId}`);
  const response = await fetch(url);
  const data = await response.json();
  const tv = getTVsFromApiResult((data as GenreTv).results);
  return { data: tv, genreId };
};
