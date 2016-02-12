
import React from 'react'

class Root extends React.Component {

  render () {
    const { title } = this.props

    return (
      <div>
        <h1 id='title'>{title}</h1>
      </div>
    )
  }

}

module.exports = Root
