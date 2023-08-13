import * as S from './styles'

import { useNavigation } from '@react-navigation/native'

import { StackAuthType } from '../../routes/authRoutes'
import { SignButton } from '../../components/SignButton'

import bgGetStarted from '../../assets/bg-getStarted.png'

export const GetStarted = () => {
  const navigation = useNavigation<StackAuthType>()
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
        <SignButton
          text="Iniciar"
          onPress={() => navigation.navigate('signIn')}
        />
        <S.TextFooter>
          Desenvolvido por Clécio Sousa{'\n'}
          versão 1.0.0
        </S.TextFooter>
      </S.Container>
    </S.ImageBackground>
  )
}
