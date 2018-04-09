// $FlowFixMe

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import { ProductList } from './products'
import Cart from './cart/cart'

export default class Routes extends Component<void, void> {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/cart" component={Cart} />
      </Switch>
    )
  }
}
