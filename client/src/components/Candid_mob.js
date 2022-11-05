import React from 'react'
import Frame from '../img/candidates/img.png'
import { motion, transform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Candid = (props) => {
    const nav = useNavigate();
    return (
        <motion.button 
        className='grid place-items-center '
        id='candid_mob'
        onClick={() => nav(`/candid${props.calon}`)}
        whileHover={{scale:1.1,
        transition:{duration:0.2},
        }}>
            <img src={Frame} className='overflow-visible w-[100%]'></img>
            <div className='title_mb mx-auto w-[80%] relative p-3'>
                <div className='justify-start'>
                    <div className='boxNo min-w-[100%]'>
                        <h1>{props.calon}</h1>
                    </div>
                    <div className='flex flex-col justify-start text-center mt-3'>
                        <h2>{props.name}</h2>
                        <h3>{props.division}</h3>
                    </div>
                </div>
            </div>
        </motion.button>
    );
};

export default Candid;

