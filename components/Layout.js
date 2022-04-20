import React from 'react'
import Header from '../components/Header'
import Background from '../components/Background'
import Music from '../components/Music'

function Layout({ children }) {
  return (
    <>
      <meta name="description" content="A brand for the metaverse, built by the community."></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:site" content="@azukizen"></meta>
      <meta name="twitter:creator" content="@azukizen"></meta>
      <meta name="twitter:title" content="Azuki"></meta>
      <meta name="twitter:description" content="We are the skaters of the internet."></meta>
      <meta name="twitter:image" content="https://azuki.com/twitterimage.jpg"></meta>
      <Header />
        {children}
      <Music />
    </>
  )
}

export default Layout