// @flow

import React, { Component } from 'react'
import { toast } from 'react-toastify'

import type { ProductProps, ProductStates, Product } from './type-products'
import add from '../assets/add.png'
import trash from '../assets/trash.png'

export default class ProductCard extends Component<
  ProductProps,
  ProductStates
> {
  state: ProductStates = {
    quantity: 1,
  }

  updateQuantity = (quantity: number) => {
    this.setState({ quantity })
  }

  addProductToCart = (product: Product) => {
    toast.success(`${product.product_name} is added.`, {
      position: toast.POSITION.TOP_CENTER,
    })
    this.props.addToCart(product)
  }

  removeProductFromCart = (id: string, title: string) => {
    toast.success(`${title} is removed.`, {
      position: toast.POSITION.TOP_CENTER,
    })
    this.props.removeFromCart(id)
  }

  render() {
    const {
      product_id: id,
      product_name: title,
      price: details,
      quantity: currentQuantity,
    } = this.props.data

    const { quantity } = this.state

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Price: ${details}</p>

          <div className="actions">
            <div className="quantity">
              <span>Qty:</span>
              <a
                className="btn btn-outline-primary"
                onClick={() => this.updateQuantity(quantity - 1)}
              >
                -
              </a>
              <span>{quantity}</span>
              <a
                className="btn btn-outline-primary"
                onClick={() => this.updateQuantity(quantity + 1)}
              >
                +
              </a>
            </div>

            {currentQuantity && (
              <a
                className="btn btn-outline-primary remove"
                onClick={() => this.removeProductFromCart(id, title)}
              >
                <img src={trash} alt="trash" className="cart-icon" />
                <span>Remove</span>
              </a>
            )}

            {!currentQuantity && (
              <a
                className="btn btn-outline-primary add"
                onClick={() =>
                  this.addProductToCart({ ...this.props.data, quantity })
                }
              >
                <img src={add} alt="trash" className="cart-icon" />
                <span>Add</span>
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }
}
