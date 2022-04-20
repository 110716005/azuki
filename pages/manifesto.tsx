import React from 'react'
import Head from 'next/head'
function manifesto() {
  return (
    <>
      <Head>
        <title>Azuki | The Manifesto</title>
        <meta name="description" content="A brand for the metaverse, built by the community."></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@azukizen"></meta>
        <meta name="twitter:creator" content="@azukizen"></meta>
        <meta name="twitter:title" content="Azuki"></meta>
        <meta name="twitter:description" content="We are the skaters of the internet."></meta>
        <meta name="twitter:image" content="https://azuki.com/twitterimage.jpg"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <div className="bg-black text-white fixed top-0 flex flex-col lg:items-center lg:pt-0 pt-20 lg:justify-center w-full min-h-screen h-screen lg:px-8 px-6">
          <div className="max-w-11xl w-full mx-auto">
            <h3 className="font-black w-full lg:pt-6 lg:pb-8 border-opaclg:mb-8 mb-3 border-b font-sans uppercase 2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl"><span>MANIFESTO </span><span className="opacity-40">//</span></h3>
            <p className="font-mono lg:text-sm text-xs lg:leading-6 leading-5 whitespace-pre-line">
              The wave of the next generation is coming... This wave is unusual. Breaking down the barriers of monopoly, building an open community and creating an Internet culture with friends We say to those who do not understand: Good morning, they will understand later We welcome the brave You have come to an unknown new world, a new world that is not created by the majority, but is monopolized by the few, but shared by the majority. The bean friends who grew up in the small bean garden will eventually become our family. We develop together. We build together. We grow together. Ready for red beans?
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default manifesto