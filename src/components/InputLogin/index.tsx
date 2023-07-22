import { ReactNode } from 'react'
import * as S from './styles'

import { TextInputProps } from 'react-native'

type InputLoginProps = {
  children: ReactNode
} & TextInputProps

export const InputLogin = ({ children, ...props }: InputLoginProps) => {
  return (
    <S.Container>
      {children}
      <S.Input {...props} />
    </S.Container>
  )
}
