import React, { useState } from 'react';
import { FaRegMoon } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import './header.css'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     <header>
      <div className="logo">
        <div className="LogoImg"></div>
        <h1>Sushi</h1>
      </div>
    
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/recently">Recently</Link>
        <Link to="/subscribe">< FaRegMoon/></Link>
        <Link to="/Login">Login</Link>
      
      </nav> 
      {isOpen && (
       
      <div className='subNavBar'>
      <Link  to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/popular">Popular</Link>
      <Link to="/recently">Recently</Link>
      <Link to="/subscribe">< FaRegMoon/></Link>
      <Link to="/Login">Login</Link>
    
    </div> 
      )}
      < IoMenu onClick={toggleNavbar} />


  
     </header>
    </>
  )
}

export default Header
