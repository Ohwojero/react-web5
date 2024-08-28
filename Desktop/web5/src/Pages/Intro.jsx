import React, { useEffect, useRef } from 'react'
import '../styles/Intro.css'
import { init } from 'ityped'
import { asset } from '../Assets/asset'


const Intro = () => {

  const textRef = useRef();
  useEffect(() => {
    init(textRef,{showCursor:false, strings: ['Developer', 'Designer','Data' ]});
   
  }, []);


  return (
    <section className='container intro' id='intro' >
      <div className='sec-01-intro'>
        <div className='intro-left'>
          <div className='intro-left-image'>
            <img src={asset.introimage} alt="" />
          </div>
        </div>

        <div className='intro-right'>
          <div className='right-wrapper'>
            <h2>Hi, There I'm</h2>
            <h1>Ohwojero Godstime</h1>
            <h3>Freelancer <span ref={textRef}></span></h3>
          </div>

          <div className='check-btn'>
            <a href="#portfolio" className='btn'><button>Check</button></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro