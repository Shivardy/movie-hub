import { Genre } from "./common";

export interface PopularMovies {
  page: number;
  results: MovieResult[];
  total_pages: number;
  total_results: number;
}

export interface UpcomingMovies {
  dates: Dates;
  page: number;
  results: MovieResult[];
  total_pages: number;
  total_results: number;
}

export interface TrendingMovies {
  page: number;
  results: MovieResult[];
  total_pages: number;
  total_results: number;
}

export interface GenreMovies {
  page: number;
  results: MovieResult[];
  total_pages: number;
  total_results: number;
}

interface Dates {
  maximum: string;
  minimum: string;
}

export interface MovieResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
