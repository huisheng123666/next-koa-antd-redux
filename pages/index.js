import React from 'react'
import { Button } from 'antd'
import Link  from 'next/link'
import { connect } from 'react-redux'
import { serverRenderClock } from '../store'

class Index extends React.PureComponent {
  static async getInitialProps({reduxStore, req}) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    reduxStore.dispatch(serverRenderClock(false))
    return {userAgent}
  }

  render() {
    return (
      <div>
        <Button htmlType='button' type='primary'>{this.props.userAgent}</Button>
        <Link href='/login'><a>login</a></Link>
        <p>{this.props.light.toString()}</p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { lastUpdate, light } = state
  return { lastUpdate, light }
}

export default connect(mapStateToProps)(Index)