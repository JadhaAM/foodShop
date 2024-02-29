import { FaRegMoon } from "react-icons/fa";
import './header.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Header() {
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
      
      </nav>

  
     </header>
    </>
  )
}

export default Header
