import axios from 'axios'


const BASE_URL = 'https://api.themoviedb.org/3'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: process.env.EXPO_PUBLIC_TMDB_APY_KEY,
    language: 'pt-BR',
  },
})
