import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import useDarkMode from './hooks/useDarkMode';
import { getTheme, GlobalStyles } from './styles/theme';

const H1 = styled.h1`
  font-size: ${(props) => props.theme.size.xxxl};
  margin: ${(props) => props.theme.size.xxxs};
`;

function App() {
  const isDarkMode = useDarkMode();
  const theme = getTheme(isDarkMode);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="app">
        <H1>Shiva</H1>
      </div>
    </ThemeProvider>
  );
}

export default App;
