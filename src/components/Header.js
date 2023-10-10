import "../styles/HeaderStyle.css";
import {FaBars, FaTimes} from "react-icons/fa";
import { useState } from "react";
import {Link} from 'react-scroll';

const Header = () => {
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
const [color, setColor] = useState(false);
const changeColor = () =>{
  if(window.scrollY >= 100){
    setColor(true);
  }else{
    setColor(false);
  }
};
window.addEventListener("scroll",changeColor)

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link>
        <h1>Portfolio</h1>
      </Link>

      <ul className= {click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="home" smooth spy>Home</Link>
        </li>
        <li>
          <Link to="project" smooth spy>Project</Link>
        </li>
        <li>
          <Link to="about" smooth spy>About</Link>
        </li>
        <li>
          <Link to="contact" smooth spy>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{color: "#fff"}} />
          ) : (
          <FaBars size={20} style={{color: "#fff"}} 
          />
        )}
        

        
      </div>

    </div>
  )
}
export default Header