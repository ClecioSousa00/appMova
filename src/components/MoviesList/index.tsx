import * as S from './styles'

import { ListRenderItemInfo, View } from 'react-native'

import { DataMoviesProps } from '../../types/movieTypes'

import { CardMovie } from '../CardMovie'
import { LoadingAnimation } from '../LoadingAnimation'

type MoviesListProps = {
  data: DataMoviesProps[]
  getMoreMovies: () => void
}

export const MoviesList = ({ getMoreMovies, data }: MoviesListProps) => {
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
