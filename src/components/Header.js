import "../styles/HeaderStyle.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";
import { useEffect } from "react";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="home" smooth spy>
        <h1>Portfolio</h1>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link activeClass="activeLink" to="home" smooth spy>
            Home
          </Link>
        </li>
        <li>
          <Link activeClass="activeLink" to="project" smooth spy>
            Project
          </Link>
        </li>
        <li>
          <Link activeClass="activeLink" to="about" smooth spy>
            About
          </Link>
        </li>
        <li>
          <Link activeClass="activeLink" to="contact" smooth spy>
            Contact
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};
export default Header;
