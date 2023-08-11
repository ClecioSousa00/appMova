import * as S from './styles'
import logo from '../../assets/logo-Mova.png'

export const FavoritesHeader = () => {
  return (
    <S.Container>
      <S.ContentHeader>
        <S.Image source={logo} />
        <S.Text>Favoritos</S.Text>
      </S.ContentHeader>
      <S.Icon name="search" />
    </S.Container>
  )
}
