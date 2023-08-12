import { axiosInstance } from '../services/api/axiosInstance'
import { DataMoviesProps } from '../types/movieTypes'

export const useGetData = () => {
  const getData = async (url: string) => {
    try {
      const response = await axiosInstance.get(url)
      console.log(response.status)

      const data: DataMoviesProps[] = response.data.results.map(
        (item: DataMoviesProps) => ({
          id: item.id,
          title: item.title,
          poster_path: item.poster_path,
          vote_average: item.vote_average,
          overview: item.overview,
          release_date: item.release_date,
        }),
      )

      return data
    } catch (error) {
      console.log('Erro na request a API', error)
    }
  }
  return {
    getData,
  }
}
