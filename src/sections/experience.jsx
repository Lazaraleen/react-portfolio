import React from "react";

// Penser à faire un fichier JSON puis map dessus pour remplir la section

function Experience() {
  return (
    <section className="colCenter" id="Experience">
        <h2>Expérience</h2>
        <article className="experience">
            <aside className="box">
                <div>
                    <h3>Formation Intégrateur Web</h3>
                    <h4>2023 - OpenClassRooms</h4>
                    <p>Coder en HTML5 et CSS3, créer un site dynamique en Javascript, réaliser un site en React avec des composants réutilisables, améliorer le SEO ainsi que le référencement local et l'accessibilité d'un site, initiation à la gestion de projet et aux méthodes Agile.</p>
                </div>
            </aside>
            <aside className="box">
                <div>
                    <h3>Bootcamp Intégrateur Développeur Web</h3>
                    <h4>2022 - Fabrique du Numérique Paloise</h4>
                    <p>Coder un site en HTML5 et CSS, coder des fonctions en Javascript, créer un site e-commerce sous Wordpress, pprendre les bases de PHP et MySQL.</p>
                </div>
            </aside>
            <aside className="box">
                <div>
                    <h3>Stage en immersion (intégrateur développeur web)</h3>
                    <h4>2022 - Fabrique du Numérique Paloise</h4>
                    <p>Utilisation de Figma pour des wireframes et des maquettes puis coer les maquettes en HTML5 et CSS3.</p>
                </div>
            </aside>
        </article>
    </section>
  );
}

export default Experience;