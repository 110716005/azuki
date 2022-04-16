import React from 'react'

function Link(props) {
    return (
        <a className="bg-gray-100 lg:pt-24 lg:hover:bg-azukired group hover:text-white flex justify-start h-full items-end cursor-pointer">
            <div className="flex items-center px-4 py-6 lg:px-6 w-full">
                <div className="min-w-0 flex-1 flex items-center lg:px-4 px-2 md:grid md:grid-cols-21 md:gap-4">
                    <div className="lg:space-y-2">
                        <p className="text-azukired lg:group-hover:text-white uppercase font-bold lg:text-xl pb-1 lg:truncate">{props.career}</p>
                        <p className="pb-0 text-xs lg:group-hover:text-white text-black tracking-wider uppercase">{props.locate}<span className="px-2 opacity-20">//</span>{props.time}</p>
                        <p className="text-black opacity-40 uppercase text-xs tracking-wider items-center pb-0">{props.type}</p>
                    </div>
                </div>
                <div className="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" class="lg:h-16 lg:w-16 h-10 w-10 stroke-current	text-gray-300 group-hover:text-white" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
            </div>
        </a>
    )
}

export default Link