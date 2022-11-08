import React from 'react'
import Frame from '../../img/candidates/img.png'

const Candidate1 = () => {
  return (
    <div className='h-fit w-max-scren bg-[#21201D] font-prata'>

        <div className='h-fit flex flex-col lg:flex-row justify-center timeline-bg p-10'>
            <div className='relative  m-auto h-[100%] mr-2'>
                <img src={Frame}></img>
                <h1 className='absolute m-auto z-10 text-[300px] right-[-30px] top-[25%] lg:top-[32%] text-white shadowm-xl '>1</h1>
            </div>

            <div className='lg:w-[30%] mx-auto ml-2 relative flex justify-center lg:justify-start align-middle'>
                <div className='m-auto pt-[10%] lg:pt-[38%] w-[100%]'>
                    <h1 className='text-[50px] text-center lg:text-left lg:text-[100px] lg:w-[40%] leading-[0.9] text-white'>NAUFAL ABIYYU</h1>
                    <h2 className ='text-[30px] text-center lg:pl-1 lg:text-left lg:text-[55px] text-[#D4A976] leading-[0.7] py-1'>Divisi Banyak Proker</h2>
                    <h3 className ='text-[28px] text-center lg:pl-2 lg:text-left text-[55px] text-[#D4A976] leading-none'>2021</h3>
                </div>
            </div>
        </div>

        <div className='h-fit candidates-bg w-screen flex text-white justify-center candidates-bg py-28'>

            <div className='w-[90%] flex lg:flex-row flex-col bg-[#21201D]'>
                <div className='w-[50%] h-[50%] flex flex-col p-[80px]'>
                    <div>
                        <h1>Visi</h1>
                    </div>

                    <div className='text-justify'>
                        <h1>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Dengan terpilihnya saya menjadi MAKOMJI, saya akan melakukan rebranding pada website dan logo himakom. Setelah itu saya serahkan semua ke diki karena saya hanyalah boneka
                        </h1>
                    </div>
                </div>

                <div className='w-[50%] h-[50%] flex flex-col p-[80px] pb-[70px]'>
                    <div>
                        <h1>Visi</h1>
                    </div>

                    <div className=''>
                        <h1>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Dengan terpilihnya saya menjadi MAKOMJI, saya akan melakukan rebranding pada website dan logo himakom. Setelah itu saya serahkan semua ke diki karena saya hanyalah boneka
                        </h1>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Candidate1
