import React from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ThemeProvider } from 'styled-components';
import { AppContextProvider } from './AppContext';
import DiscoverMovies from './Components/DiscoverMovies';
import Trending from './Components/Trending';
import useDarkMode from './hooks/useDarkMode';
import { getTheme, GlobalStyles } from './styles/theme';

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
          <Trending />
          <DiscoverMovies />
        </SkeletonTheme>
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;
