import React from 'react'
import bar from '../img/bar.png'

export default function Home() {
  return (
    <div>
      {/* title */}
      <header className="flex flex-row items-end px-64 h-screen shadow-inner 
                         bg-fixed bg-center bg-cover bg-img-lg bg-img-sm">
        <div className="title-sm title-lg prim-color inline-flex gap-24">
          <img className='' src={bar} alt='bar'/>
          <h1 className='tracking-wide flex items-end font-sulangor pb-48'>Pemilihan Raya Himakom 2022</h1>
        </div>
      </header>
    </div>
  )
}
