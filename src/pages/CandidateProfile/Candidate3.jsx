import React, { useEffect } from "react";
import Frame from "../../img/candidates/img.png";
import { ReactComponent as Star1 } from "../../img/star1.svg";
import { ReactComponent as Star2 } from "../../img/star2.svg";
import GD_Billy from "../../grandDesign/GD_Billy.pdf";
import CV_Billy from "../../CV/CV_Billy.pdf";
import Billi from "../../img/billi.png";

import Navbar from "../../components/Navbar";

const Candidate1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const inovasi = [
    {
      id: 0,
      data: "Membentuk program kerja MAKOMTI bermain bersama. Program kerja akan berisi tentang anggota MAKOMTI bermain bersama dengan tujuan mengenal satu dengan yang lainnya.",
    },
    {
      id: 1,
      data: "Membentuk program kerja pelatihan anggota HIMAKOM mengenai public speaking dengantujuan mengasah soft skill anggota himakom agar lebih berani dan percaya diri dalam bidang public speaking.",
    },
  ];

  const misi = [
    {
      id: 5,
      no: 1,
      misi: "Mengembangkan potensi serta kemampuan mahasiswa Ilmu Komputer UGM agar terciptanya Imu Komputer yang aktif dan produktif.",
    },
    {
      id: 6,
      no: 2,
      misi: "Meningkatkan kerjasama dan koordinasi dengan seluruh mahasiswa Ilmu Komputer UGM serta iembaga-lembaga akademik maupun non-akademik.",
    },
    {
      id: 7,
      no: 3,
      misi: "Meningkatkan kebersamaan dengan seluruh mahasiswa Ilmu Komputer UGM.",
    },
    {
      id: 8,
      no: 4,
      misi: "Mengoptimalkan program kerja HIMAKOM melalui observasi dan diskusi secara kemusyawaratan.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className='h-fit w-max-screen bg-[#21201D] font-prata candidates'>
        {/* Candidates Header */}
        <div className='h-fit flex flex-col lg:flex-row justify-center timeline-bg p-10 pb-28'>
          <div className='relative h-[100%] mr-2 mx-auto justify-center flex'>
            <img src={Billi} className='absolute scale-90 bottom-[5.5%]'></img>
            <img src={Frame}></img>
            <h1 className='absolute z-10 text-[150px] lg:text-[300px] right-[0px] lg:right-[-30px] top-[54%] lg:top-[32%] text-white shadowm-xl '>
              3
            </h1>
          </div>

          <div className='lg:w-[50%] mx-auto md:ml-6 relative flex justify-center lg:justify-start align-middle'>
            <div className='m-auto pt-[10%] lg:pt-[25%] w-[100%]'>
              <h1
                className='text-[50px] text-center lg:text-left lg:text-[100px]
                                        lg:w-[90%] leading-[0.9] text-white uppercase'
              >
                billy fahd qodama
              </h1>
              <h2 className='text-[30px] text-center lg:pl-1 lg:text-left lg:text-[55px] text-[#D4A976] leading-none lg:leading-[0.9] py-1'>
                KPM
              </h2>
              <h3 className='text-[28px] text-center lg:pl-2 lg:text-left lg:text-[55px] text-[#D4A976] leading-none'>
                2021
              </h3>
            </div>
          </div>
        </div>

        {/* cv */}
        <div className='hidden h-fit w-screen md:flex flex-col justify-center pb-20 relative'>
          <div className='max-w-screen flex justify-evenly lg:px-80 pt-16 pb-10'>
            <div className='grid items-center '>
              <Star1 />
            </div>
            <h1 className='text-2xl lg:text-5xl prim-color grid items-center text-center '>
              Curriculum Vitae
            </h1>
            <div className='grid items-center '>
              <Star2 />
            </div>
          </div>

          <div className='h-fit m-auto flex justify-center'>
            <iframe
              className='w-[80vw] h-[75vh]'
              src={CV_Billy}
              frameBorder='0'
            ></iframe>
          </div>
        </div>

        {/* Grand Design */}
        <div className='hidden h-fit w-screen md:flex flex-col justify-center pb-20'>
          <div className='flex justify-evenly lg:px-80 pt-16 pb-10 '>
            <div className='grid items-center'>
              <Star1 />
            </div>
            <h1 className='text-2xl lg:text-5xl prim-color grid items-center text-center'>
              Grand Design
            </h1>
            <div className='grid items-center'>
              <Star2 />
            </div>
          </div>

          <div className='h-fit m-auto flex justify-center'>
            <iframe
              className='w-[80vw] h-[75vh]'
              src={GD_Billy}
              frameBorder='0'
            ></iframe>
          </div>
        </div>

        {/* Visi dan Misi */}
        <div className='h-fit candidates-bg w-screen flex text-white justify-center candidates-bg py-28'>
          <div className='w-[90%] h-fit flex lg:flex-row flex-col'>
            <div className=' lg:w-[50%] flex flex-col py-[40px] px-[40px] lg:p-[80px] bg-[#21201D]  '>
              <div className='flex justify-center lg:pb-5 text-[#D4A976]'>
                <h1 className='text-[60px]'>Visi</h1>
              </div>

              <div className='text-center md:text-[19px] '>
                <h1>
                  Mewujudkan HIMAKOM sebagai Sarana mahasiswa Ilmu Komputer UGM
                  untuk mengembangkan keterampilan, bakat, inovasi, dan
                  kemampuan dalam berdinamika di Ilmu Komputer UGM.
                </h1>
              </div>
            </div>

            <div className='lg:w-[50%] flex flex-col py-[45px] px-[40px] lg:p-[80px] bg-[#21201db2] '>
              <div className='flex justify-center lg:pb-5 text-[#D4A976]'>
                <h1 className='text-[60px]'>Misi</h1>
              </div>

              <div className='text-left md:text-[19px]'>
                <ul className='space-y-3.5 w-[90%]'>
                  {misi.map((items, i) => (
                    <li key={i} className='flex justify start w-full '>
                      <h1 className='circle-no mr-4 grid place-items-center text-[#21201D]'>
                        {items.no}
                      </h1>
                      <h1 className='grid place-items-center h-[10vh] overflow-auto text-white leading-[1.2]'>
                        {items.misi}
                      </h1>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='md:hidden w-max-full h-fit flex flex-col justify-center mt-12 bg-[#21201da4] py-5 text-[#21201D]'>
              <h1 className=' text-center text-[20px] mb-3 text-white'>
                Unduh Disini
              </h1>
              <div className='h-fit m-auto flex flex-col justify-center text-[25px] gap-7'>
                <a
                  href='CV_Billy.pdf'
                  download
                  className='m-auto active:scale-125 transition-all duration-200 ease-in'
                >
                  <span className='py-2 px-6 rounded-md bg-[#D4A976]'>CV</span>
                </a>
                <a
                  href='GD_Billy.pdf'
                  download
                  className='m-auto active:scale-125 transition-all duration-200 ease-in'
                >
                  <span className='py-2 px-6  m-auto rounded-md bg-[#D4A976]'>
                    Grand Design
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='h-fit p-12 w-screen flex flex-col relative bg-[#21201D]'>
          <div className='h-[15%]'></div>
          <div className='h-[85%] max-h-fit flex flex-col '>
            <div className='h-fit flex gap-x-10  justify-center py-8 md:py-16'>
              <Star1 />
              <h1 className='text-2xl lg:text-5xl grid items-center text-[#D4A976]'>
                INOVASI
              </h1>
              <Star2 />
            </div>
            <div className='space-y-5 flex flex-col justify-center  mx-auto'>
              {inovasi.map((items, i) => (
                <div
                  key={i}
                  className='inovasi grid items-center px-7 md:px-14 text-center text-[13px] lg:text-[18px] '
                >
                  <h1>{items.data}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Candidate1;
