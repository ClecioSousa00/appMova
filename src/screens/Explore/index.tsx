import * as S from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { View, Keyboard } from 'react-native'

import { useGetData } from '../../hooks/useGetData'
import { useState } from 'react'
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
      // if (dataSearch![0].id) {
      //   console.log(
      //     '===================================================================================',
      //   )
      //   console.log(dataSearch!)

      //   setData(dataSearch!)
      //   setEmptyData(false)
      // }
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

      {/* {data.length > 0 && (
        <S.ListMovie
          data={data}
          keyExtractor={(item) => String(item.id)}
          ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
          renderItem={({ item }) => <CardMovie data={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      )} */}
    </S.Container>
  )
}
// import * as S from './styles'
// import { z } from 'zod'
// import { useForm, Controller } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { View } from 'react-native'

// import { InputSearch } from '../../components/InputSearch'
// import { useGetData } from '../../hooks/useGetData'
// import { MoviesList } from '../../components/MoviesList'
// import { useState } from 'react'
// import { DataMoviesProps } from '../../types/movieTypes'
// import { CardMovie } from '../../components/CardMovie'

// const SearchSchema = z.object({
//   search: z.string({ required_error: 'Filme ou série não informado' }),
// })
// export type SearchSchemaProps = z.infer<typeof SearchSchema>
// export const Explore = () => {
//   const { getData } = useGetData()
//   const [data, setData] = useState<DataMoviesProps[]>([])
//   const [loading, setLoading] = useState(true)
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<SearchSchemaProps>({ resolver: zodResolver(SearchSchema) })

//   const handleSearch = async (data: SearchSchemaProps) => {
//     setLoading(true)

//     try {
//       const dataSearch = await getData(`search/multi?query=${data.search}`)
//       setData(dataSearch!)
//     } catch (error) {
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <S.Container>
//       <S.ContainerInput>
//         <S.ButtonSearch onPress={handleSubmit(handleSearch)}>
//           <S.Icon name="search" />
//         </S.ButtonSearch>
//         <Controller
//           control={control}
//           name="search"
//           render={({ field: { onChange, value } }) => (
//             <S.Input
//               placeholder="Buscar"
//               onChangeText={onChange}
//               value={value}
//             />
//           )}
//         />
//       </S.ContainerInput>

//       <S.ListMovie
//         data={data}
//         keyExtractor={(item) => String(item.id)}
//         ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
//         renderItem={({ item }) => <CardMovie data={item} />}
//         numColumns={2}
//         showsVerticalScrollIndicator={false}
//       />
//     </S.Container>
//   )
// }
