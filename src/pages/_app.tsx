import React from 'react'
import Layout from '../components/templates/Layout'
import '../styles/index.css'
import '../styles/markdown.css'
import '../styles/privacy.css'
import 'prism-themes/themes/prism-nord.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
