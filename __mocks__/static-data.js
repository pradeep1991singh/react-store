// @flow

import type { Store } from '../src/store/type-store'

export const PRODUCTS = [
  {
    product_id: 'cc0b3b32-33b0-407e-8d1d-2857588e4697',
    product_name: 'Flour - Semolina',
    price: 1.86,
  },
  {
    product_id: '895355de-a035-4a63-9ed9-514af6b25137',
    product_name: 'Chinese Foods - Pepper Beef',
    price: 6.56,
  },
]

export function getStore(store?: Store) {
  return {
    getState() {
      return {
        productStore: {
          products: PRODUCTS,
        },

        dispatch() {
          // $FlowFixMe
          return jest.fn()
        },
        subscribe() {
          // $FlowFixMe
          return jest.fn()
        },
      }
    },
  }
}
