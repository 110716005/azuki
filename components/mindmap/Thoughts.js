import React from 'react'
import { useState } from 'react'
function Thoughts(props) {
    const [isExpand, setIsExpand] = useState(false)

    const reverseExpand = () => {
        setIsExpand(!isExpand)
    }
    return (
        <div className="overflow-hidden duration-500" style={{ position: 'absolute', willChange: 'transform, width, height opacity', width: (isExpand ? "100%" : props.width), height: (isExpand ? props.maxHeight : props.height), zIndex: (isExpand ? "59" : "0"), transform: (isExpand ? 'translate3d(0px, 0px, 0px)' : 'translate3d(' + props.offsetX + 'px,' +  props.offsetY + 'px, 0px)') }}>
            {!isExpand ?
                (
                    <div className={"bg-azukired text-white h-full overflow-hidden duration-100 hover:shadow-lg " + (isExpand ? "" : "cursor-pointer")} onClick={reverseExpand}>
                        <div className="flex group h-full flex-col lg:justify-end justify-start lg:p-6 p-4">
                            <p className="uppercase opacity-10 font-sans lg:text-6xl text-4xl -ml-1 font-black pb-1">
                                07
                            </p>
                            <p className="flex items-center font-sans lg:text-sm text-xs tracking-wide font-bold uppercase">
                                your thoughts<span className="hidden lg:block text-lg transform -translate-y-0.5 opacity-0 group-hover:opacity-100 pl-2 group-hover:translate-x-1 duration-300 translate-x-0">→</span>
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
                            <img class="absolute lg:block hidden right-4 bottom-0 w-1/4 " src="https://www.azuki.com/map/brainwhite.png" />
                            <p className="uppercase text-4xl -ml-0.5 truncate  font-sans font-bold pb-1">
                                your thoughts <span className="opacity-20 pl-2">//</span>
                            </p>
                            <div className="space-y-3 font-300 border-t border-white border-opacity-10 text-white max-w-2xl pt-4 mt-2 font-mono text-sm">
                                <p className="leading-5">
                                    "In general, the history of mankind is a history of ideas and creativity." - <br />
                                    Herbert George Wells <br />
                                    What creative ideas do you have? Let's write history together.
                                </p>
                                <div>
                                    <textarea className=" disabled:text-black rounded disabled:opacity-30 p-4 mb-6 focus:outline-none active:focus:outline-none focus:border-0 active:border-0 text-black block bg-white w-full h-56" name="" id="" cols="30" rows="10" placeholder='Enter your thoughts...'></textarea>
                                    <button class="block h-12 text-white items-center flex justify-center w-40 text-xs uppercase bg-black group">Submit an idea<span class="fade-in pl-2 group-hover:translate-x-1 duration-300 translate-x-0">→</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Thoughts