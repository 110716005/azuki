import React from 'react'
import Traits from '../Traits'

function Tao(props) {
    return (
        <div className={"duration-300 embla_beanz__slide h-full " + (props.currentIndex == 2 ? "opacity-100" : "opacity-0")}>
            <div className="embla_beanz__slide__inner h-full">
                <div className="grid lg:grid-cols-2 grid-cols-1 h-full">
                    <div className="flex items-center w-full h-full justify-center relative">
                        <img className="w-5/6 h-5/6 object-contain" src="https://www.azuki.com/beannames/tao.png" />
                    </div>
                    <div className="flex lg:pr-24 justify-center flex-col text-white">
                        <h1 className="lg:text-left text-center lg:px-0 px-6 whitespace-nowrap relative tracking-tight lg:pb-3 w-full lg:-ml-0.5 lg:text-[4.2vw] text-4xl leading-[.9em]  uppercase font-[900] ">
                            tao
                        </h1>
                        <div className="lg:font-mono font-sans lg:block grid grid-cols-1 lg:px-0 px-6 tracking-tight uppercasee  lg:text-sm lg:mt-2 mt-4 text-lg lg:leading-2 leading-7 lg:font-400 font-300 w-full">
                            <div className="lg:block overlay-item block">
                                <p className="bg-white bg-opacity-10 mb-4 tracking-wide rounded pr-4 pl-8 py-3 text-xs leading-5 font-sans relative">
                                    <img className="absolute top-1/2 translate-y-[-52%] w-20 -left-10" src="https://www.azuki.com/beantypes/lentil.png" />
                                    Lentils are tough, skilled, and aggressive fighters. These BEANZ are trained to kick ass from the day they sprout. Better to have a lentil friend than a lentil foe
                                </p>
                                <p>
                                    Tao has a short fuse, and it doesn't take much to anger her. Her brothers and sister are all fighters, meaning that family reunions can become all-out brawls! With her warrior instincts and sharp blade, you'd be wise not to cross her.                                </p>
                            </div>
                            <ul className="lg:pt-6 pt-0 overlay-item lg:grid-cols-3 pb-6 grid lg:gap-3 gap-2 lg:visible grid-cols-2 invisible">
                                <Traits traitType="type" trait="lentil" color="White"/>
                                <Traits traitType="eyes" trait="half-open" color="White"/>
                                <Traits traitType="eyebrows" trait="determined" color="White"/>
                                <Traits traitType="mouth" trait="uwu" color="White"/>
                                <Traits traitType="clothing" trait="green yukata" color="White"/>
                                <Traits traitType="headgear" trait="pointy straw hat" color="White"/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tao