import React from 'react';
import { render } from '../../../utils/testUtils';
import { OnboardingOne } from '../OnboardingOne';

describe('OnboardingOne', () => {
  it('should render correctly', () => {
    const { getByTestId, toJSON } = render(<OnboardingOne />);
    expect(getByTestId('onboarding-one')).toBeDefined();
    expect(getByTestId('onboarding-one')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
