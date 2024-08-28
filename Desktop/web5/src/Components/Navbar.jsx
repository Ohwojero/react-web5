import React, { useState } from 'react'
import '../styles/Navbar.css'
import {asset} from '../Assets/asset'
import { CiMenuBurger } from "react-icons/ci";
const Navbar = () => {

  const [openLink, setOpenLink] = useState (false)

      const toggleNavbar = () =>{
        setOpenLink(!openLink)
      }

  const [ menu, setMenu] = useState ("Home")    

  return (
    <div className='container'>
        <div className='navbar-container'>
            <img src={asset.logo} alt="" />


            <ul id={openLink ? "open" : "close"} className='navbar-close' >
              <li onClick={() =>setMenu("Home")} className={menu==="Home"? "active" : ""}><a href="#intro">Intro</a></li>
              <li onClick={() =>setMenu("Portfolio")} className={menu==="Portfolio"? "active" : ""}><a href="#portfolio">Portfolio</a></li>
              <li onClick={() =>setMenu("Testimonial")} className={menu==="Testimonial"? "active" : ""}><a href="#testimonial">Testimonial</a></li>
              <li onClick={() =>setMenu("contact")} className={menu==="contact"? "active" : ""}><a href="#contact">Contact</a></li>
              <li onClick={() =>setMenu("works")} className={menu==="works"? "active" : ""}><a href="#works">Works</a></li>
            </ul>

            <div className='toggle-menu'>
           <button onClick={toggleNavbar}><CiMenuBurger/></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar