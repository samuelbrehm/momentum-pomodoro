import 'styled-components';
import { DarkTheme, LightTheme } from './theme';

declare module 'styled-components' {
  type DarkThemeType = typeof DarkTheme;
  type LightThemeType = typeof LightTheme;

  export interface DefaultTheme extends DarkThemeType {}
  export interface DefaultTheme extends LightThemeType {}
}
