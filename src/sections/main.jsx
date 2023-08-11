import React from "react";
import Home from './home';
import NavBar from "./navbar";
import Skills from "./skills";
import Education from "./education";
import Experience from "./experience";
import Works from "./works";
import Contact from "./contact";

function Main() {
  return (
    <main>
      <div className="barNav">
        <NavBar />
      </div>
      <div className="page">
        <Home />
        <Skills />
        <Education />
        <Experience />
        <Works />
        <Contact />
      </div>
    </main>

  );
}

export default Main;