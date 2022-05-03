import React from 'react'
import { useState, useEffect } from 'react'
function music() {
    const playList = [
        {
            title: "Working For It",
            artist: "ZHU, Skrillex, & THEY",
            src: "Working For It.m4a"
        },
        {
            title: "damn Right",
            artist: "Audrey Nuna",
            src: "damn Right.m4a"
        },
        {
            title: "走到飛",
            artist: "Trout Fresh. ØZI. Julia Wu. Kumachan. B.C.W. Barry. Dwagie",
            src: "zoudaofei.m4a"
        },
        {
            title: "Drip",
            artist: "Jesse ft. Jay Park",
            src: "Drip.m4a"
        },
        {
            title: "MUKKBANG!",
            artist: "Lil Cherry & GOLDBUUDA",
            src: "MUKKBANG!.m4a"
        },
        {
            title: "WANTED",
            artist: "Junoflo & G2",
            src: "WANTED.m4a"
        },
        {
            title: "Gundal",
            artist: "Flowsik & Gonhills",
            src: "Gundal.m4a"
        },
        {
            title: "B.Y.S",
            artist: "keshi",
            src: "BYS.m4a"
        },
    ]

    const [playListIndex, setPlayListIndex] = useState(0)
    const [audio, setAudio] = useState(typeof Audio !== "undefined" && new Audio("https://azuki-songs.s3.amazonaws.com/azuki/" + playList[0].src));
    const [playing, setPlaying] = useState(false)
    const [isExpand, setExpand] = useState(false)

    const playerIsExpand = () => setExpand(!isExpand)

    const increment = () => {
        audio.pause()
        setPlayListIndex((((playListIndex + 1) % 6) + 6) % 6)
    }
    const toggle = () => {
        setPlaying(!playing)
    }
    const decrement = () => {
        audio.pause()
        setPlayListIndex((((playListIndex - 1) % 6) + 6) % 6)
    }

    useEffect(() => {
        playing ? audio.play() : audio.pause()
    }, [playing])

    useEffect(() => {
        setAudio(typeof Audio !== "undefined" && new Audio("https://azuki-songs.s3.amazonaws.com/azuki/" + playList[playListIndex].src))
    }, [playListIndex])

    return (
        <div className="hidden lg:block fixed bottom-8 left-8 px-8 z-[60]">
            <div className="relative duration-100">
                <button className="absolute duration-300 hover:scale-110 active:scale-95 transform flex items-center justify-center -top-5 -right-5 z-30 w-10 h-10 border-4 rounded-full bg-white text-black" onClick={playerIsExpand}>
                    {isExpand ? <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-current" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-current" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"></path></svg>}
                </button>
                <div title={playList[playListIndex].title + " by " + playList[playListIndex].artist} className={"duration-300 bg-white h-14 shadow-md flex rounded-md relative " + (isExpand ? "cursor-pointer" : "")}>
                    <img className={" transform duration-200 " + (isExpand ? "-translate-y-6 h-20" : "-translate-y-2 h-16")} src="https://www.azuki.com/jax.png" />
                    <div className={"icon ml-4 mr-4 " + (playing ? "playingicon" : "pausedicon")}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={"flex " + (isExpand ? "block" : "hidden")}>
                        <div className="text-left w-40 pr-8 flex flex-col justify-center">
                            <h3 className="font-bold uppercase text-md truncate">{playList[playListIndex].title}</h3>
                            <h4 className="uppercase font-mono text-2xs 0 opacity-40 truncate ">{playList[playListIndex].artist}</h4>
                        </div>
                        <div className="w-full grid grid-cols-3 rounded-md mr-2">
                            <div className="flex items-center justify-center">
                                <button className="h-8 w-8 flex items-center justify-center transform hover:scale-110 active:scale-95" onClick={decrement}>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="sm" width="sm" xmlns="http://www.w3.org/2000/svg"><path d="m16 7-7 5 7 5zm-7 5V7H7v10h2z"></path></svg>
                                </button>
                            </div>
                            <div id="pause" className="flex items-center justify-center">
                                <button className="h-10 w-10 rounded=full flex items-center justify-center transform hover:scale-110 active:scale-95" form="pause" onClick={toggle}>
                                    {!playing ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="sm" width="sm" xmlns="http://www.w3.org/2000/svg"><path d="M7 6v12l10-6z"></path></svg> : <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="sm" width="sm" xmlns="http://www.w3.org/2000/svg"><path d="M8 7h3v10H8zm5 0h3v10h-3z"></path></svg>}
                                </button>
                            </div>
                            <div className="flex items-center justify-center">
                                <button className="h-8 w-8 flex items-center justify-center transform hover:scale-110 active:scale-95" onClick={increment}>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="sm" width="sm" xmlns="http://www.w3.org/2000/svg"><path d="M7 7v10l7-5zm9 10V7h-2v10z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default music