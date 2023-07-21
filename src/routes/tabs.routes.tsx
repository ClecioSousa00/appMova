import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import { Favorites } from '../screens/Favorites'
import { Explore } from '../screens/Explore'
import { useTheme } from 'styled-components'

import { Feather, Ionicons } from '@expo/vector-icons'

const { Screen, Navigator } = createBottomTabNavigator()

export const TabNavigation = () => {
  const theme = useTheme()
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.COLORS.SECONDARY,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: theme.COLORS.BACKGROUND,
          paddingBottom: 10,
          height: 60,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-sharp" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="Explorar"
        component={Explore}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Favoritos"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  )
}
