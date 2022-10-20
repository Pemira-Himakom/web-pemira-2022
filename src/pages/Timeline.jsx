import React from 'react'
import Star1 from '../img/star1.png'
import Star2 from '../img/star2.png'
import Flower from '../img/flower.png'
import Flower2 from '../img/flower2.png'


export default function Timeline() {
  return (
    <div className='bg-[#21201D] h-[60vh] pt-12 prim-color font-sulangor'>
        <div className='flex justify-between'>
            <div className='w-[13rem] flex items-start'>
                <img className='' src={Flower} alt='flower'/>
            </div>
            <div className='h-fit flex justify-evenly gap-x-12'>
                <img src={Star1} alt='star'/>
                <h1 className='text-2xl lg:text-5xl grid items-center'>Timeline</h1>
                <img src={Star2} alt='star'/>
            </div>
            <div className='w-[13rem] flex items-start'>
                <img className='' src={Flower2} alt='flower'/>
            </div>

        </div>
    </div>
  )
}
