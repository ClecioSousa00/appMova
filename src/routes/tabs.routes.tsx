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
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: theme.COLORS.BACKGROUND,
          paddingBottom: 10,
          height: 60,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-sharp" size={size} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />

      <Screen
        name="explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" size={size} color={color} />
          ),
          tabBarLabel: 'Explore',
        }}
      />
      <Screen
        name="favorite"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" size={size} color={color} />
          ),
          tabBarLabel: 'Favoritos',
        }}
      />
    </Navigator>
  )
}
