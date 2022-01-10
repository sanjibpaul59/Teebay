import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to={'/signin'}>Sign In</Link>
        </h1>
      </div>
    )
  }
}
export default HomePage
