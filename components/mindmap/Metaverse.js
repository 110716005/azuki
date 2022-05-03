import React from 'react'
import { useState, useEffect } from 'react'
function metaverse(props) {
    const [isExpand, setIsExpand] = useState(false)

    const reverseExpand = () => {
        setIsExpand(!isExpand)
    }
    return (
        <div className="overflow-hidden duration-500" style={{ position: 'absolute', willChange: 'transform, width, height opacity, translate3d', width: (isExpand ? "100%" : props.width), height: (isExpand ? props.maxHeight : props.height), zIndex: (isExpand ? "59" : "0"), transform: (isExpand ? 'translate3d(0px, 0px, 0px)' : 'translate3d(' + props.offsetX + 'px,' +  props.offsetY + 'px, 0px)') }}>
            {!isExpand ?
                (
                    <div className={"bg-olive text-black h-full duration-100 hover:shadow-lg " + (isExpand ? "" : "cursor-pointer")} onClick={reverseExpand}>
                        <div className="flex group h-full flex-col lg:justify-end justify-start lg:p-6 p-4">
                            <p className="uppercase opacity-10 font-sans lg:text-6xl text-4xl -ml-1 font-black pb-1">
                                03
                            </p>
                            <p className="flex items-center font-sans text-sm tracking-wide font-bold uppercase">
                                metaverse <span className="text-lg transform -translate-y-0.5 opacity-0 group-hover:opacity-100 pl-2 group-hover:translate-x-1 duration-300 translate-x-0">→</span>
                            </p>
                            <img class="absolute opacity-50 group-hover:opacity-100 duration-300 transform lg:w-64 lg:-right-4 lg:-bottom-6 w-7/12 -right-1 -bottom-1" src="https://www.azuki.com/map/meta3.png" />
                        </div>
                    </div>
                ) :
                (
                    <div className={"bg-olive text-black h-full overflow-hidden duration-100 hover:shadow-lg " + (isExpand ? "" : "cursor-pointer")}>
                        <div className="relative flex flex-col justify-center h-full w-full px-12">
                            <div className="text-gray-800 duration-300 w-12 h-12 absolute group top-10 right-12 cursor-pointer z-50" onClick={reverseExpand}>
                                <svg viewBox="0 0 24 24" className="fill-current w-full h-full p-2" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"></path></svg>
                            </div>
                            <img class="absolute lg:block hidden right-0 bottom-0 w-5/12 " src="https://www.azuki.com/map/meta3.png" />
                            <p className="uppercase text-4xl -ml-0.5 truncate  font-sans font-black pb-1">
                                metaverse <span className="opacity-20 pl-2">//</span>
                            </p>
                            <div className="font-light text-gray-800 max-w-3xl pt-4 mt-2 font-mono text-sm leading-5 tracking-wide">
                                <p className="pb-3 font-black">
                                    What is the current state of the Metaverse? How will it develop?
                                </p>
                                <p className="pb-3 opacity-70">
                                    We now spend most of our time in metaverses like Discord + Twitter. How can we provide a better experience for Beanstalkers? How do we spread the brand into the public eye? The most important thing is, what will happen in the metaverse in one year, two years from now?
                                </p>
                                <p className="pb-1">
                                    art exhibition<span className="font-700 pt-1 pb-0.5 px-1 ml-2 rounded-sm bg-black uppercase text-2xs text-gray-200">FINISHED</span>
                                </p>
                                <p className="opacity-80 pb-3">
                                    sorting, screening, and reading <span className="cursor-pointer underline">click here</span> .
                                </p>
                                <p className="pb-2 font-black">
                                    Fragmented Bob<span className="font-700 pt-1 pb-0.5 px-1 ml-2 rounded-sm bg-emerald-500 uppercase text-2xs text-gray-200">IN PROGRESS</span>
                                </p>
                                <p className="opacity-80">
                                    Red Bean #40 (Bob) will be converted into ERC-1155 tokens on fractional.art. Fragments of Bob will also become tokens for community management of Bob. For details, please visit:
                                </p>
                                <a className="underline opacity-80" href="https://www.azuki.com/bobu-101">www.azuki.com /bobu-101</a>
                                <div className="flex items-end py-2 transform lg:-translate-x-8">
                                    <img src="https://www.azuki.com/bobu.jpg" alt="My profile" className="w-6 h-6 rounded-full order-1" />
                                    <div className="flex flex-col space-y-1 text-xs max-w-lg mx-2 order-2 items-start">
                                        <div className="text-red-500 font-black">
                                            Bean Farmer Bob says...
                                        </div>
                                        <div className="px-4 py-2 bg-azukired text-white rounded-lg rounded-bl-none">
                                            <span>
                                                wait<span className="cursor--blinking">|</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <p className="font-black text">
                                    game<span className="font-700 pt-1 pb-0.5 px-1 ml-2 rounded-sm bg-yellow-400 uppercase text-2xs text-white">MANY PROJECTS IN THE EXPLORATION</span>
                                </p>
                                <p className="opacity-80">
                                    want to enter the game, but few projects have the experience and background to really make a good game. Red Bean's team has experience in the game industry, but making games is very difficult. If we make games, we'll be the coolest.
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default metaverse