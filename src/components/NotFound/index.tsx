import * as S from './styles'
import ImageNotfound from '../../assets/notfound.svg'
export const NotFound = () => {
  return (
    <S.ContainerEmpty>
      <ImageNotfound style={{ width: 100, height: 100 }} />
      <S.Title>Oops! Nada encontrado</S.Title>
      <S.Text>
        Parece que não há séries nem filmes correspondentes à sua busca. Que tal
        experimentar com diferentes termos de pesquisa?
      </S.Text>
    </S.ContainerEmpty>
  )
}
