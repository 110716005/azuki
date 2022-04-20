import React from 'react'
import Header from '../components/Header'
import Background from '../components/Background'
import Music from '../components/Music'

function Layout({ children }) {
  return (
    <>
      <Header />
        {children}
      <Music />
    </>
  )
}

export default Layout