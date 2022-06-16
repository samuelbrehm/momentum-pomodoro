import React from 'react';
// import 'jest-styled-components/native';
import 'react-native-gesture-handler/jestSetup';
import { render } from '@testing-library/react-native';
import { ButtonOnboarding } from './';
import { ThemeProvider } from 'styled-components';

import { DarkTheme, LightTheme } from '../../resources/styles/theme';

describe('OneboardingTwo', () => {
  it('should render correctly', () => {
    const component = render(
      <ThemeProvider theme={DarkTheme}>
        <ButtonOnboarding text="My Button" />
      </ThemeProvider>,
    );
    expect(component).toBeDefined();
  });
});
