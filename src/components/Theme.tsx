import { ThemeProvider } from 'styled-components/native'
import { DarkTheme, LightTheme } from '../resources/styles/theme'
import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'

interface IThemeProps {
  children: JSX.Element
}

const Theme = ({ children }: IThemeProps) => {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider theme={colorScheme === 'dark' ? DarkTheme : LightTheme}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={
          colorScheme === 'dark'
            ? DarkTheme.colors.background
            : LightTheme.colors.background
        }
      />
      {children}
    </ThemeProvider>
  )
}

export default Theme
