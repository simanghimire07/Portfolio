import Footer from "../components/Footer"
import Header from "../components/Header"
import Section from "../components/Section"
import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <div>
      <Header />
      <Section heading="Contact" text="Lets have a chat" />
      <ContactForm />
      <Footer />
    </div>
  )
}
export default Contact