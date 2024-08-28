import React from 'react'
import '../styles/Testimonials.css'
import TestList from '../Components/TestList'
import { test } from '../data'
const Testimonials = () => {
  return (
    <section className='testimonial' id='testimonial'>
      <h1>Testimonials</h1>

      <div className="test-container">
        <div className="come">
          {
            test.map((item) => {
              return <div className=''>
                <TestList name={item.name} title={item.title} img={item.img} desc={item.desc} />
              </div>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Testimonials