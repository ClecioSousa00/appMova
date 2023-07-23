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
  error,
  children,
  ...props
}: InputLoginProps) => {
  console.log('component input', error)

  return (
    <>
      <S.Container>
        {children}
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <S.Input onChangeText={onChange} value={value} {...props} />
          )}
        />
      </S.Container>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </>
  )
}
