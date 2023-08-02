import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`

export const IconsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`
export const ButtonBack = styled.TouchableOpacity``

export const Icon = styled(Feather)`
  /* font-size: ${RFValue(24)}px; */
  color: ${({ theme }) => theme.COLORS.LIGHT};
`
export const IconInfos = styled(Feather)`
  /* font-size: ${RFValue(24)}px; */
  color: ${({ theme }) => theme.COLORS.TEXT};
`

export const ContainerInfos = styled.View`
  padding: 30px 24px 0;
  height: 100%;
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
  gap: 12px;
  margin-top: 8px;
`

export const infosSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.SECONDARY};
  font-size: ${RFValue(12)}px;
`

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;
  gap: 8px;
`
