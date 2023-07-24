import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const ButtonSign = styled.TouchableOpacity`
  flex-direction: row;
  gap: 10px;
  margin-top: 40px;
`
export const AccountMessage = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.INACTIVE};
`

export const ButtonSignText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY};
`
