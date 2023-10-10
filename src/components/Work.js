import "../styles/WorksCardStyle.css";
import WorksCard from "./WorksCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-container" id="project">
      <h1 className="project-heading"> Projects</h1>
      <div className="project-conatiner">
        {WorkCardData.map((val, ind) => {
          return(
            <WorksCard 
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            code={val.code}
            />
          )
        })}
       
      </div>
    </div>
  )
}
export default Work