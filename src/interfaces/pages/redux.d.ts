import { IDota2Hero } from 'src/services/interfaces/api.interfaces'

declare namespace IReduxPage {
  interface IProps {
    hero: IDota2Hero
    heroes: IDota2Hero[]
  }

  export interface IStateProps {
    dota: IProps
  }
}

export { IReduxPage }
