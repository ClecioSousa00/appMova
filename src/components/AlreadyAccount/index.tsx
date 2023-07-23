import { useNavigation } from '@react-navigation/native'
import * as S from './styles'
import { StackType } from '../../routes/stack.routes'

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
  const navigation = useNavigation<StackType>()
  const handleNavigate = () => {
    if (routeName === 'signUp') {
      navigation.navigate('signUp')
    } else {
      navigation.navigate('signIn')
    }
  }
  return (
    <S.Container>
      <S.AccountMessage>{text}</S.AccountMessage>
      <S.ButtonSign onPress={handleNavigate}>
        <S.ButtonSignText>{buttonText}</S.ButtonSignText>
      </S.ButtonSign>
    </S.Container>
  )
}
// não tem uma conta cadastre-se//
// Já tem uma conta? Entrar
