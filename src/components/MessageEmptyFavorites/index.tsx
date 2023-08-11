import * as S from './styles'
import ImageList from '../../assets/noData.svg'

export const MessageEmptyFavorites = () => {
  return (
    <S.Container>
      <ImageList height={200} width={200} />

      <S.Title>Sua lista está vazia</S.Title>
      <S.SubTitle>
        Parece que você não adicionou{'\n'}
        nenhum filme aos favoritos
      </S.SubTitle>
    </S.Container>
  )
}
