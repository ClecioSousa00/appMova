import * as S from './styles'

import { Splash } from '../Splash'
import { HighlightFilm } from '../../components/HighlightFilm'
import { useAxios } from '../../hooks/useAxios'
import { SectionMovie } from '../../components/SectionMovie'

export const Home = () => {
  const { data: trendingMovieList, loading: trendingMovieLoading } =
    useAxios('/movie/now_playing')
  const { data: releasedMovieList, loading: releasedMovieLoading } =
    useAxios('/movie/upcoming')
  const tenTrendingMovieList = trendingMovieList.slice(0, 10)
  const tenReleasedMovieList = releasedMovieList.slice(0, 10)
  if (trendingMovieLoading && releasedMovieLoading) {
    console.log('splash da home')

    return <Splash />
  }

  console.log('filmes destaques', tenTrendingMovieList)

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
