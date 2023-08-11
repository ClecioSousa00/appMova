import * as S from './styles'

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { useState, useCallback } from 'react'

import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import { useGetMovieInfos } from '../../hooks/useGetMovieInfos'
import { useAsyncStorage } from '../../hooks/useAsyncStorage'

import { MovieBanner } from '../../components/MovieBanner'
import { ButtonPlay } from '../../components/ButtonPlay'
import { ButtonDownload } from '../../components/ButtonDownload'
import { CastProfile } from '../../components/CastProfile'
import { LoadingAnimation } from '../../components/LoadingAnimation'

type ParamsProps = {
  id: number
}

export const MovieInfos = () => {
  const theme = useTheme()
  const { setAsyncStorage, getAsyncStorage, removeItem } = useAsyncStorage()
  const [favoriteIsSelected, setFavoriteIsSelected] = useState(false)
  const navigation = useNavigation()
  const route = useRoute()
  const { id } = route.params as ParamsProps

  const { dataMovie, dataCast, isLoading } = useGetMovieInfos(id)

  const handleMovieFavorite = async () => {
    if (!favoriteIsSelected) {
      await setAsyncStorage(dataMovie)
      setFavoriteIsSelected(true)
      return
    }

    await removeItem(dataMovie)
    setFavoriteIsSelected(false)
  }

  useFocusEffect(
    useCallback(() => {
      if (!dataMovie.id || !dataCast.length) return
      movieIsFavorite()
    }, [isLoading]),
  )

  const movieIsFavorite = async () => {
    const moviesFavoritesList = await getAsyncStorage()
    if (!moviesFavoritesList) return

    const movieIsFavorite = moviesFavoritesList.some(
      (movie) => movie.id === dataMovie.id,
    )
    if (movieIsFavorite) {
      setFavoriteIsSelected(true)
    }
  }
  if (isLoading) {
    return (
      <S.ContainerLoading>
        <LoadingAnimation />
      </S.ContainerLoading>
    )
  }

  return (
    <S.Container>
      <MovieBanner urlImage={dataMovie.poster_path}>
        <S.IconsContainer>
          <S.ButtonIcon onPress={() => navigation.goBack()}>
            {/* <S.Icon name="arrow-left" size={24} /> */}
            <MaterialIcons
              name="arrow-back"
              size={24}
              color={theme.COLORS.LIGHT}
            />
          </S.ButtonIcon>
          {/* <S.Icon name="cast" size={24} /> */}
          <MaterialIcons name="cast" size={24} color={theme.COLORS.LIGHT} />
        </S.IconsContainer>
      </MovieBanner>
      <S.ContainerInfos>
        <S.TitleMovie>{dataMovie.title}</S.TitleMovie>

        <S.ContentSubtitle>
          <S.ContentInfosSubtitle>
            {/* <S.IconStar name="star-half-alt" size={16} /> */}
            <FontAwesome5
              name="star-half-alt"
              size={16}
              color={theme.COLORS.SECONDARY}
            />
            <S.infosSubtitle>
              {dataMovie.vote_average.toFixed(1)}
            </S.infosSubtitle>
            <S.infosSubtitle>
              {dataMovie.release_date.slice(0, 4)}
            </S.infosSubtitle>
          </S.ContentInfosSubtitle>
          <S.IconsContainer>
            <S.ButtonIcon onPress={() => handleMovieFavorite()}>
              {favoriteIsSelected ? (
                <S.IconInfos name="favorite" />
              ) : (
                <S.IconInfos name="favorite-outline" />
              )}
            </S.ButtonIcon>
            <S.IconInfos name="share" />
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
