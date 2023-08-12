import * as S from './styles'
import ImageSearch from '../../assets/searchSvg.svg'

export const MessageSearchMovie = () => {
  return (
    <S.Container>
      <ImageSearch height={200} width={200} />

      <S.Title>Explore o Universo Cinematográfico</S.Title>
      <S.SubTitle>
        Encontre uma vasta coleção de filmes esperando por você
      </S.SubTitle>
    </S.Container>
  )
}
