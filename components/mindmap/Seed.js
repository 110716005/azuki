import React from 'react'
import { useState } from 'react'
function Seed(props) {
    const [isExpand, setIsExpand] = useState(false)

    const reverseExpand = () => {
        setIsExpand(!isExpand)
    }
    return (
        <div className="duration-500" style={{ position: 'absolute', willChange: 'transform, width, height opacity', width: (isExpand ? "100%" : props.width), height: (isExpand ? props.maxHeight : props.height), zIndex: (isExpand ? "59" : "0"), transform: (isExpand ? 'translate3d(0px, 0px, 0px)' : 'translate3d(' + props.offsetX + 'px,' +  props.offsetY + 'px, 0px)') }}>
            {!isExpand ?
                (

                    <div className={"bg-olive text-black h-full overflow-hidden duration-100 hover:shadow-lg " + (isExpand ? "" : "cursor-pointer")} onClick={reverseExpand}>
                        <div className="flex group h-full flex-col lg:justify-end justify-start lg:p-6 p-4">
                            <p className="uppercase opacity-10 font-sans lg:text-6xl text-4xl -ml-1 font-black pb-1">
                                06
                            </p>
                            <p className="flex items-center font-sans lg:text-sm text-xs tracking-wide font-bold uppercase">
                                seed <span className="text-lg transform -translate-y-0.5 opacity-0 group-hover:opacity-100 pl-2 group-hover:translate-x-1 duration-300 translate-x-0">→</span>
                            </p>
                            <img class=" absolute opacity-50 group-hover:opacity-100 duration-300 transform lg:w-56 lg:right-2 lg:bottom-4 w-8/12 right-2 bottom-3" src="https://www.azuki.com/map/seedlings.png" />
                        </div>
                    </div>
                ) :
                (
                    <div className={"bg-olive text-black h-full overflow-hidden duration-100 hover:shadow-lg " + (isExpand ? "" : "cursor-pointer")}>
                        <div className="relative flex flex-col justify-center h-full w-full px-12">
                            <div className="text-gray-800 duration-300 w-12 h-12 absolute group top-10 right-12 cursor-pointer z-50" onClick={reverseExpand}>
                                <svg viewBox="0 0 24 24" className="fill-current w-full h-full p-2" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"></path></svg>
                            </div>
                            <img class="absolute lg:block hidden right-12 bottom-12 w-1/3 " src="https://www.azuki.com/map/seedlings.png" />
                            <p className="uppercase text-4xl -ml-0.5 truncate  font-sans font-black pb-1">
                                seed <span className="opacity-20 pl-2">//</span>
                            </p>
                            <div className="space-y-3 max-w-3xl mt-3 pt-6 border-t border-black border-opacity-10 font-300 border-opacity-10 border-t font-mono text-sm text-gray-800">
                                <p className="leading-5 opacity-80">Every idea starts out as a seed. And together we'll let the best ideas take root.</p>
                                <p className="font-black">joint name<span className="font-700 pt-1 pb-0.5 px-1 ml-2 rounded-sm bg-emerald-500 uppercase text-2xs text-white"> </span></p>
                                <p className="leading-5 opacity-80">We have already locked the first batch of joint partners<span className="font-700 pt-1 pb-0.5 px-1 ml-2 rounded-sm bg-emerald-500 uppercase text-2xs text-white"> IN PROGRESS . </span>We will also continue to collaborate with other brands that match the vision and aesthetics of Red Bean. Stay tuned.</p>
                                <p className="font-black">DAO<span className="font-700 pt-1 pb-0.5 px-1 ml-2 rounded-sm bg-yellow-400 uppercase text-2xs text-white">EXPLORING</span></p>
                                <p className="leading-5 opacity-80">DAOs are one of the most interesting innovations in cryptocurrencies right now. But we have to start small. We will start small and experiment with iterations before implementing DAO autonomy on a larger scale. Also, the legal structure of DAOs requires more research. See this article: <span className="underline"><a href="">Legal Structure of DAOs</a></span></p>
                                <p className="font-black">$BEAN<span className="font-700 pt-1 pb-0.5 px-1 ml-2 rounded-sm bg-yellow-400 uppercase text-2xs text-white">EXPLORE</span></p>
                                <p className="leading-5 opacity-80">the native currency in the bean universe.</p>
                                <p className="leading-5 opacity-80">Most of the ERC20 currencies in NFT projects are securities assets. Such assets are often subject to the management and scrutiny of the Securities and Futures Commission. Before releasing $Beans, we will conduct a detailed evaluation with the legal team.</p>
                                <p className="font-black">OpenSea Certification<span className="font-700 pt-1 pb-0.5 px-1 ml-2 rounded-sm bg-black uppercase text-2xs text-gray-200">COMPLETED</span></p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Seed