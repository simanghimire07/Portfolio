import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroImg from "../components/HeroImg";
import Work from "../components/Work";
import ContactForm from "../components/ContactForm";
import AboutContent from "../components/AboutContent";
import { useEffect, useState } from "react";
import "../styles/style.css";
import { Link } from "react-scroll";

const HomePage = () => {
  useEffect(() => {
    document.title = `Simran Ghimire`;
  }, []);

  const [goUp, setGoUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  const changeColor = () => {
    if (window.scrollY >= 300) {
      setGoUp(true);
    } else {
      setGoUp(false);
    }
  };

  return (
    <div>
      <Header />
      <HeroImg />
      <Work />
      <AboutContent />
      <ContactForm />
      <Footer />

      <Link to="home" smooth spy>
        <div className={`go_to_top ${goUp ? "visible_goto_top" : ""}`}>
          <ion-icon name="caret-up-outline"></ion-icon>
        </div>
      </Link>
    </div>
  );
};
export default HomePage;
