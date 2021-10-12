import { useReducer } from 'react';
import createContext from './hooks/createContext';
import { Media } from './types/common';
import { Trending } from './types/Trending';

type State = {
  trending: Trending;
  movies: {
    upcoming: Media[];
    popular: Media[];
  };
};
const initialState: State = {
  trending: {
    movie: [],
    tv: [],
  },
  movies: {
    upcoming: [],
    popular: [],
  },
};

type ActionType =
  | {
      type: 'UPDATE_TRENDING_BY_DAY';
      payload: Trending;
    }
  | {
      type: 'UPDATE_POPULAR_MOVIES';
      payload: Media[];
    }
  | {
      type: 'UPDATE_UPCOMING_MOVIES';
      payload: Media[];
    };

export type ActionTypes = ActionType['type'];

function appReducer(state: State, action: ActionType): State {
  switch (action.type) {
    case 'UPDATE_TRENDING_BY_DAY':
      return {
        ...state,
        trending: action.payload,
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
    default:
      return state;
  }
}

interface AppContext extends State {
  dispatch: React.Dispatch<ActionType>;
}

const [appContext, AppProvider] = createContext<AppContext>();

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return <AppProvider value={{ ...state, dispatch }}>{children}</AppProvider>;
};

export { appContext };
