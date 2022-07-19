import { Action } from 'redux'
import { SagaIterator } from 'redux-saga'
import { DefaultRootState } from 'react-redux'
import { put, takeLatest } from 'redux-saga/effects'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { keyUserCached } from '../../infra/constants/cached-values-users'

export interface UserData {
  username: string
}

export enum Types {
  FISRT_ACCESS = 'USERS/FIRST_ACCESS',
  LOGIN = 'USERS/LOGIN',
  CLEAR_USER = 'USERS/CLEAR_USER',
}

export interface StartOnboardingAction extends Action {
  type: Types.FISRT_ACCESS
}

export interface LoginUserAction extends Action {
  type: Types.LOGIN
  payload: UserData
}

export interface ClearUserAction extends Action {
  type: Types.CLEAR_USER
}

export type Actions =
  | StartOnboardingAction
  | LoginUserAction
  | ClearUserAction
  | { type: '' }

export type State = {
  username: UserData | null
  firstAccess: boolean
}

export const INITIAL_STATE: State = {
  firstAccess: true,
  username: null,
}

export function reducer(state = INITIAL_STATE, action: Actions): State {
  switch (action.type) {
    case Types.FISRT_ACCESS:
      return { ...state, firstAccess: false }
    case Types.LOGIN:
      return { ...state, username: action.payload }
    case Types.CLEAR_USER:
      return INITIAL_STATE
    default:
      return state
  }
}

// Actions Creators

export function startOnboarding(): StartOnboardingAction {
  return {
    type: Types.FISRT_ACCESS,
  }
}

export function loginUser(payload: UserData): LoginUserAction {
  return {
    type: Types.LOGIN,
    payload,
  }
}

export function clearUser(): ClearUserAction {
  return {
    type: Types.CLEAR_USER,
  }
}

// Selectors
export function selectFirstAccess(state: DefaultRootState): boolean {
  return state.users.firstAccess
}

// Sagas

export function* usersWorker(): SagaIterator {
  try {
    // yield put(startOnboarding())
    console.log('startOnboarding saga users')
  } catch (error) {
    console.log('error saga users', error)
  }
}

export function* userFirstAccessWorker(): SagaIterator {
  try {
    // colocar usuário no cache com async storage
    yield put(startOnboarding())
  } catch (error) {
    console.log('error saga users', error)
  }
}

export function* watch(): SagaIterator {
  yield takeLatest(Types.LOGIN, usersWorker)
  yield takeLatest(Types.FISRT_ACCESS, userFirstAccessWorker)
}
