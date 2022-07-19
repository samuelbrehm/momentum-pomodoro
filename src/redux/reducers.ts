import { combineReducers } from 'redux'
import * as users from './users/users'

// export function reducers() {
//   combineReducers({
//     users: users.reducer,
//   })
// }

export const reducers = combineReducers({
  users: users.reducer,
})

export type State = ReturnType<typeof reducers>
export type Action = Parameters<typeof reducers>[0]

declare module 'react-redux' {
  interface DefaultRootState {
    users: State
  }
}
