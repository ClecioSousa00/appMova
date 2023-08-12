import * as S from './styles'

import { useCallback, useEffect, useState } from 'react'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import { useAsyncStorage } from '../../hooks/useAsyncStorage'

import { DataMoviesProps } from '../../types/movieTypes'

import { LoadingAnimation } from '../../components/LoadingAnimation'
import { CardMovie } from '../../components/CardMovie'

import { MessageEmptyFavorites } from '../../components/MessageEmptyFavorites'

import Animated, { FadeIn, FadeOutLeft } from 'react-native-reanimated'

import logo from '../../assets/logo-Mova.png'

export const Favorites = () => {
  const { getAsyncStorage } = useAsyncStorage()
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [showSearch, setShowSearch] = useState(false)
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

  useEffect(() => {
    if (inputValue === '') {
      loadMovies()
      return
    }
    const listMoviesFiltered = moviesFavoritesList.filter((movie) =>
      movie.title.toLowerCase().includes(inputValue.toLocaleLowerCase()),
    )
    if (listMoviesFiltered) {
      setMoviesFavoritesList(listMoviesFiltered)
    }
  }, [inputValue])

  if (isLoading) {
    return (
      <S.Container>
        <LoadingAnimation />
      </S.Container>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.ContainerHeader>
          <S.ContentHeader>
            <S.Image source={logo} />
            <S.Text>Favoritos</S.Text>
          </S.ContentHeader>
          <S.ButtonSearch onPress={() => setShowSearch(!showSearch)}>
            <S.Icon name="search" />
          </S.ButtonSearch>
        </S.ContainerHeader>

        {showSearch && moviesFavoritesList.length > 0 && (
          <Animated.View
            style={{ width: '100%' }}
            entering={FadeIn.duration(700)}
            exiting={FadeOutLeft.duration(700)}
          >
            <S.InputSearch
              onChangeText={(e) => setInputValue(e)}
              value={inputValue}
              placeholder="Buscar..."
            />
          </Animated.View>
        )}

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
    </TouchableWithoutFeedback>
  )
}
