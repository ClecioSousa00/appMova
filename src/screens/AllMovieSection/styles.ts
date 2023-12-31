import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 80px 18px 0;
  align-items: center;
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`
export const ButtonBack = styled.TouchableOpacity``

export const ButtonSearch = styled.TouchableOpacity``

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  text-transform: capitalize;
`
