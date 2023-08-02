import * as S from './styles'
import { ReactNode } from 'react'

type MovieBannerProps = {
  children: ReactNode
  urlImage: string
}

export const MovieBanner = ({ urlImage, children }: MovieBannerProps) => {
  return (
    <S.Background
      source={{ uri: `https://image.tmdb.org/t/p/w500${urlImage}` }}
      imageStyle={{ resizeMode: 'cover' }}
    >
      <S.HighlightFilm colors={['rgba(24, 26, 32, 0)', '#181a20']}>
        {children}
      </S.HighlightFilm>
    </S.Background>
  )
}
