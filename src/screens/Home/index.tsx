import * as S from './styles'

import { Splash } from '../Splash'
import { HighlightFilm } from '../../components/HighlightFilm'
import { useAxios } from '../../hooks/useAxios'
import { SectionMovie } from '../../components/SectionMovie'

export const Home = () => {
  const { data: trendingMovieList } = useAxios('/movie/now_playing')
  const { data: releasedMovieList } = useAxios('/movie/upcoming')
  const tenTrendingMovieList = trendingMovieList.slice(0, 10)
  const tenReleasedMovieList = releasedMovieList.slice(0, 10)

  if (!tenTrendingMovieList.length || !tenReleasedMovieList.length) {
    console.log('splash da home')

    return <Splash />
  }

  console.log('filmes do top 10', tenTrendingMovieList.length)
  console.log('filmes lançamentos', tenReleasedMovieList.length)

  return (
    <S.ContainerView>
      <HighlightFilm
        data={
          tenTrendingMovieList[
            Math.floor(Math.random() * tenTrendingMovieList.length - 1)
          ]
        }
      />
      <S.ScrollContainer>
        <SectionMovie
          title="Top 10 filmes da semana"
          data={tenTrendingMovieList}
          url="/trending/movie/week"
        />
        <SectionMovie
          title="Lançamentos"
          data={tenReleasedMovieList}
          url="/movie/upcoming"
        />
      </S.ScrollContainer>
    </S.ContainerView>
  )
}
