import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

export const FavoriteButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 175px;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.COLORS.SECONDARY};
`

export const IconPlay = styled(Ionicons)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY};
`

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY};
`
