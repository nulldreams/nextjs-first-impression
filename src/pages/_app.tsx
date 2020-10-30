import store, { Store } from '@redux/store'
import { MainTheme } from '@theme/MainTheme'
import { NextPageContext } from 'next'
import withRedux from 'next-redux-wrapper'
import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'

interface AppContext extends NextPageContext {
  store: Store
}

class MyApp extends App<AppContext> {
  render() {
    const { store, Component, ...props } = this.props
    return (
      <Provider store={store}>
        <MainTheme>
          <Component {...props} />
        </MainTheme>
      </Provider>
    )
  }
}

export default withRedux(store)(MyApp)
