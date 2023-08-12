import * as S from './styles'
import LottieView from 'lottie-react-native'

export const LoadingAnimation = () => {
  return (
    <S.Container>
      <LottieView
        source={require('../../assets/loading.json')}
        autoPlay={true}
        style={{
          width: 150,
          height: 150,
        }}
      />
    </S.Container>
  )
}
