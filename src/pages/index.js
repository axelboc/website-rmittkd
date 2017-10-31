import React from 'react'
import Helmet from 'react-helmet'

export default class IndexPage extends React.Component {
  componentDidMount() {
    if (!window.netlifyIdentity) return;
    window.netlifyIdentity.on('init', user => {
      if (user) return;
      window.netlifyIdentity.on('login', () => {
        document.location.href = '/admin/';
      })
    })
  }

  render() {
    return (
      <div>Hello World</div>
    )
  }
}
