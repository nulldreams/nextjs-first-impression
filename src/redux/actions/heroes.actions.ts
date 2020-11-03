import { HeroesTypes } from '@redux/types/heroes.types'
import { Dispatch } from 'redux'
import { IDota2Hero } from 'src/services/interfaces/api.interfaces'

export const HeroesActions = {
  SetLastHero: (hero: IDota2Hero) => (dispatch: Dispatch) => {
    dispatch({
      payload: {
        hero
      },
      type: HeroesTypes.SET_HERO
    })
  },
  SetHeroes: (heroes: IDota2Hero[]) => (dispatch: Dispatch) => {
    dispatch({
      payload: {
        heroes
      },
      type: HeroesTypes.SET_ALL_HEROES
    })
  },
  Reset: () => ({
    type: HeroesTypes.RESET
  })
}
