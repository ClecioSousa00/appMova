import * as S from './styles'

import { useCallback, useState } from 'react'
import { View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import { useAsyncStorage } from '../../hooks/useAsyncStorage'

import { DataMoviesProps } from '../../types/movieTypes'

import { LoadingAnimation } from '../../components/LoadingAnimation'
import { CardMovie } from '../../components/CardMovie'
import { FavoritesHeader } from '../../components/FavoritesHeader'
import { MessageEmptyFavorites } from '../../components/MessageEmptyFavorites'

export const Favorites = () => {
  const { getAsyncStorage } = useAsyncStorage()
  const [isLoading, setIsLoading] = useState(true)
  const [moviesFavoritesList, setMoviesFavoritesList] = useState<
    DataMoviesProps[]
  >([])

  useFocusEffect(
    useCallback(() => {
      loadMovies()
    }, []),
  )
  const loadMovies = async () => {
    const moviesList = await getAsyncStorage()

    setMoviesFavoritesList(moviesList!)
    setIsLoading(false)
  }

  if (isLoading) {
    return (
      <S.Container>
        <LoadingAnimation />
      </S.Container>
    )
  }

  return (
    <S.Container>
      <FavoritesHeader />

      {moviesFavoritesList.length > 0 && (
        <S.ListMovie
          data={moviesFavoritesList}
          keyExtractor={(item) => String(item.id)}
          ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
          renderItem={({ item }) => <CardMovie data={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      )}

      {moviesFavoritesList.length === 0 && <MessageEmptyFavorites />}
    </S.Container>
  )
}
