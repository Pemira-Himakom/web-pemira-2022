import React from 'react'
import Hima from '../../img/hima.png'
// import {ReactComponent as Hima} from '../../img/hima.svg'
import {ReactComponent as Star1} from '../../img/star1.svg'
import {ReactComponent as Star2} from '../../img/star2.svg'
// import Star1 from '../../img/star1.png'
// import Star2 from '../../img/star2.png'

const About = () => {
  return (
    <>
      <div id='about' className='hidden md:block bg-[#D4A976] p-7 w-screen'>
        <div className="bg-[#21201D] flex content justify-center rounded-tl-[60px] rounded-br-[60px]">
          <div className='logo-sm logo-lg  w-[20%] h-[60vh] m-auto flex items-center justify-center'>
            <div data-aos='fade-in'>
              <img className='scale-75' src={Hima} alt="himakom" />
            </div>
            {/* <Hima/> */}
          </div>


          <div className='w-[80%] max-w-[50rem] h-fit lg:h-[60vh] m-auto text-justify text-xl pb-5 lg:p-5'>

            <div data-aos='fade-in' className='flex justify-evenly py-8 px-24'>
              <div className='grid items-center'>
                <Star1 className='scale-[60%] lg:scale-100'/>
              </div>
              <h1 className='text-center font-prata text-lg md:text-xl lg:text-5xl prim-color grid items-center'>About Pemira</h1>
              <div className='grid items-center'>
                <Star2 className='scale-[60%] lg:scale-100'/>
              </div>
            </div>

            <p data-aos='fade-in' className='font-inter font-extralight text-xs lg:text-lg text-[#E6E6E6]'>Pemilihan Raya Himakom atau PEMIRA HIMAKOM adalah program kerja yang dilaksanakan dalam rangka pemilihan ketua Himpunan Mahasiswa Ilmu Komputer (Himakom) Fakultas MIPA UGM. Program ini dilaksanakan setiap tahunnya pada semester ganjil tahun ajaran baru sebagai akhir dari masa jabatan kabinet yang sedang menjabat sebelumnya. Tujuannya adalah untuk menyediakan fasilitas untuk sosialisasi visi dan misi dari calon-calon ketua Himpunan Mahasiswa Ilmu Komputer masa jabatan 2022/2023 dan sarana untuk pemilihan ketua Himpunan Mahasiswa Ilmu Komputer masa jabatan 2022/2023.
            </p>
          </div>
        </div>
      </div>

      <div className='block md:hidden bg-[#21201D] timeline-bg-sm-b w-screen h-fit'>
        <div className='p-7'>
          <h1 data-aos='fade-in' className='text-center text-[#D4A976] font-prata text-xl p-7'>About Pemira</h1>
          <div className='grid place-items-center pb-10'>
            {/* <Hima/> */}
            <img data-aos='fade-in' className='w-[45%]' src={Hima} alt="himakom" />

          </div>
          <p data-aos='fade-in' className='font-inter font-extralight text-justify text-xs lg:text-lg text-[#E6E6E6] p-3'>Pemilihan Raya Himakom atau PEMIRA HIMAKOM adalah program kerja yang dilaksanakan dalam rangka pemilihan ketua Himpunan Mahasiswa Ilmu Komputer (Himakom) Fakultas MIPA UGM. Program ini dilaksanakan setiap tahunnya pada semester ganjil tahun ajaran baru sebagai akhir dari masa jabatan kabinet yang sedang menjabat sebelumnya. Tujuannya adalah untuk menyediakan fasilitas untuk sosialisasi visi dan misi dari calon-calon ketua Himpunan Mahasiswa Ilmu Komputer masa jabatan 2022/2023 dan sarana untuk pemilihan ketua Himpunan Mahasiswa Ilmu Komputer masa jabatan 2022/2023.
          </p>
        </div>
      </div>
    </>
  )
}

export default About