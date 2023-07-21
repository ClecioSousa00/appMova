import * as S from './styles'
import logo from '../../assets/logo-Mova.png'
import { ButtonPlay } from '../../components/ButtonPlay'
import { ButtonFavorite } from '../../components/ButtonFavorites'
import banner from '../../assets/banner-blizzard.png'

export const Home = () => {
  return (
    <>
      <S.ContainerView>
        <S.Background source={banner} imageStyle={{ resizeMode: 'cover' }}>
          <S.HighlightFilm>
            <S.Header>
              <S.Logo source={logo} />
              <S.IconsContainer>
                <S.Icon name="search" />
                <S.Icon name="bell" />
              </S.IconsContainer>
            </S.Header>
            <S.InfosMovie>
              <S.TitleMovie>Dr. Strange 2</S.TitleMovie>
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
