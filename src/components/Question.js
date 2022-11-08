import React, { useState, useRef } from 'react'
import {ReactComponent as Plus} from '../img/plus.svg'
import {ReactComponent as Minus} from '../img/minus.svg'


const Question = (props) => {

  const[showAns, setShowAns] = useState('0');
  const click = () => setShowAns(!showAns);

  let buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      buttons.classList.remove('active');
    });
  });

  const buttonRef = useRef(null)


  return (
    <div onClick={click}>
      <button className='faq px-4'>
        <div className='flex justify-between'>
          <h1 className='circle-no mr-4 grid place-items-center text-[#F1C88C] text-lg'>{props.no}</h1>
          <div className='flex justify-between w-full'>
            <h2 className='grid items-center'>{props.ques}</h2>
            <span className='grid items-center'>
              {showAns ? <Minus/> : <Plus/>}
            </span>        
          </div>
        </div>
      </button>
      <div className='font-inter text-[#E6E6E6]'>
        {showAns ? <div className='ans px-14 py-5'>{props.ans}</div> : null}
      </div>
    </div>
  )
}

export default Question;

