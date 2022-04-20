import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Background from '../components/Background'
import Music from '../components/Music'
import Layout from '../components/Layout'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const [curPage, setCurPage] = useState()
  return (
    <>
      <Head>
        <title>Azuki</title>
        <meta name="description" content="A brand for the metaverse, built by the community."></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@azukizen"></meta>
        <meta name="twitter:creator" content="@azukizen"></meta>
        <meta name="twitter:title" content="Azuki"></meta>
        <meta name="twitter:description" content="We are the skaters of the internet."></meta>
        <meta name="twitter:image" content="https://azuki.com/twitterimage.jpg"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Background />
    </>
  )
}

export default Home
