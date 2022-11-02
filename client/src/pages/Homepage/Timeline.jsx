import React from 'react'

// import img and icons
import {ReactComponent as Star1} from '../../img/star1.svg'
import {ReactComponent as Star2} from '../../img/star2.svg'

//import components 
import Timeline_lg from '../../components/timeline_lg'
import Timeline_sm from '../../components/timeline_sm'


export default function Timeline() {
  return (
    <>
        <div className='bg-[#21201D] min-h-[90vh] w-screen pt-24 prim-color font-prata timeline-bg'>
            <div className='flex w-screen justify-center mb-10'>
                <div className='h-fit flex gap-x-10'>
                    <Star1/>
                    <h1 className='text-2xl lg:text-5xl grid items-center'>Timeline</h1>
                    <Star2/>
                </div>
            </div>
            {/* Start Timeline Item */}
            <div className='hidden md:block pt-2 w-screen'>
                <Timeline_lg/>
            </div>

            <div className='md:hidden flex justify-center'>
                <Timeline_sm/>
            </div>

            <div className='flex justify-center'>
            <div className='eclipse1'/>

            </div>
        </div>
    </>
  )
}
