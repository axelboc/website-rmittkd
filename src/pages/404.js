import React from 'react'

class NotFoundPage extends React.Component {
  render() {
    return <h1>{this.props.location.pathname} not found </h1>
  }
}

export default NotFoundPage
