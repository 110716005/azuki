import React from 'react'
import { useState } from 'react'
function Physical(props) {
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
                                04
                            </p>
                            <p className="flex items-center font-sans lg:text-sm text-xs tracking-wide font-bold uppercase">
                                physical world<span className="hidden lg:block text-lg transform -translate-y-0.5 opacity-0 group-hover:opacity-100 pl-2 group-hover:translate-x-1 duration-300 translate-x-0">→</span>
                            </p>
                            <img class=" absolute opacity-50 group-hover:opacity-100 duration-300 transform lg:w-72 lg:-right-6 lg:-bottom-6 w-32 -right-1 -bottom-1" src="https://www.azuki.com/map/shirts.png" />
                        </div>
                    </div>
                ) :
                (
                    <div className={"bg-olive text-black h-full overflow-hidden duration-100 hover:shadow-lg " + (isExpand ? "" : "cursor-pointer")}>
                        <div className="relative flex flex-col justify-center h-full w-full px-12">
                            <div className="text-gray-800 duration-300 w-12 h-12 absolute group top-10 right-12 cursor-pointer z-50" onClick={reverseExpand}>
                                <svg viewBox="0 0 24 24" className="fill-current w-full h-full p-2" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"></path></svg>
                            </div>
                            <img class="absolute lg:block hidden right-0 -bottom-12 w-5/12 " src="https://www.azuki.com/map/shirts.png" />
                            <p className="uppercase text-4xl -ml-0.5 truncate font-sans font-black pb-1">
                                physical world <span className="opacity-20 pl-2">//</span>
                            </p>
                            <div className="font-light text-gray-800 max-w-2xl pt-4 mt-2 font-mono text-sm border-t border-gray-300 tracking-wide space-y-4">
                                <p className="pb-3 leading-5 font-black">
                                    streetwear<span className="font-700 pt-1 pb-0.5 px-1 ml-2 rounded-sm bg-emerald-500 uppercase text-2xs text-white">MEMBERS OF THE ONGOING</span><br />
                                    <font className="opacity-80">
                                        red bean will enjoy various airdrops for life. The first airdrop is about to begin...
                                    </font>
                                </p>
                                <p className="pb-3 leading-5 font-black">
                                    Collection<span className="font-700 pt-1 pb-0.5 px-1 ml-2 rounded-sm bg-emerald-500 uppercase text-2xs text-white">PRODUCT DESIGN IN PROGRESS</span><br />
                                    <font className="opacity-80">
                                        has begun...
                                    </font>
                                </p>
                                <p className="pb-3 leading-5 font-black">
                                    Expand the core team<span className="font-700 pt-1 pb-0.5 px-1 ml-2 rounded-sm bg-emerald-500 uppercase text-2xs text-white">IN PROGRESS</span><br />
                                    <font className="opacity-80">
                                        we officially welcome <span className="underline">steamboy, Daph, Demna, and njoo</span> to join us full time! Our recruitment interface will also add more job information.
                                    </font>
                                </p>
                                <p className="pb-3 leading-5 font-black">
                                    offline activity<span className="font-700 pt-1 pb-0.5 px-1 ml-2 rounded-sm bg-yellow-400 uppercase text-2xs text-white"> </span><br />
                                    <font className="opacity-80">
                                        Explore<span className="font-700 pt-1 pb-0.5 px-1 ml-2 rounded-sm bg-yellow-400 uppercase text-2xs text-white"> OFFLINE MEETUPS, EXHIBITIONS, MUSIC FESTIVALS, AND MORE. </span>We will reach more partners in the offline world.
                                    </font>
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Physical