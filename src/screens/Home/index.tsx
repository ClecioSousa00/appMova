import * as S from './styles'

import { Splash } from '../Splash'
import { HighlightFilm } from '../../components/HighlightFilm'

import { SectionMovie } from '../../components/SectionMovie'
import { useAxiosHome } from '../../hooks/useGetMoviesHome'

export const Home = () => {
  const { dataPlayingMovies, dataUpcomingMovies, loading } = useAxiosHome()

  if (loading) {
    console.log('splash da home')

    return <Splash />
  }
  // Math.floor(Math.random() * dataPlayingMovies.length - 1)
  return (
    <S.ContainerView>
      <HighlightFilm data={dataPlayingMovies[0]} />
      <S.ScrollContainer>
        <SectionMovie
          title="Filmes em alta"
          data={dataPlayingMovies}
          url="/trending/movie/week"
        />
        <SectionMovie
          title="Lançamentos"
          data={dataUpcomingMovies}
          url="/movie/upcoming"
        />
      </S.ScrollContainer>
    </S.ContainerView>
  )
}
// import * as S from './styles'

// import { Splash } from '../Splash'
// import { HighlightFilm } from '../../components/HighlightFilm'
// import { useAxios } from '../../hooks/useAxios'
// import { SectionMovie } from '../../components/SectionMovie'

// export const Home = () => {
//   const { data: trendingMovieList } = useAxios('/movie/now_playing')
//   const { data: releasedMovieList } = useAxios('/movie/upcoming')
//   const tenTrendingMovieList = trendingMovieList.slice(0, 10)
//   const tenReleasedMovieList = releasedMovieList.slice(0, 10)

//   if (!tenTrendingMovieList.length || !tenReleasedMovieList.length) {
//     console.log('splash da home')

//     return <Splash />
//   }

//   console.log('filmes do top 10', tenTrendingMovieList.length)
//   console.log('filmes lançamentos', tenReleasedMovieList.length)

//   return (
//     <S.ContainerView>
//       <HighlightFilm
//         data={
//           tenTrendingMovieList[
//             Math.floor(Math.random() * tenTrendingMovieList.length - 1)
//           ]
//         }
//       />
//       <S.ScrollContainer>
//         <SectionMovie
//           title="Top 10 filmes da semana"
//           data={tenTrendingMovieList}
//           url="/trending/movie/week"
//         />
//         <SectionMovie
//           title="Lançamentos"
//           data={tenReleasedMovieList}
//           url="/movie/upcoming"
//         />
//       </S.ScrollContainer>
//     </S.ContainerView>
//   )
// }
