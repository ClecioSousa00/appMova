import * as S from './styles'
import { auth } from '../../services/firebaseConfig'
import { signOut } from 'firebase/auth'
export const Favorites = () => {
  const handleSignOut = () => {
    signOut(auth)
  }

  return (
    <S.Container>
      <S.button onPress={handleSignOut} />
    </S.Container>
  )
}
