import { axiosInstance } from '../services/api/axiosInstance'
import { DataMoviesProps } from '../types/movieTypes'
import { useState, useEffect } from 'react'

export const useAxiosHome = () => {
  const [dataPlayingMovies, setDataPlayingMovies] = useState<DataMoviesProps[]>(
    [],
  )
  const [dataUpcomingMovies, setDataUpcomingMovies] = useState<
    DataMoviesProps[]
  >([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getDataMovies = () => {
      Promise.all([
        axiosInstance.get('/trending/movie/week'),
        axiosInstance.get('/movie/upcoming'),
      ])
        .then((response) => {
          setDataPlayingMovies(response[0].data.results.slice(0, 10))
          setDataUpcomingMovies(response[1].data.results.slice(0, 10))
        })
        .catch((error) => {
          console.log('error:', error)
        })
        .finally(() => {
          setLoading(false)
        })
    }
    getDataMovies()
  }, [])

  return {
    dataPlayingMovies,
    dataUpcomingMovies,
    loading,
  }
}
