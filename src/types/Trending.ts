import { Media, MediaType } from './common';

export interface TrendingMovies {
  page: number;
  results: TrendingMoviesResult[];
  total_pages: number;
  total_results: number;
}

interface TrendingMoviesResult {
  overview: string;
  release_date: string;
  adult: boolean;
  backdrop_path: string;
  vote_count: number;
  genre_ids: number[];
  original_title: string;
  original_language: OriginalLanguage;
  id: number;
  poster_path: string;
  title: string;
  video: boolean;
  vote_average: number;
  popularity: number;
  media_type: MediaType;
}

enum OriginalLanguage {
  En = 'en',
  Nl = 'nl',
}

export interface TrendingTv {
  page: number;
  results: TrendingTvResult[];
  total_pages: number;
  total_results: number;
}

interface TrendingTvResult {
  first_air_date: string;
  name: string;
  original_name: string;
  origin_country: string[];
  overview: string;
  vote_count: number;
  vote_average: number;
  id: number;
  backdrop_path: string;
  poster_path: string;
  genre_ids: number[];
  original_language: string;
  popularity: number;
  media_type: MediaType;
}

export type Trending = {
  movie: Media[];
  tv: Media[];
};
