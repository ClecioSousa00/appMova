import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

export const ButtonGetStart = ({ ...props }: TouchableOpacityProps) => {
  return (
    <S.Button activeOpacity={0.5} {...props}>
      <S.TextButton>Iniciar</S.TextButton>
    </S.Button>
  )
}
