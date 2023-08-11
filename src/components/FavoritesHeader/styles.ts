import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const ContentHeader = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 20px;
`

export const Image = styled.Image`
  width: 24px;
  height: 24px;
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: ${RFValue(24)}px;
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`
