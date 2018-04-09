// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getProductList, addToCart, removeFromCart } from './products-store'
import ProductCard from './product-card'
import loading from '../assets/loading.gif'
import './products.css'

import type { ProductListProps, ProductListStates } from './type-products'

export class ProductList extends Component<
  ProductListProps,
  ProductListStates
> {
  componentWillMount() {
    this.props.getProductList()
  }

  render() {
    let { products = [] } = this.props
    if (products.length > 0) {
      products = products.map(product => (
        <ProductCard
          key={product.product_id}
          data={product}
          addToCart={this.props.addToCart}
          removeFromCart={this.props.removeFromCart}
        />
      ))
    }

    return (
      <div className="products">
        {products.length === 0 && <img src={loading} alt="loading" />}
        {products.length > 0 && products}
      </div>
    )
  }
}

const mapStateToProps = ({ productStore: { products } }) => ({
  products: Object.values(products),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getProductList,
      addToCart,
      removeFromCart,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
