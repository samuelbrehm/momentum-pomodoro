import React from 'react';
import 'jest-styled-components/native';
import 'react-native-gesture-handler/jestSetup';
import { render } from '@testing-library/react-native';
import { OnboardingTwo } from '../OnboardingTwo';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../../../resources/styles/theme';

describe('OneboardingTwo', () => {
  it('should render correctly', () => {
    const component = render(
      <ThemeProvider theme={DarkTheme}>
        <OnboardingTwo />
      </ThemeProvider>,
    );
    console.log('log', component.container.instance);
    component.debug();
    expect(component).toBeDefined();
  });
});
