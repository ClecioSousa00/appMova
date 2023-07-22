import * as S from './styles'
import bgGetStarted from '../../assets/bg-getStarted.png'
import { ButtonGetStart } from '../../components/ButtonGetStart'
export const GetStarted = () => {
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
        <ButtonGetStart />
      </S.Container>
    </S.ImageBackground>
  )
}
