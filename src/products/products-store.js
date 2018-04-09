// @flow

import { put, takeLatest, fork } from 'redux-saga/effects'
import {
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAIL,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from './type-products'

import type {
  Product,
  ProductStore,
  GetProductListAction,
  GetProductListSuccessAction,
  GetProductListFailAction,
  AddToCartAction,
  RemoveFromCartAction,
  ProductStoreAction,
} from './type-products'

import type { CustomError } from '../common/type-common'

import { PRODUCTS_API, reduxSagaFirebase } from '../api'

export const initialState: ProductStore = {
  isLoading: false,
  products: {},
  error: {
    code: '',
    message: '',
  },
}

export const getProductList = (): GetProductListAction => ({
  type: GET_PRODUCT_LIST,
})

export const getProductListSuccess = (
  data: Array<Product>
): GetProductListSuccessAction => ({
  type: GET_PRODUCT_LIST_SUCCESS,
  data,
})

export const getProductListFail = (
  error: CustomError
): GetProductListFailAction => ({
  type: GET_PRODUCT_LIST_FAIL,
  error,
})

export function* getProductListSaga(
  action: GetProductListAction
): Generator<*, *, *> {
  try {
    yield fork(reduxSagaFirebase.database.sync, PRODUCTS_API, {
      successActionCreator: getProductListSuccess,
    })
  } catch (e) {
    yield put(getProductListFail(e))
  }
}

export function* watchGetProductList(): Generator<*, *, *> {
  yield takeLatest(GET_PRODUCT_LIST, getProductListSaga)
}

export const addToCart = (product: Product): AddToCartAction => ({
  type: ADD_TO_CART,
  product,
})

export const removeFromCart = (product_id: string): RemoveFromCartAction => ({
  type: REMOVE_FROM_CART,
  product_id,
})

export default function searchReducer(
  state: ProductStore = initialState,
  action: ProductStoreAction
) {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return {
        ...state,
        isLoading: true,
      }

    case GET_PRODUCT_LIST_SUCCESS:
      const products = {}
      action.data.forEach(product => {
        products[product.product_id] = product
      })
      return {
        ...state,
        isLoading: false,
        products: products,
      }

    case GET_PRODUCT_LIST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }

    case ADD_TO_CART:
      return {
        ...state,
        products: {
          ...state.products,
          [action.product.product_id]: action.product,
        },
      }

    case REMOVE_FROM_CART:
      const {
        products: { [action.product_id]: { quantity: deleted, ...product } },
      } = state
      return {
        ...state,
        products: {
          ...state.products,
          [action.product_id]: product,
        },
      }

    default:
      return state
  }
}
