import React from 'react'
import Candid from '../../components/Candid'
import Candidm from '../../components/Candid_mob'
import {ReactComponent as Star1} from '../../img/star1.svg'
import {ReactComponent as Star2} from '../../img/star2.svg'

const candidates = [
    {id: 'a', calon: 1, name: 'Kadek Ninda Nandita P', division: 'PSDMA', src: '/imgs/ninda.png'},
    {id: 'b', calon: 2, name: 'Konang Tyagazain N', division: 'MIKAT', src: '/imgs/konang.png'},
    {id: 'c', calon: 3, name: 'Billy Fahd Qodama', division: 'KPM', src: '/imgs/billi.png'}
];

const imgs = [
    {src: '/imgs/ninda.png'},
    {src: '/imgs/konang.png'},
    {src: '/imgs/billi.png'}
]

const Candidates = () => {
  return (
    <div className='bg-[#21201D] md:px-8 w-screen h-max-screen flex justify-center p-7 md:p-auto m-auto timeline-bg-sm-r'>

        <div className='candid-bg candid grid place-items-center w-screen h-screen flex-col font-prata relative'>

            <div className='eclipse grid place-items-center p-8'> {/*p-8 md:p-0 md:mx-4 my-24 */}

                <div className='space-y-4 md:space-y-9 text-center'>

                    <div className=''>{/*mx-48 md:mx-60 lg:mx-72 */}
                        <div className='inline-flex md:space-x-8'>
                            <Star1 className='hidden md:block scale-[60%] md:scale-[70%] lg:scale-100'/>
                            <h1 className='text-2xl lg:text-5xl prim-color flex items-start'>Candidates</h1>
                            <Star2 className='hidden md:block scale-[60%] md:scale-[70%] lg:scale-100'/>
                        </div>
                    </div>

                    <div className='hidden md:flex flex-row w-[88%] m-auto gap-8 xl:gap-18'>
                        {/* {imgs.map(({src}) => (
                            <img src={src} className='w-1/4 frame'/>
                        ))} */}
                        {candidates.map(({id, calon, name, division, src}) => (
                            <Candid key={id} calon={calon} name={name} division={division} src={src}/>
                        ))}
                    </div>

                    <section id='#slider'>
                        <div className='flex flex-row md:hidden relative grid place-items-center'>
                            
                            {/* <div>
                                <input type="radio" name="slider" id="s1" />
                                <input type="radio" name="slider" id="s2" checked/>
                                <input type="radio" name="slider" id="s3" />
                            </div> */}

                            <div className='flex flex-row overflow-x-scroll w-[45%] m-auto gap-x-5'>
                                <label htmlFor="s1" id='slide1' className='min-w-[100%]'>
                                    <Candidm key="a" calon={1} name="Kadek Ninda NP" division="PSDMA" src='/imgs/ninda.png'/>
                                </label>

                                <label htmlFor="s2" id='slide2' className='min-w-[100%]'>
                                    <Candidm key="b" calon={2} name="Konang Tyagazain" division="MIKAT" src='/imgs/konang.png'/>
                                </label>

                                <label htmlFor="s3" id='slide3' className='min-w-[100%]'>
                                    <Candidm key="c" calon={3} name="Billy Fahd Qodama" division="KPM" src='/imgs/billi.png'/>
                                </label>
                            </div>

                        </div>
                    </section>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Candidates

