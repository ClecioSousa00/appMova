import * as S from './styles'

import { CastProps } from '../../types/castTypes'

import imageUserEmpty from '../../assets/userNull.png'

type CastProfileProps = {
  data: CastProps
}

export const CastProfile = ({ data }: CastProfileProps) => {
  const { name = 'Não informado', character = 'Não informado' } = data
  return (
    <S.Container>
      <S.ContentImage>
        <S.ImageProfile
          source={
            data.profile_path
              ? {
                  uri: `https://image.tmdb.org/t/p/w500${data.profile_path}`,
                }
              : imageUserEmpty
          }
        />
      </S.ContentImage>

      <S.ContentText>
        <S.Name>{name}</S.Name>
        <S.ActingName>{character}</S.ActingName>
      </S.ContentText>
    </S.Container>
  )
}
