import React from 'react'
import Question from '../../components/Question.js'
import Star1 from '../../img/star1.png'
import Star2 from '../../img/star2.png'

const faq = [
  {id: 'e', no: 1, ques: 'Why choose Opam?', ans: 'Asik'},
  {id: 'f', no: 2, ques: 'Why choose Opam?', ans: 'Asik'},
  {id: 'g', no: 3, ques: 'Why choose Opam?', ans: 'Asik'},
  {id: 'h', no: 4, ques: 'Why choose Opam?', ans: 'Asik'},
  {id: 'i', no: 5, ques: 'Why choose Opam?', ans: 'Asik'},
];

const Faq = () => {
  return (
    <div className='h-max-screen justify-center p-16 font-prata bg-[#21201D]'>
      <div className='flex justify-evenly px-24 py-16'>
        <div className='grid items-center'><img src={Star1} alt='star'/></div>
        <h1 className='text-2xl lg:text-5xl prim-color grid items-center'>Frequently Asked Questions</h1>
        <div className='grid items-center'><img src={Star2} alt='star'/></div>
      </div>

      <div className='space-y-4'>
        {faq.map(({id, no, ques, ans}) => (
          <Question key={id} no={no} ques={ques} ans={ans}/>
        ))}
      </div>
    </div>

  )
}

export default Faq
