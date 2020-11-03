import Reducers from '@reducers'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'
import thunkMiddleware from 'redux-thunk'

const INITIAL_STATE = {}

const store = createStore(Reducers, INITIAL_STATE, composeWithDevTools(applyMiddleware(thunkMiddleware)))
const persistor = persistStore(store)

export { store, persistor }
