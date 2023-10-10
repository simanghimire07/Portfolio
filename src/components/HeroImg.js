import "../styles/HeroImgStyle.css";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero" id="home">
      <div className="heroimg">

      </div>
      <div className="content">
        <p>👋 Hi, I'm Simran.</p>
        <h1>Front-End Web Developer</h1>
        <div>
          <Link to= "/project" className="btn">Projects</Link>
          <Link to= "/contact" className="btn-light">Contact</Link>
        </div>
      </div>

    </div>
  )
}
export default HeroImg