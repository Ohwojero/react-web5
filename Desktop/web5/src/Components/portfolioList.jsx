import React from 'react'
import '../styles/PortfolioList.css'

const portfolioList = ({id,title, active, setSelected}) => {
  return (
    <div className='portfoliolist'>
       <li className={ active ?"PortfolioList activeitem" : "portfolioList"}onClick={()=>setSelected(id)}>{title}</li>
    </div>
  )
}

export default portfolioList