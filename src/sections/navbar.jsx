import React from "react";
import { useEffect, useState } from 'react';

// Voir comment faire pour que la section active s'active un peu plus tôt...

function NavBar() {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  const sectionIds = [
    "Home",
    "Skills",
    "Education",
    "Experience",
    "Work",
    "Contact",
  ];

  const handleScroll = () => {
    const currentPosition = window.scrollY;

    for (let i = 0; i < sectionIds.length; i++) {
      const section = document.getElementById(sectionIds[i]);
      if (section && currentPosition > section.offsetTop - 50) {
        setActiveLinkIndex(i);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const navLinks = [
    { text: "Home", target: "Home" },
    { text: "Skills", target: "Skills" },
    { text: "Education", target: "Education" },
    { text: "Expérience", target: "Experience" },
    { text: "Works", target: "Work" },
    { text: "Contact", target: "Contact" },
  ];

  return (
    <nav>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              href={`#${link.target}`}
              className={index === activeLinkIndex ? "active" : ""}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;