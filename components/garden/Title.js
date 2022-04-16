import React from 'react'

function Title(props) {
    return (
        <h1 className="w-full tracking-tighter lg:pb-6 pb-3 -ml-0.5 2xl:text-6xl xl:text-5xl lg:text-4 xl text-2xl text-black uppercase font-black whitespace-pre-line">
            {props.title}
            <span className="opacity-10 font-[1100] tracking-wide px-2">//</span>
        </h1>
    )
}

export default Title