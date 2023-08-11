import React from "react";
import camera from "../assets/images/photo-camera_1436221.png";
import immeuble from "../assets/images/office_4113808.png";
import porteMonnaie from "../assets/images/wallet_584067.png";

// Penser à faire unlien vers les projets et faire le CSS de LINK
// Penser à faire un grid pour les enveloppes au cas où il en ait plus plus tard
// Penser à faire un fichier JSON puis map dessus pour remplir la section

function Works() {
  return (
    <section className="colCenter" id="Work">
            <h2>Works</h2>
            <article className="works">
                <div className="card" style={{ "--clr": "#ff4d4d" }}>
                    <div className="contentCard">
                        <h3>Sophie Bruel</h3>
                        <h4>Javascript</h4>
                        <h5>Consignes :</h5>
                        <p>Aidez votre équipe à finaliser le nouveau site internet d'une architecte d'intérieur. Vous utiliserez Javascript pour que les éléments du site se créent de manière dynamique en communiquant avec une API.</p>
                        <a href="https://github.com/Lazaraleen/OCR6">LINK</a>
                    </div>
                    <div className="imgCard"> 
                        <img src={camera} alt="logo photographe" />
                    </div>
                    <div className="textCard">
                        <h3>Sophie Bruel</h3>                        
                    </div>
                </div>
                <div className="card" style={{ "--clr": "#5fa7ff" }}>
                    <div className="contentCard">
                        <h3>Kasa</h3>
                        <h4>React</h4>
                        <h5>Consignes :</h5>
                        <p>Implémentez le front end de Kasa, une application de locaton de logements. Vous mettrez en place des composants avec React, et les routes de l'application avec React Router.</p>
                        <a href="https://kasa-logement.netlify.app/">LINK</a>
                    </div>
                    <div className="imgCard">
                        <img src={immeuble} alt="logo immeuble" />
                    </div>
                    <div className="textCard">
                        <h3>Kasa</h3>
                    </div>
                </div>
                <div className="card" style={{ "--clr": "#3ae374" }}>
                    <div className="contentCard">
                        <h3>Argent Bank</h3>
                        <h4>React</h4>
                        <h5>Consignes :</h5>
                        <p>Argent Bank a besoin de vous pour compléter le code de son site. Vous écrirez des appels à l'API REST pour connecter le front au back et vous modéliserez une API. Vous utiliserez également React et Redux afin de produire un code performant et gérant toutes les données de votre interface.</p>
                        <a href="https://github.com/Lazaraleen/OCR11">LINK</a>
                    </div>
                    <div className="imgCard">
                        <img src={porteMonnaie} alt="porte-monnaie" />
                    </div>
                    <div className="textCard">
                        <h3>Argent Bank</h3>
                    </div>
                </div>
            </article>
        </section>
  );
}

export default Works;