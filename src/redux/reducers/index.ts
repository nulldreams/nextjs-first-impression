import { combineReducers } from 'redux'
import { HeroesReducer } from './heroes.reducers'

export default combineReducers({
  dota: HeroesReducer
})
