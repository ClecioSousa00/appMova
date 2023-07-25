import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  height: 200px;
  width: 150px;
  border-radius: 12px;
  overflow: hidden;
  margin-right: 8px;
`

export const MovieImg = styled.ImageBackground`
  width: 100%;
  height: 100%;
`

export const AverageContainer = styled.View`
  width: 36px;
  padding: 6px 0;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  margin: 12px 0 0 12px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`

export const Average = styled.Text`
  color: ${({ theme }) => theme.COLORS.LIGHT};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(10)}px;
`
