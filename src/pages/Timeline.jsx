import React from 'react'
import Star1 from '../img/star1.png'
import Star2 from '../img/star2.png'
import {GoTriangleRight} from 'react-icons/go'
import {GoTriangleLeft} from 'react-icons/go'
import Star3 from '../img/star3.png'

export default function Timeline() {
  return (
    <div className='bg-[#21201D] h-[60vh] w-screen pt-12 prim-color font-sulangor timeline-bg'>
        <div className='flex justify-center'>
            <div className='h-fit flex  gap-x-12'>
                <img src={Star1} alt='star'/>
                <h1 className='text-2xl lg:text-5xl grid items-center'>Timeline</h1>
                <img src={Star2} alt='star'/>
            </div>
        </div>

        {/* Start Timeline Item */}
        <div className='process-wrapper '>
            <div className='progress-bar-container'>
                
                <ul>
                    <li className='step'>
                        <div className='step-inner'>
                            <h1>17-28 Okt</h1>
                            <h1>Open Registration</h1>
                            <div className='circle'><img src={Star3} alt="" /></div>
                        </div>
                    </li>

                    <li className='step'>
                        <div className='step-inner'>
                            <h1>17-28 Okt</h1>
                            <h1>Open Registration</h1>
                            <div className='circle'><img src={Star3} alt="" /></div>
                        </div>
                    </li>

                    <li className='step'>
                        <div className='step-inner'>
                            <h1>17-28 Okt</h1>
                            <h1>Open Registration</h1>
                            <div className='circle'><img src={Star3} alt="" /></div>
                        </div>
                    </li>

                    <li className='step'>
                        <div className='step-inner'>
                            <h1>17-28 Okt</h1>
                            <h1>Open Registration</h1>
                            <div className='circle'><img src={Star3} alt="" /></div>
                        </div>
                    </li>

                    <li className='step a
                    ctive'><div className='step-inner'>
                            <h1>17-28 Okt</h1>
                            <h1>Open Registration</h1>
                            <div className='circle'><img src={Star3} alt="" /></div>
                  
                     
                      </div></li>
                    <li className='step'>
                        <div className='step-inner'>
                            <h1>17-28 Okt</h1>
                            <h1>Open Registration</h1>
                            <div className='circle'><img src={Star3} alt="" /></div>
                        </div>
                    </li>

                    
                </ul>

                <div id='line'>
                    <GoTriangleRight size={35} className='absolute right-[98%] bottom-[-15px]'/>
                    <GoTriangleLeft size={35} className='absolute left-[98%] bottom-[-15px]'/>
                    
                </div>

            </div>
        </div>
    </div>
  )
}
