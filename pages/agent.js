import React from 'react'

import Header from '../components/Header'

class Agent extends React.Component {
  static async getInitialProps ({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render () {
    return <div><Header />Hello World {this.props.userAgent}</div>
  }
}

export default Agent
