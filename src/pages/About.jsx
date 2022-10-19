import React from 'react'
import Hima from '../img/himakom.PNG'

const About = () => {
  return (
    <div class="bg-white flex content-evenly">
        <div className='bg-prim-color w-[50%] h-[100vh] flex items-center justify-center'>
          <img className='scale-75' src={Hima} alt="himakom" />
        </div>
        <div className='bg-white w-[50%] max-w-[35rem] m-auto text-justify text-xl p-5'>

          <h1 className='text-center mb-10 text-6xl prim-color'>About Pemira</h1>

          <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          </p>
        </div>

      </div>
  )
}

export default About