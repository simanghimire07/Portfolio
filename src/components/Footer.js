import "../styles/FooterStyle.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {FiMail } from "react-icons/fi"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="social-icon">
          <FiMail 
            size={25}
            style={{color:"#fff",
            marginRight: "2rem",
          }}
          />
           <FaGithub
            size={25}
            style={{color:"#fff",
            marginRight: "2rem"
          }}
          />
           <FaLinkedin
            size={25}
            style={{color:"#fff",
            marginRight: "2rem"
          }}
          />
        </div>
        <div className="content">
        <h4>Made by Simran Ghimire</h4>
        </div>
        
      </div>

    </div>
  )
}
export default Footer