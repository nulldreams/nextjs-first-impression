import { IAction, IDota2Heroe, IMapPayload } from '@interfaces/api.interfaces'
import { HeroesTypes } from '@types/heroes.types'

interface IHeroesStateProps {
  heroes: IDota2Heroe[]
}

const INITIAL_STATE: IHeroesStateProps = {
  heroes: []
}

type IMap = IMapPayload

export const HeroesReducer = (state = INITIAL_STATE, action: IAction<IMap>) => {
  switch (action.type) {
    case HeroesTypes.SET_HEROES:
      return {
        ...state,
        ...action.payload
      }

    case HeroesTypes.RESET:
      return INITIAL_STATE

    default:
      return state
  }
}
