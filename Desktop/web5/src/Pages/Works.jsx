import React, { useState } from 'react'
import '../styles/Works.css'
import { asset } from '../Assets/asset'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { card } from '../data'


const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const handleClick = (way) =>{
    way === "left" ? 
    setCurrentSlide(currentSlide > 0 ? currentSlide -1: 2):
    setCurrentSlide(currentSlide < card.length -1 ? currentSlide +1 : 0)
  };

  
 
  return (
    <section className='work' id='work'>
      <div className='slider' style={{transform: `translateX(-${currentSlide * 100})vw`}}>
        {card.map((item) => (
          <div className='work-container'>

            <div className="work-item">
              <div className="work-left">
                <div className="work-left-container">
                  <div className="work-left-image">
                    <img src={item.icon} alt="" />
                  </div>

                  <h2>{item.title}</h2>

                  <p>{item.desc}</p>
                  <span>Projects</span>
                </div>
              </div>

              <div className="work-right">
                <div className='work-right-image' >
                  <img src={item.img} alt="" />
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>
      <div className='arrow' >
        <IoIosArrowBack className='arrow-left' onClick={()=>handleClick("left")} />
        <IoIosArrowForward className='arrow-right' onClick={()=>handleClick()} />
      </div>

    </section>
  )
}

export default Works