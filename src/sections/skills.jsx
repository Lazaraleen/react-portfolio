import React from "react";
import Html from "../assets/images/html.png";
import Css from "../assets/images/css.png";
import Javascript from "../assets/images/javascript.png";
import ReactLogo from "../assets/images/react.png";
import Wordpress from "../assets/images/wordpress.png";
import Figma from "../assets/images/figma.png";
import Photoshop7 from "../assets/images/Photoshop7.png";
import InkScape from "../assets/images/inkscape.png";
import Php from "../assets/images/php.png";
import MySql from "../assets/images/mysql.png";
import Github from "../assets/images/github.png";

// Maper sur le fichier JSON pour remplir la section puis supprimer les imports des images
// Le mapping sur images ne marche pas ... pourquoi?
// Faire plutôt une grid pour le placement
// Rajouter une animation

function Skills() {
  return (
    <section className="colCenter skills" id="Skills">
        <h2>Skills</h2>
        <div>
            <article className="skillsGrid">
                <aside>
                    <div className="bubbleGrey">
                        <img src={Html} alt="Logo HTML" />
                    </div>
                    <h3>HTML</h3>
                    <p>Advanced</p>
                </aside>
                <aside>
                    <div className="bubbleGrey">
                        <img src={Css} alt="Logo CSS" />
                    </div>
                    <h3>CSS</h3>
                    <p>Intermediate</p>
                </aside>
                <aside>
                    <div className="bubbleGrey">
                        <img src={Javascript} alt="Logo Javascript" className="logoGros" />
                    </div>
                    <h3>Javascript</h3>
                    <p>Intermediate</p>
                </aside>
                <aside>
                    <div className="bubbleGrey">
                        <img src={ReactLogo} alt="Logo React" />
                    </div>
                    <h3>React</h3>
                    <p>Basic</p>
                </aside>
                <aside>
                    <div className="bubbleGrey">
                        <img src={Wordpress} alt="Logo Wordpress" />
                    </div>
                    <h3>Wordpress</h3>
                    <p>Basic</p>
                </aside>
                <aside>
                    <div className="bubbleGrey">
                        <img src={Figma} alt="Logo Figma" />
                    </div>
                    <h3>Figma</h3>
                    <p>Basic</p>
                </aside>
                <aside>
                    <div className="bubbleGrey">
                        <img src={Photoshop7} alt="Logo Photoshop7" />
                    </div>
                    <h3>Photoshp7</h3>
                    <p>Intermediate</p>
                </aside>
                <aside>
                    <div className="bubbleGrey">
                        <img src={InkScape} alt="Logo InkScape" />
                    </div>
                    <h3>InkScape</h3>
                    <p>Basic</p>
                </aside>
                <aside>
                    <div className="bubbleGrey">
                        <img src={Php} alt="Logo PHP" />
                    </div>
                    <h3>PHP</h3>
                    <p>Basic</p>
                </aside>
                <aside>
                    <div className="bubbleGrey">
                        <img src={MySql} alt="Logo MySQL" />
                    </div>
                    <h3>MySql</h3>
                    <p>Basic</p>
                </aside>
                <aside>
                    <div className="bubbleGrey">
                        <img src={Github} alt="Logo Github" />
                    </div>
                    <h3>Github</h3>
                    <p>Basic</p>
                </aside>
            </article>            
        </div>
    </section>
  );
}

export default Skills;