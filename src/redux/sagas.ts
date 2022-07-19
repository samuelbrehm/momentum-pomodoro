import { all, call } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'
import * as users from './users/users'

export default function* rootSaga(): SagaIterator {
  yield all([call(users.watch)])
}
