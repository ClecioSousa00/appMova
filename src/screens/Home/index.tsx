import * as S from './styles'
import logo from '../../assets/logo-Mova.png'
import { ButtonPlay } from '../../components/ButtonPlay'
import { ButtonFavorite } from '../../components/ButtonFavorites'
import { useState, useEffect } from 'react'
import { axiosInstance } from '../../services/api/axiosInstance'

import { DataMoviesProps } from '../../types/movieTypes'

export const Home = () => {
  const [data, setData] = useState<DataMoviesProps>({} as DataMoviesProps)

  useEffect(() => {
    const getData = async () => {
      const response = await axiosInstance.get('/movie/now_playing')
      setData(response.data.results[0])
      console.log(data)
    }
    getData()
  }, [])

  return (
    <>
      <S.ContainerView>
        <S.Background
          source={{ uri: `https://image.tmdb.org/t/p/w500${data.poster_path}` }}
          imageStyle={{ resizeMode: 'cover' }}
        >
          <S.HighlightFilm>
            <S.Header>
              <S.Logo source={logo} />
              <S.IconsContainer>
                <S.Icon name="search" />
                <S.Icon name="bell" />
              </S.IconsContainer>
            </S.Header>
            <S.InfosMovie>
              <S.TitleMovie>{data.title}</S.TitleMovie>
              <S.GenreMovie>
                Action, Superhero, Science Fiction, ...
              </S.GenreMovie>
              <S.ContainerButtons>
                <ButtonPlay />
                <ButtonFavorite />
              </S.ContainerButtons>
            </S.InfosMovie>
          </S.HighlightFilm>
        </S.Background>
      </S.ContainerView>
    </>
  )
}
