import * as S from './styles'
import bgGetStarted from '../../assets/bg-getStarted.png'
import { ButtonGetStart } from '../../components/ButtonGetStart'
import { useNavigation } from '@react-navigation/native'
import { StackType } from '../../routes/stack.routes'
export const GetStarted = () => {
  const navigation = useNavigation<StackType>()
  return (
    <S.ImageBackground
      source={bgGetStarted}
      resizeMode="cover"
      imageStyle={{
        opacity: 0.8,
      }}
    >
      <S.Container colors={['rgba(24, 26, 32, 0)', '#181a20']}>
        <S.Title>Bem vindo ao Mova</S.Title>
        <S.SubTitle>
          App de filmes feito para praticar os conhecimentos em desenvolvimento
          mobile!
        </S.SubTitle>
        <S.ContainerIcons>
          <S.Bar colors={['#E21221', '#FF4451']} />
          <S.Circle />
          <S.Circle />
        </S.ContainerIcons>
        <ButtonGetStart onPress={() => navigation.navigate('signIn')} />
      </S.Container>
    </S.ImageBackground>
  )
}
