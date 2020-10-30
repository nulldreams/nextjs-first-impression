import { MainTheme } from '@theme/MainTheme'
import { AppProps } from 'next/app'
import React from 'react'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <MainTheme>
    <Component {...pageProps} />
  </MainTheme>
)

export default MyApp
