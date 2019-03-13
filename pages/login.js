import React from 'react'
import axios from 'axios'

export default class Login extends React.PureComponent {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    const res = await axios.get('http://localhost:3000/api/1')
    console.log(res.data)
    return { userAgent, id: res.data.id }
  }

  render() {
    return (
      <div>
        Hello World {this.props.userAgent}
        <h1>{this.props.id}</h1>
      </div>
    )
  }
}