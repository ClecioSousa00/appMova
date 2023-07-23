import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 18px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_lIGHT};
  border-radius: 10px;
  margin-bottom: 20px;
`

export const Input = styled.TextInput`
  flex: 1;
`
export const ErrorMessage = styled.Text``
