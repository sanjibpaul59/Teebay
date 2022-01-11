import React, { Component } from 'react'
import axios from 'axios'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
  }
  componentDidMount() {
    this.refreshList()
  }
  refreshList = () => {
    axios
      .get('api/users')
      .then((res) => this.setState({ users: res.data }))
      .catch((err) => console.log(err))
  }
  renderList = () => {
    const users = this.state.users.map((user) => user.id === 1)
    return users.firstName
  }

  render() {
    return <div>{this.renderList()}</div>
  }
}
export default About
