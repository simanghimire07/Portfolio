import "../styles/FormStyle.css";
import {useForm, ValidationError} from "@formspree/react";

const ContactForm = () => {
 
  return (
    <div className="form-container" id="contact">
      <h1 className="project-heading"> Contact me</h1>

      <form action="https://formspree.io/f/meqbpwkd" method="post">
      <label>Your Name</label>
      <input type="text" name="name" required/>
      <label>Your Email</label>
      <input type="email" name="email" required/>
      <label>Message</label>
      <textarea rows="6" placeholder="Type your message here" required/>
      <button className="btn">Submit</button>
      </form>
    </div>
  )
}
export default ContactForm