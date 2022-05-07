import React from 'react'

function Traits(props) {

    const traitImage = {
        'type': "https://www.azuki.com/filtericons/" + props.color + "/1/Type.png",
        'eyes': "https://www.azuki.com/filtericons/" + props.color + "/1/Eyes.png",
        'mouth': "https://www.azuki.com/filtericons/" + props.color + "/1/Mouth.png",
        'clothing': "https://www.azuki.com/filtericons/" + props.color + "/1/Clothing.png",
        'headgear': "https://www.azuki.com/filtericons/" + props.color + "/1/Headgear.png",
        'shoe': "https://www.azuki.com/filtericons/" + props.color + "/1/Shoe.png",
        'hand': "https://www.azuki.com/filtericons/" + props.color + "/1/Hand.png",
        'eyebrows': "https://www.azuki.com/filtericons/" + props.color + "/1/Eyebrows.png",
        'face': "https://www.azuki.com/filtericons/" + props.color + "/1/Face.png",
        'offhand': "https://www.azuki.com/filtericons/" + props.color + "/1/Offhand.png",

    }


    return (
        <li className="text-xs items-center py-2 px-3 flex rounded bg-white bg-opacity-10 w-full">
            <img className="w-8 pr-2" src={traitImage[props.traitType]} />
            <div className="overflow-hidden relative leading-[1.5]">
                <p className="flex items-center uppercase opacity-60 font-mono text-2xs tracking-wider mr-auto">
                    {props.traitType}:
                </p>
                <p className="ml-auto  truncate text-xs font-600 uppercase">
                    {props.trait}
                </p>
            </div>
        </li>
    )
}

export default Traits