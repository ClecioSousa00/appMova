import { TabTypes } from '../../routes'
import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
export const ButtonFavorite = () => {
  const navigation = useNavigation<TabTypes>()
  return (
    <S.FavoriteButton onPress={() => navigation.navigate('favorite')}>
      <S.IconPlay name="add" />
      <S.TextButton>Favoritar</S.TextButton>
    </S.FavoriteButton>
  )
}
