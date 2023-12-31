import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { TabNavigation } from './tabs.routes'
import { MovieInfos } from '../screens/MovieInfos'

import { AllMovieSection } from '../screens/AllMovieSection'

const { Screen, Navigator } = createNativeStackNavigator()

type StackNavigationProps = {
  stackHome: undefined
  allMoviesSection: { title: string; url: string }
  movieInfos: { id: number }
}

export type StackType = NativeStackNavigationProp<StackNavigationProps>

export const StackNavigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="stackHome" component={TabNavigation} />
      <Screen name="movieScreen" component={MovieInfos} />
      <Screen name="allMoviesSection" component={AllMovieSection} />
      <Screen name="movieInfos" component={MovieInfos} />
    </Navigator>
  )
}
