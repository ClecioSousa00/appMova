import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import { Favorites } from '../screens/Favorites'
import { Explore } from '../screens/Explore'

const { Screen, Navigator } = createBottomTabNavigator()

export const TabNavigation = () => {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="explore " component={Explore} />
      <Screen name="favorites" component={Favorites} />
    </Navigator>
  )
}
