import React from 'react'
import Traits from '../Traits'

function Pip(props) {
    return (
        <div className={"duration-300 embla_beanz__slide h-full " + (props.currentIndex == 7 ? "opacity-100" : "opacity-0")}>
            <div className="embla_beanz__slide__inner h-full">
                <div className="grid lg:grid-cols-2 grid-cols-1 h-full">
                    <div className="flex items-center w-full h-full justify-center relative">
                        <img className="w-5/6 h-5/6 object-contain" src="https://www.azuki.com/beannames/pip.png" />
                    </div>
                    <div className="flex lg:pr-24 justify-center flex-col text-[#363636]">
                        <h1 className="lg:text-left text-center lg:px-0 px-6 whitespace-nowrap relative tracking-tight lg:pb-3 w-full lg:-ml-0.5 lg:text-[4.2vw] text-4xl leading-[.9em]  uppercase font-[900] ">
                            pip
                        </h1>
                        <div className="lg:font-mono font-sans lg:block grid grid-cols-1 lg:px-0 px-6 tracking-tight uppercasee  lg:text-sm lg:mt-2 mt-4 text-lg lg:leading-2 leading-7 lg:font-400 font-300 w-full">
                            <div className="lg:block overlay-item block">
                                <p className="bg-white bg-opacity-10 mb-4 tracking-wide rounded pr-4 pl-8 py-3 text-xs leading-5 font-sans relative">
                                    <img className="absolute top-1/2 translate-y-[-52%] w-20 -left-10" src="https://www.azuki.com/beantypes/blackeye.png" />
                                    Black eyed peas are mostly quiet and introverted. Even when they don't say much, they speak volumes.
                                </p>
                                <p>
                                    Pip is the happiest when she's by herself. She enjoys solitude yet still likes to hang out with a close-knit group of friends from time to time. Pip is a bean of few words, but when she speaks, she's full of wisdom.
                                </p>
                            </div>
                            <ul className="lg:pt-6 pt-0 overlay-item lg:grid-cols-3 pb-6 grid lg:gap-3 gap-2 lg:visible grid-cols-2 invisible">
                                <Traits traitType="type" trait="black eyed pea" color="Black"/>
                                <Traits traitType="eyes" trait="closed" color="Black"/>
                                <Traits traitType="mouth" trait="smiile" color="Black"/>
                                <Traits traitType="clothing" trait="oversized blue t-s..." color="Black"/>
                                <Traits traitType="headgear" trait="cat headphones" color="Black"/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pip