import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContextProvider } from './AppContext';
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
        <Trending />
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;
