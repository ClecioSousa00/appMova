import styled from 'styled-components/native'
import { FlatList, FlatListProps } from 'react-native'
import { DataMoviesProps } from '../../types/movieTypes'

export const ListMovie = styled(
  FlatList as new (
    props: FlatListProps<DataMoviesProps>,
  ) => FlatList<DataMoviesProps>,
)``
