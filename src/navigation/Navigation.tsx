import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OnboardingOne, OnboardingTwo, OnboardingThree, Home } from '../screens'
import { INavigationProps, RootStackParamList, RouteNames } from './INavigation'

import { useSelector } from 'react-redux'
import * as users from '../redux/users/users'

const Stack = createNativeStackNavigator<RootStackParamList>()

export function Navigation({ path }: INavigationProps) {
  const isShowOnboarding = useSelector(users.selectFirstAccess)

  useEffect(() => {
    console.log('isShowOnboarding', isShowOnboarding)
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={path}>
        {console.log('isShowOnboarding', isShowOnboarding)}
        {isShowOnboarding && (
          <>
            <Stack.Screen
              name={RouteNames.OneboardingOne}
              component={OnboardingOne}
              options={{
                headerShown: false,
                fullScreenGestureEnabled: true,
                gestureDirection: 'horizontal',
                animation: 'slide_from_right',
              }}
            />
            <Stack.Screen
              name={RouteNames.OneboardingTwo}
              component={OnboardingTwo}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={RouteNames.OneboardingThree}
              component={OnboardingThree}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
        <Stack.Screen
          name={RouteNames.Home}
          component={Home}
          options={{
            headerShown: false,
            presentation: 'fullScreenModal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
