import axios from 'axios'

const API_KEY = '62ddf17397d15a4dc38ea4c5178f5501'
const BASE_URL = 'https://api.themoviedb.org/3'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'pt-BR',
  },
})
