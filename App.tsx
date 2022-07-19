import React from 'react'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

import Theme from './src/components/Theme'
import { Navigation } from './src/navigation/Navigation'
import { INavigationProps } from './src/navigation/INavigation'

import { Provider } from 'react-redux'
import { BuildStore } from './src/redux/BuildStore'

interface IMomentumProps {
  props: INavigationProps
}

const store = BuildStore()

const App = ({ props }: IMomentumProps) => {
  return (
    <Theme>
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Navigation {...props} />
        </GestureHandlerRootView>
      </Provider>
    </Theme>
  )
}

export default App
