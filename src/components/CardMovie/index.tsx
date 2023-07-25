import { DataMoviesProps } from '../../types/movieTypes'
import * as S from './styles'

type CardMovieProps = {
  data: DataMoviesProps
}

export const CardMovie = ({ data }: CardMovieProps) => {
  return (
    <S.Container activeOpacity={0.7} onPress={() => console.log('clicou')}>
      <S.MovieImg
        source={{ uri: `https://image.tmdb.org/t/p/w500${data.poster_path}` }}
        resizeMode="cover"
      >
        <S.AverageContainer>
          <S.Average>{data.vote_average.toFixed(1)}</S.Average>
        </S.AverageContainer>
      </S.MovieImg>
    </S.Container>
  )
}
