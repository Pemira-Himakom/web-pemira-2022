import React from 'react'
import crown from '../../img/crown.png'

const Footer = () => {
  return (
    <div className='h-fit w-screen bg-[#21201D] flex flex-col'>
        {/* Pre Footer */}
        <div className='h-screen w-screen flex flex-row'>
            <div className='w-[22.5%] bg-red-100'>

            </div>

            <div className='w-[55%] bg-red-300'>
                <div className='flex border rounded-t-full'>
                    <img className="m-auto object-cover" src={crown} alt="" />
                </div>
            </div>

            <div className='w-[22.5%] bg-red-200'>

            </div>
        </div>

        {/* Footer */}
        <div className=''>

        </div>

    </div>
  )
}

export default Footer