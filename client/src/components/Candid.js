import React from 'react'
import Frame from '../img/candidates/img.png'
import { motion, transform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Candid = (props) => {
    // const nav = useNavigate();
    return (
        <motion.button 
        className='container'
        whileHover={{scale:1.1,
        transition:{duration:0.2},
        }}>
            <img src={Frame}></img>
            <div className='title gap-x-5'>
                <div className='boxAll'>
                    <div className='boxNo'>
                        <h1>{props.calon}</h1>
                    </div>
                    <div className='boxName flex flex-col justify-between text-left'>
                        <h2>{props.name}</h2>
                        <h3>{props.division}</h3>
                    </div>
                </div>
            </div>
        </motion.button>
    );
};

export default Candid;

