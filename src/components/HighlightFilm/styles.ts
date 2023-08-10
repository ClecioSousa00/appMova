import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { LinearGradient } from 'expo-linear-gradient'

export const Background = styled.ImageBackground`
  height: 400px;
`

export const HighlightFilm = styled(LinearGradient)`
  height: 100%;
  padding: 80px 30px 24px;
  justify-content: space-between;
`
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.Image`
  width: 24px;
  height: 24px;
`

export const IconsContainer = styled.View`
  flex-direction: row;
  gap: 40px;
`
export const ButtonSearch = styled.Pressable``

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.COLORS.LIGHT};
`
export const InfosMovie = styled.View`
  gap: 14px;
`

export const TitleMovie = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.LIGHT};
  font-size: ${RFValue(24)}px;
`

export const GenreMovie = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.LIGHT};
  font-size: ${RFValue(12)}px;
`
export const ContainerButtons = styled.View`
  flex-direction: row;
  gap: 12px;
`
