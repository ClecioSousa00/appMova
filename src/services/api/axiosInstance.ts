import axios from 'axios'
// import { TMDB_APY_KEY } from '@env'

// const API_KEY = '62ddf17397d15a4dc38ea4c5178f5501'
const API_KEY = process.env.EXPO_PUBLIC_TMDB_APY_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'pt-BR',
  },
})
