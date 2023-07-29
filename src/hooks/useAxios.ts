import { axiosInstance } from '../services/api/axiosInstance'
import { DataMoviesProps } from '../types/movieTypes'
import { useState, useEffect } from 'react'

export const useAxios = (url: string) => {
  const [data, setData] = useState<DataMoviesProps[]>([])
  const [loading, setLoading] = useState(false)
  console.log(
    '=========================================================================================',
  )
  console.log('hook use axios url', url)
  console.log(
    '=========================================================================================',
  )
  console.log('hook use axios loading', loading)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const response = await axiosInstance.get(url)
        const data: DataMoviesProps[] = response.data.results.map(
          (item: DataMoviesProps) => ({
            id: item.id,
            title: item.title,
            poster_path: item.poster_path,
            vote_average: item.vote_average,
          }),
        )
        setData(data)
      } catch (error) {
        console.log('Erro na request a API', error)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [url])

  return {
    data,
    loading,
  }
}
