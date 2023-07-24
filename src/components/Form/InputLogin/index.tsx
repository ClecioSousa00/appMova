import { ReactNode } from 'react'
import * as S from './styles'

import { TextInputProps } from 'react-native'
import { Control, Controller } from 'react-hook-form'

type InputLoginProps = {
  children: ReactNode
  name: string
  control: Control
  error?: string
} & TextInputProps

export const InputLogin = ({
  name,
  control,
  error = '',
  children,
  ...props
}: InputLoginProps) => {
  return (
    <S.Container>
      <S.ContainerInput error={error}>
        {children}
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <S.Input onChangeText={onChange} value={value} {...props}></S.Input>
          )}
        />
      </S.ContainerInput>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Container>
  )
}
