import React, { useEffect} from 'react'
import Frame from '../../img/candidates/img.png'
import {ReactComponent as Star1} from '../../img/star1.svg'
import {ReactComponent as Star2} from '../../img/star2.svg'
import GD_Konang from '../../grandDesign/GD_Konang.pdf'
import CV_Konang from '../../CV/CV_Konang.pdf'
import Konang from '../../img/konang.png'
import Nav from '../../components/Navbar'

const Candidate1 = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

const inovasi = [
    {id: 0, data: "Rekonstruksi sistematika kinerja bagi pengurus Himakom dan OmahTI. Rekonstruksi tersebut meliputi diadakannya evaluasi per divisi setiap bulannya yang akan direkap lebih lanjut oleh PH untuk dicari dan dijalankan solusinya serta penjabaran dan penjelasan ulang tugas masing-masing divisi yang masih memiliki keambiguan sehingga antar divisi lebih paham divisi mana yang memegang tugas apa saja dan memudahkan calon anggota baru untuk memilih divisi sesuai minat utamanya dalam berorganisasi"},
    {id: 1, data: "Pembuatan perantara untuk menjembatani komunikasi antar divisi Himakom dan OmahTI sehingga lebih mudah dan terstruktur. Struktur perantara tersebut dapat dibuat seperti menambahkan jabatan humas atau sebagainya yang akan bertugas untuk menghubungkan masing-masing divisi. Lalu, untuk divisi-divisi spesifik yang cenderung lebih sering berkomunikasi dengan divisi lain dapat memanfaatkan web Himakom yang mana web Himakom itu sendiri akan lebih dikembangkan kedepannya"},
    {id: 2, data: "Perombakan besar-besaran timeline Himakom. Perombakan ini akan difokuskan terutama pada pemindahan waktu open recruitment ke semester genap dan membuat program kerja lain diadakan relatif dengan open recruitment tersebut. Pemunduran open recruitment diadakan agar beberapa program kerja seperti Makrab dan Booting dapat dilaksanakan di semester gasal dengan baik. Pemunduran open recruitment dan pengubahan jadwal program kerja lainnya juga diharapkan dapat membantu antar calon anggota Himakom dan OmahTI untuk sudah mengenal satu sama lain sehingga dapat sesegera mungkin berdinamika bersama dengan baik."},
];

const misi = [
    {id: 5, no: 1, misi: 'Menyelenggarakan berbagai acara internal maupun eksternal, dengan mengedepankan nilai kekeluargaan, kepekaan sosial, kreativitas, dan profesionalisme.'},
    {id: 6, no: 2, misi: 'Menyediakan lingkungan dinamis yang dapat menyesuaikan dan mendukung segala aktivitas mahasiswa IImu Komputer.'},
    {id: 7, no: 3, misi: 'Memperluas jaringan Himakom UGM bersama pihak luar dengan tujuan mendukung segala kegiatan yang diselenggarakan Himakom UGM.'},
    {id: 8, no: 4, misi: 'Menciptakan berbagai macam inovasi mengenai keorganisasian secara umum sehingga Himakom UGM memiliki keunggulan dan mengurangi kekurangan dibanding organisasi lainnya.'},
];

  return (
    <>
        <Nav/>
        <div className='h-fit w-max-screen bg-[#21201D] font-prata candidates'>
        {/* Candidates Header */}
            <div className='h-fit flex flex-col lg:flex-row timeline-bg p-10 pb-28'>

                <div className='relative h-[100%] mr-2 mx-auto justify-center flex'>
                    <img src={Konang} className='absolute scale-110 bottom-[13%] xl:bottom-[12.5%]'></img>
                    <img src={Frame}></img>
                    <h1 className='absolute z-10 text-[150px] lg:text-[300px] right-[0px] lg:right-[-30px] top-[54%] lg:top-[32%] text-white shadowm-xl '>2</h1>
                </div>

                <div className='lg:w-[50%] mx-auto md:ml-6 relative flex justify-center lg:justify-start align-middle'>
                    <div className='m-auto pt-[10%] lg:pt-[25%] w-[100%]'>
                        <h1 className='text-[50px] text-center lg:text-left lg:text-[100px]
                                    lg:w-[90%] leading-[0.9] text-white uppercase'>konang tyagazain n</h1>
                        <h2 className ='text-[30px] text-center lg:pl-1 lg:text-left lg:text-[55px] text-[#D4A976] leading-none lg:leading-[0.9] py-1'>MIKAT</h2>
                        <h3 className ='text-[28px] text-center lg:pl-2 lg:text-left lg:text-[55px] text-[#D4A976] leading-none'>2021</h3>
                    </div>
                </div>
            </div>

        {/* cv */}
            <div className='hidden h-fit w-screen md:flex flex-col justify-center pb-20 relative'>

                <div className='max-w-screen flex justify-evenly lg:px-80 pt-16 pb-10'>
                    <div className='grid items-center '><Star1/></div>
                        <h1 className='text-2xl lg:text-5xl prim-color grid items-center text-center '>Curriculum Vitae</h1>
                    <div className='grid items-center '><Star2/></div>
                </div>

                <div className='h-fit m-auto flex justify-center'>
                    <iframe className='w-[80vw] h-[75vh]' src={CV_Konang} frameBorder="0"></iframe>
                </div>


            </div>

        {/* Grand Design */}
            <div className='hidden h-fit w-screen md:flex flex-col justify-center pb-20'>

                <div className='flex justify-evenly lg:px-80 pt-16 pb-10 '>
                    <div className='grid items-center'><Star1/></div>
                        <h1 className='text-2xl lg:text-5xl prim-color grid items-center text-center'>Grand Design</h1>
                    <div className='grid items-center'><Star2/></div>
                </div>

                <div className='h-fit m-auto flex justify-center'>
                    <iframe className='w-[80vw] h-[75vh]' src={GD_Konang} frameBorder="0"></iframe>
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
                            Menciptakan dan merealisasikan lembaga kekeluargaan yang berstruktur. jeBas.rapi, memiliki dampak positif kepada masyarakat, serta memiliki peran penting dalamkehidupan semua unsur mahasiswa lImu Komputer Universitas Gadjah Mada.
                            </h1>
                        </div>
                    </div>

                    <div className='lg:w-[50%] flex flex-col py-[45px] px-[40px] lg:p-[80px] bg-[#21201db2] '>
                        <div className='flex justify-center lg:pb-5 text-[#D4A976]'>
                            <h1 className='text-[60px]'>Misi</h1>
                        </div>

                        <div className='text-left md:text-[19px]'>
                            <ul className='space-y-3.5 w-[90%] l'>
                                {misi.map((items, i) => (
                                    <li key={i} className='flex justify start w-full'>
                                        <h1 className='circle-no mr-4 grid place-items-center text-[#21201D]'>{items.no}</h1>
                                        <h1 className='h-[10vh] overflow-auto text-white leading-[1.2]'>{items.misi}</h1>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='md:hidden w-max-full h-fit flex flex-col justify-center mt-12 bg-[#21201da4] py-5 text-[#21201D]'>
                        <h1 className=' text-center text-[20px] mb-3 text-white'>Unduh Disini</h1>
                        <div className='h-fit m-auto flex flex-col justify-center text-[25px] gap-7'>
                            <a href="CV_Konang.pdf" download className='m-auto active:scale-125 transition-all duration-200 ease-in' ><span className='py-2 px-6 rounded-md bg-[#D4A976]'>CV</span></a>
                            <a href="GD_Konang.pdf" download className='m-auto active:scale-125 transition-all duration-200 ease-in' ><span className='py-2 px-6  m-auto rounded-md bg-[#D4A976]'>Grand Design</span></a>
                        </div>
                    </div>
                </div>

            </div>

            <div className='h-fit p-12 w-screen flex flex-col relative bg-[#21201D]'>
                <div className='h-[15%]'></div>
                <div className='h-[85%] max-h-fit flex flex-col '>
                    <div className='h-fit flex gap-x-10  justify-center py-8 md:py-16'>
                        <Star1/>
                        <h1 className='text-2xl lg:text-5xl grid items-center text-[#D4A976]'>INOVASI</h1>
                        <Star2/>
                    </div>
                    <div className='space-y-5 flex flex-col justify-center  mx-auto'>
                        {inovasi.map((items, i) => (
                            <div key={i} className='inovasi grid items-center text-center px-7 md:px-14 text-center  text-[13px] lg:text-[18px] '>
                                <h1>{items.data}</h1>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>

    </>
  )
}

export default Candidate1
