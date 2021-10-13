export type ImageType = 'poster' | 'backdrop' | 'profile';

export type Size<T extends ImageType> = T extends 'poster'
  ? 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original'
  : T extends 'backdrop'
  ? 'w300' | 'w780' | 'w1280' | 'original'
  : T extends 'profile'
  ? 'w45' | 'w185' | 'original'
  : never;

export type Media = {
  title: string;
  id: number;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
};

export enum MediaType {
  Movie = 'movie',
  Tv = 'tv',
}

export type Genre = {
  id: number;
  name: string;
  data: Media[];
};

export type State = {
  movies: {
    upcoming: Media[];
    popular: Media[];
    trending: Media[];
    genres: Genre[];
  };
  tv: {
    trending: Media[];
    genres: Genre[];
  };
};

export type ActionObjects =
  | {
      type:
        | 'UPDATE_TRENDING_MOVIES_BY_DAY'
        | 'UPDATE_TRENDING_TV_BY_DAY'
        | 'UPDATE_UPCOMING_MOVIES'
        | 'UPDATE_POPULAR_MOVIES';
      payload: Media[];
    }
  | ContentByGenre;

export type ContentByGenre = {
  type: 'UPDATE_MOVIES_BY_GENRE' | 'UPDATE_TV_BY_GENRE';
  payload: {
    data: Media[];
    genreId: number;
  };
};

export type ActionTypes = ActionObjects['type'];

export interface AppContext extends State {
  dispatch: React.Dispatch<ActionObjects>;
}
