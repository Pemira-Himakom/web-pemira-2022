import React from 'react'
import { useState } from 'react';
import {NavLink} from 'react-router-dom';





const Header = () => {
        let Links = [
            {name:"Home", link:"/"},
            {name:"Candidates", link:"/candid2"},
            {name:"Voting", link:"/experience"},
            {name:"About", link:"/about"},
        ];
        let [open,setOpen]=useState(false);

        const activeLink = 'underline underline-offset-8 decoration-slate-400 cursor-default';
        const normalLink = '';



    return (
        <div>
            {/* start header */}

            <div className="w-full h-[64px] fixed top-0 z-40">
                <div className='md:flex h-[56px] place-content-end shadow-md py-4 md:px-10 px-7 font-prata bg-[#21201D]'>

                    <div onClick={()=>setOpen(!open)} className="text-2xl absolute right-8 top-5 pb-3 cursor-pointer md:hidden">
                        <ion-icon name={open ? 'close' : 'menu'} style={{color:"#D4A976"}}></ion-icon>
                    </div>

                    <ul className={`md:flex shadow-md md:shadow-none md:items-center md:pb-0 pb-4 absolute md:static bg-[#21201D] text-[#D4A976] mx-4  md:z-40 z-[-1] left-0 w-[91vw] rounded-xl md:w-auto md:pl-0 pl-9 md:pt-0 pt-9 transition-all duration-200 ease-in ${open ? 'opacity-100':'opacity-0'} md:opacity-100 text-xl`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className="ml-4 md:ml-8 md:my-0 my-4 px-1 py-1">
                                    <NavLink to={link.link} className={({isActive}) => isActive ? normalLink : normalLink} ><p title>{link.name}</p></NavLink>
                                </li>
                            ))
                        }

                    </ul>

                </div>
            </div>
        </div>
        
    )
}

export default Header;