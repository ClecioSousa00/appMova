import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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
