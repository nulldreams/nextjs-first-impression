import { styled } from '@styles/theme'
import React from 'react'
import { findHeroes } from 'src/hooks/useRequest'
import { Loading } from '../Loading'
import { HeroCardRedux } from './HeroCardRedux'

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

export const HeroesList: React.FC = () => {
  const heroes = findHeroes()

  if (!heroes) return <Loading />

  return (
    <Heroes>
      <HeroesGrid>
        {heroes.map((hero) => {
          return (
            <HeroBox key={hero.slug}>
              <p>{hero.name}</p>
              <HeroCardRedux hero={hero} />
            </HeroBox>
          )
        })}
      </HeroesGrid>
    </Heroes>
  )
}
