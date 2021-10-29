import { ImageSize } from '../utils/constants';
import {
  GenreMovies,
  PopularMovies,
  TrendingMovies,
  UpcomingMovies,
} from './Movies';
import { GenreTv, TrendingTv } from './Tv';

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
};

type GenreWithData = Genre & {
  data: Media[];
};

export type State = {
  movies: {
    upcoming: Media[];
    popular: Media[];
    trending: Media[];
    genres: GenreWithData[];
  };
  tv: {
    trending: Media[];
    genres: GenreWithData[];
  };
};

export type ActionObjects =
  | TvByGenre
  | MoviesByGenre
  | TrendingMoviesByDay
  | TrendingTvByDay
  | UpdateGenres
  | UpdatePopularMovies
  | UpdateUpcomingMovies;

type UpdateUpcomingMovies = {
  type: 'UPDATE_UPCOMING_MOVIES';
  payload: UpcomingMovies;
};

type UpdatePopularMovies = {
  type: 'UPDATE_POPULAR_MOVIES';
  payload: PopularMovies;
};

type TrendingTvByDay = {
  type: 'UPDATE_TRENDING_TV_BY_DAY';
  payload: TrendingTv;
};
type TrendingMoviesByDay = {
  type: 'UPDATE_TRENDING_MOVIES_BY_DAY';
  payload: TrendingMovies;
};
type MoviesByGenre = {
  type: 'UPDATE_MOVIES_BY_GENRE';
  payload: { data: GenreMovies; genreId: number };
};

type TvByGenre = {
  type: 'UPDATE_TV_BY_GENRE';
  payload: { data: GenreTv; genreId: number };
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
