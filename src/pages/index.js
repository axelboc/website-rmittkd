import React from 'react'
import Helmet from 'react-helmet'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>Hello World</div>
      <script dangerouslySetInnerHTML={{ __html:
        `if (window.netlifyIdentity) {
          window.netlifyIdentity.on("init", user => {
            if (!user) {
              window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
              });
            }
          });
        }` }}
      />
    )
  }
}
