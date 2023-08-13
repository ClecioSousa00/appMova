import { useEffect, useState } from 'react'

import firebase from 'firebase/app'
import { auth } from '../services/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import { StackNavigation } from './stack.routes'
import { StackAuthNavigation } from './authRoutes'

import { Splash } from '../screens/Splash'

type TabNavigationProps = {
  home: undefined
  explore: undefined
  favorite: undefined
}
export type TabTypes = BottomTabNavigationProp<TabNavigationProps>
export const Routes = () => {
  const [user, setUser] = useState<firebase.User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  if (loading) {
    
    return <Splash />
  }

  return (
    <NavigationContainer>
      {user ? <StackNavigation /> : <StackAuthNavigation />}
    </NavigationContainer>
  )
}
