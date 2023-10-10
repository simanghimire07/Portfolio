import "../styles/WorksCardStyle.css";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const WorksCard = (props) => {
  return (
    <div className="project-card">
      <div
        style={{ backgroundImage: `url(${props?.imgsrc})` }}
        className="image-holder"
      ></div>
      <h2 className="project-name">{props.title}</h2>
      <div className="project-details" title={props.text}>
        <p>{props.text}</p>
        <div className="project-btn">
          <NavLink to={props.code} className="btn">
            Code <FaGithub />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default WorksCard;
