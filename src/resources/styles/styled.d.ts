import 'styled-components'
import { DarkTheme, LightTheme } from './theme'

declare module 'styled-components/native' {
  type DarkThemeType = typeof DarkTheme
  type LightThemeType = typeof LightTheme

  export interface DefaultTheme extends DarkThemeType, LightThemeType {}
}
