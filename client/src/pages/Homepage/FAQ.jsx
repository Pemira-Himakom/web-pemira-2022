import React, {useRef, useState, useEffect } from 'react'
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

  // const active = (e) => {
  //   e.currentTarget.classList.toggle('active');
  // }
  
  // useEffect(() => {
  //   const buttons = document.querySelectorAll('.faq-button');
  //   buttons.forEach(button => {
  //     button.addEventListener('click', function() {
  //       buttons.forEach(btn => {
  //         if (btn.classList.contains('active')) {
  //           btn.classList.remove('active')
  //         }
  //       });
  //       this.classList.add('active');
  //     });
  //   });
  // }, []);

  const buttonHandler = (e, id, i) => {
    e.currentTarget.classList.toggle('active')
    if (id !== selected) {
      const button = document.querySelectorAll('.faq-button')
      button.forEach((btn, index) => {
        if (index !== i) {
          btn.classList.remove('active');
        }
      });
      setSelected(id);
    } else {
      const button = document.querySelectorAll('.faq-button')
      button.forEach((btn) => {
        btn.classList.remove('active')
      });
      setSelected(undefined)
    }
  };

  return (
    <div className='h-max-screen justify-center p-8 sm:p-10 md:p-12 lg:p-16 font-prata bg-[#21201D]'>
      <div className='flex justify-evenly px-4 md:px-28 xl:px-32 py-8 md:py-12 lg:py-16'>
        <div className='grid items-center'><Star1 className='hidden md:block scale-[60%] md:scale-[70%] lg:scale-100'/></div>
        <h1 className='text-xl md:text-2xl lg:text-4xl xl:text-5xl prim-color grid items-center text-center'>Frequently Asked Questions</h1>
        <div className='grid items-center'><Star2 className='hidden md:block scale-[60%] md:scale-[70%] lg:scale-100'/></div>
      </div>
      <div className='space-y-4'>
        {faq.map((items, i) => (
          <div key={i}>
            <button className='faq button faq-button px-4' onClick={(e) => {
              buttonHandler(e, items.id, i);
            }}>
              <div className='flex justify-between'>
                <div className='grid place-items-center'>
                  <h1 className='circle-no mr-2 lg:mr-4 
                                text-[#F1C88C] text-sm md:text-base lg:text-lg'>{items.no}</h1>
                </div>
                <div className='flex justify-between w-full'>
                  <h2 className='grid items-center'>{items.ques}</h2>
                  <span className='grid items-center'>
                    {items.id === selected ? <Minus className='scale-50'/> : <Plus className='scale-50'/> }
                  </span>        
                </div>
              </div>
            </button>
            {selected === items.id && <div className='font-inter text-[#E6E6E6]'>
              <li className='ans px-11 md:px-13 lg:px-14 py-3 md:py-4 lg:py-5'>{items.ans}</li>
            </div>}
          </div>
        ))}
      </div>
    </div>

  )
}

export default FAQ
