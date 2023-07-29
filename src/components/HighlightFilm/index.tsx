import * as S from './styles'
import logo from '../../assets/logo-Mova.png'
import { ButtonPlay } from '../ButtonPlay'
import { ButtonFavorite } from '../ButtonFavorites'

import { DataMoviesProps } from '../../types/movieTypes'
import { useNavigation } from '@react-navigation/native'
import { TabTypes } from '../../routes'

type HighlightFilmProps = {
  data: DataMoviesProps
}

export const HighlightFilm = ({ data }: HighlightFilmProps) => {
  const navigation = useNavigation<TabTypes>()

  return (
    <S.Background
      source={{
        uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
      }}
      imageStyle={{ resizeMode: 'cover' }}
    >
      <S.HighlightFilm colors={['rgba(24, 26, 32, 0)', '#181a20']}>
        <S.Header>
          <S.Logo source={logo} />
          <S.IconsContainer>
            <S.ButtonSearch onPress={() => navigation.navigate('explore')}>
              <S.Icon name="search" />
            </S.ButtonSearch>
            <S.Icon name="bell" />
          </S.IconsContainer>
        </S.Header>
        <S.InfosMovie>
          <S.TitleMovie>{data.title}</S.TitleMovie>
          <S.ContainerButtons>
            <ButtonPlay />
            <ButtonFavorite />
          </S.ContainerButtons>
        </S.InfosMovie>
      </S.HighlightFilm>
    </S.Background>
  )
}
