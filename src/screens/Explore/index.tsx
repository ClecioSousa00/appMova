import * as S from './styles'
import { View, Keyboard } from 'react-native'
import { useState } from 'react'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useGetData } from '../../hooks/useGetData'

import { DataMoviesProps } from '../../types/movieTypes'

import { CardMovie } from '../../components/CardMovie'
import { InputLogin } from '../../components/Form/InputLogin'
import { LoadingAnimation } from '../../components/LoadingAnimation'
import { NotFound } from '../../components/NotFound'

const SearchSchema = z.object({
  search: z
    .string({ required_error: 'Filme ou série não informado' })
    .min(1, 'Informe um filme ou Série'),
})
export type SearchSchemaProps = z.infer<typeof SearchSchema>
export const Explore = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchSchemaProps>({ resolver: zodResolver(SearchSchema) })
  const { getData } = useGetData()
  const [textSearch, setTextSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<DataMoviesProps[]>([])
  const [emptyData, setEmptyData] = useState(false)

  const handleSearch = async ({ search }: SearchSchemaProps) => {
    Keyboard.dismiss()
    if (textSearch === search) return

    setIsLoading((old) => !old)

    try {
      const dataSearch = await getData(`search/movie?query=${search}`)
      setData(dataSearch!)
      setEmptyData(false)
    } catch (error) {
      setEmptyData(true)
      console.log('erro na request')
    }

    setTextSearch(search)
    setIsLoading((old) => !old)
  }

  return (
    <S.Container>
      <InputLogin
        control={control}
        name="search"
        placeholder="Buscar"
        error={errors.search && errors.search?.message}
      >
        <S.ButtonSearch onPress={handleSubmit(handleSearch)}>
          <S.Icon name="search" />
        </S.ButtonSearch>
      </InputLogin>

      {emptyData ? (
        <NotFound />
      ) : isLoading ? (
        <LoadingAnimation />
      ) : (
        data.length > 0 && (
          <S.ListMovie
            data={data}
            keyExtractor={(item) => String(item.id)}
            ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
            renderItem={({ item }) => <CardMovie data={item} />}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        )
      )}
    </S.Container>
  )
}
