import { Action as ReduxAction } from 'redux'

export interface IAction<T> extends ReduxAction {
  payload?: T
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IMapPayload {}
