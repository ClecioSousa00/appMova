import styled from 'styled-components/native'

export const ContainerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
`

export const TextHome = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 38px;
`
