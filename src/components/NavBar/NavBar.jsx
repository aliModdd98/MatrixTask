import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './NavBarStyle.css'
import {FaBars} from 'react-icons/fa'
import {IoMdClose}from 'react-icons/io'
import Dropdowng from '../DropDown/DropDown';
import NestedDropdown from '../DropDown/DropDown';

function NavBar() {
  const [mobileMode,setmobileMode]=useState(false);


  return (
   <nav className="navbar">
    <div className="containerNav">
    <h3 className="logo">Vesperr</h3>
    <ul className= {mobileMode? 'small-size':'nav-links'} onClick={()=>setmobileMode(false)}>
    <NavLink to="/home" style={{ animationDelay: '0.1s' }}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/about" style={{ animationDelay: '0.2s' }}>
              <li>About</li>
            </NavLink>
            <Link to="/servises" style={{ animationDelay: '0.3s' }}>
              <li>Services</li>
            </Link>
            <Link to="/portfolio" style={{ animationDelay: '0.2s' }}>
              <li>Portfolio</li>
            </Link>
            <Link to="/team" style={{ animationDelay: '0.5s' }}>
              <li>Team</li>
            </Link>
            <Link to="/pricing" style={{ animationDelay: '0.2s' }}>
              <li>Pricing</li>
            </Link>
            <Link to="/dropdown" style={{ animationDelay: '0.2s' }}>
              <li ><NestedDropdown/></li>
            </Link>
            <Link to="/contact" style={{ animationDelay: '0.2s' }}>
              <li>Contact</li>
               </Link>
               <Link to="/about" >
                <div className="btn"><button>Get Started</button></div>
            </Link>
            
    </ul>
    <button className='small-size-mobile' onClick={()=>setmobileMode(!mobileMode)}>{mobileMode? <IoMdClose/>:<FaBars/>}</button>
    
            </div>
   </nav>
  )
}

export default NavBar
 
{/* <div className='navbarStyle'>
        <div className="logo"><span>Vesperr</span></div>
       
        <div className="sectionsNav">
       
         
        </div>
    </div> */}