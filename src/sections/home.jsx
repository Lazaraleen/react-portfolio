import React from "react";
import Photo from "../assets/images/7ba5bedd-f819-4bf7-a399-b0f7cc2b8970.jpg"

// Penser à faire un fichier JSON puis map dessus pour remplir la section
// Rajouter une animation

function Home() {
  return (
    <section className="home" id="Home">
        <div className="columnCenter">
            <h2>Biography</h2>
            <p>Après 16 ans d'expérience dans un supermarché dont 13 ans en tant que responsable informatique, ainsi que d'autres responsabilités, j'ai décidé de suivre un bilan de compétences en 2022 pour me reconvertir.
                <br/><br/>A l'issue de ce bilan, il s'est avéré que le développement web serait ma nouvelle voie, aussi j'ai entrepris de me former dans ce domaine.
                <br/><br/>Je suis actuellement à la recherche d'une alternance de 2 ans pour la formation de Concepteur Développeur d'Applications (RNCP6, équivalence bac +3/+4).
            </p>
        </div>
        <div className="me">
            <img src={Photo} alt="mon portrait" />
        </div>
        <div className="columnCenter">
            <h2>Contact</h2>
            <br/>
            <p>64.000 Pau, France</p>
            <br/>
            <p>myriamjayle@gmail.com</p>
            <br/>
            <a href="https://www.linkedin.com/in/myriam-esp%C3%A9rance-jayle-19b807229/"><p className="linkedin">Link: LinkedIn</p></a>            
        </div>
    </section>
  );
}

export default Home;