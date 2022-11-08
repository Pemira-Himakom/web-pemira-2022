import React from 'react'

//import img and icons
import {GoTriangleRight} from 'react-icons/go'
import {GoTriangleLeft} from 'react-icons/go'
import {ReactComponent as Star} from '../img/star.svg'

const timeline_lg = () => {



    function isNow(startDate, endDate) {
         const Start = new Date(startDate).getTime();
         const End = new Date(endDate).getTime();
        return Date.now() < End && Date.now() > Start;
    }
  return (
    <div className='process-wrapper'>
        <div className='progress-bar-container'>
            
            <ul>
                <li className='step'>
                    <div className='step-inner'>
                        <div className={isNow('2022-10-16T00:00:00', '2022-10-28T29:59:59') ? 'circle today' : 'circle'}><Star/></div>
                        <div data-aos='fade-in'>
                            <h1 className='date'>17 - 28 Okt</h1>
                            <h1>Open Registration</h1>                            
                        </div>
                    </div>
                </li>

                <li className='step'>
                    <div className='step-inner'>
                        <div className={isNow('2022-10-29T00:00:00', '2022-10-30T23:59:59') ? 'circle today' : 'circle'}><Star/></div>
                        <div data-aos='fade-in'>
                            <h1>Seleksi Berkas</h1>
                            <h1 className='date'>29 - 30 Okt</h1>
                        </div>
                    </div>
                </li>

                <li className='step'>
                    <div className='step-inner'>

                        <div className={isNow('2022-10-31T00:00:00', '2022-11-06T23:59:59') ? 'circle today' : 'circle'}><Star/></div>
                        <div data-aos='fade-in'>
                            <h1 className='date'>31 Okt</h1>
                            <h1>Fit & Proper</h1>
                        </div>
                    </div>
                </li>

                <li className='step'>
                    <div className='step-inner'>
                        <div className={isNow('2022-11-07T00:00:00', '2022-11-08T23:59:59') ? 'circle today' : 'circle'}><Star/></div>
                        <div data-aos='fade-in'>
                            <h1>Debat & Grand Design</h1>
                            <h1 className='date'>7 Nov</h1>
                        </div>
                    </div>
                </li>

                <li className='step'>
                <div className='step-inner'>
                    <div className={isNow('2022-11-09T00:00:00', '2022-11-16T23:59:59') ? 'circle today' : 'circle'}><Star/></div>
                    <div data-aos='fade-in' className='active'>
                        <h1 className='date'>9 - 16 Nov</h1>
                        <h1>Voting</h1>
                    </div>
                </div></li>
                <li className='step'>
                    <div className='step-inner'>
                        <div className={isNow('2022-11-17T00:00:00', '2022-11-19T00:00:00') ? 'circle today' : 'circle'}><Star/></div>
                        <div data-aos='fade-in'>
                            <h1>Pengumuman</h1>
                            <h1 className='date'>18 Nov</h1>                            
                        </div>
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