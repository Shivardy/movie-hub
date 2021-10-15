import { ActionObjects, State } from '../types/common';

export default function appReducer(state: State, action: ActionObjects): State {
  switch (action.type) {
    case 'UPDATE_TRENDING_MOVIES_BY_DAY':
      return {
        ...state,
        movies: {
          ...state.movies,
          trending: action.payload,
        },
      };
    case 'UPDATE_TRENDING_TV_BY_DAY':
      return {
        ...state,
        tv: {
          ...state.movies,
          trending: action.payload,
        },
      };
    case 'UPDATE_POPULAR_MOVIES':
      return {
        ...state,
        movies: {
          ...state.movies,
          popular: action.payload,
        },
      };
    case 'UPDATE_UPCOMING_MOVIES':
      return {
        ...state,
        movies: {
          ...state.movies,
          upcoming: action.payload,
        },
      };

    case 'UPDATE_MOVIES_BY_GENRE': {
      const { genres } = state.movies;
      const updatedGenres = genres.map((genre) => {
        if (genre.id === action.payload.genreId) {
          genre.data = action.payload.data;
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
          genre.data = action.payload.data;
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
          genres: action.payload.tvGenres,
        },
        movies: {
          ...state.movies,
          genres: action.payload.movieGenres,
        },
      };
    }

    default:
      return state;
  }
}
