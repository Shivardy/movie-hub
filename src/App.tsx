import { Router } from "@reach/router";
import { SkeletonTheme } from "react-loading-skeleton";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { appContext } from "./AppContext";
import Home from "./sections/Home";
import Movie from "./sections/Movie";
import Movies from "./sections/Movies";
import NavBar from "./sections/NavBar";
import Person from "./sections/Person";
import Search from "./sections/Search";
import Tv from "./sections/Tv";
import TvShows from "./sections/TvShows";
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
  const { isDarkMode, displaySearch } = appContext();
  const theme = getTheme(isDarkMode);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SkeletonTheme
        color={theme.colors.surface2}
        highlightColor={theme.colors.surface1}
      >
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <NavBar />
          {displaySearch ? <Search /> : null}
          <Router basepath={process.env.PUBLIC_URL} primary={false}>
            <Home path="/" />
            <Movies path="/movie" />
            <TvShows path="tv" />
            <Movie path="/movie/:movieId" />
            <Tv path="/tv/:tvId" />
            <Person path="/person/:personId" />
          </Router>
        </QueryClientProvider>
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default App;
