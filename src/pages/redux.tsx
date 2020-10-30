import { addTodo } from '@redux/actions'
import Page from '@redux/containers/page'
import { Store } from '@redux/store'
import { NextComponentType, NextPageContext } from 'next'
import { connect } from 'react-redux'
import { compose } from 'recompose'

interface IndexPageContext extends NextPageContext {
  store: Store
}

const IndexPage: NextComponentType<IndexPageContext> = compose()(Page)

IndexPage.getInitialProps = ({ store, req }) => {
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

export default connect()(IndexPage)
