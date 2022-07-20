import React from "react";
import Home from "./pages/Home";
import "./App.scss";
import Bg from "./components/Bg";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import { classNameTitle } from "./components/Title/ClassNameTitle";
import Footer from "./pages/Footer";

function App() {

  return (
    <div id="home" className="App w-[100%] h-[100%]  ">
      
      <Bg />
      <Home />
      <About animation="fade-down" classNameTitle={classNameTitle} />
      <Skill  animation="fade-down" classNameTitle={classNameTitle} />
      <Project animation="fade-down" classNameTitle={classNameTitle} />
      <Contact animation="fade-down" classNameTitle={classNameTitle}/>
      <Footer/>
  
    </div>
  );
}

export default App;
