import React from 'react'
import Title from '../components/garden/Title'
import Profile from '../components/garden/Profile'
import Link from '../components/garden/Link'
import { useEffect, useState, useCallback } from "react";
import Head from 'next/head'
import useEmblaCarousel from 'embla-carousel-react'

const profileData = [
  {
    name: "ZAGABOND",
    career: "human bean",
    account: "@ZAGABOND",
    link: "https://twitter.com/ZAGABOND",
    introduce: "DeFi maker. Former Silicon Valley tech company. Collection of sports shorts."
  },
  {
    name: "HOSHIBOY",
    career: "design",
    account: "@hoshiboyzen",
    link: "https://twitter.com/hoshiboyzen",
    introduce: "Participated in Y-Combinator twice. Watch British anime. ngmi."
  },
  {
    name: "2PM.FLOW",
    career: "project",
    account: "@ 2pmflow",
    link: "https://twitter.com/2pmflow",
    introduce: "Rap newcomer, ex-Google/Y-Combinator. NBA Top Shot lost 80% but gained 100% in a good mood."
  },
  {
    name: "location tba",
    career: "project",
    account: "@locationtba",
    link: "https://twitter.com/locationtba",
    introduce: "Former Facebook software engineer. In the Metaverse with Zuckerberg."
  },
  {
    name: "STEAMBOY",
    career: "art",
    account: "@ steamboy33",
    link: "https://twitter.com/steamboy33",
    introduce: "Former Art Director of Overwatch. Started playing with pictures in the 90s. In fact, I didn't watch Steamboy."
  },
  {
    name: "NJOO",
    career: "art",
    account: "@njoo ",
    link: "https://twitter.com/njoo",
    introduce: "Participated in Y-Combinator twice. Watch British anime. ngmi."
  },
  {
    name: "DAPH",
    career: "community",
    account: "@daphtheSHAFT ",
    link: "https://twitter.com/daphtheSHAFT",
    introduce: "From eSports to e-money, catch keyboard warriors on Discord now."
  },
  {
    name: "DEMNA",
    career: "product",
    account: "@DemnaAzuki ",
    link: "https://twitter.com/DemnaAzuki",
    introduce: "Former Google Product Manager. Strong opinions, but not stubborn. Hates hiking."
  }
]

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedProfileIndex, setSelectedProfileIndex] = useState(0);

  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [
    emblaApi
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="pt-16 lg:hidden pb-36">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide_garden">
              <div className="embla__slide__inner pb-1">
                <div id="section1" className="panel flex flex-col pt-6 mt-2">
                  <h1 className="font-sans w-full tracking-tight pb-3 text-2xl font-black uppercase">From the alley to the garden <span className="opacity-10">//</span></h1>
                  <div className="font-mono text-gray-800 text-xs leading-4 w-full">
                    <p>Red beans are a brand. </p>
                    <p>A metaverse brand. </p>
                    <p><span className="highlight py-1 px-2 font-black">A brand new, community-created brand. </span></p>
                    <br />
                    <p>We start with 10,000 avatars. We will carry out a large number of products and activities such as trendy brand cooperation, NFT airdrops, and online activities step by step. The red bean is our status symbol in the universe - let's build it together. </p>
                    <br />
                    <p>At Xiaodouyuan, we combine art, community, and culture into unique magic. The boundaries between virtual and reality are dissolving, and existing rules are being rebuilt.</p>
                    <br />
                    <p>choose red beans <span className="lg:px-1 px-0.5 opacity-20">//</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide_garden">
              <div className="embla__slide__inner pb-1">
                <div id="section1" className="panel flex flex-col pt-6 mt-2">
                  <h1 className="font-sans w-full tracking-tight pb-3 text-2xl font-black uppercase">Created by many <span className="opacity-10 font-black">//</span></h1>
                  <div className="grid border-l border-t border-r-0 border-b-0 border-black border-opacity-10 grid-cols-4 border w-full max-w-xl 2xl:max-w-2xl lg:pr-24">
                    <Profile img="https://www.azuki.com/team2/zzz.png" name="ZAGABOND" career="bean man" account="@ZAGABOND" link="https://twitter.com/ZAGABOND" introduce="DeFi maker. Former Silicon Valley tech company. Collection of sports shorts." selected={selectedProfileIndex === 0} click={() => setSelectedProfileIndex(0)} />
                    <Profile img="https://www.azuki.com/team2/hoshi.png" name="HOSHIBOY" career="design" account="@hoshiboyzen" link="https://twitter.com/hoshiboyzen" introduce="Participated in Y-Combinator twice. Watch British anime. ngmi." selected={selectedProfileIndex === 1} click={() => setSelectedProfileIndex(1)} />
                    <Profile img="https://www.azuki.com/team2/2pm.png" name="2PM.FLOW" career="project" account="@ 2pmflow" link="https://twitter.com/2pmflow" introduce="Rap newcomer, ex-Google/Y-Combinator. NBA Top Shot lost 80% but gained 100% in a good mood." selected={selectedProfileIndex === 2} click={() => setSelectedProfileIndex(2)} />
                    <Profile img="https://www.azuki.com/team2/tba.png" name="location tba" career="project" account="@locationtba" link="https://twitter.com/locationtba" introduce="Former Facebook software engineer. In the Metaverse with Zuckerberg." selected={selectedProfileIndex === 3} click={() => setSelectedProfileIndex(3)} />
                    <Profile img="https://www.azuki.com/team2/steamboy.png" name="STEAMBOY" career="art" account="@ steamboy33" link="https://twitter.com/steamboy33" introduce="Former Art Director of Overwatch. Started playing with pictures in the 90s. In fact, I didn't watch Steamboy." click={() => setSelectedProfileIndex(4)} selected={selectedProfileIndex === 4} />
                    <Profile img="https://www.azuki.com/team2/joo.png" name="NJOO" career="art" account="@njoo " link="https://twitter.com/njoo" introduce="Participated in Y-Combinator twice. Watch British anime. ngmi." selected={selectedProfileIndex === 5} click={() => setSelectedProfileIndex(5)} />
                    <Profile img="https://www.azuki.com/team2/daph.png" name="DAPH" career="community" account="@daphtheSHAFT " link="https://twitter.com/daphtheSHAFT" introduce="From eSports to e-money, catch keyboard warriors on Discord now." selected={selectedProfileIndex === 6} click={() => setSelectedProfileIndex(6)} />
                    <Profile img="https://www.azuki.com/team2/beboop.png" name="DEMNA" career="product" account="@DemnaAzuki " link="https://twitter.com/DemnaAzuki" introduce="Former Google Product Manager. Strong opinions, but not stubborn. Hates hiking." selected={selectedProfileIndex === 7} click={() => setSelectedProfileIndex(7)} />
                  </div>
                  <div className="block lg:hidden pt-6">
                    <p className="font-bold uppercase border-b pb-2">{profileData[selectedProfileIndex].name} <span className="opacity-20">//</span> <span className="font-mono text-2xs opacity-40">{profileData[selectedProfileIndex].career}</span></p>
                    <p className="font-[500] text-xs pt-3 font-mono border-b pb-3 leading-4">
                      {profileData[selectedProfileIndex].introduce}
                      <a href="" className="font-mono underline py-2 flex items-center uppercase  leading-3 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className=" fill-current stroke-current h-2 w-2 mr-1" viewBox="0 0 40 40"><path d="M38.526 8.625a15.199 15.199 0 01-4.373 1.198 7.625 7.625 0 003.348-4.211 15.25 15.25 0 01-4.835 1.847 7.6 7.6 0 00-5.557-2.404c-4.915 0-8.526 4.586-7.416 9.346-6.325-.317-11.934-3.347-15.69-7.953C2.01 9.869 2.97 14.345 6.358 16.612a7.58 7.58 0 01-3.446-.953c-.084 3.527 2.444 6.826 6.105 7.56a7.63 7.63 0 01-3.438.13 7.618 7.618 0 007.112 5.286A15.306 15.306 0 011.42 31.79a21.55 21.55 0 0011.67 3.42c14.134 0 22.12-11.937 21.637-22.643a15.499 15.499 0 003.799-3.941z"></path></svg>
                        {profileData[selectedProfileIndex].account}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide_garden">
              <div className="embla__slide__inner pb-1">
                <div id="section1" className="panel flex flex-col pt-6 mt-2">
                  <h1 className="font-sans w-full tracking-tight pb-3 text-2xl font-black uppercase">Into the rabbit hole <span className="opacity-10">//</span></h1>
                  <div className="font-mono text-gray-800 text-xs leading-5 w-full tracking-wider">
                    <p className="mb-3">
                      We welcome brave you to an unknown new world.
                      It is a new world created by more people and shared by most people...
                    </p>
                    <div className="border-t grid pt-6 z-50 border-black border-opacity-10 gap-3 w-full max-w-2xl">
                      <Link img="https://www.azuki.com/rh/manifesto.png" title="gallery" content="10,000 red beans" link="/gallery" />
                      <Link img="https://www.azuki.com/rh/updates.png" title="recruitment" content="Join the red bean team" link="/careers" />
                      <Link img="https://www.azuki.com/rh/twitter.png" title="twitter" content="Tweet 🐦" link="https://twitter.com/azukiofficial" />
                      <Link img="https://www.azuki.com/rh/discord.png" title="discord" content="Join the red bean community" link="https://discord.com/invite/azuki" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden fixed bottom-0 w-screen">
        <div className="relative pt-2 bg-gray-200 h-20 z-50 px-2">
          <div className="grid pb-2 h-full grid-cols-3 gap-x-3 overflow-hidden flex items-center justify-center w-full">
            <div className={"z-50 rounded shadow h-full flex flex-col h-full items-start justify-center duration-500 cursor-pointer px-4 " + (selectedIndex == 0 ? "bg-azukired text-white" : "bg-white")} onClick={() => scrollTo(0)}>
              <p className="font-mono opacity-40 text-3xs">01.</p>
              <p className="font-sans uppercase text-3xs font-bold">Garden</p>
            </div>
            <div className={"z-50 rounded shadow h-full flex flex-col h-full items-start justify-center duration-500 cursor-pointer px-4 " + (selectedIndex == 1 ? "bg-azukired text-white" : "bg-white")} onClick={() => scrollTo(1)}>
              <p className="font-mono opacity-40 text-3xs">02.</p>
              <p className="font-sans uppercase text-3xs font-bold">team</p>
            </div>
            <div className={"z-50 rounded shadow h-full flex flex-col h-full items-start justify-center duration-500 cursor-pointer px-4 " + (selectedIndex == 2 ? "bg-azukired text-white" : "bg-white")} onClick={() => scrollTo(2)}>
              <p className="font-mono opacity-40 text-3xs">03.</p>
              <p className="font-sans uppercase text-3xs font-bold">rabbit hole</p>
            </div>
          </div>
        </div>
        <img className={"-translate-y-20 duration-700 w-1/2 absolute ease-in-out transform  bottom-0 right-0 z-10 block " + (selectedIndex == 0 ? "opacity-100" : "opacity-0")} src="https://www.azuki.com/girl44.png" />
      </div>
    </div>
  )
}

function garden() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.scrollY;
      var docHeight = document.body.offsetHeight;
      var winHeight = window.innerHeight;
      var scrollPercent = (scrollTop) / (docHeight - winHeight);
      var scrollPercentRounded = Math.round(scrollPercent * 100);
      setScrollPercent(scrollPercentRounded)
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Head>
        <title>Azuki | The Garden</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <div className="lg:px-8 hidden lg:block md:px-5 relative">
          <div className="flex mx-auto max-w-11xl">
            <div className="hidden lg:sticky top-0 w-1 h-screen lg:flex items-center">
              <div className="grid grid-cols-1 h-full gap-2 lg:max-h-96 py-32 lg:py-0 section-nav">
                <a href="#section0" className="opacity-100 h-full rounded-sm relative duration-500" style={{ width: "3px", backgroundColor: (scrollPercent <= 25) ? "rgb(192, 53, 64)" : "rgba(0, 0, 0, 0.15)" }}></a>
                <a href="#section0" className="opacity-100 h-full rounded-sm relative duration-500" style={{ width: "3px", backgroundColor: (scrollPercent > 25 && scrollPercent <= 50) ? "rgb(192, 53, 64)" : "rgba(0, 0, 0, 0.15)" }}></a>
                <a href="#section0" className="opacity-100 h-full rounded-sm relative duration-500" style={{ width: "3px", backgroundColor: (scrollPercent > 50 && scrollPercent <= 75) ? "rgb(192, 53, 64)" : "rgba(0, 0, 0, 0.15)" }}></a>
                <a href="#section0" className="opacity-100 h-full rounded-sm relative duration-500" style={{ width: "3px", backgroundColor: (scrollPercent > 75 && scrollPercent <= 100) ? "rgb(192, 53, 64)" : "rgba(0, 0, 0, 0.15)" }}></a>
              </div>
            </div>
            <div className="lg:pl-16 pl-0 hidden lg:block flex-grow" id="container">
              <section id="section0" className="panel lg:h-screen flex flex-col pt-6 mt-2 lg:pt-0 lg:justify-center section0">
                <Title title="from the alley to the samll bean garden" />
                <div className="text-gray-500 lg:text-sm text-xs lg:leading-6 lg:w-5/12 w-full tracking-wide font-mono">
                  <p>
                    Red beans are a brand.
                  </p>
                  <p>
                    A metaverse brand.
                  </p>
                  <p>
                    <strong className="highlight py-1 px-2 font-black ml-1 text-black">
                      A brand new, community-created brand.
                    </strong>
                  </p>
                  <br />
                  <p>
                    We start with 10,000 avatars.
                    We will carry out a large number of products and activities such as trendy brand cooperation, NFT airdrops, and online activities step by step.
                    At the same time, we also look forward to new possibilities in the red bean community.
                    The red bean is our status symbol in the universe - let's build it together.
                  </p>
                  <br />
                  <p>
                    At Xiaodouyuan, we combine art, community, and culture into unique magic.
                  </p>
                  <p>
                    The boundaries between virtual and reality are dissolving, and existing rules are being rebuilt.
                  </p>
                  <br />
                  <p className="flex">
                    <span>
                      choose red beans
                      <span className="lg:px-1 px-0.5 opacity-40">
                      //
                      </span>
                      <a href="" className="hidden lg:inline-block bg-black ml-2 px-3 rounded-full text-white hover:bg-azukired py-1 lg:py-px">
                        Join us↓
                      </a>
                    </span>
                  </p>
                </div>
              </section>
              <section id="section1" className="panel lg:h-screen flex flex-col pt-6 mt-2 lg:pt-0 lg:justify-center section1">
                <Title title="created from the team" />
                <div className="hidden lg:block font-mono mb-8 text-gray-500 leading-5 w-full max-w-xl text-megasmall">
                  <p>
                    Red Bean's core team is located in Los Angeles. We come from
                    the cryptocurrency, tech, and gaming industries.
                    <span className="highlight p-1 -ml-1 text-black">We are building a decentralized brand.</span>
                  </p>
                </div>
                <div className="grid border-l border-t border-r-0 border-b-0 border-black  border-opacity-10 grid-cols-4 border w-full max-w-xl 2xl:max-w-2xl lg:pr-24">
                  <Profile img="https://www.azuki.com/team2/zzz.png" name="ZAGABOND" career="bean man" account="@ZAGABOND" link="https://twitter.com/ZAGABOND" introduce="DeFi maker. Former Silicon Valley tech company. Collection of sports shorts." />
                  <Profile img="https://www.azuki.com/team2/hoshi.png" name="HOSHIBOY" career="design" account="@hoshiboyzen" link="https://twitter.com/hoshiboyzen" introduce="Participated in Y-Combinator twice. Watch British anime. ngmi." />
                  <Profile img="https://www.azuki.com/team2/2pm.png" name="2PM.FLOW" career="project" account="@ 2pmflow" link="https://twitter.com/2pmflow" introduce="Rap newcomer, ex-Google/Y-Combinator. NBA Top Shot lost 80% but gained 100% in a good mood." />
                  <Profile img="https://www.azuki.com/team2/tba.png" name="location tba" career="project" account="@locationtba" link="https://twitter.com/locationtba" introduce="Former Facebook software engineer. In the Metaverse with Zuckerberg." />
                  <Profile img="https://www.azuki.com/team2/steamboy.png" name="STEAMBOY" career="art" account="@ steamboy33" link="https://twitter.com/steamboy33" introduce="Former Art Director of Overwatch. Started playing with pictures in the 90s. In fact, I didn't watch Steamboy." />
                  <Profile img="https://www.azuki.com/team2/joo.png" name="NJOO" career="art" account="@njoo " link="https://twitter.com/njoo" introduce="Participated in Y-Combinator twice. Watch British anime. ngmi." />
                  <Profile img="https://www.azuki.com/team2/daph.png" name="DAPH" career="community" account="@daphtheSHAFT " link="https://twitter.com/daphtheSHAFT" introduce="From eSports to e-money, catch keyboard warriors on Discord now." />
                  <Profile img="https://www.azuki.com/team2/beboop.png" name="DEMNA" career="product" account="@DemnaAzuki " link="https://twitter.com/DemnaAzuki" introduce="Former Google Product Manager. Strong opinions, but not stubborn. Hates hiking." />
                </div>
                <p className="hidden lg:block mt-6 mb-8 text-megasmall tracking-wide text-gray-800 font-mono">
                  But our real team is
                  <a className="hidden lg:inline-block bg-black ml-2 px-3 rounded-full text-white lg:hover:bg-azukired py-2">Red bean community↓</a>
                </p>
              </section>
              <section id="section2" className="panel lg:h-screen flex flex-col pt-6 mt-2 lg:pt-0 lg:justify-center section2">
                <Title title="TO COMMUNITY OWNED" />
                <div className="text-gray-500 lg:text-sm text-xs lg:leading-6 lg:w-7/12 w-full tracking-wide font-mono">
                  <p>Every member of the community is our true team -</p>
                  <p><span className="highlight px-1 py-1 text-black font-bold ml-1">a global community</span> working together to create a decentralized brand.</p>
                  <br />
                  <br />
                </div>
                <div className="grid grid-items-1 w-1/2 pr-12">
                  <svg className="fill-current text-gray-300 overlay-item" viewBox="0 0 3608 2033" xmlns="http://www.w3.org/2000/svg"><path d="m3215.867 734.259-71.297 34.604-17.824-24.872 64.73-34.604 24.39 24.872Zm-97.564 63.802-55.35 103.812-89.12 52.988-25.33-34.604 89.122-57.313 30.02-100.569 50.658 35.686Zm-13.134 220.602-29.082 24.872-26.267-94.08 17.824 5.406 37.525 63.802Zm47.844 408.763-179.18-43.256-5.63-73.534 167.924 48.662 16.886 68.128Zm255.168 400.111-62.854 88.674-30.02-4.326-8.443-50.825 77.864-97.324-31.896-55.15 17.824-30.28 30.02 50.825 7.505 98.406Zm-482.192-527.715-33.773 68.127-29.081-4.325 29.081-77.86 33.773 14.058Zm-62.854-14.058-35.649 77.86-63.792-19.465 4.69-58.395 55.35-63.801 39.4 63.801Zm549.737-759.13-119.141 15.139 3.752 48.662-71.297 108.138-14.072-98.405 39.401-58.395-136.965 15.14-80.678 48.661-10.32 40.012 57.226-15.14 3.752 93-38.462 4.325-12.196 45.418-77.864 59.476 12.196 38.93-49.72 38.93-17.825-68.128-33.772 20.547 8.443 137.335-145.408 97.325 38.463 64.883-63.792 43.255-26.267-57.313-13.134 4.325 13.134 63.802 51.596 38.93-17.824 20.546-33.772-10.814 8.443 30.279 30.02 4.325 16.885 59.476 77.864 33.523 3.753 30.279-89.121-18.384-124.77-157.881 51.596 4.325-73.173-182.754v-49.743h-20.638l-9.382 45.418-71.296 63.801v59.477l-56.288 18.383-34.71-112.464-24.391-8.65 3.753-65.965-205.448-43.256 33.772 63.802 34.71-14.058 38.463 43.255-38.463 55.15-90.059 38.93-93.812-207.625h-25.329l-3.752 40.011 62.854 147.068 47.844 41.093 73.173-6.488-132.275 221.683 15.948 19.465 5.629 73.534-39.401 34.604-4.69 55.15-102.255 142.743-81.617-5.406-72.235-227.09 22.515-34.605v-58.395l-60.978-83.266 25.33-19.465-59.102-44.337-119.14-4.325-69.421-70.29-3.753-151.394 153.851-153.556 85.37-8.651 21.576 28.116-4.69 24.871 68.482 24.872 33.772-34.604 26.267 24.872 92.874 5.407 17.824-20.547v-59.476l-38.463 59.476-50.658-78.94 8.443 78.94-47.844-40.01-8.443-58.395-57.225-76.779-10.32 12.977 45.968 73.534-30.02 48.662-12.195-58.394-51.596-44.337-29.082 30.279-17.824-10.814-97.565 104.894-34.71-110.301 68.483 5.407 12.195-34.605-25.329-30.278 43.153-38.93 25.33-4.326 47.844-49.743-13.134-38.93 25.33-14.058 16.885 29.197 86.307-5.407 3.753-28.115 93.811-41.093-16.886-23.79-59.101 23.79-17.824-43.255 43.153-38.93-25.33-30.279-55.348 83.267 19.7 19.465-3.752 50.825-55.35 18.383-13.133-38.93-59.101 8.651 3.752-58.394 97.565-151.394 107.883-30.279 161.356 43.256-29.081 50.825-63.792-6.489 42.215 49.744 123.831-94.08h81.617l-55.35-72.453 63.793-75.697 89.12-43.255 13.135 34.604-84.431 34.604-47.844 58.395 97.564 69.209-15.948-34.605 59.102-59.476 106.945 30.279 15.948-38.93 193.252-84.348 132.275 33.523-97.564 64.883 303.011 35.686 51.597-59.476 24.391 52.987 146.346 15.14 42.216 25.953 119.14-16.22v187.079Zm-212.953 1104.092-73.173 156.8-59.102-5.407-115.388-98.406-3.753 24.872-141.655 33.523 16.886-68.127-30.02-14.058v-84.348l184.81-137.336 84.43 63.802 4.69-54.07 25.33-4.325 106.945 187.08Zm-1504.74-995.954-3.753 41.092h-60.04l18.763-41.092-39.401-48.662 29.081-34.605 17.825 48.663 37.524 34.604Zm-119.142-185.998-76.925 63.802-45.968-78.941 85.369-24.872 37.524 40.01Zm242.035 426.065-26.268-10.814 15.948-29.197 10.32 40.01Zm-258.92-786.166-50.659 49.744-9.381 123.278-76.926 137.335-122.893 43.256-30.02 84.348-55.349-4.326-63.792-113.545-25.33-152.475-51.596-44.337-56.287 20.546-29.081-45.418 92.873-133.01L1465.34 0l93.811 88.673Zm60.977 562.32-26.267 33.522-29.082-30.278 24.391-48.663 30.958 45.419Zm567.561 817.525-38.463 141.661-55.349-44.336 15.948-63.802 55.35-49.744 22.514 16.221ZM973.766 1033.802l-33.772-19.465v-34.604l33.772 54.07Zm124.77 94.08-21.577 9.733-106.945-44.337 7.504-24.872 121.018 59.476Zm-150.1-73.534-8.442 30.28-65.668-16.222 6.566-36.767 67.545 22.71Zm401.515 343.88-33.772 45.418-9.381 88.674-259.859 320.089c9.381 18.384 12.196 40.011 8.443 63.802l-33.772 38.93 30.02 43.255-26.268 34.604-67.544-87.592v-142.743l42.215-281.16-56.287-30.278-59.101-170.858 25.329-44.337v-49.744h-59.101l-26.268-59.476-33.772 4.326-120.079-77.86-38.463-54.069h-46.906L456.863 842.397l5.629-98.406-44.092-73.534-29.081 9.733-21.577-49.744 25.33 4.326-63.793-77.86-84.43-15.14L38.463 659.645l73.173-82.185L60.04 532.04 38.463 364.426l85.369-49.744 409.957 49.744-76.926-63.802 17.824-84.347L884.645 35.686l158.542 8.65L902.469 227.09l186.685 176.266-59.101 73.534-111.636-22.71 14.072-80.021h-39.401l-16.886 55.15 12.195 47.58-84.43-8.65-44.092 68.127 30.958 29.197 60.04 20.547 55.349 73.534 20.638-73.534-12.195-15.14v-73.534l132.274 24.872 106.946 148.15-150.1 98.405v52.988l-26.267-4.325-25.329 29.197 5.629 38.93-60.978 59.476 17.825 64.883h-30.02l-25.33-44.337h-93.811l-35.649 73.534 35.649 38.93h15.948l33.772-23.79 22.515 14.057-8.443 55.15 33.772 4.326 8.443 59.477h60.978l59.101-29.198 42.216 18.384 79.74 3.244 5.628 60.557h64.73l7.505 70.29h44.092l114.45 87.592ZM3608 458.506l-128.522-4.325-30.02 14.058 33.772 38.93-70.358 19.465v-187.08l173.551 80.023 21.577 38.93ZM311.455 1084.627l-16.886 34.604-59.102-45.418-39.4 23.79-93.812-63.8 8.443-29.198 106.945 49.743 41.277-24.871 52.535 55.15ZM72.235 970.001l-46.906 34.604L0 940.803l72.235 29.198Zm376.185 635.853-25.329 29.197-38.463-29.197 26.267-30.279 37.525 30.279Zm-67.544-44.337-30.02 19.465-39.401-30.279 30.02-43.255 39.4 54.069Zm1923.14-754.805-4.69-40.011-21.577 3.244 2.815 40.01 23.453-3.243Zm-76.925 63.801-28.144-63.801 23.453-36.767-12.195-15.14-24.391 21.628 5.629 104.894 35.648-10.814Zm-132.275-65.964-30.957-57.313-29.082-6.489 1.876 25.954-25.329 3.244-21.577-32.442-38.463 55.15 7.505 34.605 33.773-30.279h26.267l75.987 7.57Z" fill-rule="nonzero"></path></svg>
                </div>
                <p className="lg:block hidden font-mono mb-8 mt-6 text-gray-800 text-megasmall w-full max-w-xl tracking-wide">
                  <span>
                    explore
                    <a className="bg-black text-white rounded-full px-3 py-2 ml-2 lg:hover:bg-azukired">New World↓</a>
                  </span>
                </p>
              </section>
              <section id="section3" className="panel lg:h-screen flex flex-col pt-6 mt-2 lg:pt-0 lg:justify-center section3">
                <Title title="explore the world" />
                <div className="font-mono text-gray-800 lg:text-sm text-xs lg:leading-6 leading-4 lg:w-1/2">
                  <p className="text-gray-500 lg:text-sm text-xs lg:leading-6 w-full tracking-wide font-mono mb-4">
                    We welcome brave you to an unknown new world. It is a new world created by more people and shared by most people...
                  </p>
                  <div className="grid pt-6 border-t z-50 border-black border-opacity-10 lg:grid-cols-2 gap-3 w-full max-w-2xl">
                    <Link img="https://www.azuki.com/rh/manifesto.png" title="gallery" content="10,000 red beans" link="/gallery" />
                    <Link img="https://www.azuki.com/rh/updates.png" title="recruitment" content="Join the red bean team" link="/careers" />
                    <Link img="https://www.azuki.com/rh/twitter.png" title="twitter" content="Tweet 🐦" link="https://twitter.com/azukiofficial" />
                    <Link img="https://www.azuki.com/rh/discord.png" title="discord" content="Join the red bean community" link="https://discord.com/invite/azuki" />
                  </div>
                </div>
              </section>
            </div>
          </div>
          <img className="fixed w-1/2 bottom-0 right-0" src="https://www.azuki.com/girl23.png" alt="" />
        </div>
        <EmblaCarousel />
      </main>
    </>
  )
}

export default garden