import styled from 'styled-components/native'
import { MotiView, MotiProps } from 'moti'

export const ContainerSkeleton = styled.View`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.INACTIVE};
  padding: 60px 30px 24px;
`
export const ContentFooter = styled.View``

export const TitleSkeleton = styled(MotiView)<MotiProps>`
  width: 80%;
  height: 20px;
  border-radius: 10px;
`
export const ContainerButtons = styled.View`
  flex-direction: row;
  gap: 12px;
  margin-top: 20px;
`

export const ButtonSkeleton = styled(MotiView)<MotiProps>`
  width: 170px;
  height: 50px;
  border-radius: 30px;
`
