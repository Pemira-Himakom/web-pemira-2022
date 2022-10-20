import React from 'react'

const question = (props) => {
  return (
    <div className='w-full flex flex-row justify-start bg-prim-color text-white rounded-xl py-2 px-4 font-sulangor'>
        <div className='border-[1px] border-[#D4A976] rounded-2xl w-8 h-8 grid place-items-center'>
            <h1>{props.no}</h1>
        </div>

        <p className='ml-5 h-10 grid items-center text-xl font-sulangor'>{props.children}</p>
      
    </div>
  )
}

export default question

