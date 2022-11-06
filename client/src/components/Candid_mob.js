import React from 'react'
import Frame from '../img/candidates/img.png'
import { motion, transform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Candid = (props) => {
    const nav = useNavigate();
    return (
        <motion.button 
        className='grid place-items-center gap-y-3'
        id='candid_mob'
        onClick={() => nav(`/candid${props.calon}`)}
        whileHover={{scale:1.1,
        transition:{duration:0.2},
        }}>
            <div className='frame pb-6'>
                <img src={props.src} alt='images' className=''></img>
            </div>
            {/* <img src={Frame} className='overflow-visible w-full'></img> */}
            <div className='title_mb mx-3 relative p-3'>
                <div className='boxAll'>
                    <div className='boxNo'>
                        <h1>{props.calon}</h1>
                    </div>
                    <div className='flex flex-col justify-between text-left mt-3'>
                        <h2>{props.name}</h2>
                        <h3>{props.division}</h3>
                    </div>
                </div>
            </div>
        </motion.button>
    );
};

export default Candid;

