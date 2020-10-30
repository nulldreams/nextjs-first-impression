import { addTodo } from '@redux/actions'
import { Store } from '@redux/store'
import { NextComponentType, NextPageContext } from 'next'
import React from 'react'
import { HeroesList } from '../components/Heroes/HeroesList'
import { DefaultLayout } from '../layouts/Default'

interface IndexPageContext extends NextPageContext {
  store: Store
}

const Home: NextComponentType<IndexPageContext> = ({ store }) => {
  return (
    <DefaultLayout>
      <HeroesList />
    </DefaultLayout>
  )
}

Home.getInitialProps = ({ store, req }) => {
  const isServer = !!req
  const { todo } = store.getState()
  // we can add any custom data here
  // for examle, the data from api server
  store.dispatch(
    addTodo(
      Object.assign(todo.item, {
        value: 'Hello World!'
      })
    )
  )

  return {
    isServer
  }
}

export default Home
