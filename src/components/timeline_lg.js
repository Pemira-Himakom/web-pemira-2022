import React from 'react'

//import img and icons
import {GoTriangleRight} from 'react-icons/go'
import {GoTriangleLeft} from 'react-icons/go'
import Star3 from '../img/star3.png'

const timeline_lg = () => {
  return (
    <div className='process-wrapper '>
        <div className='progress-bar-container'>
            
            <ul>
                <li className='step'>
                    <div className='step-inner'>
                        <div className='circle'><img src={Star3} alt="" /></div>
                        <h1 className='date'>17-28 Okt</h1>
                        <h1>Open Registration</h1>
                    </div>
                </li>

                <li className='step'>
                    <div className='step-inner'>
                        <h1>Seleksi Berkas</h1>
                        <h1 className='date'>29 - 30 Okt</h1>
                        <div className='circle'><img src={Star3} alt="" /></div>
                    </div>
                </li>

                <li className='step'>
                    <div className='step-inner'>
                        <div className='circle'><img src={Star3} alt="" /></div>
                        <h1 className='date'>31 Okt</h1>
                        <h1>Fit & Proper</h1>
                    </div>
                </li>

                <li className='step'>
                    <div className='step-inner'>
                        <h1>Debat & Grand Design</h1>
                        <h1 className='date'>7 Nov</h1>
                        <div className='circle'><img src={Star3} alt="" /></div>
                    </div>
                </li>

                <li className='step a
                ctive'><div className='step-inner active'>
                        <div className='circle'><img src={Star3} alt="" /></div>
                        <h1 className='date'>9 - 16 Nov</h1>
                        <h1>Voting</h1>
            
                
                </div></li>
                <li className='step'>
                    <div className='step-inner'>
                        <h1>Pengunguman</h1>
                        <h1 className='date'>18 Nov</h1>
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
  )
}

export default timeline_lg