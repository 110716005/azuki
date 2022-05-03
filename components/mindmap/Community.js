import React from 'react'
import { useState } from 'react'
function Community(props) {
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
                                02
                            </p>
                            <p className="flex items-center font-sans text-sm tracking-wide font-bold uppercase">
                                community <span className="text-lg transform -translate-y-0.5 opacity-0 group-hover:opacity-100 pl-2 group-hover:translate-x-1 duration-300 translate-x-0">→</span>
                            </p>
                            <img class=" absolute opacity-50 group-hover:opacity-100 duration-300 transform  lg:w-64 lg:-right-8 lg:-bottom-8 w-7/12 -right-1 -bottom-1" src="https://www.azuki.com/map/community.png" />
                        </div>
                    </div>
                ) :
                (
                    <div className={"bg-olive text-black h-full overflow-hidden duration-100 hover:shadow-lg " + (isExpand ? "" : "cursor-pointer")}>
                        <div className="relative flex flex-col justify-center h-full w-full px-12">
                            <div className="text-gray-800 duration-300 w-12 h-12 absolute group top-10 right-12 cursor-pointer z-50" onClick={reverseExpand}>
                                <svg viewBox="0 0 24 24" className="fill-current w-full h-full p-2" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"></path></svg>
                            </div>
                            <img class="absolute lg:block hidden right-0 -bottom-10 w-5/12 " src="https://www.azuki.com/map/community.png" />
                            <p className="uppercase text-4xl -ml-0.5 truncate  font-sans font-black pb-1">
                                community <span className="opacity-20 pl-2">//</span>
                            </p>
                            <div className="font-light text-gray-800 max-w-2xl pt-4 mt-2 font-mono text-sm border-t border-gray-300 tracking-wide leading-5">
                                <p className="leading-5 mt-6 font-bold">
                                    Full-time mod team<span className="font-700 pt-1 pb-0.5 px-1 ml-2 rounded-sm bg-black uppercase text-2xs text-gray-200">COMPLETED</span>
                                </p>
                                <p>
                                    MOD to help us protect and develop our core red bean community. We've recently recruited a group of full-time and part-time mods. In order to improve the professionalism of the operation of the NFT community, Mods of Red Bean will communicate with the community and the product team every day, and decide the working time and rest time.
                                </p>
                                <p className="leading-5 mt-6 font-bold">
                                    Red Bean Bonus<span className="font-700 pt-1 pb-0.5 px-1 ml-2 rounded-sm bg-emerald-500 uppercase text-2xs text-white">IN-PROGRESS</span>
                                </p>
                                <p>
                                    developers, artists and creatives, join us! The Xiaodou Garden is full of talented and enthusiastic partners who hope to contribute to the red bean community. Red Bean will open a special Red Bean bonus program for members with skills and whimsy. We are already exploring the legal framework and application process. Stay tuned.
                                </p>
                                <p className="leading-5 mt-6 font-bold">
                                    community space<span className="font-700 pt-1 pb-0.5 px-1 ml-2 rounded-sm bg-emerald-500 uppercase text-2xs text-white">ONGOING</span>
                                </p>
                                <p>
                                    From casual gatherings to touching stories, we've seen community-run spaces spring up on Twitter. These forums are important places for our community to connect and grow. From the next Red Bean Soup to the self-organized chats of the Red Beans, we will see you in the community space!
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Community