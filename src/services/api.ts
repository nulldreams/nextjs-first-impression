import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://dota2api.vercel.app/api/'
})
