import * as S from './styles'
import { MovieBanner } from '../../components/MovieBanner'
import { useNavigation } from '@react-navigation/native'
import { ButtonPlay } from '../../components/ButtonPlay'
import { ButtonDownload } from '../../components/ButtonDownload'

const urlImage =
  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg'

export const MovieInfos = () => {
  const navigation = useNavigation()

  return (
    <S.Container>
      <MovieBanner urlImage={urlImage}>
        <S.IconsContainer>
          <S.ButtonBack onPress={() => navigation.goBack()}>
            <S.Icon name="arrow-left" size={24} />
          </S.ButtonBack>
          <S.Icon name="cast" size={24} />
        </S.IconsContainer>
      </MovieBanner>
      <S.ContainerInfos>
        <S.ContentTitle>
          <S.TitleMovie>Avatar the way of water</S.TitleMovie>
          <S.IconsContainer>
            <S.IconInfos name="heart" size={20} />
            <S.IconInfos name="navigation" size={20} />
          </S.IconsContainer>
        </S.ContentTitle>
        <S.ContentSubtitle>
          <S.infosSubtitle>9.8</S.infosSubtitle>
          <S.infosSubtitle>2023</S.infosSubtitle>
        </S.ContentSubtitle>
        <S.ContainerButtons>
          <ButtonPlay variant />
          <ButtonDownload />
        </S.ContainerButtons>
      </S.ContainerInfos>
    </S.Container>
  )
}
