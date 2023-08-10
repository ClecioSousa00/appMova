// import { useEffect, useState } from 'react'
// import { DataMoviesProps } from '../types/movieTypes'
// import { axiosInstance } from '../services/api/axiosInstance'

// export const useGetMovie = (id: number) => {
//   const [data, setData] = useState<DataMoviesProps>({} as DataMoviesProps)

//   useEffect(() => {
//     getMovie()
//   }, [])

//   const getMovie = async () => {
//     const response = await axiosInstance.get(`/movie/${id}`)
//     const data: DataMoviesProps = response.data
//     setData({
//       id: data.id,
//       title: data.title,
//       poster_path: data.poster_path,
//       vote_average: data.vote_average,
//       overview: data.overview,
//       release_date: data.release_date,
//       genres: data.genres,
//     })
//   }

//   return {
//     data,
//   }
// }
