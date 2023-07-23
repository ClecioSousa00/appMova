import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../../services/firebaseConfig'
import * as S from './styles'
// import { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'

import logo from '../../assets/logo-Mova.png'
import { InputLogin } from '../../components/InputLogin'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import { AlreadyAccount } from '../../components/AlreadyAccount'
import { StackType } from '../../routes/stack.routes'
import React, { useState } from 'react'

// type FormDataProps = {
//   email: string
//   password: string
// }

const CreateUserSchema = z.object({
  email: z
    .string({ required_error: 'E-mail não informado' })
    .email('Formato de e-mail inválido'),
  password: z
    .string({ required_error: 'Senha não informada' })
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

type CreateUserSchemaProps = z.infer<typeof CreateUserSchema>

export const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserSchemaProps>({
    resolver: zodResolver(CreateUserSchema),
  })
  const [email, setEmail] = useState('')
  const navigation = useNavigation<StackType>()

  const handleSignIn = (data: CreateUserSchemaProps) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
        setEmail(data.email)
        navigation.navigate('stackHome')
      })
      .catch((error) => {
        const errorCode = error.code
        // if (errorCode === 'auth/email-already-in-use') {
        //   console.log('este email já existe')
        // }
        const errorMessage = error.message
        console.log('erro ao entrar: ', errorMessage)
      })
  }

  // depois tenho que criar a mensagem de email enviado ao usuario
  const handleForgotPassword = () => {
    // sendPasswordResetEmail(auth, email)
    //   .then(() => {
    //     console.log('email enviado')
    //   })
    //   .catch((error) => console.log('erro ao enviar email', error))
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.Logo source={logo} />
        <S.Title>Faça login na sua conta</S.Title>
        <InputLogin
          name="email"
          control={control}
          error={errors.email && errors.email?.message}
          placeholder="Email"
        >
          <S.Icon name="email" />
        </InputLogin>
        <InputLogin
          name="password"
          control={control}
          error={errors.password && errors.password?.message}
          placeholder="Password"
          secureTextEntry={true}
        >
          <S.Icon name="lock" />
        </InputLogin>
        <S.Button activeOpacity={0.5} onPress={handleSubmit(handleSignIn)}>
          <S.TextButton>Entrar</S.TextButton>
        </S.Button>
        <S.ButtonForgotPassword onPress={() => handleForgotPassword}>
          <S.TextForgotPassword>Esqueceu sua senha ?</S.TextForgotPassword>
        </S.ButtonForgotPassword>
        <AlreadyAccount
          text="Não possui uma conta?"
          buttonText="Cadastre-se"
          routeName="signUp"
        />
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
