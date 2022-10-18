import React from 'react'
import homepic from "../img/homepagebg.png"

export default function Home() {
  return (
    <div className='h-auto'>
      <div className='h-full w-full'>
        <img className='object-fill' src={homepic} alt="renaissance"></img>
      </div>

      <div className='text-black z-10 absolute top-0 left-0'>
        <h1>hello</h1>
      </div>
    </div>
  )
}
