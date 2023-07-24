import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { GetStarted } from '../screens/GetStarted'
import { SignUp } from '../screens/SignUp'
import { SignIn } from '../screens/SignIn'
const { Screen, Navigator } = createNativeStackNavigator()

type StackNavigationProps = {
  signUp: undefined
  signIn: undefined
  getStarted: undefined
}

export type StackAuthType = NativeStackNavigationProp<StackNavigationProps>

export const StackAuthNavigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="getStarted" component={GetStarted} />
      <Screen name="signUp" component={SignUp} />
      <Screen name="signIn" component={SignIn} />
    </Navigator>
  )
}
