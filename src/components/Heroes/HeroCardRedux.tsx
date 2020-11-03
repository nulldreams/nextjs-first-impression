import { styled } from '@styles/theme'
import Link from 'next/link'
import React from 'react'
import { IDota2Hero } from 'src/services/interfaces/api.interfaces'

interface IHeroCardProps {
  hero: IDota2Hero
}

const Card = styled.div`
  height: 150px;
  cursor: pointer;
`

export const HeroCardRedux: React.FC<IHeroCardProps> = ({ hero }) => {
  return (
    <Link href={`/heroes/${hero.slug}`} key={hero.slug}>
      <Card>
        <img src={hero.avatar} />
      </Card>
    </Link>
  )
}
