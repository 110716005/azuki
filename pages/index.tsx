import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Background from '../components/Background'
import Music from '../components/Music'
import Layout from '../components/Layout'
import {useState} from 'react'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const [curPage, setCurPage] = useState()
  return (
    <>
      <Head>
        <title>Azuki</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Background />
    </>
  )
}

export default Home
