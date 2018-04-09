// @flow

import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import logger from 'redux-logger'

import productStore, { watchGetProductList } from '../products/products-store'

const sagaMiddleware = createSagaMiddleware()

const appReducer = combineReducers({
  productStore,
})

let middlewares = []

if (process.env.NODE_ENV !== 'test') {
  // skip logger middleware if we are running tests
  middlewares.push(logger)
}

middlewares.push(sagaMiddleware)

const store = createStore(appReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(function*() {
  return yield all([watchGetProductList()])
})

export * from '../products/products-store'

export default store
