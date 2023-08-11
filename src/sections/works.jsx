import React from "react";
import worksData from "../json/works.json";

// Penser à faire un lien vers les projets et faire le CSS de LINK
// Penser à faire un grid pour les enveloppes au cas où il en ait plus plus tard
// Penser à faire un fichier JSON puis map dessus pour remplir la section

function Works() {
  return (
    <section className="colCenter" id="Work">
            <h2>Works</h2>
            <article className="works">                
                {worksData.map((item, index) => (
                    <div className="card" style={{ "--clr": item.color}} key={index+100}>
                        <div className="contentCard">
                            <h3>{item.title}</h3>
                            <h4>{item.langage}</h4>
                            <h5>Consignes :</h5>
                            <p>{item.consignes}</p>
                            <a href={item.link}>LINK</a>
                        </div>
                        <div className="imgCard"> 
                            <img src={item.icone} alt={item.alt} />
                        </div>
                        <div className="textCard">
                            <h3>{item.title}</h3>                        
                        </div>
                    </div>
                ))}
            </article>
        </section>
  );
}

export default Works;