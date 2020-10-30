import { styled } from '@styles/theme'
import React from 'react'

export const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  background-image: ${({ theme }) => `linear-gradient(to top, ${theme.colors.b100}, ${theme.colors.b200})`};
  color: ${({ theme }) => theme.colors.white};
`

export const Header: React.FC = () => <StyledHeader>asdasd</StyledHeader>
