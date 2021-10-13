import { Genre, State } from '../types/common';

export const movieGenres: Genre[] = [
  {
    id: 28,
    name: 'Action',
    data: [],
  },
  {
    id: 12,
    name: 'Adventure',
    data: [],
  },
  {
    id: 16,
    name: 'Animation',
    data: [],
  },
  {
    id: 35,
    name: 'Comedy',
    data: [],
  },
  {
    id: 80,
    name: 'Crime',
    data: [],
  },
  {
    id: 99,
    name: 'Documentary',
    data: [],
  },
  {
    id: 18,
    name: 'Drama',
    data: [],
  },
  {
    id: 10751,
    name: 'Family',
    data: [],
  },
  {
    id: 14,
    name: 'Fantasy',
    data: [],
  },
  {
    id: 36,
    name: 'History',
    data: [],
  },
  {
    id: 27,
    name: 'Horror',
    data: [],
  },
  {
    id: 10402,
    name: 'Music',
    data: [],
  },
  {
    id: 9648,
    name: 'Mystery',
    data: [],
  },
  {
    id: 10749,
    name: 'Romance',
    data: [],
  },
  {
    id: 878,
    name: 'Science Fiction',
    data: [],
  },
  {
    id: 10770,
    name: 'TV Movie',
    data: [],
  },
  {
    id: 53,
    name: 'Thriller',
    data: [],
  },
  {
    id: 10752,
    name: 'War',
    data: [],
  },
  {
    id: 37,
    name: 'Western',
    data: [],
  },
];

export const tvGenres: Genre[] = [
  {
    id: 10759,
    name: 'Action & Adventure',
    data: [],
  },
  {
    id: 16,
    name: 'Animation',
    data: [],
  },
  {
    id: 35,
    name: 'Comedy',
    data: [],
  },
  {
    id: 80,
    name: 'Crime',
    data: [],
  },
  {
    id: 99,
    name: 'Documentary',
    data: [],
  },
  {
    id: 18,
    name: 'Drama',
    data: [],
  },
  {
    id: 10751,
    name: 'Family',
    data: [],
  },
  {
    id: 10762,
    name: 'Kids',
    data: [],
  },
  {
    id: 9648,
    name: 'Mystery',
    data: [],
  },
  {
    id: 10763,
    name: 'News',
    data: [],
  },
  {
    id: 10764,
    name: 'Reality',
    data: [],
  },
  {
    id: 10765,
    name: 'Sci-Fi & Fantasy',
    data: [],
  },
  {
    id: 10766,
    name: 'Soap',
    data: [],
  },
  {
    id: 10767,
    name: 'Talk',
    data: [],
  },
  {
    id: 10768,
    name: 'War & Politics',
    data: [],
  },
  {
    id: 37,
    name: 'Western',
    data: [],
  },
];

export const initialState: State = {
  movies: {
    upcoming: [],
    popular: [],
    trending: [],
    genres: movieGenres,
  },
  tv: {
    trending: [],
    genres: tvGenres,
  },
};
