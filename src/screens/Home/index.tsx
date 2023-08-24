import * as S from './styles'

import { HighlightFilm } from '../../components/HighlightFilm'
import { SectionMovie } from '../../components/SectionMovie'

import { useAxiosHome } from '../../hooks/useGetMoviesHome'

import React from 'react'
import { SkeletonMovieSection } from '../../components/Skeletons/SkeletonMovieSection'
import { SkeletonBanner } from '../../components/Skeletons/SkeletonBanner'

export const Home = () => {
  const { dataPlayingMovies, dataUpcomingMovies, loading } = useAxiosHome()

  if (loading) {
    return (
      <S.ContainerView>
        <SkeletonBanner />
        <SkeletonMovieSection />
      </S.ContainerView>
    )
  }
  console.log(
    'NUMBER',
    Math.floor(Math.random() * dataPlayingMovies.length - 1),
  )

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
