import { NavigationContainer } from '@react-navigation/native'
import { TabNavigation } from './tabs.routes'

export const Routes = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  )
}
