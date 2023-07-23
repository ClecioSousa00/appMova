// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '../../services/firebaseConfig'
import * as S from './styles'
// import { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'

import logo from '../../assets/logo-Mova.png'
import { InputLogin } from '../../components/InputLogin'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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

export const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserSchemaProps>({
    resolver: zodResolver(CreateUserSchema),
  })

  const handleSignUp = (data: CreateUserSchemaProps) => {
    console.log(data)
    console.log('oi')
  }
  console.log('mandndando', errors.email?.message)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.Logo source={logo} />
        <S.Title>Crie Sua Conta</S.Title>
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
        <S.Button activeOpacity={0.5} onPress={handleSubmit(handleSignUp)}>
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
