import React from 'react'
import crown from '../../img/crown.png'
import star5 from '../../img/Star5.png'
import hima from '../../img/logo_hima.png'
import insta from '../../img/insta.png'
import twitter from '../../img/twitter.png'

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
        <div className='h-[30%] max-w-full flex justify-between relative font-poppins text-[#D9D9D9] mx-6 my-4'>

           <div className='h-full max-w-[50%] 50%lg:max-w-[30%] flex flex-col justify-center relative'>
              <div className='lg:mb-0 mb-2'>
                <img src={hima} alt="" />
              </div>
              <h1 className='font-bold text-[18px] lg:text-[29px] leading-none lg:leading-normal'>HIMAKOM UGM</h1>
              <div className='text-[10px] lg:text-[15px] leading-tight'>
                <p>Gedung Fakultas MIPA UGM Sekip Utara,</p>
                <p>Bulaksumur, Sinduadi, Mlati, Sleman, DI Yogyakarta</p>
              </div>

              <div className='max-w-[78%] pt-6 text-[10px] lg:text-[15px] '>
                <p>© HIMAKOM UGM - All rights reserved. Built with ♡</p>
              </div>
           </div>

          <div className='h-full max-w-[30%] flex flex-col justify-center relative'>

              <div className='lg:mr-12 mt-3 lg:mt-28 flex flex-col lg:flex-row gap-3 lg:gap-8 w-fit '>
                <a href=""><img src={twitter} alt="" className='scale-75 lg:scale-100 h-[45px] min-w-[55px]' /></a>
                <a href=""><img src={insta} alt="" className='scale-75 pl-1 lg:pl-0 lg:scale-100 h-[45px] min-w-[45px]'/></a>
              </div>

          </div>

        </div>

    </div>
  )
}

export default Footer