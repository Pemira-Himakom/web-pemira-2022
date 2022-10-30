import React, {useRef, useState} from 'react'
import Question from '../../components/Question.js'
import {ReactComponent as Star1} from '../../img/star1.svg'
import {ReactComponent as Star2} from '../../img/star2.svg'
import {ReactComponent as Plus} from '../../img/plus.svg'
import {ReactComponent as Minus} from '../../img/minus.svg'

const faq = [
  {id: 1, no: 1, ques: 'Why choose Opam?', ans: 'Asik'},
  {id: 2, no: 2, ques: 'Why choose Opam?', ans: 'Asik'},
  {id: 3, no: 3, ques: 'Why choose Opam?', ans: 'Asik'},
  {id: 4, no: 4, ques: 'Why choose Opam?', ans: 'Asik'},
  {id: 5, no: 5, ques: 'Why choose Opam?', ans: 'Asik'},
];

const FAQ = () => {

  const [selected, setSelected] = useState(undefined)
  const buttonRef = useRef(null)

  // const toggle = (id) => {
  //   if (selected === id) {
  //     return setSelected(true)
  //   } 
  //   setSelected(id)
  // }

  const buttons = document.querySelectorAll('.faq-button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      buttons.forEach(btn =>{
        if(btn.classList.contains('active')){
          btn.classList.remove('active')
        }
      });
      this.classList.add('active');
      // if(buttons.classList.contains('active')){
      //   buttons.classList.remove('active');
      // }
    });
  });

  const buttonHandler = (id) => {
    if (id !== selected) {
      setSelected(id)
    } else {
      setSelected(undefined)
    }
  }

  return (
    <div className='h-max-screen justify-center p-16 font-prata bg-[#21201D]'>
      <div className='flex justify-evenly px-32 py-16'>
        <div className='grid items-center'><Star1/></div>
        <h1 className='text-2xl lg:text-5xl prim-color grid items-center'>Frequently Asked Questions</h1>
        <div className='grid items-center'><Star2/></div>
      </div>
      <div className='space-y-4'>
        {faq.map((items, i) => (
          <div key={i}>
            <button className='faq px-4 button faq-button' onClick={()=>{
              buttonHandler(items.id)
            }} ref={buttonRef}>
              <div className='flex justify-between'>
                <h1 className='circle-no mr-4 grid place-items-center text-[#F1C88C] text-lg'>{items.no}</h1>
                <div className='flex justify-between w-full'>
                  <h2 className='grid items-center'>{items.ques}</h2>
                  <span className='grid items-center'>
                    {items.id === selected ? <Minus/> : <Plus/>}
                  </span>        
                </div>
              </div>
            </button>
            {selected === items.id && <div className='font-inter text-[#E6E6E6]'>
              <div className='ans px-14 py-5'>{items.ans}</div>
            </div>}
          </div>
        ))}
      </div>
    </div>

  )
}

export default FAQ
