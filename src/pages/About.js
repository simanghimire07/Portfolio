import AboutContent from "../components/AboutContent"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Section from "../components/Section"

const About = () => {
  return (
    <div>
      <Header />
      <Section heading="Get more about me!" text="You may read more about me, what I do, and my current abilities, which are mostlyin technology and programming, here👇"/>
      <AboutContent />
      <Footer />
      
    </div>
  )
}
export default About