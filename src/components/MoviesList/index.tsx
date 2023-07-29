import { DataMoviesProps } from '../../types/movieTypes'
import { CardMovie } from '../CardMovie'
import { ListRenderItemInfo, View } from 'react-native'
import * as S from './styles'
import { LoadingAnimation } from '../LoadingAnimation'
// import { useCallback } from 'react'

type MoviesListProps = {
  data: DataMoviesProps[]
  getMoreMovies: () => void
}

export const MoviesList = ({ getMoreMovies, data }: MoviesListProps) => {
  // const renderItem = useCallback(
  //   ({ item }: { item: DataMoviesProps }) => <CardMovie data={item} />,
  //   [],
  // )
  function renderItem({ item }: ListRenderItemInfo<DataMoviesProps>) {
    return <CardMovie data={item} />
  }

  return (
    <S.ListMovie
      data={data}
      keyExtractor={(item) => String(item.id)}
      ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
      renderItem={renderItem}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      onEndReached={getMoreMovies}
      onEndReachedThreshold={0.1}
      ListFooterComponent={<LoadingAnimation />}
    />
  )
}
