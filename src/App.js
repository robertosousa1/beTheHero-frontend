import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import GlobalStyle from './styles/global';

import Header from './components/Header';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
