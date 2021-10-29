import React from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';
import { AppContextProvider } from './AppContext';
import ContentByGenres from './Components/ContentByGenres';
import DiscoverMovies from './Components/DiscoverMovies';
import Trending from './Components/Trending';
import useDarkMode from './hooks/useDarkMode';
import { swrConfig } from './services/api';
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
          <SWRConfig value={swrConfig}>
            <Trending />
            <DiscoverMovies />
            <ContentByGenres />
          </SWRConfig>
        </SkeletonTheme>
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;
