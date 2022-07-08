import React from 'react';
import Theme from '../components/Theme';

import {
  cleanup,
  fireEvent,
  render as testingRender,
  waitFor,
} from '@testing-library/react-native';

export { cleanup, fireEvent, waitFor };

interface ITestWrapperProps {
  children: JSX.Element;
}

export const TestWrapper = ({ children }: ITestWrapperProps) => (
  <Theme>{children}</Theme>
);

export const render = (children: JSX.Element) =>
  testingRender(children, { wrapper: TestWrapper });
