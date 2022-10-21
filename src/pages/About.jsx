import React from 'react'
import Hima from '../img/hima.png'
import Star1 from '../img/star1.png'
import Star2 from '../img/star2.png'

const About = () => {
  return (
    <div class="bg-[#21201D] flex content-evenly">
        <div className='logo-sm logo-lg bg-prim-color w-[35%] h-[60vh] flex items-center justify-center'>
          <img className='scale-75' src={Hima} alt="himakom" />
        </div>
        <div className='w-[50%] max-w-[50rem] m-auto text-justify text-xl p-5'>

          <div className='flex justify-evenly py-8'>
            <div className='grid items-center'>
              <img src={Star1} alt='star'/>
            </div>
            <h1 className='text-center font-sulangor text-2xl lg:text-5xl prim-color grid items-center'>About Pemira</h1>
            <div className='grid items-center'>
              <img src={Star2} alt='star'/>
            </div>
          </div>

          <p className='font-light text-lg text-[#E6E6E6]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          </p>
        </div>

    </div>
  )
}

export default About