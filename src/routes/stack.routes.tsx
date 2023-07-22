import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TabNavigation } from './tabs.routes'
import { MovieInfos } from '../screens/MovieInfos'
import { GetStarted } from '../screens/GetStarted'
const { Screen, Navigator } = createNativeStackNavigator()

export const StackNavigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="getStarted" component={GetStarted} />
      <Screen name="stackHome" component={TabNavigation} />
      <Screen name="movieScreen" component={MovieInfos} />
    </Navigator>
  )
}
