import React from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';

import { Home } from './src/screens/Home';
import { DarkTheme, LightTheme } from './src/resources/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <StatusBar barStyle="light-content" />
      <Home />
    </ThemeProvider>
  );
};

export default App;
