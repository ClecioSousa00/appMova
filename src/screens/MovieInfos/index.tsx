import * as S from './styles'
import { MovieBanner } from '../../components/MovieBanner'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ButtonPlay } from '../../components/ButtonPlay'
import { ButtonDownload } from '../../components/ButtonDownload'
import { CastProfile } from '../../components/CastProfile'
import { useGetMovieInfos } from '../../hooks/useGetMovieInfos'

// const urlImage =
//   'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg'

type ParamsProps = {
  id: number
}

export const MovieInfos = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { id } = route.params as ParamsProps
  // const { data } = useGetMovie(id)

  const { dataMovie, dataCast } = useGetMovieInfos(id)

  if (!dataMovie.id || !dataCast.length) return
  console.log('dados do filme', dataMovie)
  console.log('===========================================')
  console.log('dados do cast', dataCast)

  return (
    <S.Container>
      <MovieBanner urlImage={dataMovie.poster_path}>
        <S.IconsContainer>
          <S.ButtonBack onPress={() => navigation.goBack()}>
            <S.Icon name="arrow-left" size={24} />
          </S.ButtonBack>
          <S.Icon name="cast" size={24} />
        </S.IconsContainer>
      </MovieBanner>
      <S.ContainerInfos>
        <S.TitleMovie>{dataMovie.title}</S.TitleMovie>

        <S.ContentSubtitle>
          <S.ContentInfosSubtitle>
            <S.IconStar name="star-half-alt" size={16} />
            <S.infosSubtitle>
              {dataMovie.vote_average.toFixed(1)}
            </S.infosSubtitle>
            <S.infosSubtitle>
              {dataMovie.release_date.slice(0, 4)}
            </S.infosSubtitle>
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
          {dataMovie.genres.map((item) => (
            <S.Description key={item.id}>{item.name}, </S.Description>
          ))}
        </S.GenresList>

        <S.Description>{dataMovie.overview}</S.Description>
        <S.CastList
          horizontal
          keyExtractor={(item) => String(item.id)}
          data={dataCast}
          renderItem={({ item }) => <CastProfile data={item} />}
        />
      </S.ContainerInfos>
    </S.Container>
  )
}
