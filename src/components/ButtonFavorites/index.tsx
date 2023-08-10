import { TabTypes } from '../../routes'
import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { useAsyncStorage } from '../../hooks/useAsyncStorage'
import { DataMoviesProps } from '../../types/movieTypes'

type ButtonFavoriteProps = {
  data: DataMoviesProps
}

export const ButtonFavorite = ({ data }: ButtonFavoriteProps) => {
  const navigation = useNavigation<TabTypes>()
  const { setAsyncStorage } = useAsyncStorage()

  const addMovieFavorites = async () => {
    await setAsyncStorage(data)
    // navigation.navigate('favorite')
  }

  return (
    <S.FavoriteButton onPress={() => addMovieFavorites()}>
      <S.IconPlay name="add" />
      <S.TextButton>Favoritar</S.TextButton>
    </S.FavoriteButton>
  )
}
