import * as S from './styles'

export const ButtonPlay = ({ variant }: S.ButtonPlayProps) => {
  return (
    <S.PlayButton variant={variant}>
      <S.IconPlay name="play" />
      <S.TextButton>Play</S.TextButton>
    </S.PlayButton>
  )
}
