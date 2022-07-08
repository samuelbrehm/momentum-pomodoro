import React from 'react'
import { render } from '../../utils/TestUtils'
import { ButtonOnboarding } from './'

describe('OneboardingTwo', () => {
  it('should render correctly', () => {
    const component = render(<ButtonOnboarding text="My Button" />)
    expect(component).toBeDefined()
  })
})
