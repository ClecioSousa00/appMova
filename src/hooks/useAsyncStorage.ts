import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'

import { getAuth } from 'firebase/auth'

import { DataMoviesProps } from '../types/movieTypes'
import { useEffect } from 'react'

export const useAsyncStorage = () => {
  const getUserKey = () => {
    const authUser = getAuth()
    const user = authUser.currentUser
    if (user) {
      const key = `@appmova:movies:${user.uid}`
      return key
    }
    return null
  }

  // useEffect(() => {
  //   removeItem()
  // }, [])

  // const removeItem = async () => {
  //   const a = getUserKey()
  //   await AsyncStorage.removeItem(a!)
  // }

  const setAsyncStorage = async (newMovie: DataMoviesProps) => {
    const key = getUserKey()
    if (!key) return
    try {
      const moviesData = await AsyncStorage.getItem(key!)
      const currentMoviesData: DataMoviesProps[] = moviesData
        ? JSON.parse(moviesData)
        : []
      const isFavorite = currentMoviesData.some(
        (movie) => movie.id === newMovie.id,
      )
      if (isFavorite) return

      const moviesDataFormatted = [...currentMoviesData, newMovie]
      await AsyncStorage.setItem(key!, JSON.stringify(moviesDataFormatted))
    } catch (error) {
      console.log('erro no setAsyncStorage', error)
      Alert.alert('Não foi possível adicionar ao favoritos')
    }
  }

  const getAsyncStorage = async () => {
    const key = getUserKey()
    if (!key) return null
    try {
      const moviesData = await AsyncStorage.getItem(key!)
      const currentMoviesData: DataMoviesProps[] = moviesData
        ? JSON.parse(moviesData)
        : ([] as DataMoviesProps[])
      return currentMoviesData
    } catch (error) {
      console.log('erro no setAsyncStorage', error)
      Alert.alert('Não foi possível recuperar os filmes favoritos')
    }
  }

  return {
    setAsyncStorage,
    getAsyncStorage,
  }
}
