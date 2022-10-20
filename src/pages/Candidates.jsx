import React from 'react'
import canImage from '../img/candidates/img.png'


const Candidates = () => {
  return (
    <div className='bg-[#21201D] w-screen h-[70vh] flex flex-col justify-center align-middle'>
     <div className='flex-row flex w-[70%] justify-evenly m-auto gap-14 '>
        <div className='flex flex-col justify-center'>
            <img src={canImage} alt="" />
            <div className='title '>
                <h1>1</h1>
            </div>
        </div>
        <div className='flex flex-col justify-center'>
            <img src={canImage} alt="" />
            <div className='title'>
                <h1>2</h1>
            </div>
        </div>
        <div className='flex flex-col justify-center'>
            <img src={canImage} alt="" />
            <div className='title'>
                <h1>3</h1>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Candidates