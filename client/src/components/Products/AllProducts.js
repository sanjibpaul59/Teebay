import React, { Component } from 'react'
import Product from './Product'

class Products extends Component {
  render() {
    return (
      <div className="mt-5">
        <li>
          <ul>
            <Product />
          </ul>
        </li>
      </div>
    )
  }
}

export default Products
