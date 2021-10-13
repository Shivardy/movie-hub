import { MediaType } from './common';

export interface TrendingTv {
  page: number;
  results: TVResult[];
  total_pages: number;
  total_results: number;
}

export interface GenreTv {
  page: number;
  results: TVResult[];
  total_pages: number;
  total_results: number;
}

export interface TVResult {
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
