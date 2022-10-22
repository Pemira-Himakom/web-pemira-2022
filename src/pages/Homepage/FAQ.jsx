import React from 'react'
import Question from '../../components/Question.js'
import Star1 from '../../img/star1.png'
import Star2 from '../../img/star2.png'

const FAQ = () => {
  return (
    <div className="w-screen h-max-screen flex flex-col justify-center p-24 font-prata bg-[#21201D]">

          <div className='flex justify-center py-16 gap-7'>
            <div className='grid items-center'>
              <img src={Star1} alt='star'/>
            </div>
            <h1 className='text-center text-2xl lg:text-5xl prim-color grid items-center'>About Pemira</h1>
            <div className='grid items-center'>
              <img src={Star2} alt='star'/>
            </div>
          </div>

        <div className='space-y-5'>
          <Question no='1'>Kenapa memilih Makomji</Question>
          <Question no='2'>Kenapa memilih Makomji</Question>
          <Question no='3'>Kenapa memilih Makomji</Question>
          <Question no='4'>Kenapa memilih Makomji</Question>
          <Question no='5'>Kenapa memilih Makomji</Question>
        </div>


    </div>

  )
}

export default FAQ
