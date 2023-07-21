import { NavigationContainer } from '@react-navigation/native'
import { StackNavigation } from './stack.routes'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

type TabNavigationProps = {
  home: undefined
  explore: undefined
  favorite: undefined
}
export type TabTypes = BottomTabNavigationProp<TabNavigationProps>
export const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}
