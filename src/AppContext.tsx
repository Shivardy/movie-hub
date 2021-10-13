import { useReducer } from 'react';
import createContext from './hooks/createContext';
import appReducer from './services/appReducer';
import { AppContext } from './types/common';
import { initialState } from './utils/constants';

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
