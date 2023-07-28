import * as S from './styles'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/firebaseConfig'
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import { AlreadyAccount } from '../../components/AlreadyAccount'
import { CreateUserSchemaProps, Form } from '../../components/Form'
import { useState } from 'react'

export const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const handleSign = (data: CreateUserSchemaProps) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        console.log('error code: ', errorCode)

        if (errorCode === 'auth/email-already-in-use') {
          Alert.alert(
            'Aviso',
            'Já existe uma conta com o endereço de email fornecido.',
          )
        }
        const errorMessage = error.message
        console.log('erro ao criar usuário ', errorMessage)
      })
    setIsLoading(false)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <Form
          title="Criar Conta"
          textButton="Inscrever-se"
          loading={isLoading}
          handleSign={handleSign}
        />

        <AlreadyAccount
          text="Já tem uma conta?"
          buttonText="Entrar"
          routeName="signIn"
        />
      </S.Container>
    </TouchableWithoutFeedback>
  )
}

// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '../../services/firebaseConfig'
// import * as S from './styles'
// // import { useState } from 'react'
// import { TouchableWithoutFeedback, Keyboard } from 'react-native'

// import logo from '../../assets/logo-Mova.png'
// import { InputLogin } from '../../components/InputLogin'
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useNavigation } from '@react-navigation/native'
// import { AlreadyAccount } from '../../components/AlreadyAccount'
// import { StackType } from '../../routes/stack.routes'

// // type FormDataProps = {
// //   email: string
// //   password: string
// // }

// const CreateUserSchema = z.object({
//   email: z
//     .string({ required_error: 'E-mail não informado' })
//     .email('Formato de e-mail inválido'),
//   password: z
//     .string({ required_error: 'Senha não informada' })
//     .min(6, 'A senha deve ter no mínimo 6 caracteres'),
// })

// type CreateUserSchemaProps = z.infer<typeof CreateUserSchema>

// export const SignUp = () => {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<CreateUserSchemaProps>({
//     resolver: zodResolver(CreateUserSchema),
//   })
//   const navigation = useNavigation<StackType>()

//   const handleSignUp = (data: CreateUserSchemaProps) => {
//     console.log(data)

//     createUserWithEmailAndPassword(auth, data.email, data.password)
//       .then((userCredential) => {
//         const user = userCredential.user
//         console.log(user)
//         // navigation.navigate('stackHome')
//       })
//       .catch((error) => {
//         const errorCode = error.code
//         if (errorCode === 'auth/email-already-in-use') {
//           console.log('este email já existe')
//         }
//         const errorMessage = error.message
//         console.log('erro no login: ', errorMessage)
//       })
//   }

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <S.Container>
//         <S.Logo source={logo} />
//         <S.Title>Crie Sua Conta</S.Title>
//         <InputLogin
//           name="email"
//           control={control}
//           error={errors.email && errors.email?.message}
//           placeholder="Email"
//         >
//           <S.Icon name="email" />
//         </InputLogin>
//         <InputLogin
//           name="password"
//           control={control}
//           error={errors.password && errors.password?.message}
//           placeholder="Password"
//           secureTextEntry={true}
//         >
//           <S.Icon name="lock" />
//         </InputLogin>
//         <S.Button activeOpacity={0.5} onPress={handleSubmit(handleSignUp)}>
//           <S.TextButton>inscrever-se</S.TextButton>
//         </S.Button>
//         <AlreadyAccount
//           text="Já tem uma conta?"
//           buttonText="Entrar"
//           routeName="signIn"
//         />
//       </S.Container>
//     </TouchableWithoutFeedback>
//   )
// }
