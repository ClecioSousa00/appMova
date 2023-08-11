import * as S from './styles'

import { useNavigation } from '@react-navigation/native'

import { StackAuthType } from '../../routes/authRoutes'

type AlreadyAccountProps = {
  text: string
  buttonText: 'Entrar' | 'Cadastre-se'
  routeName: 'signUp' | 'signIn'
}

export const AlreadyAccount = ({
  text,
  buttonText,
  routeName,
}: AlreadyAccountProps) => {
  const navigation = useNavigation<StackAuthType>()
  const handleNavigate = () => {
    if (routeName === 'signUp') {
      navigation.navigate('signUp')
    } else {
      navigation.navigate('signIn')
    }
  }
  return (
    <S.ButtonSign onPress={handleNavigate} activeOpacity={0.7}>
      <S.AccountMessage>{text}</S.AccountMessage>
      <S.ButtonSignText>{buttonText}</S.ButtonSignText>
    </S.ButtonSign>
  )
}
