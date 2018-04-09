// @flow

import React, { Component } from 'react'
import { toast } from 'react-toastify'

import type { CheckoutProps } from './type-cart'
import './checkout.css'
import trash from '../assets/trash.png'

export default class CheckoutList extends Component<CheckoutProps, void> {
  wip = () =>
    toast.info('Work in progress :)', {
      position: toast.POSITION.TOP_CENTER,
    })

  removeProductFromCart = (id: string, title: string) => {
    toast.success(`${title} is removed.`, {
      position: toast.POSITION.TOP_CENTER,
    })
    this.props.removeFromCart(id)
  }

  render() {
    const { items } = this.props
    const totalItems: number = items.length
    let totalPrice: number = 0
    items.forEach(item => {
      totalPrice += item.price
    })

    return (
      <div className="checkout">
        <ul className="list-group">
          <li
            key="legend"
            className="list-group-item d-flex justify-content-between align-items-center legend"
          >
            Product Name
            <span>Price</span>
            <span>Operation</span>
          </li>
          {items.map(product => (
            <li
              key={product.product_id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {product.product_name}
              <span className="badge badge-primary badge-pill">
                ${product.price}
              </span>
              <img
                src={trash}
                alt="trash"
                className="cart-icon"
                onClick={() =>
                  this.removeProductFromCart(
                    product.product_id,
                    product.product_name
                  )
                }
              />
            </li>
          ))}
        </ul>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">ORDER SUMMARY</h4>
            <div className="card-text">
              <h6>Total Items:</h6>
              <h6>{totalItems}</h6>
              <h6>Total Price:</h6>
              <h6>${totalPrice}</h6>
            </div>
            <a className="btn btn-outline-primary" onClick={this.wip}>
              Place Order
            </a>
          </div>
        </div>
      </div>
    )
  }
}
