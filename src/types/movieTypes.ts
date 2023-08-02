type GenresProps = {
  id: number
  name: string
}

export type DataMoviesProps = {
  id: number
  title: string
  poster_path: string
  vote_average: number
  overview: string
  release_date: string
  genres: GenresProps[]
}

export type MovieDescriptionProps = {} & DataMoviesProps
