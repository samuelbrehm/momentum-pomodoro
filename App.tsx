import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import { ThemeProvider } from 'styled-components';

import { Home } from './src/screens/Home';
import { DarkTheme, LightTheme } from './src/resources/styles/theme';

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={colorScheme === 'dark' ? DarkTheme : LightTheme}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={
          colorScheme === 'dark'
            ? DarkTheme.colors.background
            : LightTheme.colors.background
        }
      />
      <Home />
    </ThemeProvider>
  );
};

export default App;
