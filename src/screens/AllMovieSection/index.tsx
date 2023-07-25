import { useNavigation, useRoute } from '@react-navigation/native'
import * as S from './styles'
import { TabTypes } from '../../routes'
import { useAxios } from '../../hooks/useAxios'
import { MoviesList } from '../../components/MoviesList'

type ParamsProps = {
  title: string
  url: string
}

export const AllMovieSection = () => {
  const navigation = useNavigation<TabTypes>()
  const route = useRoute()
  const { title, url } = route.params as ParamsProps

  const { data, loading } = useAxios(`${url}`)

  if (loading) {
    return
  }

  return (
    <S.Container>
      <S.Header>
        <S.ButtonBack onPress={() => navigation.navigate('home')}>
          <S.Icon name="arrow-left" />
        </S.ButtonBack>
        <S.Title>{title}</S.Title>
        <S.Icon name="search" />
      </S.Header>
      <MoviesList data={data} />
    </S.Container>
  )
}
