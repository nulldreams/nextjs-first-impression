import Reducers from '@reducers/'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

export const makeStore = (initialState: {}) => {
  return createStore(Reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
