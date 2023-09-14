import React from "react";
import { useEffect } from "react";
import '../assets/css/style.css';
import Lune from "../assets/images/Lune.webp";
import Mer from "../assets/images/Mer.webp";
import Decor from "../assets/images/Decor.webp";
import Lune2 from "../assets/images/Lune3.webp";
import Mer2 from "../assets/images/Mer3.webp";
import Decor2 from "../assets/images/Decor3.webp";

function Parallax() {
  const largeurEcran = window.innerWidth;

    useEffect(() => {
        const moon = document.getElementById('lune');
        const sea = document.getElementById('mer');
        const text = document.getElementById('text');
        const search = document.getElementById('recherche');
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
          search.style.marginLeft = value * 4 + 'px';
          search.style.marginTop = value * 0.2 + 'px';
          btn.style.marginTop = value * 1.2 + 'px';
          header.style.top = value * 0.85 + 'px';
        };
    
        window.addEventListener('scroll', handleScroll);    
        return () => {
          // Nettoyer les événements lorsque le composant est démonté
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); 
    

  return (
    <header id="header">
        <section className="decor" id="decor">
          {/* <img src={Lune} id="lune" alt="Lune" /> */}
            {largeurEcran >= 968 ? (
              <img src={Lune} id="lune" alt="Lune" />
            ) : (
              <img src={Lune2} id="lune" alt="Lune" />
            )}
          {/* <img src={Mer} id="mer" alt="Mer" /> */}
            {largeurEcran >= 968 ? (
              <img src={Mer} id="mer" alt="Mer" />
            ) : (
              <img src={Mer2} id="mer" alt="Mer" />
            )}
          {/* <img src={Decor} id="foret" alt="Forêt" /> */}
            {largeurEcran >= 968 ? (
              <img src={Decor} id="foret" alt="Forêt" />
              ) : (
              <img src={Decor2} id="foret" alt="Forêt" />
            )}
            <article id="script">
              <div id="text">
                  <h1>JAYLE</h1>
                  <h2>Myriam-Espérance</h2>
              </div>
              <div id="recherche">
                  <h3>Développeuse Front-End React</h3>
              </div>
            </article>
            <a href="#Home" id="btn">Portfolio here or scroll</a>
        </section>
    </header>
  );
}

export default Parallax;