import * as S from './styles'

import { useNavigation, useRoute } from '@react-navigation/native'

import { TabTypes } from '../../routes'

import { MoviesList } from '../../components/MoviesList'
import { LoadingAnimation } from '../../components/LoadingAnimation'

import { usePagination } from '../../hooks/usePagination'

type ParamsProps = {
  title: string
  url: string
}

export const AllMovieSection = () => {
  const navigation = useNavigation<TabTypes>()
  const route = useRoute()
  const { title, url } = route.params as ParamsProps

  const { dataList, isLoading, loadMoreData } = usePagination(url)

  return (
    <S.Container>
      <S.Header>
        <S.ButtonBack onPress={() => navigation.navigate('home')}>
          <S.Icon name="arrow-left" />
        </S.ButtonBack>
        <S.Title>{title}</S.Title>
        <S.ButtonSearch
          activeOpacity={0.7}
          onPress={() => navigation.navigate('explore')}
        >
          <S.Icon name="search" />
        </S.ButtonSearch>
      </S.Header>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <MoviesList getMoreMovies={loadMoreData} data={dataList} />
      )}
    </S.Container>
  )
}
