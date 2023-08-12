import * as S from './styles'

import { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'

import { auth } from '../../services/firebaseConfig'
import { sendPasswordResetEmail } from 'firebase/auth'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useNavigation } from '@react-navigation/native'
import { StackAuthType } from '../../routes/authRoutes'

import { InputLogin } from '../../components/Form/InputLogin'
import { SignButton } from '../../components/SignButton'

import { useTheme } from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons'

import logo from '../../assets/logo-Mova.png'

const ForgotPasswordSchema = z.object({
  email: z
    .string({ required_error: 'Email não informado' })
    .email('Formato de e-mail inválido'),
})

type ForgotPasswordSchemaProps = z.infer<typeof ForgotPasswordSchema>

export const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const theme = useTheme()
  const navigation = useNavigation<StackAuthType>()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchemaProps>({
    resolver: zodResolver(ForgotPasswordSchema),
  })

  const handleForgotPassword = (data: ForgotPasswordSchemaProps) => {
    setIsLoading(true)
    sendPasswordResetEmail(auth, data.email)
      .then(() => {
        console.log('email enviado')
        navigation.navigate('signIn')
      })
      .catch((error) => console.log('erro ao enviar email', error))
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.ButtonBack onPress={() => navigation.navigate('signIn')}>
          {/* <S.IconBack name="arrowleft" /> */}
          <MaterialIcons
            name="arrow-back"
            size={24}
            color={theme.COLORS.TEXT}
          />
        </S.ButtonBack>
        <S.Logo source={logo} />
        <S.Title>Recuperar Senha</S.Title>
        <S.Text>
          Informe o e-mail da sua conta para mandarmos um e-mail para recuperar
          a sua senha.
        </S.Text>
        <InputLogin
          control={control}
          name="email"
          error={errors.email && errors.email?.message}
          placeholder="Email"
        >
          {/* <S.Icon name="email" /> */}
          <MaterialIcons name="email" size={18} color={theme.COLORS.INACTIVE} />
        </InputLogin>
        <SignButton
          text="Enviar E-mail"
          onPress={handleSubmit(handleForgotPassword)}
          loading={isLoading}
          style={{
            shadowOffset: { width: -2, height: 4 },
            shadowColor: theme.COLORS.SECONDARY,
            shadowOpacity: 0.9,
            shadowRadius: 3,
            elevation: 9,
          }}
        />
      </S.Container>
    </TouchableWithoutFeedback>
  )
}
