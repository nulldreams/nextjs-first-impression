import { AppWithStore } from '@interfaces/pages/app'
import { persistor, store } from '@redux/store'
import { MainTheme } from '@theme/MainTheme'
import withRedux from 'next-redux-wrapper'
import App, { AppContext, AppInitialProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

class MyApp extends App<AppWithStore> {
  static async getInitialProps({ Component, ctx }: AppContext): Promise<AppInitialProps> {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainTheme>
            <Component {...pageProps} />
          </MainTheme>
        </PersistGate>
      </Provider>
    )
  }
}

const makestore = () => store

export default withRedux(makestore)(MyApp)
