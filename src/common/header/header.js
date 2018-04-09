import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { APP_NAME, MENU_ITEMS } from '../index'
import logo from '../../assets/logo.svg'
import cart from '../../assets/cart.png'
import './header.css'

export default class Header extends Component<void, void> {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">
          <img src={logo} className="logo" alt="logo" />
          <span className="logo-label">{APP_NAME}</span>
        </Link>

        <Link className="pull-right cart" to="/cart">
          <img src={cart} className="cart-icon" alt="cart-icon" />
          {MENU_ITEMS.cart}
        </Link>
      </nav>
    )
  }
}
