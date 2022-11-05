import React from 'react'
import Candid from '../../components/Candid'
import Candidm from '../../components/Candid_mob'
import {ReactComponent as Star1} from '../../img/star1.svg'
import {ReactComponent as Star2} from '../../img/star2.svg'

const candidates = [
    {id: 'a', calon: 1, name: 'Kadek Ninda NP', division: 'PSDMA'},
    {id: 'b', calon: 2, name: 'Konang Tygazayn N', division: 'MIKAT'},
    {id: 'c', calon: 3, name: 'Billy Fahd Qodama', division: 'KPM'}
];

const Candidates = () => {
  return (
    <div className='bg-[#21201D] md:px-8 w-screen h-max-screen flex justify-center p-auto m-auto '>

        <div className='candid-bg candid grid place-items-center w-screen h-screen flex-col font-prata relative'>

            <div className='eclipse grid place-items-center px-4 py-24'>

                <div className='space-y-5 text-center '>

                    <div className='flex justify-center px-80'>
                        <div className='flex justify-evenly'>
                            <Star1 className='scale-[60%] lg:scale-100'/>
                            <h1 className='text-xl lg:text-5xl prim-color grid items-center'>Candidates</h1>
                            <Star2 className='scale-[60%] lg:scale-100'/>
                        </div>
                    </div>

                    <div className='hidden md:flex flex-row w-[70%] m-auto gap-8 xl:gap-16'>
                        {candidates.map(({id, calon, name, division}) => (
                            <Candid key={id} calon={calon} name={name} division={division}/>
                        ))}
                    </div>

                    <div className='flex-row  md:hidden  relative'>
                        <div>
                            <input type="radio" name="slider" id="s1" />
                            <input type="radio" name="slider" id="s2" />
                            <input type="radio" name="slider" id="s3" />
                        </div>
                        
                        <div className='flex flex-row overflow-x-scroll w-[45%] m-auto gap-x-5'>
                            <label for="s1" className='min-w-[100%]'>
                                <Candidm key="a" calon={1} name="Kadek Ninda NP" division="PSDMA"/>
                            </label>

                            <label for="s1" className='min-w-[100%]'>
                                <Candidm key="a" calon={1} name="Kadek Ninda NP" division="PSDMA"/>
                            </label>

                            <label for="s1" className='min-w-[100%]'>
                                <Candidm key="a" calon={1} name="Kadek Ninda NP" division="PSDMA"/>
                            </label>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Candidates

