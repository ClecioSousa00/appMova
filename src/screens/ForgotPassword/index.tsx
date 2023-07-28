import * as S from './styles'
import logo from '../../assets/logo-Mova.png'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputLogin } from '../../components/Form/InputLogin'
import { auth } from '../../services/firebaseConfig'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { StackAuthType } from '../../routes/authRoutes'
import { useState } from 'react'
import { SignButton } from '../../components/SignButton'

const ForgotPasswordSchema = z.object({
  email: z
    .string({ required_error: 'Email não informado' })
    .email('Formato de e-mail inválido'),
})

type ForgotPasswordSchemaProps = z.infer<typeof ForgotPasswordSchema>

export const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation<StackAuthType>()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchemaProps>({
    resolver: zodResolver(ForgotPasswordSchema),
  })

  const handleForgotPassword = (data: ForgotPasswordSchemaProps) => {
    setIsLoading((old) => !old)
    sendPasswordResetEmail(auth, data.email)
      .then(() => {
        console.log('email enviado')
        navigation.navigate('signIn')
      })
      .catch((error) => console.log('erro ao enviar email', error))
    setIsLoading((old) => !old)
  }

  return (
    <S.Container>
      <S.ButtonBack onPress={() => navigation.navigate('signIn')}>
        <S.IconBack name="arrowleft" />
      </S.ButtonBack>
      <S.Logo source={logo} />
      <S.Title>Recuperar Senha</S.Title>
      <S.Text>
        Informe o e-mail da sua conta para mandarmos um e-mail para recuperar a
        sua senha.
      </S.Text>
      <InputLogin
        control={control}
        name="email"
        error={errors.email && errors.email?.message}
        placeholder="Email"
      >
        <S.Icon name="email" />
      </InputLogin>
      <SignButton
        text="Enviar E-mail"
        onPress={handleSubmit(handleForgotPassword)}
        loading={isLoading}
        style={{
          shadowOffset: { width: -2, height: 4 },
          shadowColor: '#E21221',
          shadowOpacity: 0.9,
          shadowRadius: 3,
          elevation: 9,
        }}
      />
      {/* <S.Button onPress={handleSubmit(handleForgotPassword)}>
        <S.TextButton>Enviar E-mail</S.TextButton>
      </S.Button> */}
    </S.Container>
  )
}
