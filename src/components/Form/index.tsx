import * as S from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { InputLogin } from './InputLogin'
import logo from '../../assets/logo-Mova.png'
import { useState } from 'react'

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
  handleSign: (data: CreateUserSchemaProps) => void
}

export const Form = ({ title, handleSign, textButton }: FormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserSchemaProps>({
    resolver: zodResolver(CreateUserSchema),
  })

  const [hidePassword, setHidePassword] = useState(true)
  console.log('error', errors.password)

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
      <S.Button activeOpacity={0.5} onPress={handleSubmit(handleSign)}>
        <S.TextButton>{textButton}</S.TextButton>
      </S.Button>
    </S.Container>
  )
}
