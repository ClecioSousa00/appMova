import * as S from './styles'

type CastProfileProps = {
  gender: number
  name: string
  profile_path: string
}

export const CastProfile = () => {
  const url = 'https://image.tmdb.org/t/p/w500/2mfJILwVGr4RBha3OihQVfq5nyL.jpg'

  return (
    <S.Container>
      <S.ContentImage>
        <S.ImageProfile source={{ uri: url }} />
      </S.ContentImage>

      <S.ContentText>
        <S.Name>James Cameron</S.Name>
        <S.ActingName>ator</S.ActingName>
      </S.ContentText>
    </S.Container>
  )
}
