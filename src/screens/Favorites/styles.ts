import styled from 'styled-components/native'
import { DataMoviesProps } from '../../types/movieTypes'
import { FlatList, FlatListProps } from 'react-native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 60px 24px 0;
  align-items: center;
`

export const button = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: red;
`
export const Text = styled.Text``

export const ListMovie = styled(
  FlatList as new (
    props: FlatListProps<DataMoviesProps>,
  ) => FlatList<DataMoviesProps>,
)``
