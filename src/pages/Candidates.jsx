import React from 'react'
import Candid from '../components/Candid'
import canImage from '../img/candidates/img.png'
import Star1 from '../img/star1.png'
import Star2 from '../img/star2.png'

const candidates = [
    {calon: 1, name: 'Konang Tygazayn Nirangkara', division: 'MIKAT'},
    {calon: 2, name: 'Kadek Ninda Nandita Putri', division: 'HUBLU'},
    {calon: 3, name: 'Billy Fahd Qodama', division: 'PSDMA'}
];

const Candidates = () => {
  return (
    <div className='bg-[#21201D] candid w-screen h-screen flex flex-col font-prata'>
        <div className='space-y-24'>
            <div className='flex justify-evenly px-96'>
                <img src={Star1} alt='star'/>
                <h1 className='text-2xl lg:text-5xl prim-color grid items-center'>Candidates</h1>
                <img src={Star2} alt='star'/>
            </div>
            <div className='flex flex-row w-[70%] m-auto gap-14'>
                {candidates.map(({id, calon, name, division}) => (
                    <Candid key={id} calon={calon} name={name} division={division}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Candidates

