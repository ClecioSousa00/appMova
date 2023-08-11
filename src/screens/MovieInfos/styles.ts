import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { FlatList, FlatListProps } from 'react-native'
import { CastProps } from '../../types/castTypes'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`
export const ContainerLoading = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  justify-content: center;
  align-items: center;
`

export const IconsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`
export const ButtonIcon = styled.TouchableOpacity``

export const IconInfos = styled(MaterialIcons)`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: 20px;
`

export const ContainerInfos = styled.ScrollView`
  padding: 30px 20px 0;
`

export const ContentTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const TitleMovie = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: ${RFValue(20)}px;
`
export const ContentSubtitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 26px;
`
export const ContentInfosSubtitle = styled.View`
  flex-direction: row;
  gap: 8px;
`

export const infosSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.SECONDARY};
  font-size: ${RFValue(12)}px;
  margin-right: 8px;
`

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 26px;
  gap: 8px;
`
export const GenresList = styled.View`
  flex-direction: row;
`
export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: ${RFValue(12)}px;
  margin-top: 20px;
  text-align: justify;
`

export const CastList = styled(
  FlatList as new (props: FlatListProps<CastProps>) => FlatList<CastProps>,
)``
