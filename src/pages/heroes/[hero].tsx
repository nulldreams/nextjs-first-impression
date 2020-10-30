import { Loading } from '@components/Loading'
import { IDota2Heroe } from '@interfaces/api.interfaces'
import { DefaultLayout } from '@layouts/Default'
import { styled } from '@styles/theme'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { useRequest } from 'src/hooks/useRequest'

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
  const { query } = useRouter()
  const { data } = useRequest<IDota2Heroe>(`heroes?hero=${query.hero}`)

  if (!data) {
    return (
      <DefaultLayout>
        <Loading />
      </DefaultLayout>
    )
  }

  return (
    <DefaultLayout>
      <HeroDiv>
        <Hero>
          <HeroImg>
            <img src={data.avatar} />
            <HeroName>{data.name}</HeroName>
          </HeroImg>
          <HeroInfo>
            <p>{data.bio}</p>
          </HeroInfo>
        </Hero>
      </HeroDiv>
    </DefaultLayout>
  )
}

export default HeroPage
