import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { FlatList, FlatListProps } from 'react-native'
import { DataMoviesProps } from '../../types/movieTypes'
export const Container = styled.View`
  margin-top: 30px;
  margin-left: 24px;
`
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 24px;
  margin-bottom: 30px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  text-transform: capitalize;
`

export const SeeAllButton = styled.TouchableOpacity``
export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY};
`
export const ListMovie = styled(
  FlatList as new (
    props: FlatListProps<DataMoviesProps>,
  ) => FlatList<DataMoviesProps>,
)``

// export const ListMovie = styled(
//   FlatList as new (
//     props: FlatListProps<DataMoviesProps>,
//   ) => FlatList<DataMoviesProps>,
// )
