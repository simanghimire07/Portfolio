import { Link } from "react-scroll";
import "../styles/AboutContentStyle.css";

const AboutContent = () => {
  const cv_link = `${process.env.PUBLIC_URL}/Simran Ghimire.pdf`;
  return (
    <div className="about-container" id="about">
      <h1>Who Am I?</h1>

      <p>
        As a fresher Front-End Developer, I have a strong foundation in HTML,
        CSS, JavaScript, React, and Tailwind. I am excellent at creating and
        managing user-friendly responsive websites. I'm willing to consider
        internship positions where I can develop, learn, and contribute. Please
        get in touch with me if you have a suitable opportunity that matches my
        qualifications and expertise.
      </p>
      <div className="about-link">
        <Link to="contact" smooth spy>
          <button className="btn">Contact</button>
        </Link>
        <a href={cv_link} download={true}>
          <button className="btn-light">CV</button>
        </a>
      </div>
    </div>
  );
};
export default AboutContent;
