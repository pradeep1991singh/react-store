// @flow

import type { CustomError, InitialTestAction } from '../common/type-common'

export type Product = {
  product_id: string,
  product_name: string,
  price: number,
  quantity?: ?number,
}

export type Products = {
  +[product_id: string]: Product,
}

export type ProductListProps = {
  products: Array<Product>,
  getProductList: () => void,
  addToCart: (product: Product) => void,
  removeFromCart: (product_id: string) => void,
}

export type ProductListStates = {
  products: Array<Product>,
  searchText: string,
  offset: number,
  total: number,
  currentCount: number,
  isLoading: boolean,
}

export type ProductProps = {
  data: Product,
  addToCart: (product: Product) => void,
  removeFromCart: (product_id: string) => void,
}

export type ProductStates = {
  quantity: number,
}

export type ProductStore = {
  isLoading: boolean,
  products: Products,
  error: CustomError,
}

export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST'
export type GetProductListAction = {
  type: typeof GET_PRODUCT_LIST,
}

export const GET_PRODUCT_LIST_SUCCESS = 'GET_PRODUCT_LIST_SUCCESS'
export type GetProductListSuccessAction = {
  type: typeof GET_PRODUCT_LIST_SUCCESS,
  data: Array<Product>,
}

export const GET_PRODUCT_LIST_FAIL = 'GET_PRODUCT_LIST_FAIL'
export type GetProductListFailAction = {
  type: typeof GET_PRODUCT_LIST_FAIL,
  error: CustomError,
}

export const ADD_TO_CART = 'ADD_TO_CART'
export type AddToCartAction = {
  type: typeof ADD_TO_CART,
  product: Product,
}

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export type RemoveFromCartAction = {
  type: typeof REMOVE_FROM_CART,
  product_id: string,
}

export type ProductStoreAction =
  | GetProductListAction
  | GetProductListSuccessAction
  | GetProductListFailAction
  | AddToCartAction
  | RemoveFromCartAction
  | InitialTestAction
