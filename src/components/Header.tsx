import { IReduxPage } from '@interfaces/pages/redux'
import { styled } from '@styles/theme'
import React from 'react'
import { useSelector } from 'react-redux'

export const StyledHeader = styled.div`
  width: 100%;
  min-height: 100px;
  background-image: ${({ theme }) => `linear-gradient(to top, ${theme.colors.b100}, ${theme.colors.b200})`};
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 50%;
`

const HeaderContent = styled.div`
  width: 50%;
`

const HeroImage = styled.img`
  margin: 10px;
`

export const Header: React.FC = () => {
  const hero = useSelector((state: IReduxPage.IStateProps) => state.dota.hero)

  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderContent>
          <HeroImage src={hero.avatar} />
        </HeaderContent>
      </HeaderContainer>
    </StyledHeader>
  )
}
