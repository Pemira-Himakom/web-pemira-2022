import React from 'react'
import crown from '../../img/crown.png'
import star5 from '../../img/Star5.png'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { FaInstagram } from 'react-icons/fa'
import { ReactComponent as Himakom} from '../../img/himakom.svg'
import { ReactComponent as Star4} from '../../img/star4.svg'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='h-fit w-screen bg-[#21201D] flex flex-col font-prata timeline-bg-sm-r'>
        {/* Pre Footer */}
        <div className='h-screen w-screen flex flex-row md:border-b-[4px] border-[#D4A976]'>

            <div className='w-[10%] lg:w-[22.5%]  flex flex-col'>
              <div className='content h-[60%]'></div>
              <div data-aos='fade-in' className='h-[40%] flex justify-center'>
                <img src={star5} alt=""  className='hidden md:block w-[35%] m-auto'/>
              </div>
            </div>

            <div className='w-[80%] lg:w-[55%] relative flex flex-col justify-center'>

              <div className='hidden md:block content w-full h-[10%]'/>

              <div className='h-[60%] md:h-full w-full overflow-hidden pt-4 md:pt-8 px-3 md:px-7 rounded-t-[200px] md:rounded-t-[500px] border-[3px] md:border-[4px] border-b-[3px] md:border-b-0 border-[#D4A976] relative'>

                <div className='absolute top-[70%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[100%] flex flex-col justify-center'>
                  <h1 data-aos='fade-in' className='text-[35px] lg:text-[90px] text-white text-center leading-none pb-5'>Pledge Your Allegiance!</h1>

                  <div className='w-[72%] m-auto text-[#D4A976]'>
                    <h2 data-aos='fade-in' className='text-[15px] lg:text-[38px] text-center'>Tentukan Pilihanmu pada</h2>
                    <h2 data-aos='fade-in' className='text-[15px] lg:text-[38px] text-center'>9-16 November</h2>
                  </div>

                  <div className='grid place-items-center mt-4'>
                    <Link to='/vote'>
                      <button className='votebtn'>
                      <h1>Vote now!</h1>
                      </button>
                    </Link>
                  </div>                  

                </div>
                <img src={crown} alt="crown" className='object-cover h-[97%] md:h-full w-full rounded-t-[200px] md:rounded-t-[500px] border-[3px] md:border-[4px] border-b-[3px] md:border-b-0 border-[#D4A976] crown' />
              </div>
                <div className='inline-flex block md:hidden'>
                  <Star4 className='w-[35%] m-auto scale-75'/>
                  <Star4 className='w-[35%] m-auto scale-75 mt-12'/>
                  <Star4 className='w-[35%] m-auto scale-75'/>
                </div>

            </div>

            <div className='w-[10%] lg:w-[22.5%] flex flex-col'>
              <div className='content h-[60%]'></div>
              <div className='h-[40%] flex justify-center'>
                <img data-aos='fade-in' src={star5} alt=""  className='hidden md:block w-[35%] m-auto'/>
              </div>
            </div>

        </div>

        {/* Footer */}
        <div className='h-[30%] max-w-full items-center md:items-end
                        flex justify-between flex-col md:flex-row
                        relative font-poppins text-[#D9D9D9] 
                        mx-8 my-4'>

           <div className='h-full max-w-[80%] lg:max-w-[30%] text-center md:text-left
                           flex flex-col items-center md:items-start md:justify-center 
                           relative'>
              <div className='lg:mb-0 mb-2'>
                <Himakom className='scale-75 lg:scale-100'/>
              </div>
              <h1 className='font-bold text-[18px] lg:text-[29px] leading-none lg:leading-normal'>HIMAKOM UGM</h1>
              <div className='text-[10px] lg:text-[15px] leading-tight'>
                <p>Gedung Fakultas MIPA UGM Sekip Utara,</p>
                <p>Bulaksumur, Sinduadi, Mlati, Sleman, DI Yogyakarta</p>
              </div>

              <div className='muttax-w-[78%] mt-4 py-6 md:py-0 pt-6 text-[10px] lg:text-[15px]'>
                <h1>© HIMAKOM UGM - All rights reserved.</h1>
                <h1>Built with ♡</h1>
              </div>
           </div>


            <div className='max-h-full max-w-[30%] flex flex-col justify-center relative self-center'>

              <div className='flex flex-row justify-between items-center lg:px-4 md:space-x-4 pt-0 lg:pt-5'>
                {/* <a href=""><img src={twitter} alt="" className='scale-75 lg:scale-100 h-[45px] min-w-[55px]' /></a>
                <a href=""><img src={insta} alt="" className='scale-75 pl-1 lg:pl-0 lg:scale-100 h-[45px] min-w-[45px]'/></a> */}
                <a href='https://instagram.com/pemirahimakom' target='_blank'>
                  <FaInstagram className='grid items-center hover:text-[#D4A976] duration-300 scale-75 md:scale-100' size={50}/>
                </a>
                <a href='mailto:pemirahimakom@gmail.com'>
                  <HiOutlineMailOpen className='grid items-center hover:text-[#D4A976] duration-300 scale-75 md:scale-100' size={50}/>
                </a>
              </div>

            </div>

        </div>

    </div>
  )
}

export default Footer