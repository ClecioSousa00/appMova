import { useNavigation } from '@react-navigation/native'
import { DataMoviesProps } from '../../types/movieTypes'
import { CardMovie } from '../CardMovie'
import * as S from './styles'
import { StackType } from '../../routes/stack.routes'

type SectionMovieProps = {
  title?: string
  data: DataMoviesProps[]
  url: string
}

export const SectionMovie = ({ url, title, data }: SectionMovieProps) => {
  const navigation = useNavigation<StackType>()
  return (
    <S.Container>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.SeeAllButton
          onPress={() =>
            navigation.navigate('allMoviesSection', {
              title: `${title}`,
              url,
            })
          }
        >
          <S.TextButton>Ver mais</S.TextButton>
        </S.SeeAllButton>
      </S.Header>
      <S.ListMovie
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <CardMovie data={item} />}
        horizontal
      />
    </S.Container>
  )
}
