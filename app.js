import React from "react";
import { Link } from "react-scroll";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import "./styles.css";

function App() {
  return (
    <div className="app-container" style={{ background: "linear-gradient(to bottom right, #F8FAFC, #E2E8F0)" }}>
      <nav className="navbar">
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
      <section id="home"><Home /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
