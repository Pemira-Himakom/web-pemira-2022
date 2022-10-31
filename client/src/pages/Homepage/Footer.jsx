import React from 'react'
import crown from '../../img/crown.png'
import star5 from '../../img/Star5.png'

const Footer = () => {
  return (
    <div className='h-fit w-screen bg-[#21201D] flex flex-col font-prata'>
        {/* Pre Footer */}
        <div className='h-screen w-screen flex flex-row border-b-[4px] border-[#D4A976]'>

            <div className='w-[10%] lg:w-[22.5%]  flex flex-col'>
              <div className='content  h-[60%]'></div>
              <div className=' h-[40%] flex justify-center'>
                <img src={star5} alt=""  className='w-[30%] m-auto'/>
              </div>
            </div>

            <div className='w-[80%] lg:w-[55%]  relative flex flex-col justify-center'>

              <div className='content w-full h-[10%] '></div>

              <div className='h-[90%] w-full overflow-hidden pt-8 px-7 rounded-t-[500px] border-[4px] border-b-0 border-[#D4A976] relative'>

                <div className='absolute top-[70%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[100%] flex flex-col justify-center'>
                  <h1 className='text-[35px] lg:text-[90px] text-white text-center leading-none pb-5'>Pledge Your Allegiance</h1>

                  <div className='w-[72%] m-auto text-[#D4A976]'>
                    <h2 className='text-[15px] lg:text-[38px] text-center'>Tentukan Pilihanmu pada</h2>
                    <h2 className='text-[15px] lg:text-[38px] text-center'>9-16 November</h2>
                  </div>

                </div>

                <img src={crown} alt="" className='object-cover h-full lg:h-auto w-full rounded-t-[500px] border-[4px] border-b-0 border-[#D4A976] crown' />

              </div>

            </div>

            <div className='w-[10%] lg:w-[22.5%]   flex flex-col'>
              <div className='content h-[60%]'></div>
              <div className=' h-[40%] flex justify-center'>
                <img src={star5} alt=""  className='w-[40%] m-auto'/>
              </div>
            </div>

        </div>

        {/* Footer */}
        <div className='h-[30%]'>

        </div>

    </div>
  )
}

export default Footer