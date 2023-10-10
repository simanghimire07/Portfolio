import { Component } from "react"
import "../styles/SectionStyle.css"

class Section extends Component {
  render(){
    return (
      <div className="section-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
  
      </div>
    )
  }
  }
 
export default Section;