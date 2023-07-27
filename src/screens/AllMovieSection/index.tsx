import { useNavigation, useRoute } from '@react-navigation/native'
import * as S from './styles'
import { TabTypes } from '../../routes'
import { useAxios } from '../../hooks/useAxios'
import { MoviesList } from '../../components/MoviesList'
import { useState } from 'react'
import { DataMoviesProps } from '../../types/movieTypes'
import { LoadingAnimation } from '../../components/LoadingAnimation'

type ParamsProps = {
  title: string
  url: string
}

export const AllMovieSection = () => {
  console.log('screen all movie')

  const navigation = useNavigation<TabTypes>()
  const [page, setPage] = useState(1)
  const route = useRoute()
  const { title, url } = route.params as ParamsProps
  const [dataMovies, setData] = useState<DataMoviesProps[]>([])
  const { data } = useAxios(`${url}?page=${page}`)
  // const [loading, setLoading]=useState(false)
  // const [loading,setloading]=useState(false)

  // useEffect(() => {
  //   GetMoreMovies()
  // }, [])

  const GetMoreMovies = () => {
    // setLoading((old) => !old)
    setData([...dataMovies, ...data])
    setPage(page + 1)
    // setLoading((old) => !old)
  }

  if (!data.length) {
    console.log('loading do all movie')

    return <LoadingAnimation />
  }

  return (
    <S.Container>
      <S.Header>
        <S.ButtonBack onPress={() => navigation.navigate('home')}>
          <S.Icon name="arrow-left" />
        </S.ButtonBack>
        <S.Title>{title}</S.Title>
        <S.Icon name="search" />
      </S.Header>
      <MoviesList getMoreMovies={GetMoreMovies} data={dataMovies} />
    </S.Container>
  )
}
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
