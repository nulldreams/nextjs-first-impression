import { IAction, IMapPayload } from '@interfaces/redux'
import { HeroesTypes } from '@types/heroes.types'
import { IDota2Hero } from 'src/services/interfaces/api.interfaces'

interface IHeroesStateProps {
  heroes: IDota2Hero[]
  hero: IDota2Hero
}

const INITIAL_STATE: IHeroesStateProps = {
  heroes: [],
  hero: {
    avatar: '/img/loading.gif',
    slug: '',
    info_url: '',
    name: '',
    bio: '',
    atk: '',
    atk_l: '',
    roles: [],
    roles_l: []
  }
}

type IMap = IMapPayload

export const HeroesReducer = (state = INITIAL_STATE, action: IAction<IMap>) => {
  switch (action.type) {
    case HeroesTypes.SET_HERO:
      return {
        ...state,
        ...action.payload
      }

    case HeroesTypes.SET_ALL_HEROES:
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
