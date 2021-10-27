import { ImageSize } from '../utils/constants';

export type ImageType = keyof typeof ImageSize;

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
  | ContentByGenre
  | UpdateGenres;

type ContentByGenre = {
  type: 'UPDATE_MOVIES_BY_GENRE' | 'UPDATE_TV_BY_GENRE';
  payload: {
    data: Media[];
    genreId: number;
  };
};

type UpdateGenres = {
  type: 'UPDATE_GENRES';
  payload: {
    tvGenres: Genre[];
    movieGenres: Genre[];
  };
};

export type ActionTypes = ActionObjects['type'];

export interface AppContext extends State {
  dispatch: React.Dispatch<ActionObjects>;
}
