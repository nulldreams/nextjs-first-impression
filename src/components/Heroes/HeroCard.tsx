import { IDota2Heroe } from '@interfaces/api.interfaces'
import { styled } from '@styles/theme'
import Link from 'next/link'
import React from 'react'

interface IHeroCardProps {
  hero: IDota2Heroe
}

const Card = styled.div`
  height: 150px;
  cursor: pointer;
`

export const HeroCard: React.FC<IHeroCardProps> = ({ hero }) => (
  <Link href={`/heroes/${hero.slug}`} key={hero.slug}>
    <Card>
      <img src={hero.avatar} />
    </Card>
  </Link>
)
