import * as S from './styles'
import logo from '../../assets/logo-Mova.png'
import { LoadingAnimation } from '../../components/LoadingAnimation'

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
