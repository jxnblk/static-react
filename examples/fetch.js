import React from 'react'
import fetch from 'isomorphic-fetch'

const endpoint = 'https://microbeats.now.sh/tracks'

export default class Root extends React.Component {
  static getInitialProps = async () => {
    const tracks = await fetch(endpoint).then(res => res.json())
    return {
      tracks
    }
  }

  static defaultProps = {
    title: 'static-react',
  }

  render () {
    const { title, tracks } = this.props

    return (
      <html>
        <head>
          <title>{title}</title>
        </head>
        <body>
          <h1>{title}</h1>
          <ul>
            {tracks.map(track => (
              <li key={track._id}>
                {track.title}
              </li>
            ))}
          </ul>
        </body>
      </html>
    )
  }
}
