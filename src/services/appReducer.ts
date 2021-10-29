import { ActionObjects, State } from '../types/common';
import { getMoviesFromApiResult, getTVsFromApiResult } from '../utils/utils';

export default function appReducer(state: State, action: ActionObjects): State {
  switch (action.type) {
    case 'UPDATE_TRENDING_MOVIES_BY_DAY':
      return {
        ...state,
        movies: {
          ...state.movies,
          trending: getMoviesFromApiResult(action.payload.results),
        },
      };
    case 'UPDATE_TRENDING_TV_BY_DAY':
      return {
        ...state,
        tv: {
          ...state.movies,
          trending: getTVsFromApiResult(action.payload.results),
        },
      };
    case 'UPDATE_POPULAR_MOVIES':
      return {
        ...state,
        movies: {
          ...state.movies,
          popular: getMoviesFromApiResult(action.payload.results),
        },
      };
    case 'UPDATE_UPCOMING_MOVIES':
      return {
        ...state,
        movies: {
          ...state.movies,
          upcoming: getMoviesFromApiResult(action.payload.results),
        },
      };

    case 'UPDATE_MOVIES_BY_GENRE': {
      const { genres } = state.movies;
      const updatedGenres = genres.map((genre) => {
        if (genre.id === action.payload.genreId) {
          genre.data = getMoviesFromApiResult(action.payload.data.results);
        }
        return genre;
      });

      return {
        ...state,
        movies: {
          ...state.movies,
          genres: updatedGenres,
        },
      };
    }

    case 'UPDATE_TV_BY_GENRE': {
      const { genres } = state.tv;
      const updatedGenres = genres.map((genre) => {
        if (genre.id === action.payload.genreId) {
          genre.data = getTVsFromApiResult(action.payload.data.results);
        }
        return genre;
      });

      return {
        ...state,
        tv: {
          ...state.tv,
          genres: updatedGenres,
        },
      };
    }

    case 'UPDATE_GENRES': {
      return {
        ...state,
        tv: {
          ...state.tv,
          genres: action.payload.tvGenres.map((genre) => ({
            ...genre,
            data: [],
          })),
        },
        movies: {
          ...state.movies,
          genres: action.payload.movieGenres.map((genre) => ({
            ...genre,
            data: [],
          })),
        },
      };
    }

    default:
      return state;
  }
}
