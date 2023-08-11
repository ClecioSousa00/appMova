import * as S from './styles'

import { useAsyncStorage } from '../../hooks/useAsyncStorage'

import { DataMoviesProps } from '../../types/movieTypes'

type ButtonFavoriteProps = {
  data: DataMoviesProps
}

export const ButtonFavorite = ({ data }: ButtonFavoriteProps) => {
  const { setAsyncStorage } = useAsyncStorage()

  const addMovieFavorites = async () => {
    await setAsyncStorage(data)
  }

  return (
    <S.FavoriteButton onPress={() => addMovieFavorites()}>
      <S.IconPlay name="add" />
      <S.TextButton>Favoritar</S.TextButton>
    </S.FavoriteButton>
  )
}
