import Footer from "../components/Footer"
import Header from "../components/Header"
import HeroImg from "../components/HeroImg"
import Work from "../components/Work"
import ContactForm from "../components/ContactForm"
import AboutContent from '../components/AboutContent'
import { useEffect,useState } from "react";

const HomePage = () => {

  useEffect(()=>{
    document.title = `Simran Ghimire`;
  },[])

  return (
    <div>
      <Header/>
      <HeroImg />
      <Work />
      <AboutContent />
      <ContactForm />
      <Footer />
    </div>
  )
}
export default HomePage