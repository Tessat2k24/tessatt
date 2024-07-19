import React from "react";
import "./App.css";
import About from "./Components/About/Aboutus/About";
import News from "./Components/News/News.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Gallery from "./Components/Gallery/Gallery";
import Ourteam from "./Components/About/Ourteam/Ourteam";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Ourteam />
      <Projects />
      <News />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
