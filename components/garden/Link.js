import React from 'react'

function Link(props) {
  return (
    <a className="items-end h-auto z-50 rounded flex bg-black bg-opacity-10 lg:hover:bg-opacity-100 lg:hover:text-white pt-2" href={props.link}>
        <img className="lg:w-24 w-20 lg:mr-3 mr-4" src={props.img} alt="" />
        <div>
          <p className="font-sans uppercase justify-self-end font-black lg:text-md">{props.title}</p>  
          <p className="font-mono justify-self-end text-xs pb-2">{props.content}</p>
        </div>
    </a>
  )
}

export default Link