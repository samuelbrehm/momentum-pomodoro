import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import type { ParamListBase, RouteProp } from '@react-navigation/native'

export enum RouteNames {
  OneboardingOne = 'OnboardingOne',
  OneboardingTwo = 'OnboardingTwo',
  OneboardingThree = 'OnboardingThree',
  Home = 'Home',
}

export interface INavigationProps {
  path: RouteNames
}

export interface RootStackParamList extends ParamListBase {
  OneboardingOne: undefined
  OneboardingTwo: undefined
  OneboardingThree: undefined
  Home: undefined

  // Home: IMinhasProps;
  // Profile: { userId: string };
  // Feed: { sort: 'latest' | 'top' } | undefined;
}

// interface IMinhasProps {
//   userId: string
//   param2: string
// }

export type ScreenProps<RouteNames extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteNames>

export type NavigationProps<RouteNames extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, RouteNames>

export type MomentumRouteProp<RouteNames extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteNames>
