import Page from '@components/page'
import { connect } from 'react-redux'
import { compose, pure } from 'recompose'
import { createSelector } from 'reselect'
import { addTodo, deleteTodo, onChangeTodo } from '../actions'
import { selectTodoData, selectTodoItem } from '../selectors'

export default compose(
  connect(
    createSelector(selectTodoItem(), selectTodoData(), (item, data) => ({ item, data })),
    {
      onChangeTodo,
      addTodo,
      deleteTodo
    }
  ),
  pure
)(Page)
