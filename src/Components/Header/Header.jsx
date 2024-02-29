import { FaRegMoon } from "react-icons/fa";
import './header.css'
function Header() {
  return (
    <>
     <header>
      <div className="logo">
        <div className="LogoImg"></div>
        <h1>Sushi</h1>
      </div>
      <nav>
        <a href="Home">Home</a>
        <a href="Home">About Us</a>
        <a href="Home">Popular</a>
        <a href="Home">Recently</a>
        <FaRegMoon />

      </nav>
     </header>
    </>
  )
}

export default Header
