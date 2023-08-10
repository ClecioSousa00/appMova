import * as S from './styles'
import { useNavigation } from '@react-navigation/native'

import { DataMoviesProps } from '../../types/movieTypes'
import { StackType } from '../../routes/stack.routes'

import imageMovieEmpty from '../../assets/imageMovieEmpty.png'

type CardMovieProps = {
  data: DataMoviesProps
}

export const CardMovie = ({ data }: CardMovieProps) => {
  const navigation = useNavigation<StackType>()
  const { vote_average = 0.0 } = data
  return (
    <S.Container
      activeOpacity={0.7}
      onPress={() => navigation.navigate('movieInfos', { id: data.id })}
    >
      <S.MovieImg
        style={{
          width: 150,
          height: 200,
        }}
        resizeMode="cover"
        source={
          data.poster_path
            ? {
                uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
              }
            : imageMovieEmpty
        }
      >
        <S.AverageContainer>
          <S.Average>{vote_average.toFixed(1)}</S.Average>
        </S.AverageContainer>
      </S.MovieImg>
    </S.Container>
  )
}
