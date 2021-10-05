export interface TrendingByDay {
  page: number;
  results: TrendingByDayResult[];
  total_pages: number;
  total_results: number;
}

export interface TrendingByDayResult {
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

export enum MediaType {
  Movie = 'movie',
}

export enum OriginalLanguage {
  En = 'en',
  Nl = 'nl',
}
