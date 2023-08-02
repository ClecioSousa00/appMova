import { useNavigation } from '@react-navigation/native'
import { DataMoviesProps } from '../../types/movieTypes'
import * as S from './styles'
import { StackType } from '../../routes/stack.routes'

type CardMovieProps = {
  data: DataMoviesProps
}
const placeholderImg =
  'https://media.istockphoto.com/id/1392182937/vector/no-image-available-photo-coming-soon.jpg?s=612x612&w=0&k=20&c=3vGh4yj0O2b4tPtjpK-q-Qg0wGHsjseL2HT-pIyJiuc='

export const CardMovie = ({ data }: CardMovieProps) => {
  const navigation = useNavigation<StackType>()
  const { poster_path = placeholderImg, vote_average = 0.0 } = data
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
        source={{
          uri: poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : placeholderImg,
        }}
      >
        <S.AverageContainer>
          <S.Average>{vote_average.toFixed(1)}</S.Average>
        </S.AverageContainer>
      </S.MovieImg>
    </S.Container>
  )
}
