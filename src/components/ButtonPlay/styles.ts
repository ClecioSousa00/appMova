import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

export type ButtonPlayProps = {
  variant?: boolean
}

export const PlayButton = styled.TouchableOpacity<ButtonPlayProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 7px 18px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  ${({ variant }) =>
    variant &&
    css`
      width: 170px;
    `};
`
export const IconPlay = styled(AntDesign)`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.COLORS.LIGHT};
`

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.COLORS.LIGHT};
`
