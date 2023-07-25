import { DataMoviesProps } from '../../types/movieTypes'
import { CardMovie } from '../CardMovie'
import * as S from './styles'

type MoviesListProps = {
  data: DataMoviesProps[]
}

export const MoviesList = ({ data }: MoviesListProps) => {
  return (
    <S.ListMovie
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <CardMovie data={item} />}
      numColumns={2}
    />
  )
}
