// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CheckoutList from './checkout-list'
import type { CartProps } from './type-cart'
import { removeFromCart } from '../products/products-store'
import { MENU_ITEMS } from '../common'

class Cart extends Component<CartProps, void> {
  render() {
    const { cart } = this.props
    return (
      <div className="cart">
        <h4>{MENU_ITEMS.cart}</h4>
        {cart &&
          cart.length > 0 && (
            <CheckoutList
              items={cart}
              removeFromCart={this.props.removeFromCart}
            />
          )}
        {cart && cart.length === 0 && <p> Your Cary is empty: (</p>}
      </div>
    )
  }
}

const mapStateToProps = ({ productStore: { products } }) => ({
  cart: Object.values(products).filter(product => {
    // $FlowFixMe
    return product.quantity
  }),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeFromCart,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
