import * as S from './styles'

import { Splash } from '../Splash'
import { HighlightFilm } from '../../components/HighlightFilm'
import { useAxios } from '../../hooks/useAxios'

export const Home = () => {
  const { data } = useAxios('/trending/movie/week')

  if (!data.length) {
    console.log('splash da home')

    return <Splash />
  }
  const randomIndex = Math.floor(Math.random() * data.length - 1)

  return (
    <S.ContainerView>
      <HighlightFilm data={data[randomIndex]} />
    </S.ContainerView>
  )
}
