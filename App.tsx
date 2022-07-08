import 'react-native-gesture-handler'
import React from 'react'

import Theme from './src/components/Theme'

import { Home } from './src/screens/Home'
import {
  OnboardingOne,
  OnboardingTwo,
  OnboardingThree,
} from './src/screens/Onboarding'

const App = () => {
  return (
    <Theme>
      <OnboardingOne />
    </Theme>
  )
}

export default App
