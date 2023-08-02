import { useEffect, useState } from 'react'
import { DataMoviesProps } from '../types/movieTypes'
import { axiosInstance } from '../services/api/axiosInstance'

export const usePagination = (url: string) => {
  const [dataList, setDataList] = useState<DataMoviesProps[]>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getData(url)
  }, [])

  const getData = async (url: string) => {
    try {
      const response = await axiosInstance.get(url)
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
      setDataList(data)
      setPage((old) => old + 1)
      return data
    } catch (error) {
      console.log('Erro na request a API', error)
    } finally {
      setIsLoading(false)
    }
  }

  const loadMoreData = async () => {
    const response = await getData(`${url}?page=${page}`)
    setDataList([...dataList, ...response!])
    setPage((old) => old + 1)
  }

  return {
    dataList,
    isLoading,
    loadMoreData,
    getData,
  }
}
