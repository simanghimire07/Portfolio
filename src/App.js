import { Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element ={<HomePage/>}/>
      <Route  path="/about" element = {<About/>} />
      <Route path="/contact" element = {<Contact/>} />
      <Route path="/project" element = {<Project/>} />
    </Routes>
    </>
  )
}

export default App;
