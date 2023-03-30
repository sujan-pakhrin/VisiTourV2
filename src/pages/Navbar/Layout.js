import React, { useState } from 'react';
import {  NavLink } from "react-router-dom";

import './Layout.css';

const Layout = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };


  
  return ( 
    
      <nav className='nav-container'>
        <div className="nav">
          <div className="logo">
            <NavLink to="/" className="link-logo">VisiTour</NavLink>
          </div>
          <div className="menu-link">
            <ul className={clicked ? "menu active" : "menu"}>
              <li>
                <NavLink className="link" to="/" onClick={handleClick}>Home</NavLink>
              </li>
              <li>
                <NavLink className="link" to="/" onClick={handleClick}>Package</NavLink>
              </li>
              <li>
                <NavLink className="link" to="/" onClick={handleClick} >About</NavLink>
              </li>
              <li>
                <NavLink className="link" to="/" onClick={handleClick} >Contact</NavLink>
              </li>
              <li>
                <NavLink className="link" to="/" onClick={handleClick} >Feedback</NavLink>
              </li>
              <li>
                <NavLink className="link" to="/signup" onClick={handleClick} >Sign Up</NavLink>
              </li>
              <li>
                <NavLink className="link" to="/login" onClick={handleClick} >Login</NavLink>
              </li>
              <li>
                <NavLink className="link" to="/booking" onClick={handleClick}>Booking</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu-icons" onClick={handleClick}>
          <i onClick={handleClick} className={clicked ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </nav>
      
   
  )
};

export default Layout;
