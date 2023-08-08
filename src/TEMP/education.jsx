import React from "react";

// Penser à faire un fichier JSON puis map dessus pour remplir la section
// Vérifier l'animation, il y a un bug dessus

function Education() {
    return (
        <section className="colCenter" id="Education">
            <h2>Education</h2>
            <article className="diplome">
                <div className="year">2023</div>
                <div className="dip">
                    <h3>Intégrateur Web</h3>
                    <p>OpenClassRooms (distanciel - en cours)</p>
                </div>
            </article>
            <article className="diplome">
                <div className="year">2022</div>
                <div className="dip">
                    <h3>Bootcamp 3 mois</h3>
                    <p>La Fabrique du Numérique   (Pau)</p>
                </div>
            </article>
            <article className="diplome">
                <div className="year">2020</div>
                <div className="dip">
                    <h3>Formation Wordpress: Créer son site de A à Z</h3>
                    <p>Kiluz   (distanciel)</p>
                </div>
            </article>
            <article className="diplome">
                <div className="year">2004</div>
                <div className="dip">
                    <h3>Licence de Mathématiques</h3>
                    <p>Université de Pau et des Pays de l'Adour</p>
                </div>
            </article>
            <article className="diplome">
                <div className="year">2001</div>
                <div className="dip">
                    <div>
                        <h3>DEUG MIAS</h3>
                        <p>(Mathématiques et Informatique Appliquées aux Sciences)</p>
                    </div>
                    <p>Université de Pau et des Pays de l'Adour</p>
                </div>
            </article>
        </section>   
    );
}

export default Education;