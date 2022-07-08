import React from 'react';
import { render } from '../../../utils/testUtils';
import { OnboardingTwo } from '../OnboardingTwo';

describe('OneboardingTwo', () => {
  it('should render correctly', () => {
    const component = render(<OnboardingTwo />);
    expect(component).toBeDefined();
    expect(component).toBeTruthy();
  });
});
