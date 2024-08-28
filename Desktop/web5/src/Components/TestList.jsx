import React from 'react'
import { asset } from '../Assets/asset'
import { GiSupersonicArrow } from "react-icons/gi";
const TestList = ({ id, name, title, img, desc }) => {
    return (

        <div className='card'>
            <div className="top">
                <GiSupersonicArrow className='left-image' />
                <img src={img} alt="" className='center-image' />

                <img src={asset.youtube1} alt="" className='right-image' />
            </div>

            <div className="middle">
                <p>{desc}</p>
            </div>

            <div className="bottom">
                <h3>{name}</h3>
                <p>{title}</p>
            </div>
        </div>

    )
}

export default TestList