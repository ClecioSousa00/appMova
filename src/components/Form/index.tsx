import * as S from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { InputLogin } from './InputLogin'
import logo from '../../assets/logo-Mova.png'
import { useState } from 'react'
import { SignButton } from '../SignButton'

const CreateUserSchema = z.object({
  email: z
    .string({ required_error: 'E-mail não informado' })
    .email('Formato de e-mail inválido'),
  password: z
    .string({ required_error: 'Senha não informada' })
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

export type CreateUserSchemaProps = z.infer<typeof CreateUserSchema>

type FormProps = {
  textButton: string
  title: string
  loading: boolean
  handleSign: (data: CreateUserSchemaProps) => void
}

export const Form = ({ loading, title, handleSign, textButton }: FormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserSchemaProps>({
    resolver: zodResolver(CreateUserSchema),
  })

  const [hidePassword, setHidePassword] = useState(true)
  console.log('error da senha', errors.password)

  return (
    <S.Container>
      <S.Logo source={logo} />
      <S.Title>{title}</S.Title>
      <InputLogin
        name="email"
        control={control}
        error={errors.email && errors.email?.message}
        placeholder="Email"
      >
        <S.Icon name="email" error={errors.email} />
      </InputLogin>
      <InputLogin
        name="password"
        control={control}
        error={errors.password && errors.password?.message}
        placeholder="Password"
        secureTextEntry={hidePassword}
      >
        <S.Icon name="lock" error={errors.password} />
        <S.ButtonEye onPress={() => setHidePassword(!hidePassword)}>
          {hidePassword ? (
            <S.IconEye name="eye-off" error={errors.password} />
          ) : (
            <S.IconEye name="eye" />
          )}
        </S.ButtonEye>
      </InputLogin>
      <SignButton
        text={textButton}
        onPress={handleSubmit(handleSign)}
        loading={loading}
        style={{
          shadowOffset: { width: -2, height: 4 },
          shadowColor: '#E21221',
          shadowOpacity: 0.9,
          shadowRadius: 3,
          elevation: 9,
        }}
      />
      {/* <S.Button
        style={{
          shadowOffset: { width: -2, height: 4 },
          shadowColor: '#E21221',
          shadowOpacity: 0.9,
          shadowRadius: 3,
          elevation: 9,
        }}
        activeOpacity={0.5}
        onPress={handleSubmit(handleSign)}
      >
        <S.TextButton>{textButton}</S.TextButton>
      </S.Button> */}
    </S.Container>
  )
}
