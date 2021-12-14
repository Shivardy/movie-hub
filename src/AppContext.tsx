import { useReducer } from "react";
import createContext from "./hooks/createContext";
import useDarkMode from "./hooks/useDarkMode";
import appReducer from "./services/appReducer";
import { AppContext } from "./types/common";
import { initialState } from "./utils/constants";

const [appContext, AppProvider] = createContext<AppContext>();

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <AppProvider value={{ ...state, dispatch, isDarkMode, setIsDarkMode }}>
      {children}
    </AppProvider>
  );
};

export { appContext };
