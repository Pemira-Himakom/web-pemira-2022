import React from 'react'
import Candid from '../../components/Candid'
import Star1 from '../../img/star1.png'
import Star2 from '../../img/star2.png'

const candidates = [
    {id: 'a', calon: 1, name: 'Konang Tygazayn N', division: 'MIKAT'},
    {id: 'b', calon: 2, name: 'Kadek Ninda Nandita P', division: 'HUBLU'},
    {id: 'c', calon: 3, name: 'Billy Fahd Qodama', division: 'PSDMA'}
];

const Candidates = () => {
  return (
    <div className='bg-[#21201D] px-8 w-screen h-max-screen flex justify-center p-auto m-auto'>
        <div className='candid-bg candid grid place-items-center w-screen h-screen flex flex-col font-prata'>
            <div className='eclipse eclipse-sm grid place-items-center'>
                <div className='space-y-24'>
                    <div className='flex justify-evenly px-72'>
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
        </div>
    </div>
  )
}

export default Candidates

