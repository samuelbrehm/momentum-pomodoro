import React from 'react';
// import 'jest-styled-components/native';
import 'react-native-gesture-handler/jestSetup';
import { render } from '@testing-library/react-native';
import { OnboardingOne } from '../OnboardingOne';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from '../../../resources/styles/theme';

describe('OnboardingOne', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={DarkTheme}>
        <OnboardingOne />
      </ThemeProvider>,
    );
    // expect(getByTestId('onboarding-one')).toBeTruthy();
    expect(getByTestId('onboarding-one')).toBeDefined();
  });
});
