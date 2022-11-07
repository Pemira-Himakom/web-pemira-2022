import React from 'react'
import Frame from '../img/candidates/img.png'
import { motion, transform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
// import Ninda from '../../public'

const Candid = (props) => {
    const nav = useNavigate();
    return (
        <motion.button
        className='container space-y-5'
        onClick={() => nav(`/candid${props.calon}`)}
        whileHover={{scale:1.08,
        transition:{duration:0.2},
        }}>
            <div data-aos='fade-in' className='frame pb-7'>
                <img src={props.src} alt='images' className=''></img>
            </div>
            {/* <img src={Frame} className='overflow-visible xl:scale-105'></img> */}
            <div data-aos='fade-in'>
                <div className='title gap-x-5'>
                    <div className='boxAll'>
                        <div className='boxNo'>
                            <h1 className=''>{props.calon}</h1>
                        </div>
                        <div className='boxName flex flex-col justify-between text-left'>
                            <h2>{props.name}</h2>
                            <h3>{props.division}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </motion.button>
    );
};

export default Candid;

