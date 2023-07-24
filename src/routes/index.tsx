import { NavigationContainer } from '@react-navigation/native'
import { StackNavigation } from './stack.routes'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import { auth } from '../services/firebaseConfig'
import { StackAuthNavigation } from './authRoutes'
import { onAuthStateChanged } from 'firebase/auth'
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
    console.log('splash das rotas')
    return <Splash />
  }

  return (
    <NavigationContainer>
      {user ? <StackNavigation /> : <StackAuthNavigation />}
    </NavigationContainer>
  )
}

// import { auth } from '../services/firebaseConfig'
// import { onAuthStateChanged } from 'firebase/auth'

// const [user, setUser] = useState()
//   useEffect(() => {
//     const subscriber = onAuthStateChanged(auth, setUser)
//     return subscriber
//   }, [])
