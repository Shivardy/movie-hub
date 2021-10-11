import { useReducer } from 'react';
import createContext from './hooks/createContext';
import { Trending } from './types/Trending';

type State = {
  trending: Trending;
};
const initialState: State = {
  trending: {
    movie: [],
    tv: [],
  },
};

type ActionType = {
  type: 'UPDATE_TRENDING_BY_DAY';
  payload: Trending;
};

export type ActionTypes = ActionType['type'];

function appReducer(state: State, action: ActionType): State {
  switch (action.type) {
    case 'UPDATE_TRENDING_BY_DAY':
      return {
        ...state,
        trending: action.payload,
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