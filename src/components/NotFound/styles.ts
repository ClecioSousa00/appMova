import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const ContainerEmpty = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY};
  margin: 34px 0;
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  text-align: center;
`
