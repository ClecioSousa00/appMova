import * as S from './styles'

import { Splash } from '../Splash'
import { HighlightFilm } from '../../components/HighlightFilm'
import { SectionMovie } from '../../components/SectionMovie'

import { useAxiosHome } from '../../hooks/useGetMoviesHome'

export const Home = () => {
  const { dataPlayingMovies, dataUpcomingMovies, loading } = useAxiosHome()

  if (loading) {
    return <Splash />
  }

  return (
    <S.ContainerView>
      <HighlightFilm
        data={
          dataPlayingMovies[
            Math.floor(Math.random() * dataPlayingMovies.length - 1)
          ]
        }
      />
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
