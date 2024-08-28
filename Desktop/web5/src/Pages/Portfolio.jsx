import React, { useEffect, useState } from 'react'
import '../styles/Portfolio.css'
import { list } from '../Assets/asset'
import PortfolioList from '../Components/portfolioList'


import {
  featureItem, webItem, mobileItem, designItem, brandingItem
} from '../../src/data'

const Portfolio = () => {

  const [selected, setSelected] = useState("feature")
  const [data, setData] = useState([]);


  useEffect(() => {
    switch (selected) {
      case "feature":
        setData(featureItem);
        break;

      case "web":
        setData(webItem);
        break;

      case "mobile":
        setData(mobileItem);
        break;

      case "design":
        setData(designItem);
        break;

      case "branding":
        setData(brandingItem);
        break;
      default:
        setData(featureItem)
    }
  }, [selected])

  return (
    <section className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>

      <ul>
        {
          list.map((item) => {
            return <div>
              <PortfolioList title={item.title} id={item.id} active={selected === item.id} setSelected={setSelected} />
            </div>
          })
        }
      </ul>

      <div className='container'>

        
        {
          data.map((item)=>{
            return <div>
              <div className='item'>
                <img src={item.img} alt="" />
                <h3>{item.title}</h3>
              </div>
            </div>
          })
        }

      

      </div>

    </section>
  )
}

export default Portfolio