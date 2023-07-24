import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'

type Error = {
  error: string
}

export const Container = styled.View`
  width: 100%;
  align-items: center;
`

export const Logo = styled.Image`
  width: 90px;
  height: 90px;
  margin-bottom: 40px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 44px;
  text-align: center;
`
export const Icon = styled(MaterialIcons)<Error>`
  color: ${({ theme }) => theme.COLORS.INACTIVE};
  font-size: ${RFValue(18)}px;
  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.COLORS.SECONDARY};
    `};
`

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 18px 0;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  margin-top: 60px;
`

export const TextButton = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.LIGHT};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(16)}px;
`
export const ButtonEye = styled.TouchableOpacity`
  position: absolute;
  right: 18px;
`
export const IconEye = styled(Ionicons)<Error>`
  color: ${({ theme }) => theme.COLORS.INACTIVE};
  font-size: ${RFValue(18)}px;
  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.COLORS.SECONDARY};
    `};
`
