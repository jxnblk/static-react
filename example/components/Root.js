
import React from 'react'
import Head from './Head'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

class Root extends React.Component {
  render () {
    return (
      <html>
        <Head title='Static React Demo' />
        <body className='px3'>
          <Header title='Hello' />
          <Main />
          <Footer />
        </body>
      </html>
    )
  }
}

export default Root

