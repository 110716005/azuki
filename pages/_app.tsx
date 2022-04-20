import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Azuki | Careers</title>
        <meta name="description" content="A brand for the metaverse, built by the community."></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@azukizen"></meta>
        <meta name="twitter:creator" content="@azukizen"></meta>
        <meta name="twitter:title" content="Azuki"></meta>
        <meta name="twitter:description" content="We are the skaters of the internet."></meta>
        <meta name="twitter:image" content="https://azuki.com/twitterimage.jpg"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
