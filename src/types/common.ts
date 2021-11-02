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

export enum MovieType {
  Popular = 'popular',
  Upcoming = 'upcoming',
}

export type Genre = {
  id: number;
  name: string;
};

export type Genres = Genre[];

export type State = {};

export interface AppContext extends State {
  dispatch: React.Dispatch<any>;
}
