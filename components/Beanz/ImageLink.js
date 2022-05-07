import React from 'react'

function ImageLink(props) {
    return (
        <>
            <li className="group w-full max-w-[5rem] cursor-pointer h-20 p-0 border-olive bg-opacity-100 rounded-xl pointer" onClick={props.click}>
                <img className={"-translate-y-2 hover:scale-125 duration-300 " + (props.selected ? "scale-125" : "scale-100")} src={props.img} />
                <p className="text-center uppercase font-beanz text-xs mt-2 font-[900]">{props.character}</p>
            </li>
        </>
    )
}

export default ImageLink