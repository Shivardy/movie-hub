import { ImageSize } from "../utils/constants";

export type ImageType = keyof typeof ImageSize;

export type ImageRatio = "2/3" | "1/1" | "16/9";

export type MediaType = "movie" | "tv" | "person";
export type MediaTypeExcludePerson = Exclude<MediaType, "person">;
export type StatusType = "latest" | "upcoming";

export type MovieType = "popular" | "upcoming";

export type Genre = {
  id: number;
  name: string;
};

export type Genres = Genre[];

export type State = {
  displaySearch: boolean;
};

type ActionTypes = {
  DISPLAY_SEARCH: "DISPLAY_SEARCH";
};
type Action = {
  type: keyof ActionTypes;
};
export interface displaySearch extends Action {
  payload: boolean;
}

export type Actions = displaySearch;

export interface AppContext extends State {
  dispatch: React.Dispatch<Actions>;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  displaySearch: boolean;
}

export interface Credits {
  cast: Cast[];
  crew: Cast[];
}

interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: string;
  job?: string;
}

export type OriginalLanguage = {
  [key: string]: string;
};

export type KnownForDepartment = {
  [key: string]: string;
};

export type Department = {
  [key: string]: string;
};

export type OriginCountry = {
  [key: string]: string;
};

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Videos {
  results: VideosResult[];
}

interface VideosResult {
  iso_639_1: OriginalLanguage;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
