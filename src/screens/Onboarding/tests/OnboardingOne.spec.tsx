import React from 'react';
import { render } from '../../../utils/testUtils';
import { OnboardingOne } from '../OnboardingOne';

describe('OnboardingOne', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<OnboardingOne />);
    expect(getByTestId('onboarding-one')).toBeDefined();
  });
});
