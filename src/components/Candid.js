import React from 'react'
import Frame from '../img/candidates/img.png'

const Candid = (props) => {
    return (
        <div>
            <img src={Frame}></img>
            <div className='title gap-x-5'>
                <h1>{props.calon}</h1>
                <div className='flex flex-col justify-between'>
                    <h2>{props.name}</h2>
                    <h3>{props.division}</h3>
                </div>
            </div>
        </div>
    );
};

export default Candid;

