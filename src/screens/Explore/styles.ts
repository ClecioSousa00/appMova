import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { FlatList, FlatListProps } from 'react-native'
import { DataMoviesProps } from '../../types/movieTypes'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 60px 24px 0;
  align-items: center;
`

export const ContainerInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 18px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_lIGHT};
  border-radius: 10px;
  margin-bottom: 20px;
`
export const ButtonSearch = styled.TouchableOpacity``

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.COLORS.INACTIVE};
`
export const Input = styled.TextInput`
  flex: 1;
`

export const ListMovie = styled(
  FlatList as new (
    props: FlatListProps<DataMoviesProps>,
  ) => FlatList<DataMoviesProps>,
)``
