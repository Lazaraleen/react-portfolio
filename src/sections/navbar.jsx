import React from "react";

function NavBar() {
  return (
    <nav>
        <ul>
            <li><a href="#Home" class="active">Home</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Education">Education</a></li>
            <li><a href="#Experience">Expérience</a></li>
            <li><a href="#Work">Works</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
    </nav>
  );
}

export default NavBar;