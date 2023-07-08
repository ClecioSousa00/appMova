import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  justify-content: flex-end;
`
export const Content = styled.View`
  align-items: center;
  gap: 100px;
  height: 70%;
`

export const Logo = styled.Image``

export const Loading = styled.View`
  width: 30px;
  height: 30px;
  background-color: red;
`
