import {
  Department,
  KnownForDepartment,
  MediaType,
  OriginalLanguage,
  OriginCountry,
} from "./common";

export interface Person {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: null;
  gender: number;
  homepage: null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  external_ids: {
    facebook_id?: string;
    instagram_id?: string;
    twitter_id?: string;
  };
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
  combined_credits: CombinedCredits;
}

interface CombinedCredits {
  cast: Cast[];
  crew: Cast[];
}

interface Cast {
  adult?: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title?: string;
  overview: string;
  poster_path: null | string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  popularity: number;
  character?: null | string;
  credit_id: string;
  order?: number;
  media_type: MediaType;
  original_name?: string;
  origin_country?: OriginCountry[];
  name?: string;
  first_air_date?: string;
  episode_count?: number;
  department?: Department;
  job?: string;
}

export interface TrendingPerson {
  page: number;
  results: TrendingPersonResult[];
  total_pages: number;
  total_results: number;
}

interface TrendingPersonResult {
  name: string;
  gender: number;
  known_for: KnownFor[];
  known_for_department: KnownForDepartment;
  id: number;
  profile_path: null | string;
  adult: boolean;
  popularity: number;
  media_type: "person";
}

interface KnownFor {
  video?: boolean;
  vote_average: number;
  popularity: number;
  overview: string;
  release_date?: string;
  id: number;
  adult?: boolean;
  backdrop_path: null | string;
  media_type: "person";
  genre_ids: number[];
  title?: string;
  original_language: OriginalLanguage;
  original_title?: string;
  poster_path: null | string;
  vote_count: number;
  first_air_date?: string;
  original_name?: string;
  origin_country?: string[];
  name?: string;
}
