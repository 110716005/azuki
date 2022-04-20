import React from 'react'
import Head from 'next/head'
import Content from '../components/mindmap/Content'
import Metaverse from '../components/mindmap/Metaverse'
import Bridge from '../components/mindmap/Bridge'
import Seed from '../components/mindmap/Seed'
import Community from '../components/mindmap/Community'
import Physical from '../components/mindmap/Physical'
import Thoughts from '../components/mindmap/Thoughts'
import { useState, useEffect, useRef } from 'react'
function mindmap() {
  const [width, setWidth] = useState(0);
  const tmp = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (tmp.current) {
        setWidth(tmp.current.offsetWidth);
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize);
    console.log(width)
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return (
    <>
      <Head>
        <title>Azuki | Mindmap</title>
        <meta name="description" content="A brand for the metaverse, built by the community."></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@azukizen"></meta>
        <meta name="twitter:creator" content="@azukizen"></meta>
        <meta name="twitter:title" content="Azuki"></meta>
        <meta name="twitter:description" content="We are the skaters of the internet."></meta>
        <meta name="twitter:image" content="https://azuki.com/twitterimage.jpg"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="lg:px-8 pt-24 lg:pt-0 bg-gray-100 min-h-screen md:px-5 relative">
        <div className="max-w-11xl mx-auto pb-24">
          <div className="w-full h-full flex items-end px-1 fade-in">
            <div className="h-full pb-6 px-4 lg:px-0">
              <h3 className="font-black top-0 uppercase text-4xl lg:text-6xl pb-4 tracking-tight">
                mind map <span className="opacity-10 text-black pl-4">//</span>
              </h3>
              <div className="text-xs lg:text-sm space-y-4 font-mono text-left max-w-6xl mx-auto">
                <p>
                  Our vision is simple and profound - to create the largest decentralized metaverse brand created by the community, owned by the community.
                </p>
              </div>
            </div>
            <div className="w-full hidden lg:flex justify-end">
              <img className="max-w-96 transform translate-x-4" src="https://www.azuki.com/gmanifesto2.png" />
            </div>
          </div>
          <div className="lg:block hidden">
            <div className="relative w-full h-full overflow-auto button-container" ref={tmp}>
              <div style={{ position: "relative", width: "100%", overflow: "hidden", minHeight: "100%", height: "614px" }}>
                <Content parentWidth={width} />
                <Metaverse parentWidth={width} />
                <Bridge parentWidth={width} />
                <Seed parentWidth={width} />
                <Community parentWidth={width} />
                <Physical parentWidth={width} />
                <Thoughts parentWidth={width} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default mindmap