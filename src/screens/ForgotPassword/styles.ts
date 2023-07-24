import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 0 24px 50px;
`
export const ButtonBack = styled.TouchableOpacity`
  align-self: flex-start;
  margin-bottom: 80px;
`

export const IconBack = styled(AntDesign)`
  color: ${({ theme }) => theme.COLORS.INACTIVE};
  font-size: ${RFValue(24)}px;
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
  margin-bottom: 40px;
  text-align: center;
`
export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.INACTIVE};
  margin-bottom: 20px;
`

export const Icon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.COLORS.INACTIVE};
  font-size: ${RFValue(18)}px;
`

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 18px 0;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  margin-top: 40px;
`

export const TextButton = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.LIGHT};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(16)}px;
`
