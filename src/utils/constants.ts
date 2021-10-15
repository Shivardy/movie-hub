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
