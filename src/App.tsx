import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { AppContextProvider } from "./AppContext";
import ContentByGenres from "./sections/ContentByGenres";
import DiscoverMovies from "./sections/DiscoverMovies";
import Trending from "./sections/Trending";
import useDarkMode from "./hooks/useDarkMode";
import { getTheme, GlobalStyles } from "./styles/theme";

function App() {
  const isDarkMode = useDarkMode();
  const theme = getTheme(isDarkMode);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContextProvider>
        <SkeletonTheme
          color={theme.colors.surface2}
          highlightColor={theme.colors.surface1}
        >
          <QueryClientProvider client={queryClient}>
            <Trending />
            <DiscoverMovies />
            <ContentByGenres />
          </QueryClientProvider>
        </SkeletonTheme>
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;
