import React from 'react'

function profile(props) {
    return (
        <div className="group relative border-opacity-10 border-b lg:hover:border-0 border-black hover:bg-opacity-100 hover:text-white lg:hover:z-50 z-10 lg:hover:drop-shadow-xl 
    transform lg:pt-4 lg:pb-2 bg-azukired lg:bg-transparent lg:hover:bg-azukired border-r scale-125 lg:scale-100 lg:hover:scale-125 border-b-0 lg:border-b z-30 leading-4">
            <img src={props.img} alt="" className="lg:px-3 filter block border-black border-opacity-20 group-hover:grayscale-0" />
            <p className="hidden lg:block text-left truncate lg:px-4 px-3 text-xs lg:pt-3 pt-2 uppercase font-[800]">
                {props.name}
            </p>
            <p className="hidden lg:block truncate lg:px-4 px-3 font-mono text-2xs pt-0.5 uppercase font-light opacity-50">
                {props.career}
            </p>
            <div className="absolute tracking-wide w-full flex flex-col mt-2 pb-3 pr-4 px-4 left-0 z-50 hidden lg:group-hover:flex lg:bg-azukired bg-opacity-100 lg:px-4">
                <p className="font-mono flex items-center text-4xs leading-3 -mt-1">
                    <a className="font-mono relative underline flex items-center uppercase text-4xs leading-3 -mt-1 w-full" href={props.link}>
                        <svg xmlns="http://www.w3.org/2000/svg" class=" fill-current stroke-current h-2 w-2 mr-1" viewBox="0 0 40 40"><path d="M38.526 8.625a15.199 15.199 0 01-4.373 1.198 7.625 7.625 0 003.348-4.211 15.25 15.25 0 01-4.835 1.847 7.6 7.6 0 00-5.557-2.404c-4.915 0-8.526 4.586-7.416 9.346-6.325-.317-11.934-3.347-15.69-7.953C2.01 9.869 2.97 14.345 6.358 16.612a7.58 7.58 0 01-3.446-.953c-.084 3.527 2.444 6.826 6.105 7.56a7.63 7.63 0 01-3.438.13 7.618 7.618 0 007.112 5.286A15.306 15.306 0 011.42 31.79a21.55 21.55 0 0011.67 3.42c14.134 0 22.12-11.937 21.637-22.643a15.499 15.499 0 003.799-3.941z"></path></svg>
                        <span className="pt-1 truncate">
                            {props.account}
                        </span>
                    </a>
                </p>
                <p className="font-mono pt-2 flex items-center text-5xs w-full">
                    {props.introduce}
                </p>
            </div>
        </div>
    )
}

export default profile
