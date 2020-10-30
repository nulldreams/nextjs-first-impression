import { IDota2Heroe } from '@interfaces/api.interfaces'
import { api } from 'src/services/api'
import useSWR from 'swr'

const configOptions = {
  onErrorRetry: () => true,
  errorRetryCount: 3,
  errorRetryInterval: 60000
}

export const useRequest = <Data = any>(url: string) => {
  const { data, error, mutate } = useSWR<Data>(url, async (url) => {
    const response = await api.get(url)

    return response.data
  })

  return { data, error, mutate }
}

export const findHeroes = (): IDota2Heroe[] => {
  const { data } = useSWR<IDota2Heroe[]>('heroes', async (url) => {
    const response = await api.get(url)

    return response.data
  })

  return data
}
