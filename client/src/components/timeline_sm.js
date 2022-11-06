import React from 'react'
import {ReactComponent as Star} from '../img/star.svg'

const timeline_sm = () => {

    function isNow(startDate, endDate) {
        const Start = new Date(startDate).getTime();
        const End = new Date(endDate).getTime();
       return Date.now() < End && Date.now() > Start;
   }

  return (
    <div id='timeline_container_sm'>
        <ul>
            <li>
                <div className={isNow('2022-10-16T00:00:00', '2022-10-28T29:59:59') ? 'circle today' : 'circle'}><Star/></div>
                <div data-aos='fade-in' className='content'>
                    <h1 className='timeline_title_sm'>Open Registration</h1>
                    <h1 className='timeline_date_sm'>17-28 Okt</h1>  
                </div>
            </li>

            <li>
                <div className={isNow('2022-10-29T00:00:00', '2022-10-30T23:59:59') ? 'circle today' : 'circle'}><Star/></div>
                <div data-aos='fade-in' className='content'>
                    <h1 className='timeline_title_sm'>Seleksi Berkas</h1>
                    <h1 className='timeline_date_sm'>29 - 30 Okt</h1>  
                </div>
            </li>

            <li>
                <div className={isNow('2022-10-31T00:00:00', '2022-11-06T23:59:59') ? 'circle today' : 'circle'}><Star/></div>
                <div data-aos='fade-in' className='content'>
                    <h1 className='timeline_title_sm'>Fit & Proper</h1>
                    <h1 className='timeline_date_sm'>31 Okt</h1>  
                </div>
            </li>

            <li>
                <div className={isNow('2022-11-07T00:00:00', '2022-11-08T23:59:59') ? 'circle today' : 'circle'}><Star/></div>
                <div data-aos='fade-in' className='content'>
                    <h1 className='timeline_title_sm'>Debat & Grand Design</h1>
                    <h1 className='timeline_date_sm'>7 Nov</h1>  
                </div>
            </li>

            <li className=''>
                <div className={isNow('2022-11-09T00:00:00', '2022-11-16T23:59:59') ? 'circle today' : 'circle'}><Star/></div>
                <div data-aos='fade-in' className='active py-6 rounded-lg'>
                    <div className='content'>
                        <h1 className='timeline_title_sm '>Voting</h1>
                        <h1 className='timeline_date_sm'>9 - 16 Nov</h1>  
                    </div>
                </div>
            </li>

            
            <li>
                <div className={isNow('2022-11-17T00:00:00', '2022-11-19T00:00:00') ? 'circle today' : 'circle'}><Star/></div>
                <div data-aos='fade-in' className='content'>
                    <h1 className='timeline_title_sm'>Pengunguman</h1>
                    <h1 className='timeline_date_sm'>18 Nov</h1>  
                </div>
            </li>
        </ul>


    </div>
  )
}

export default timeline_sm