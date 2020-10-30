import { Header } from '@components/Header'
import GlobalStyle from '@styles/global'
import { styled } from '@styles/theme'
import React from 'react'

const Layout = styled.div``

const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const SpaceBetweenTopAndContent = styled.div`
  margin-top: 10vh;
`

export const DefaultLayout: React.FC = ({ children }) => (
  <Layout>
    <Header />
    <SpaceBetweenTopAndContent />
    <Content>{children}</Content>
    <GlobalStyle />
  </Layout>
)
