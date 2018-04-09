import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { ProductList } from '../products-list'

import { getStore } from '../../../__mocks__/static-data'

describe('ProductList', () => {
  let wrapper
  let tree
  const store = getStore()
  const getProductList = jest.fn()

  beforeEach(() => {
    wrapper = renderer.create(
      <Provider store={store}>
        <ProductList getProductList={getProductList} />
      </Provider>
    )

    tree = wrapper.toJSON()
  })

  it('should call getProductList on componentWillMount', () => {
    expect(getProductList).toHaveBeenCalled()
  })
})
