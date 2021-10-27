import { State } from '../types/common';

export const initialState: State = {
  movies: {
    upcoming: [],
    popular: [],
    trending: [],
    genres: [],
  },
  tv: {
    trending: [],
    genres: [],
  },
};

export const ImageSize = {
  poster: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
  backdrop: ['w300', 'w780', 'w1280', 'original'],
  profile: ['w45', 'w185', 'original'],
};
