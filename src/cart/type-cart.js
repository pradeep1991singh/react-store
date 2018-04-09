// @flow

import type { Product } from '../products/type-products'

export type CartProps = {
  cart: Array<Product>,
  removeFromCart: (product_id: string) => void,
}

export type CheckoutProps = {
  items: Array<Product>,
  removeFromCart: (product_id: string) => void,
}
