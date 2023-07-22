import { createUserWithEmailAndPassword } from 'firebase/auth'
import * as S from './styles'
import { auth } from '../../services/firebaseConfig'
import { useState } from 'react'
export const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [user, setUser] = useState()

  const handleLogin = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        setUser(user)

        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('erro no login: ', errorMessage)

        // ..
      })
  }
  return (
    <>
      <h1>hello</h1>
    </>
  )
}
