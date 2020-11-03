import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { HeroesReducer } from './heroes.reducers'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['dota']
}

const rootReducer = combineReducers({
  dota: HeroesReducer
})

export default persistReducer(persistConfig, rootReducer)
