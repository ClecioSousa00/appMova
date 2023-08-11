import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { LinearGradient } from 'expo-linear-gradient'

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.DARK};
`
export const Container = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  padding: 0 24px 36px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.COLORS.LIGHT};
  text-align: center;
`
export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.COLORS.LIGHT};
  text-align: center;
`
export const ContainerIcons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
`

export const Bar = styled(LinearGradient)`
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  width: 32px;
  height: 8px;
  border-radius: 50px;
`

export const Circle = styled.View`
  background-color: ${({ theme }) => theme.COLORS.LIGHT};
  height: 8px;
  width: 8px;
  border-radius: 100px;
`
