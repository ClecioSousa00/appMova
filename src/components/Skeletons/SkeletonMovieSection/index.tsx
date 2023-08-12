import * as S from './styles'
export const SkeletonMovieSection = () => {
  return (
    <S.ContainerSkeleton>
      <S.TitleSkeleton
        from={{ backgroundColor: '#cecece' }}
        animate={{ backgroundColor: '#a3a3a3' }}
        transition={{ type: 'timing', loop: true, duration: 600, delay: 100 }}
      />
      <S.ContentCards>
        <S.CardSkeleton
          from={{ backgroundColor: '#cecece' }}
          animate={{ backgroundColor: '#a3a3a3' }}
          transition={{ type: 'timing', loop: true, duration: 600, delay: 120 }}
        />
        <S.CardSkeleton
          from={{ backgroundColor: '#cecece' }}
          animate={{ backgroundColor: '#a3a3a3' }}
          transition={{ type: 'timing', loop: true, duration: 600, delay: 120 }}
        />
        <S.CardSkeleton
          from={{ backgroundColor: '#cecece' }}
          animate={{ backgroundColor: '#a3a3a3' }}
          transition={{ type: 'timing', loop: true, duration: 600, delay: 120 }}
        />
      </S.ContentCards>
    </S.ContainerSkeleton>
  )
}
