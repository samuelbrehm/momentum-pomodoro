import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import { ThemeProvider } from 'styled-components';

import { DarkTheme, LightTheme } from './src/resources/styles/theme';

import { Home } from './src/screens/Home';
import {
  OnboardingOne,
  OnboardingTwo,
  OnboardingThree,
} from './src/screens/Onboarding';

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
      <OnboardingOne />
    </ThemeProvider>
  );
};

export default App;
