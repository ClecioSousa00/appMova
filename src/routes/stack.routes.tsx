import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { TabNavigation } from './tabs.routes'
import { MovieInfos } from '../screens/MovieInfos'
import { GetStarted } from '../screens/GetStarted'
import { SignUp } from '../screens/SignUp'
import { SignIn } from '../screens/SignIn'
const { Screen, Navigator } = createNativeStackNavigator()

type StackNavigationProps = {
  // signUp: undefined
  // signIn: undefined
  stackHome: undefined
}

export type StackType = NativeStackNavigationProp<StackNavigationProps>

export const StackNavigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {/* <Screen name="getStarted" component={GetStarted} />
      <Screen name="signUp" component={SignUp} />
      <Screen name="signIn" component={SignIn} /> */}
      <Screen name="stackHome" component={TabNavigation} />
      <Screen name="movieScreen" component={MovieInfos} />
    </Navigator>
  )
}
