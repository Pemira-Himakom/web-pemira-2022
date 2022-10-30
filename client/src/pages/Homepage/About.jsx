import React from 'react'
import Hima from '../../img/hima.png'
import {ReactComponent as Star1} from '../../img/star1.svg'
import {ReactComponent as Star2} from '../../img/star2.svg'
// import Star1 from '../../img/star1.png'
// import Star2 from '../../img/star2.png'

const About = () => {
  return (
    <div className='bg-[#D4A976] p-7 w-screen'>
      <div className="bg-[#21201D] flex content justify-center rounded-tl-[60px] rounded-br-[60px]">
        <div className='logo-sm logo-lg  w-[20%] h-[60vh] m-auto flex items-center justify-center'>
          <img className='scale-75' src={Hima} alt="himakom" />
        </div>


        <div className='w-[80%] max-w-[50rem] h-[60vh] m-auto text-justify text-xl p-5'>

          <div className='flex justify-evenly py-8 px-24'>
            <div className='grid items-center'>
              <Star1/>
            </div>
            <h1 className='text-center font-prata text-2xl lg:text-5xl prim-color grid items-center'>About Pemira</h1>
            <div className='grid items-center'>
              <Star2/>
            </div>
          </div>

          <p className='font-inter font-extralight text-lg text-[#E6E6E6]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About