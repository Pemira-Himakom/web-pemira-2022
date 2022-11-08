import React from 'react'
import {Link} from 'react-router-dom'
const Unavailable = () => {
  return (
    <div className='h-screen w-screen bg-unavail relative flex flex-col text-[#D4A976] font-garamond'>
        <div className='w-screen h-[40%]'></div>
        <div className='w-screen h-[50%] flex flex-col align-middle text-center text-3xl md:text-5xl px-3'>
            <h1>Page Unavailable Yet!</h1>
            <h2 className='text-lg md:text-2xl my-2'>This Page is currently unavailable for you to access, wait for further notice</h2>
            <Link to='/' className='mt-10 text-base hover:text-[#f3d2aa] hover:scale-110 transition-all duration-200 active:text-[#f3d2aa] md:text-xl flex flex-row m-auto justify-center p-auto'>
                <div className='pt-1 mr-1 hover:'> 
                    <ion-icon name="arrow-back"></ion-icon>
                </div>
                <h1>Back To Homepage</h1>
            </Link>

        </div>


    </div>
  )
}

export default Unavailable