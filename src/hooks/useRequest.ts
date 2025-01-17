import { api } from 'src/services/api'
import { IDota2Hero } from 'src/services/interfaces/api.interfaces'
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

export const findHeroes = (): IDota2Hero[] => {
  const { data } = useSWR<IDota2Hero[]>('heroes', async (url) => {
    const response = await api.get(url)

    return response.data
  })

  return data
}

export const findHero = (hero_slug: string): IDota2Hero => {
  const { data } = useSWR<IDota2Hero>(`heroes?hero=${hero_slug}`, async (url) => {
    const response = await api.get(url)

    return response.data
  })

  return data
}
