import * as S from './styles'
export const FlagMessage = ({ text = '' }) => {
  return (
    <S.Container>
      <S.Text>{text}</S.Text>
    </S.Container>
  )
}
