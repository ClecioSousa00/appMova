import * as S from './styles'
import { LoadingAnimation } from '../../components/LoadingAnimation'
import logo from '../../assets/logo-Mova.png'

export const Splash = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Logo source={logo} />
        <LoadingAnimation />
      </S.Content>
    </S.Container>
  )
}
