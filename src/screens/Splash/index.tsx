import * as S from './styles'
import logo from '../../assets/logo-Mova.png'
import LottieView from 'lottie-react-native'

export const Splash = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Logo source={logo} />
        <LottieView
          source={require('../../assets/loading.json')}
          autoPlay={true}
          style={{
            width: 150,
            height: 150,
          }}
        />
      </S.Content>
    </S.Container>
  )
}
