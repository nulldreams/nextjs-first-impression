import { HeroesTypes } from '@redux/types/heroes.types'

export const HeroesActions = {
  FindAllHeroes: () => ({
    type: HeroesTypes.FIND_ALL
  }),
  Reset: () => ({
    type: HeroesTypes.RESET
  })
}
