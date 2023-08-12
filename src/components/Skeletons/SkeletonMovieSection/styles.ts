import styled from 'styled-components/native'
import { MotiView, MotiProps } from 'moti'

export const ContainerSkeleton = styled.View`
  width: 100%;
  margin-top: 30px;
  margin-left: 24px;
`
export const ContentCards = styled.View`
  flex-direction: row;
`

export const TitleSkeleton = styled(MotiView)<MotiProps>`
  width: 80%;
  height: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
`
export const CardSkeleton = styled(MotiView)<MotiProps>`
  height: 200px;
  width: 150px;
  border-radius: 12px;

  margin-right: 8px;
`
