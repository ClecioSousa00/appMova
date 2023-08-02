import * as S from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'

import { TabTypes } from '../../routes'
import { MoviesList } from '../../components/MoviesList'
import { LoadingAnimation } from '../../components/LoadingAnimation'
import { usePagination } from '../../hooks/usePagination'

type ParamsProps = {
  title: string
  url: string
}

export const AllMovieSection = () => {
  console.log('screen all movie')

  const navigation = useNavigation<TabTypes>()
  const route = useRoute()
  const { title, url } = route.params as ParamsProps

  const { dataList, isLoading, loadMoreData } = usePagination(url)

  return (
    <S.Container>
      <S.Header>
        <S.ButtonBack onPress={() => navigation.navigate('home')}>
          <S.Icon name="arrow-left" />
        </S.ButtonBack>
        <S.Title>{title}</S.Title>
        <S.ButtonSearch
          activeOpacity={0.7}
          onPress={() => navigation.navigate('explore')}
        >
          <S.Icon name="search" />
        </S.ButtonSearch>
      </S.Header>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <MoviesList getMoreMovies={loadMoreData} data={dataList} />
      )}
    </S.Container>
  )
}
// import * as S from './styles'
// import { useNavigation, useRoute } from '@react-navigation/native'
// import { useState, useEffect } from 'react'

// import { TabTypes } from '../../routes'
// import { MoviesList } from '../../components/MoviesList'
// import { DataMoviesProps } from '../../types/movieTypes'
// import { LoadingAnimation } from '../../components/LoadingAnimation'
// import { useGetData } from '../../hooks/useGetData'

// type ParamsProps = {
//   title: string
//   url: string
// }

// export const AllMovieSection = () => {
//   console.log('screen all movie')

//   const navigation = useNavigation<TabTypes>()
//   const route = useRoute()
//   const { title, url } = route.params as ParamsProps
//   const [page, setPage] = useState(1)
//   const [dataList, setDataList] = useState<DataMoviesProps[]>([])
//   const [isLoading, setIsLoading] = useState(true)

//   const { getData } = useGetData()

//   useEffect(() => {
//     loadMoreData()
//   }, [])

//   const loadMoreData = async () => {
//     try {
//       const response = await getData(`${url}?page=${page}`)
//       setDataList([...dataList, ...response!])
//       setPage(page + 1)
//     } catch (error) {
//       console.log('erro ao pegar todos os filmes', error)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <S.Container>
//       <S.Header>
//         <S.ButtonBack onPress={() => navigation.navigate('home')}>
//           <S.Icon name="arrow-left" />
//         </S.ButtonBack>
//         <S.Title>{title}</S.Title>
//         <S.ButtonSearch
//           activeOpacity={0.7}
//           onPress={() => navigation.navigate('explore')}
//         >
//           <S.Icon name="search" />
//         </S.ButtonSearch>
//       </S.Header>
//       {isLoading ? (
//         <LoadingAnimation />
//       ) : (
//         <MoviesList getMoreMovies={loadMoreData} data={dataList} />
//       )}
//     </S.Container>
//   )
// }

// import { useNavigation, useRoute } from '@react-navigation/native'
// import * as S from './styles'
// import { TabTypes } from '../../routes'
// import { useAxios } from '../../hooks/useAxios'
// import { MoviesList } from '../../components/MoviesList'
// import { useState } from 'react'
// import { DataMoviesProps } from '../../types/movieTypes'
// import { LoadingAnimation } from '../../components/LoadingAnimation'

// type ParamsProps = {
//   title: string
//   url: string
// }

// export const AllMovieSection = () => {
//   console.log('screen all movie')

//   const navigation = useNavigation<TabTypes>()
//   const route = useRoute()
//   const { title, url } = route.params as ParamsProps
//   const [page, setPage] = useState(1)
//   const [dataMovies, setData] = useState<DataMoviesProps[]>([])

//   const { data } = useAxios(`${url}?page=${page}`)

//   const GetMoreMovies = () => {
//     console.log('função chamada')

//     setData([...dataMovies, ...data])
//     setPage(page + 1)
//   }

//   if (!data.length) {
//     console.log('loading do all movie dados do dataMovies', dataMovies)

//     return <LoadingAnimation />
//   }
//   console.log(' dados do dataMovies', dataMovies.length)
//   return (
//     <S.Container>
//       <S.Header>
//         <S.ButtonBack onPress={() => navigation.navigate('home')}>
//           <S.Icon name="arrow-left" />
//         </S.ButtonBack>
//         <S.Title>{title}</S.Title>

//         <S.Icon name="search" />
//       </S.Header>
//       <MoviesList getMoreMovies={GetMoreMovies} data={dataMovies} />
//     </S.Container>
//   )
// }

// import { useNavigation, useRoute } from '@react-navigation/native'
// import * as S from './styles'
// import { TabTypes } from '../../routes'
// import { useAxios } from '../../hooks/useAxios'
// import { MoviesList } from '../../components/MoviesList'
// import { useState } from 'react'

// type ParamsProps = {
//   title: string
//   url: string
// }

// export const AllMovieSection = () => {
//   const navigation = useNavigation<TabTypes>()
//   const [page, setPage] = useState(1)
//   const route = useRoute()
//   const { title, url } = route.params as ParamsProps

//   const { data, loading } = useAxios(`${url}?page=${page}`)

//   if (loading) {
//     return
//   }

//   return (
//     <S.Container>
//       <S.Header>
//         <S.ButtonBack onPress={() => navigation.navigate('home')}>
//           <S.Icon name="arrow-left" />
//         </S.ButtonBack>
//         <S.Title>{title}</S.Title>
//         <S.Icon name="search" />
//       </S.Header>
//       <MoviesList data={data} />
//     </S.Container>
//   )
// }
