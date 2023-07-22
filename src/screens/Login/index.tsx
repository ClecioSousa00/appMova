// import { createUserWithEmailAndPassword } from 'firebase/auth'
import * as S from './styles'
// import { auth } from '../../services/firebaseConfig'
// import { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'

import logo from '../../assets/logo-Mova.png'
import { InputLogin } from '../../components/InputLogin'
export const Login = () => {
  //
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.Logo source={logo} />
        <S.Title>Crie Sua Conta</S.Title>
        <InputLogin placeholder="Email">
          <S.Icon name="email" />
        </InputLogin>
        <InputLogin placeholder="Password" secureTextEntry={true}>
          <S.Icon name="lock" />
        </InputLogin>
        <S.Button activeOpacity={0.5}>
          <S.TextButton>inscrever-se</S.TextButton>
        </S.Button>
      </S.Container>
    </TouchableWithoutFeedback>
  )
}

// const [email, setEmail] = useState()
// const [password, setPassword] = useState()
// const [user, setUser] = useState()

// const handleLogin = () => {
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user
//       console.log(user)
//       setUser(user)

//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code
//       const errorMessage = error.message
//       console.log('erro no login: ', errorMessage)

//       // ..
//     })
// }
