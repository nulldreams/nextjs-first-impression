import { styled } from '@styles/theme'
import React, { useCallback } from 'react'
import { useRequest } from 'src/hooks/useRequest'
import { mutate as mutateGlobal } from 'swr'
import { Loading } from '../Loading'
import { HeroCard } from './HeroCard'

const Heroes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`

const HeroesGrid = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`

const HeroBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeroesListWithMutate: React.FC = () => {
  const { data, mutate } = useRequest('heroes')

  const changeHeroName = useCallback(
    (slug: string) => {
      // api call

      const updatedHeroes = data?.map((hero) => {
        if (hero.slug === slug) {
          mutateGlobal(`heroes?hero=${slug}`, { ...hero, name: 'Theo Gazinator' })
          return { ...hero, name: 'Theo Gazinator' }
        }

        return hero
      })

      mutate(updatedHeroes, false)
    },
    [data, mutate]
  )

  if (!data) return <Loading />

  return (
    <Heroes>
      <HeroesGrid>
        {data.map((hero) => {
          return (
            <HeroBox key={hero.slug}>
              <button type="button" onClick={() => changeHeroName(hero.slug)}>
                Change Name
              </button>
              <p>{hero.name}</p>
              <HeroCard hero={hero} />
            </HeroBox>
          )
        })}
      </HeroesGrid>
    </Heroes>
  )
}
