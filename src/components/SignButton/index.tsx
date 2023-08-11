import * as S from './styles'

import { TouchableOpacityProps, ActivityIndicator } from 'react-native'

import { useTheme } from 'styled-components'

type SignButtonProps = {
  text: string
  loading?: boolean
} & TouchableOpacityProps

export const SignButton = ({ loading, text, ...props }: SignButtonProps) => {
  const theme = useTheme()

  return (
    <S.Button disabled={loading} activeOpacity={0.7} {...props}>
      {loading ? (
        <ActivityIndicator color={theme.COLORS.LIGHT} size={'large'} />
      ) : (
        <S.TextButton>{text}</S.TextButton>
      )}
    </S.Button>
  )
}
