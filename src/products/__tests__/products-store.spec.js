import { put, call, fork } from 'redux-saga/effects'

import productsStoreReducer, {
  getProductList,
  getProductListSaga,
  getProductListSuccess,
} from '../products-store'
import { firebaseApp, PRODUCTS_API, reduxSagaFirebase } from '../../api'

describe('ProductsStore', () => {
  it('should send get product list request properly', () => {
    const gen = getProductListSaga(getProductList())
    expect(gen.next().value).toEqual(
      fork(reduxSagaFirebase.database.sync, PRODUCTS_API, {
        successActionCreator: getProductListSuccess,
      })
    )
    expect(gen.next().done).toBe(true)
  })
})
