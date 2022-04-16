import React from 'react'
import { useState } from 'react'
function Thoughts(props) {
    const [isExpand, setIsExpand] = useState(false)

    const reverseExpand = () => {
        setIsExpand(!isExpand)
    }
    return (
        <div className="overflow-hidden duration-500" style={{ position: 'absolute', willChange: 'transform, width, height opacity', width: (isExpand ? "100%" : ((props.parentWidth - 18) * 0.5) + "px"), height: (isExpand ? "614px" : "236px"), zIndex: (isExpand ? "59" : "0"), transform: (isExpand ? 'translate3d(0px, 0px, 0px)' : 'translate3d(' + ((props.parentWidth - 30) * 0.5 + 18) + 'px, 372px, 0px)') }}>
            {!isExpand ?
                (
                    <div className={"bg-azukired text-white h-full overflow-hidden duration-100 hover:shadow-lg " + (isExpand ? "" : "cursor-pointer")} onClick={reverseExpand}>
                        <div className="flex group h-full flex-col justify-end p-6">
                            <p className="uppercase opacity-10 font-sans text-6xl -ml-1 font-black pb-1">
                                07
                            </p>
                            <p className="flex items-center font-sans text-sm tracking-wide font-bold uppercase">
                                your thoughts<span className="text-lg transform -translate-y-0.5 opacity-0 group-hover:opacity-100 pl-2 group-hover:translate-x-1 duration-300 translate-x-0">→</span>
                            </p>
                            <img class=" absolute opacity-50 group-hover:opacity-100 duration-300 transform w-40 right-8 bottom-0" src="https://www.azuki.com/map/brainwhite.png" />
                        </div>
                    </div>
                ) :
                (
                    <div className={"bg-azukired text-white h-full overflow-hidden duration-100 hover:shadow-lg " + (isExpand ? "" : "cursor-pointer")}>
                        <div className="relative flex flex-col justify-center h-full w-full px-12">
                            <div className="text-gray-800 duration-300 w-12 h-12 absolute group top-10 right-12 cursor-pointer z-50" onClick={reverseExpand}>
                                <svg viewBox="0 0 24 24" className="fill-current w-full h-full p-2" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"></path></svg>
                            </div>
                            <img class="absolute lg:block hidden right-12 bottom-12 w-1/4 " src="https://www.azuki.com/map/beans.png" />
                            <p className="uppercase text-4xl -ml-0.5 truncate  font-sans font-bold pb-1">
                                vision and values <span className="opacity-20 pl-2">//</span>
                            </p>
                            <div className="font-light text-gray-800 max-w-2xl pt-4 mt-2 font-mono text-sm">
                                <p className="pb-3 leading-5">
                                    <span className="font-bold">We are Internet hipsters and</span> we travel at the junction of the fusion of the real and virtual worlds. We have the courage to innovate, we are not afraid to challenge the status quo, and we are not afraid to speak up. We will be the trendsetters of web3 culture.
                                </p>
                                <p className="pb-6">
                                    Our vision: to create the largest decentralized brand in the metaverse, created by the community, owned by the community.
                                </p>
                                <ul className="space-y-2">
                                    <li className="font-bold mb-1">value</li>
                                    <li>
                                        <p className="leading-5">
                                            <span className="font-bold px-1 -ml-1 highlight-yellow">Community First:</span> It all starts with the community. Abandoning the community also means red bean's failure. The community is our original intention, and we will always put the community first.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="leading-5">
                                            <span className="font-bold px-1 -ml-1 highlight-yellow">Only do the coolest:</span> Red beans represent creativity, courage, and perseverance. It’s easy to follow the trend, it’s hard to be original, and it’s even harder to be the coolest original. We will definitely take our own original path and only do the coolest.
                                        </p>
                                    </li>
                                    <li>

                                        <p className="leading-5">
                                            <span className="font-bold px-1 -ml-1 highlight-yellow">Community First:</span> Good things come and go. It is difficult for a decentralized brand to transform quickly, but this is actually a double-edged sword. Decentralization does not mean there is no leader. Red Bean's core team will provide resources and guides for the entire Bean community. There is still a long way to go. !Trust the process
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Thoughts