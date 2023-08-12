import styled from 'styled-components/native'
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

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.SECONDARY};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(24)}px;
  margin-top: 40px;
`

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(18)}px;
  text-align: center;
  margin-top: 22px;
`

export const ListMovie = styled(
  FlatList as new (
    props: FlatListProps<DataMoviesProps>,
  ) => FlatList<DataMoviesProps>,
)``
