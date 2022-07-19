import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import { reducers } from './reducers'
import rootSaga from './sagas'

export function BuildStore() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(reducers, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSaga)

  return store
}
