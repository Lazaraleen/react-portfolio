import React from "react";
import Home from './home';
import NavBar from "./navbar";
import Skills from "./skills";
import Education from "./education";

function Main() {
  return (
    <main>
      <NavBar />
      <Home />
      <Skills />
      <Education />
    </main>

  );
}

export default Main;