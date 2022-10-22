import React from 'react'

const question = (props) => {
  return (
    <div className='w-full flex flex-row justify-start bg-prim-color rounded-lg py-2 px-5 font-sulangor'>
        <div className='grid items-center'>
            <h1 className='circle-no grid place-items-center prim-color'>{props.no}</h1>
        </div>

        <p className='ml-5 h-10 grid items-center text-xl text-[#21201D]'>{props.children}</p>
      
    </div>
  )
}

export default question

