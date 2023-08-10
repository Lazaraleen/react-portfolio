import React from "react";
import skillsData from "../json/skills.json";

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
                {skillsData && skillsData.map((item) => (
                    <aside key={item.name}>
                        <div className="bubbleGrey">
                            <img src={item.image} alt={item.alt} className={item.className}/>
                        </div>
                        <h3>{item.name}</h3>
                        <p>{item.level}</p>
                    </aside>
                ))}
            </article>            
        </div>
    </section>
  );
}

export default Skills;