import React from 'react'
import Bar from '../../img/bar.svg'
import Timeline from './Timeline';
import Candidates from './Candidates';
import FAQ from './FAQ';
import About from './About';
import Footer from './Footer'

import Candid1 from '../CandidateProfile/Candidate1'

export default function Home() {
  return (
    <div className='mb-[-1px] w-screen'>
      {/* title */}
      <header className="flex flex-row items-end px-48 h-screen shadow-inner 
                         bg-fixed bg-center bg-cover bg-img-lg bg-img-sm">
        <div className="h-fit title-sm title-lg prim-color inline-flex gap-12">
          <img src={Bar}/>
          <h1 className='tracking-wide flex items-end font-prata pb-48'>Pemilihan Raya Himakom 2022</h1>
        </div>
      </header>
      <About/>
      <Timeline/>
      <Candidates/>
      <FAQ/>
      {/* <Candid1/> */}
      <Footer/>

    </div>
  )
}
