import * as S from './styles'
import { MovieBanner } from '../../components/MovieBanner'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ButtonPlay } from '../../components/ButtonPlay'
import { ButtonDownload } from '../../components/ButtonDownload'
import { CastProfile } from '../../components/CastProfile'
import { useGetMovie } from '../../hooks/useGetMovie'

// const urlImage =
//   'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg'

type ParamsProps = {
  id: number
}

export const MovieInfos = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { id } = route.params as ParamsProps
  const { data } = useGetMovie(id)

  if (!data.id) return
  console.log('dados do filme', data)

  return (
    <S.Container>
      <MovieBanner urlImage={data.poster_path}>
        <S.IconsContainer>
          <S.ButtonBack onPress={() => navigation.goBack()}>
            <S.Icon name="arrow-left" size={24} />
          </S.ButtonBack>
          <S.Icon name="cast" size={24} />
        </S.IconsContainer>
      </MovieBanner>
      <S.ContainerInfos>
        <S.TitleMovie>{data.title}</S.TitleMovie>

        <S.ContentSubtitle>
          <S.ContentInfosSubtitle>
            <S.infosSubtitle>{data.vote_average.toFixed(0)}</S.infosSubtitle>
            <S.infosSubtitle>{data.release_date}</S.infosSubtitle>
          </S.ContentInfosSubtitle>
          <S.IconsContainer>
            <S.IconInfos name="heart" size={20} />
            <S.IconInfos name="navigation" size={20} />
          </S.IconsContainer>
        </S.ContentSubtitle>
        <S.ContainerButtons>
          <ButtonPlay variant />
          <ButtonDownload />
        </S.ContainerButtons>
        <S.GenresList>
          <S.Description>Gêneros: </S.Description>
          {data.genres.map((item) => (
            <S.Description key={item.id}>{item.name}, </S.Description>
          ))}
        </S.GenresList>

        <S.Description>{data.overview}</S.Description>

        <CastProfile />
      </S.ContainerInfos>
    </S.Container>
  )
}
