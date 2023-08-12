import * as S from './styles'
export const SkeletonBanner = () => {
  return (
    <S.ContainerSkeleton>
      <S.TitleSkeleton
        from={{ backgroundColor: '#cecece' }}
        animate={{ backgroundColor: '#a3a3a3' }}
        transition={{ type: 'timing', loop: true, duration: 600, delay: 100 }}
      />
      <S.ContentFooter>
        <S.TitleSkeleton
          from={{ backgroundColor: '#cecece' }}
          animate={{ backgroundColor: '#a3a3a3' }}
          transition={{ type: 'timing', loop: true, duration: 600, delay: 100 }}
        />
        <S.ContainerButtons>
          <S.ButtonSkeleton
            style={{ width: 100 }}
            from={{ backgroundColor: '#cecece' }}
            animate={{ backgroundColor: '#a3a3a3' }}
            transition={{
              type: 'timing',
              loop: true,
              duration: 600,
              delay: 120,
            }}
          />
          <S.ButtonSkeleton
            from={{ backgroundColor: '#cecece' }}
            animate={{ backgroundColor: '#a3a3a3' }}
            transition={{
              type: 'timing',
              loop: true,
              duration: 600,
              delay: 140,
            }}
          />
        </S.ContainerButtons>
      </S.ContentFooter>
    </S.ContainerSkeleton>
  )
}
