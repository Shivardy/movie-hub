import { Router } from "@reach/router";
import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { AppContextProvider } from "./AppContext";
import useDarkMode from "./hooks/useDarkMode";
import Home from "./sections/Home";
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
            <Router>
              <Home path="/" />
            </Router>
          </QueryClientProvider>
        </SkeletonTheme>
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;
