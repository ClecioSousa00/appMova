import styled, { css } from 'styled-components/native'

type ErrorProps = {
  error: string
}

export const Container = styled.View``

export const ContainerInput = styled.View<ErrorProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 18px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_lIGHT};
  border-radius: 10px;
  margin-bottom: 20px;

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${({ theme }) => theme.COLORS.SECONDARY};
      margin-bottom: 0px;
      background-color: ${({ theme }) => theme.COLORS.INPUTERROR};
    `};
`

export const Input = styled.TextInput`
  width: 80%;
`
export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.COLORS.SECONDARY};
  margin-bottom: 10px;
`
