import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import HomeView from 'Views/HomeView';

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <HomeView />
    </ThemeProvider>
  </>
);

export default App;
