import React from "react";
import { useEffect } from "react";
import '../assets/css/style.css';
import Lune from "../assets/images/Lune.png";
import Mer from "../assets/images/Mer.png";
import Decor from "../assets/images/Decor.png";

function Parallax() {
    useEffect(() => {
        const moon = document.getElementById('lune');
        const sea = document.getElementById('mer');
        const text = document.getElementById('text');
        const btn = document.getElementById('btn');
        const forest = document.getElementById('foret');
        const header = document.getElementById('header');
    
        const handleScroll = () => {
          const value = window.scrollY;
          moon.style.top = value * 1.3 + 'px';
          sea.style.top = value * 0.35 + 'px';
          forest.style.top = value * 0.05 + 'px';
          text.style.marginRight = value * 4 + 'px';
          text.style.marginTop = value * 1.2 + 'px';
          btn.style.marginTop = value * 1.2 + 'px';
          header.style.top = value * 0.85 + 'px';
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          // Nettoyer les événements lorsque le composant est démonté
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); // La dépendance vide [] assure que le useEffect ne s'exécute qu'une seule fois lors du montage initial.
    

  return (
    <header id="header">
        <section className="decor" id="decor">
            <img src={Lune} id="lune" alt="Lune" />
            <img src={Mer} id="mer" alt="Mer" />
            <div id="text">
                <h1>JAYLE</h1>
                <h2>Myriam-Espérance</h2>
            </div>
            <a href="#Home" id="btn">Portfolio here or scroll</a>
            <img src={Decor} id="foret" alt="Forêt" />
        </section>
    </header>
  );
}

export default Parallax;