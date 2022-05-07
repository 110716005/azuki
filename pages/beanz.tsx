import React from 'react'
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import ImageLink from '../components/Beanz/ImageLink'
import Toshi from '../components/Beanz/characters/Toshi'
import Gus from '../components/Beanz/characters/Gus'
import Tao from '../components/Beanz/characters/Tao'
import Link from '../components/Beanz/characters/Link'
import Johnny from '../components/Beanz/characters/Johnny'
import Penny from '../components/Beanz/characters/Penny'
import Ash from '../components/Beanz/characters/Ash'
import Pip from '../components/Beanz/characters/Pip'
import Ed from '../components/Beanz/characters/Ed'
import Frida from '../components/Beanz/characters/Frida'
import Sun from '../components/Beanz/characters/Sun'
import Kami from '../components/Beanz/characters/Kami'

export const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [
        emblaApi
    ]);
    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    const increment = () => {
        setSelectedIndex(prev => prev + 1);
    }

    useEffect(() => {
        if (emblaApi) {
            // Embla API is ready
            onSelect()
            emblaApi.on("select", onSelect);
        }
    }, [emblaApi, onSelect])

    const backgroundColor = ["bg-azukired", "bg-[#0167BC]", "bg-[#E16B4A]", "bg-[#423E4D]", "bg-[#6E4745]", "bg-[#DBC1B0]", "bg-[#9C77CB]", "bg-[#F5ECDF]", "bg-[#40A49B]", "bg-[#FFAFD2]", "bg-[#E5B338]", "bg-[#8BACC1]"]

    return (
        <>
            <div className={"duration-300 " + (selectedIndex == 5 ? "lg:rotate-2" : "")}>
                <div className={"embla_beanz lg:mt-12 duration-500 " + backgroundColor[selectedIndex] + " bg-opacity-100 shadow-xl rounded-xl 2xl:w-10/12 w-full h-2/3 z-[40]"}>
                    <img className="lg:w-64 w-24 rotate-[30deg] absolute lg:-top-12 lg:-right-10 -top-4 -right-4" src="https://www.azuki.com/bsticker.png" />
                    <div className="embla_beanz__viewport h-full" ref={emblaRef}>
                        <div className="embla_beanz__container h-full" >
                            <Toshi currentIndex={selectedIndex} />
                            <Gus currentIndex={selectedIndex} />
                            <Tao currentIndex={selectedIndex} />
                            <Link currentIndex={selectedIndex} />
                            <Johnny currentIndex={selectedIndex} />
                            <Penny currentIndex={selectedIndex} />
                            <Ash currentIndex={selectedIndex} />
                            <Pip currentIndex={selectedIndex} />
                            <Ed currentIndex={selectedIndex} />
                            <Frida currentIndex={selectedIndex} />
                            <Sun currentIndex={selectedIndex} />
                            <Kami currentIndex={selectedIndex} />
                        </div>
                    </div>
                    <button className={"embla__button lg:w-20 lg:h-20 h-8 w-8 embla__button--prev lg:-left-12 -left-4 " + (selectedIndex == 0 ? "hidden" : "")} onClick={scrollPrev}>
                        <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644"><path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"></path></svg>
                    </button>
                    <button className={"embla__button lg:w-20 lg:h-20 h-8 w-8 embla__button--next lg:-right-12 -right-4 " + (selectedIndex == 11 ? "hidden" : "")} onClick={scrollNext}>
                        <svg className="embla__button__svg" viewBox="0 0 238.003 238.003"><path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"></path></svg>
                    </button>
                </div>
                <ul className="mx-auto lg:flex hidden z-[180] relative -translate-y-1/2 space-x-5  justify-center">
                    <ImageLink img="https://www.azuki.com/beannames/toshi.png" character="toshi" selected={selectedIndex == 0} click={() => scrollTo(0)} />
                    <ImageLink img="https://www.azuki.com/beannames/gus.png" character="gus" selected={selectedIndex == 1} click={() => scrollTo(1)} />
                    <ImageLink img="https://www.azuki.com/beannames/tao.png" character="tao" selected={selectedIndex == 2} click={() => scrollTo(2)} />
                    <ImageLink img="https://www.azuki.com/beannames/link.png" character="link" selected={selectedIndex == 3} click={() => scrollTo(3)} />
                    <ImageLink img="https://www.azuki.com/beannames/johnny.png" character="johnny G." selected={selectedIndex == 4} click={() => scrollTo(4)} />
                    <ImageLink img="https://www.azuki.com/beannames/penny.png" character="penny" selected={selectedIndex == 5} click={() => scrollTo(5)} />
                    <ImageLink img="https://www.azuki.com/beannames/ash.png" character="ash" selected={selectedIndex == 6} click={() => scrollTo(6)} />
                    <ImageLink img="https://www.azuki.com/beannames/pip.png" character="pip" selected={selectedIndex == 7} click={() => scrollTo(7)} />
                    <ImageLink img="https://www.azuki.com/beannames/ed.png" character="ed" selected={selectedIndex == 8} click={() => scrollTo(8)} />
                    <ImageLink img="https://www.azuki.com/beannames/frida.png" character="frida" selected={selectedIndex == 9} click={() => scrollTo(9)} />
                    <ImageLink img="https://www.azuki.com/beannames/sun.png" character="sun" selected={selectedIndex == 10} click={() => scrollTo(10)} />
                    <ImageLink img="https://www.azuki.com/beannames/kami.png" character="kami" selected={selectedIndex == 11} click={() => scrollTo(11)} />
                </ul>
            </div>
        </>
    )
}

function beanz() {
    const viewObject = [
        {
            color: 'bg-[#bc3848]',
            img: 'https://www.azuki.com/z/1.png',
            section0_translate: 'translate(0px, 0px)',
            section1_translate: 'translate(0px, 75px)',
            section2_translate: 'translate(0px, 75px)',
            section3_translate: 'translate(0px, 75px)',
        },
        {
            color: 'bg-[#0267bc]',
            img: 'https://www.azuki.com/z/2.png',
            section0_translate: 'translate(0px, -75px)',
            section1_translate: 'translate(0px, 0px)',
            section2_translate: 'translate(0px, 75px)',
            section3_translate: 'translate(0px, 75px)',
        },
        {
            color: 'bg-[#40a49b]',
            img: 'https://www.azuki.com/z/3.png',
            section0_translate: 'translate(0px, -75px)',
            section1_translate: 'translate(0px, -75px)',
            section2_translate: 'translate(0px, 0px)',
            section3_translate: 'translate(0px, 75px)',
        },
        {
            color: 'bg-gray-900',
            img: '',
            section0_translate: 'translate(0px, -75px)',
            section1_translate: 'translate(0px, -75px)',
            section2_translate: 'translate(0px, -75px)',
            section3_translate: 'translate(0px, 0px)',
        },

    ]

    const [scrollPercent, setScrollPercent] = useState(0);
    const [viewObjectIndex, setObjectIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            let scrollTop = window.scrollY;
            var docHeight = document.body.offsetHeight;
            var winHeight = window.innerHeight;
            var scrollPercent = (scrollTop) / (docHeight - winHeight);
            var scrollPercentRounded = Math.round(scrollPercent * 100);
            setScrollPercent(scrollPercentRounded)
            console.log(scrollPercentRounded)
            if (scrollPercentRounded >= 0 && scrollPercentRounded <= 15) {
                setObjectIndex(0);
            } else if (scrollPercentRounded > 15 && scrollPercentRounded <= 50) {
                setObjectIndex(1);
            } else if (scrollPercentRounded > 50 && scrollPercentRounded <= 75) {
                setObjectIndex(2);
            } else if (scrollPercentRounded > 75 && scrollPercentRounded <= 100) {
                setObjectIndex(3);
            }
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
            <div className="z-[200] lg:block hidden lg:fixed h-screen top-0 left-8">
                <div className="hidden lg:sticky top-0 h-screen lg:flex items-center">
                    <div className="grid  grid-cols-1 h-full gap-2 lg:max-h-96 py-32 lg:py-0 section_nav oapcity-100">
                        <a href="#section0" className="opacity-100 h-full rounded-sm relative duration-500" style={{ width: "3px", backgroundColor: (scrollPercent <= 15) ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.15)" }}></a>
                        <a href="#section0" className="opacity-100 h-full rounded-sm relative duration-500" style={{ width: "3px", backgroundColor: (scrollPercent > 25 && scrollPercent <= 50) ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.15)" }}></a>
                        <a href="#section0" className="opacity-100 h-full rounded-sm relative duration-500" style={{ width: "3px", backgroundColor: (scrollPercent > 50 && scrollPercent <= 75) ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.15)" }}></a>
                        <a href="#section0" className="opacity-100 h-full rounded-sm relative duration-500" style={{ width: "3px", backgroundColor: (scrollPercent > 75 && scrollPercent <= 100) ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.15)" }}></a>
                    </div>
                </div>
            </div>
            <div className="max-w-11xl relative fade-in mx-auto lg:px-8 px-4 lg:h-[400vh] h-auto text-white lg:block hidden">
                <div id="section0" className="panelbeanz lg:sticky flex lg:items-center  items-start lg:mt-0 mt-24 h-screen w-full duration-300" style={{ visibility: (viewObjectIndex == 0 ? "inherit" : "hidden"), opacity: (viewObjectIndex == 0 ? "1" : "0"), transform: viewObject[viewObjectIndex].section0_translate }}>
                    <div className="mx-auto lg:px-8 max-w-11xl w-full">
                        <h1 className="font-beanz relative tracking-tighter lg:pb-0 pb-3 w-full lg:-ml-2 lg:text-[5vw] text-4xl leading-[.9em]  uppercase font-[900] whitespace-pre-line">
                            <img className="lg:w-64 w-20 rotate-6 absolute lg:-top-[6.5rem] lg:-left-10 -left-4 -top-8" src="https://www.azuki.com/bsticker.png" />
                            <p>From Xiaodou Garden </p>
                            <p>to Alley</p>
                        </h1>
                        <div className="tracking-tight font-300 lg:text-base lg:mt-2 text-xs lg:leading-7 font-400 lg:w-6/12 w-full">
                            <p className="block">
                                A small species that grows out of the dirt of an adzuki bean garden. They are all happy to help everyone in Xiaodouyuan. However, some BEANZ prefer to explore the world of the alley...
                            </p>
                            <a href="" className="font-beanz inline-block hover:bg-opacity-60 uppercase duration-300 rounded-full bg-black text-white mt-6 px-6 pb-2 pt-3">
                                Reliable partner <span className="pl-2">↓</span>
                            </a>
                            <a href="" className="ml-2 font-beanz inline-block bg-opacity-20 hover:bg-opacity-60 uppercase duration-300 rounded-full bg-white text-white mt-6 px-6 pb-2 pt-3">
                                opensea <span className="pl-2">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="section1" className="panelbeanz lg:sticky flex lg:items-center  items-start lg:mt-0 mt-24 h-screen w-full duration-300" style={{ visibility: (viewObjectIndex == 1 ? "inherit" : "hidden"), opacity: (viewObjectIndex == 1 ? "1" : "0"), transform: viewObject[viewObjectIndex].section1_translate }}>
                    <div className="mx-auto lg:px-8 max-w-11xl w-full">
                        <h1 className="font-beanz relative tracking-tighter lg:pb-0 pb-3 w-full lg:-ml-2 lg:text-[5vw] text-4xl leading-[.9em]  uppercase font-[900] whitespace-pre-line">
                            <p><span className="opacity-40">(MOSTLY)</span>ALWAYS</p>
                            <p>BY YOUR SIDE</p>
                        </h1>
                        <div className="tracking-tight font-300 lg:text-base lg:mt-2 text-xs lg:leading-7 font-400 lg:w-6/12 w-full">
                            <p className="block">
                                Some like to be helpful, some like to go off the beaten path.
                            </p>
                            <a href="" className="font-beanz inline-block hover:bg-opacity-60 uppercase duration-300 rounded-full bg-black text-white mt-6 px-6 pb-2 pt-3">
                                Personality is different  <span className="pl-2">↓</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="section2" className="panelbeanz lg:sticky flex lg:items-center  items-start lg:mt-0 mt-24 h-screen w-full duration-300" style={{ visibility: (viewObjectIndex == 2 ? "inherit" : "hidden"), opacity: (viewObjectIndex == 2 ? "1" : "0"), transform: viewObject[viewObjectIndex].section2_translate }}>
                    <div className="mx-auto lg:px-8 max-w-11xl w-full">
                        <h1 className="font-beanz relative tracking-tighter lg:pb-0 pb-3 w-full lg:-ml-2 lg:text-[5vw] text-4xl leading-[.9em]  uppercase font-[900] whitespace-pre-line">
                            <p>PERSONALITY...</p>
                            <p>WEIRD</p>
                        </h1>
                        <div className="tracking-tight font-300 lg:text-base lg:mt-2 text-xs lg:leading-7 font-400 lg:w-6/12 w-full">
                            <p className="block">
                                There are many kinds of BEANZ, and each of them has a different personality...
                            </p>
                            <a href="" className="font-beanz inline-block hover:bg-opacity-60 uppercase duration-300 rounded-full bg-black text-white mt-6 px-6 pb-2 pt-3">
                                SMALL BEAN BALL  <span className="pl-2">↓</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="section3" className="panelbeanz overflow-y-clip lg:sticky flex items-center lg:overflow-y-clip h-screen w-full" style={{ visibility: (viewObjectIndex == 3 ? "inherit" : "hidden"), opacity: (viewObjectIndex == 3 ? "1" : "0"), transform: viewObject[viewObjectIndex].section3_translate }}>
                    <EmblaCarousel />
                </div>
            </div>
            <div className={"w-full fade-in h-screen hidden lg:block fixed duration-1000 items-center z-[-10] " + viewObject[viewObjectIndex].color + " top-0 left-0"}>
                <img className="w-screen  duration-1000 transition-colors opacity-10" src="https://www.azuki.com/beanzbgwhite.png" />
            </div>
            <div className="lg:block hidden">
                <img className="fixed inset-x-0 lg:top-20 lg:bottom-auto lg:left-auto lg:right-12 bottom-[-60%] lg:w-[44%] w-11/12 mx-auto fade-in duration-500" src={viewObject[viewObjectIndex].img} />
            </div>
        </>
    )
}

export default beanz