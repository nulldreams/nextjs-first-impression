import { Loading } from '@components/Loading'
import { DefaultLayout } from '@layouts/Default'
import { HeroesActions } from '@redux/actions/heroes.actions'
import { styled } from '@styles/theme'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'
import { findHero } from 'src/hooks/useRequest'

const HeroDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  flex-direction: column;
`

const HeroImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  flex-direction: column;
`

const HeroInfo = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`

const HeroName = styled.h1`
  color: ${({ theme }) => theme.colors.b200};
`

const HeroPage: React.FC = () => {
  const dispatch = useDispatch()
  const { query } = useRouter()
  const hero = findHero(query.hero as string)

  if (!hero) {
    return (
      <DefaultLayout>
        <Loading />
      </DefaultLayout>
    )
  }

  dispatch(HeroesActions.SetLastHero(hero))

  return (
    <DefaultLayout>
      <HeroDiv>
        <Hero>
          <HeroImg>
            <img src={hero.avatar} />
            <HeroName>{hero.name}</HeroName>
          </HeroImg>
          <HeroInfo>
            <p>{hero.bio}</p>
          </HeroInfo>
        </Hero>
      </HeroDiv>
    </DefaultLayout>
  )
}

export default HeroPage
