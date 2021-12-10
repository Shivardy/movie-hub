import { Router } from "@reach/router";
import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { AppContextProvider } from "./AppContext";
import useDarkMode from "./hooks/useDarkMode";
import Home from "./sections/Home";
import Movie from "./sections/Movie";
import Person from "./sections/Person";
import Tv from "./sections/Tv";
import { getTheme, GlobalStyles } from "./styles/theme";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

function App() {
  const isDarkMode = useDarkMode();
  const theme = getTheme(isDarkMode);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContextProvider>
        <SkeletonTheme
          color={theme.colors.surface2}
          highlightColor={theme.colors.surface1}
        >
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <Router basepath={process.env.PUBLIC_URL}>
              <Home path="/" />
              <Movie path="/movie/:movieId" />
              <Tv path="/tv/:tvId" />
              <Person path="/person/:personId" />
            </Router>
          </QueryClientProvider>
        </SkeletonTheme>
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;
