import React from 'react'

function Background() {
    return (
        <main>
            <video className="w-full transform h-screen object-cover z-10 hidden lg:block" loop
                autoPlay
                muted>
                <source src="https://azk.imgix.net/beanzwuzhere.mp4" type="video/mp4" />
            </video>
            <img class="w-full bg-olive lg:hidden bottom-0 transform h-screen object-cover  object-center overlay-item -z-10" src="https://www.azuki.com/mobilemeep.jpg"/>
            <div className="fixed h-24 bottom-0 left-0 w-full">
                <div className="grid grid-cols-1 h-24 w-full">
                    <div className="fixed h-20 lg:bottom-8 lg:right-8 bottom-4 lg:px-0 px-4 lg:w-full lg:max-w-2xl w-full" style={{opacity:'1', transform:'translate3d(0%, 0%, 0px)'}}>
                        <div className="bg-azukired w-full text-white rounded relative float-right items-center lg:pr-30 pr-3 h-20 flex drop-shadow-me">
                            <img className="w-24 rounded-md lg:block absolute bottom-4 left-4 drop-shadow-me" src="https://www.azuki.com/wechat_qr.png" alt="" />
                            <div className="lg:block lg:mr-4 mr-auto lg:ml-[8rem] ml-28 hidden">
                                <p className="font-sans text-3xs tracking-widest font-400 uppercase opacity-50">Follow us on WeChat</p>
                                <p className="font-sans uppercase tabular-nums font-[700] lg:text-xl text-sm tracking-wide">
                                    Azuki red beans
                                    <span className="opacity-20">
                                        &nbsp;//
                                    </span>
                                </p>
                            </div>
                            <div className="ml-auto">
                                <a className="lg:px-6 px-4 flex items-center justify-center text-2xs lg:text-base lg:h-12 h-12 duration-300 cursor-pointer bg-white uppercase text-gray-800 hover:text-black font-black transform border-none border group drop-shadow-me tracking-wider" href="https://mp.weixin.qq.com/s/bxFckcJvF51VmWhitVhCHQ">
                                    <span className="lg:block">
                                        Follow WeChat
                                    </span>
                                    <span className="pl-4 duration-300 transform translate-x-0 lg:group-hover:translate-x-2">
                                        <svg class="fill-current lg:h-4 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path></svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Background