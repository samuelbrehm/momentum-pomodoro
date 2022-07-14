import React from 'react'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

import Theme from './src/components/Theme'
import { Navigation } from './src/navigation/Navigation'
import { INavigationProps } from './src/navigation/INavigation'

interface IMomentumProps {
  props: INavigationProps
}

const App = ({ props }: IMomentumProps) => {
  return (
    <Theme>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Navigation {...props} />
      </GestureHandlerRootView>
    </Theme>
  )
}

export default App
