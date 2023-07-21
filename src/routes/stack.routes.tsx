import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TabNavigation } from './tabs.routes'
import { MovieInfos } from '../screens/MovieInfos'
const { Screen, Navigator } = createNativeStackNavigator()

export const StackNavigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="inicio" component={TabNavigation} />
      <Screen name="movieScreen" component={MovieInfos} />
    </Navigator>
  )
}
