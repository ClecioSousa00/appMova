import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin: 30px 0 50px;
`

export const ContentImage = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 100px;
  overflow: hidden;
`

export const ImageProfile = styled.Image`
  height: 50px;
  width: 100%;
`

export const ContentText = styled.View``

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: ${RFValue(12)}px;
`

export const ActingName = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.INACTIVE};
  font-size: ${RFValue(12)}px;
`
