import React from 'react'
import Question from '../components/Question.js'

const FAQ = () => {
  return (
    <div className="w-full h-[40vh] flex flex-col justify-center p-5 gap-4 font-sulangor">
        <Question className='grid items-centerhj' no='1'>Kenapa memilih Makomji</Question>
        <Question no='2'>Kenapa memilih Makomji</Question>
        <Question no='3'>Kenapa memilih Makomji</Question>
        <Question no='4'>Kenapa memilih Makomji</Question>
        <Question no='5'>Kenapa memilih Makomji</Question>

    </div>

  )
}

export default FAQ
