import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

class Root extends React.Component {
  render () {
    return (
      <div>
        <Header title='Hello' />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default Root
