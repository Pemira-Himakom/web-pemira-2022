import React from 'react'
import {ReactComponent as Plus} from '../img/plus.svg'
import {ReactComponent as Minus} from '../img/minus.svg'

const Question = (props) => {
  return (
    <button className='faq inline-flex flex items-center px-4'>
      <h1 className='circle-no mr-4 grid place-items-center text-[#F1C88C] text-lg'>{props.no}</h1>
      <div className='flex justify-between w-full'>
        <h2 className='grid items-center'>{props.ques}</h2>
        <span className='grid items-center'>
          <Plus/>
        </span>
      </div>
      {/* <p>{props.ans}</p> */}
    </button>
  )
}

export default Question;

