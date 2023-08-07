import React from "react";

function Education() {
  return (
    <section class="colCenter" id="Education">
        <h2>Education</h2>
        <article class="diplome">
            <div class="year">2023</div>
            <div class="dip">
                <h3>Intégrateur Web</h3>
                <p>OpenClassRooms (distanciel - en cours)</p>
            </div>
        </article>
        <article class="diplome">
            <div class="year">2022</div>
            <div class="dip">
                <h3>Bootcamp 3 mois</h3>
                <p>La Fabrique du Numérique   (Pau)</p>
            </div>
        </article>
        <article class="diplome">
            <div class="year">2020</div>
            <div class="dip">
                <h3>Formation Wordpress: Créer son site de A à Z</h3>
                <p>Kiluz   (distanciel)</p>
            </div>
        </article>
        <article class="diplome">
            <div class="year">2004</div>
            <div class="dip">
                <h3>Licence de Mathématiques</h3>
                <p>Université de Pau et des Pays de l'Adour</p>
            </div>
        </article>
        <article class="diplome">
            <div class="year">2001</div>
            <div class="dip">
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