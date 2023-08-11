import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  align-items: center;
`
export const Background = styled.ImageBackground`
  height: 400px;
  width: 100%;
`

export const HighlightFilm = styled(LinearGradient)`
  height: 100%;
  padding: 80px 30px 24px;
  justify-content: space-between;
`
