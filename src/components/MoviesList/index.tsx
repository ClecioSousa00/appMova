import { DataMoviesProps } from '../../types/movieTypes'
import { CardMovie } from '../CardMovie'
import { View } from 'react-native'
import * as S from './styles'
import { LoadingAnimation } from '../LoadingAnimation'
import { useCallback } from 'react'

type MoviesListProps = {
  data: DataMoviesProps[]
  getMoreMovies: () => void
}

export const MoviesList = ({ getMoreMovies, data }: MoviesListProps) => {
  const renderItem = useCallback(
    ({ item }: { item: DataMoviesProps }) => <CardMovie data={item} />,
    [],
  )
  return (
    <S.ListMovie
      data={data}
      keyExtractor={(item) => String(item.id)}
      ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
      renderItem={renderItem}
      numColumns={2}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
      onEndReached={getMoreMovies}
      onEndReachedThreshold={0.2}
      ListFooterComponent={<LoadingAnimation />}
    />
  )
}
