import { useEffect, useState } from 'react'
import { axiosInstance } from '../services/api/axiosInstance'
import { CastProps } from '../types/castTypes'
import { DataMoviesProps } from '../types/movieTypes'

export const useGetMovieInfos = (id: number) => {
  const [dataCast, setDataCast] = useState<CastProps[]>([])
  const [dataMovie, setDataMovie] = useState<DataMoviesProps>(
    {} as DataMoviesProps,
  )
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getDataMovie()
  }, [])

  const getDataMovie = async () => {
    try {
      const [movieInfos, castList] = await Promise.all([getMovie(), getCast()])
      setDataMovie({
        id: movieInfos.id,
        title: movieInfos.title,
        poster_path: movieInfos.poster_path,
        vote_average: movieInfos.vote_average,
        overview: movieInfos.overview,
        release_date: movieInfos.release_date,
        genres: movieInfos.genres,
      })
      const dataCastList = castList.map((cast) => ({
        id: cast.id,
        name: cast.name,
        character: cast.character,
        profile_path: cast.profile_path,
      }))
      setDataCast(dataCastList)
    } catch (error) {
      console.log('erro ao pegar of filmes e elenco', error)
    } finally {
      setIsLoading(false)
    }
  }

  const getCast = async () => {
    const response = await axiosInstance.get(`/movie/${id}/credits`)
    const data: CastProps[] = response.data.cast.slice(0, 20)
    return data
  }
  const getMovie = async () => {
    const response = await axiosInstance.get(`/movie/${id}`)
    const data: DataMoviesProps = response.data
    return data
  }
  return {
    dataMovie,
    dataCast,
    isLoading,
  }
}
