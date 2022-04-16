import React from 'react'
import Gallery from '../components/Gallery'
import Head from 'next/head'
function claim() {
  return (
    <>
      <Head>
        <title>Azuki | Claim</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Gallery />
    </>
  )
}

export default claim