import React from 'react'
import Link from '../components/Careers/Link'
import Head from 'next/head'
function careers() {
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
      <div className="relative min-h-screen bg-gray-100">
        <div className="bg-azukired text-white">
          <div className="max-w-11xl grid grid-cols-1 w-full mx-auto bg-cover">
            <img className="lg:col-start-1 lg:row-start-1 row-start-2 z-10 lg:mt-24 mt-12 lg:w-7/12 ml-auto" src="https://www.azuki.com/job_illo_final2.png" alt="" />
            <div className="h-full  lg:w-6/12  w-full lg:pl-8 lg:pr-0 px-8 text-left flex lg:justify-start justify-center lg:text-left text-center items-center  lg:col-start-1	lg:row-start-1">
              <div className="w-full lg:pt-20 pt-26">
                <h1 className="font-sans uppercase font-black 2xl:text-7xl xl:text-6xl md:text-4xl text-3xl tracking-tight relative">
                  Calling All Skaters<span className="hidden lg:inline-block opacity-[0.05] 2xl:text-7xl xl:text-6xl md:text-4xl text-3xl ">//</span>
                </h1>
                <p className="font-sans lg:max-w-2xl block pt-4 mb-0 text-lg opacity-80 font-light tracking-wider">
                  We're looking for creative builders, makers, and doers. The   ones who share our passion for web3, art, and culture. We're   building for an open metaverse. Hope you don't mind breaking a   few rules along the way.
                </p>
                <a href="" className="uppercase bg-black lg:mx-0 mx-auto tracking-wider block w-min whitespace-nowrap mt-6 rounded-md px-6 py-4 text-2xs">
                  Open Positions <span className="ml-1">↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black lg:py-20 py-8 text-white relative">
          <div className="max-w-11xl lg:px-0 lg:pt-0 mx-auto">
            <div className="grid lg:grid-cols-4 bg-black ls-4 gap-6 lg:gap-px">
              <div className="bg-black border-white lg:px-10 px-6">
                <h2 className="uppercase text-2xs font-bold tracking-wider opacity-100">Benefits</h2>
                <p className="lg:text-base space-y-2 font-normal opacity-100 font-sans mt-2 leading-6">We offer generous benefits that encourage a healthy lifestyle,     continous learning, and strong professional development. We     aim to foster a culture of diverse perspectives, experiences,     and backgrounds.</p>
              </div>
              <div className="bg-black border-gray-900 lg:px-10 px-6">
                <h2 className="uppercase text-2xs font-bold tracking-wider opacity-40">HEALTH & WELLNESS</h2>
                <ul className="lg:text-base space-y-4 font-300 opacity-100 font-sans mt-3">
                  <li>Medical insurance</li>
                  <li>Dental and vision insurance</li>
                  <li>Health and wellness stipend</li>
                  <li>WFH office stipend</li>
                </ul>
              </div>
              <div className="bg-black border-gray-900 lg:px-10 px-6">
                <h2 className="uppercase text-2xs font-bold tracking-wider opacity-40">PERKS</h2>
                <ul className="lg:text-base space-y-4 font-300 opacity-100 font-sans mt-3">
                  <li>401(k) retirement plan</li>
                  <li>Relocation assistance</li>
                  <li>Flexible working hours</li>
                  <li>Unlimited PTO</li>
                  <li>Commuter stipend</li>
                  <li>Healthy snacks & unlimited Coke Zero</li>
                </ul>
              </div>
              <div className="bg-black border-gray-900 lg:px-10 px-6">
                <h2 className="uppercase text-2xs font-bold tracking-wider opacity-40">CULTURE & DEVELOPMENT</h2>
                <ul className="lg:text-base space-y-4 font-300 opacity-100 font-sans mt-3">
                  <li>Regular team happy hours & outings</li>
                  <li>Conference travel</li>
                  <li>Daily Wordle contests</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="bg-gray-100 mt-0 pt-0 pb-16 max-w-11xl w-full mx-auto">
            <div className="lg:px-8 mx-auto">
              <div className="lg:w-full w-full">
                <div className="overflow-hidden">
                  <div className="gap-px bg-white grid lg:grid-cols-2">
                    <Link career="artist" locate="Los angels" time="full time" type="creative" />
                    <Link career="software engineer,full stack" locate="Los angels" time="full time" type="engineering" />
                    <Link career="market manager" locate="Los angels" time="full time" type="marketing" />
                    <Link career="art director, branding" locate="Los angels" time="full time" type="creative" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 bg-white border-t border-black border-opacity-10 bg-opacity-100 z-150">
          <div className="lg:px-8 max-w-11xl mx-auto">
            <div className="border-t flex w-full py-8 gap-16 max-w-11xl mx-auto border-black border-opacity-0">
              <p className="text-2xs font-mono uppercase opacity-50">© Azuki 2022 <span className="opacity-10">//</span></p>
              <p className="text-2xs ml-auto font-mono uppercase opacity-50">hello@azuki.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default careers