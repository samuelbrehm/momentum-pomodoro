import React from 'react';
import { render } from '../../../utils/testUtils';
import { OnboardingThree } from '../OnboardingThree';

describe('OnboardingThree', () => {
  it('should render correctly', () => {
    const component = render(<OnboardingThree />);
    expect(component).toBeDefined();
    expect(component).toBeTruthy();
    expect(component.toJSON()).toMatchSnapshot();
  });
});
