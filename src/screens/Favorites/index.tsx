// import * as S from './styles'
// import { auth } from '../../services/firebaseConfig'
// import { signOut } from 'firebase/auth'
// export const Favorites = () => {
//   const handleSignOut = () => {
//     signOut(auth)
//   }

//   return (
//     <S.Container>
//       <S.button onPress={handleSignOut} />
//     </S.Container>
//   )
// }
import * as S from './styles'

import { useCallback, useEffect, useState } from 'react'
import { useAsyncStorage } from '../../hooks/useAsyncStorage'
import { useFocusEffect } from '@react-navigation/native'

import { DataMoviesProps } from '../../types/movieTypes'
import { LoadingAnimation } from '../../components/LoadingAnimation'
import { CardMovie } from '../../components/CardMovie'

export const Favorites = () => {
  const { getAsyncStorage } = useAsyncStorage()
  const [isLoading, setIsLoading] = useState(true)
  const [moviesFavoritesList, setMoviesFavoritesList] = useState<
    DataMoviesProps[]
  >([])

  // useEffect(() => {

  //   loadMovies()
  // }, [])

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

  const generateMoviesList = () => {
    return moviesFavoritesList.map((movie) => (
      <CardMovie key={movie.id} data={movie} />
    ))
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
      {moviesFavoritesList.length ? (
        generateMoviesList()
      ) : (
        <S.Text>Lista vazia</S.Text>
      )}
    </S.Container>
  )
}
