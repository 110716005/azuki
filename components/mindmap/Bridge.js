import React from 'react'
import { useState } from 'react'
function Bridge(props) {
    const [isExpand, setIsExpand] = useState(false)

    const reverseExpand = () => {
        setIsExpand(!isExpand)
    }
    return (
        <div className="overflow-hidden duration-500" style={{ position: 'absolute', willChange: 'transform, width, height opacity', width: (isExpand ? "100%" : props.width), height: (isExpand ? props.maxHeight : props.height), zIndex: (isExpand ? "59" : "0"), transform: (isExpand ? 'translate3d(0px, 0px, 0px)' : 'translate3d(' + props.offsetX + 'px,' +  props.offsetY + 'px, 0px)') }}>
            {!isExpand ?
                (
                    <div className={"bg-olive text-black h-full overflow-hidden duration-100 hover:shadow-lg " + (isExpand ? "" : "cursor-pointer")} onClick={reverseExpand}>
                        <div className="flex group h-full flex-col lg:justify-end justify-start lg:p-6 p-4">
                            <p className="uppercase opacity-10 font-sans lg:text-6xl text-4xl -ml-1 font-black pb-1">
                                05
                            </p>
                            <p className="flex items-center font-sans lg:text-sm text-xs tracking-wide font-bold uppercase">
                                bridge <span className="text-lg transform -translate-y-0.5 opacity-0 group-hover:opacity-100 pl-2 group-hover:translate-x-1 duration-300 translate-x-0">→</span>
                            </p>
                            <img class="absolute opacity-50 group-hover:opacity-100 duration-300 transform  lg:w-72 lg:-right-24 lg:-bottom-10 w-7/12 -right-3 -bottom-3" src="https://www.azuki.com/map/bridge.png" />
                        </div>
                    </div>
                ) :
                (
                    <div className={"bg-olive text-black h-full overflow-hidden duration-100 hover:shadow-lg " + (isExpand ? "" : "cursor-pointer")}>
                        <div className="relative flex flex-col justify-center h-full w-full px-12">
                            <div className="text-gray-800 duration-300 w-12 h-12 absolute group top-10 right-12 cursor-pointer z-50" onClick={reverseExpand}>
                                <svg viewBox="0 0 24 24" className="fill-current w-full h-full p-2" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"></path></svg>
                            </div>
                            <img class="absolute lg:block hidden -right-12 -bottom-12 w-5/12 " src="https://www.azuki.com/map/bridge.png" />
                            <p className="uppercase text-4xl -ml-0.5 truncate  font-sans font-black pb-1">
                                bridges <span className="opacity-20 pl-2">//</span>
                            </p>
                            <div className="space-y-3 font-[300] text-gray-800 max-w-2xl pt-4 mt-2 font-mono text-sm">
                                <p className="leading-5 opacity-80">
                                    The bridge between the physical world and the digital world is fertile ground for the growth of new media. We will do a lot of experiments here: meta-games, interactive experiences, interactive experiences with Hongdou IP, etc. In IP operations, Riot Games' recently launched "Battle of Two Cities" gave us a good inspiration. The roles of Red Bean belong to everyone in the community, and we look forward to stimulating the possibility of updating in IP operations.
                                </p>
                                <p className="font-black">Red bean custom authentication robot<span className="font-700 pt-1 pb-0.5 px-1 ml-2 rounded-sm bg-black uppercase text-2xs text-gray-200">completed</span></p>
                                <p className="leading-5 opacity-80">3rd party bots (like Collabland) have many limitations. We hope to bring the best security and experience to the community of Hongdou through the customized authentication robot.</p>
                                <p className="font-black">metagame<span className="font-700 pt-1 pb-0.5 px-1 ml-2 rounded-sm bg-emerald-500 uppercase text-2xs text-white">IN THE PROCESS,</span></p>
                                <p className="leading-5 opacity-80">we hope to bring various interesting experiences to the red bean community by designing various games in the community.</p>
                                <div className="relative break-words">
                                    <img src="https://www.azuki.com/redacted.svg" className="absolute w-64 -left-4 z-30 top-1/2 transform -translate-y-1/2" />
                                    <span className="space-y-2 filter blur-sm block mt-2">
                                        <p>kSEguLX7ePCY51f+pgCUlc5GflURZTj6rvYWoW3i7RFpRJe0lisHOBbfuAgQun2Wuhm7uMyjcR2OrUH8YBQdVeJzxcrtblGRJk41biWEsCSTbL1DCrVnK5dP7VdSgiGq</p>
                                        <p>ZXR+EcFTtKpn7cnpQ2QxLHZhg3o15J/wjyxwa0IZ4iOtHwa7si4Ha7F3VfEIT9JgD7cZHHHtVS1cqZkX7UhQ6g==</p>
                                    </span>
                                </div>
                                <p className="font-black">Interactable brand<span className="font-700 pt-1 pb-0.5 px-1 ml-2 rounded-sm bg-yellow-400 uppercase text-2xs text-white">EXPLORE</span></p>
                                <p className="leading-5 opacity-80">a manga, an anime where all the characters are community held. What possibilities does this open up?</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Bridge