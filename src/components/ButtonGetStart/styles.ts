import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 18px 0;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
`

export const TextButton = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.LIGHT};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(16)}px;
`
