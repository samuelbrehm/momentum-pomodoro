import 'react-native-gesture-handler'
import React from 'react'

import Theme from './src/components/Theme'
import { Navigation } from './src/navigation/Navigation'
import { INavigationProps } from './src/navigation/INavigation'

interface IMomentumProps {
  props: INavigationProps
}

const App = ({ props }: IMomentumProps) => {
  return (
    <Theme>
      <Navigation {...props} />
    </Theme>
  )
}

export default App
