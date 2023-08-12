import * as S from './styles'

import { useNavigation } from '@react-navigation/native'
import { auth } from '../../services/firebaseConfig'
import { signOut } from 'firebase/auth'

import { DataMoviesProps } from '../../types/movieTypes'
import { TabTypes } from '../../routes'

import { ButtonPlay } from '../ButtonPlay'
import { ButtonFavorite } from '../ButtonFavorites'
import { MovieBanner } from '../MovieBanner'

import logo from '../../assets/logo-Mova.png'

type HighlightFilmProps = {
  data: DataMoviesProps
}

export const HighlightFilm = ({ data }: HighlightFilmProps) => {
  const navigation = useNavigation<TabTypes>()

  // if (!data.id) return

  return (
    <MovieBanner urlImage={data.poster_path}>
      <S.Header>
        <S.Logo source={logo} />
        <S.IconsContainer>
          <S.ButtonSearch onPress={() => navigation.navigate('explore')}>
            <S.Icon name="search" />
          </S.ButtonSearch>
          <S.ButtonSearch onPress={() => signOut(auth)}>
            <S.Icon name="log-out" />
          </S.ButtonSearch>
        </S.IconsContainer>
      </S.Header>
      <S.InfosMovie>
        <S.TitleMovie>{data.title}</S.TitleMovie>
        <S.ContainerButtons>
          <ButtonPlay />
          <ButtonFavorite data={data} />
        </S.ContainerButtons>
      </S.InfosMovie>
    </MovieBanner>
  )
}
