import React from "react";
import personne from "../assets/images/person.png";
import enveloppe from "../assets/images/envelope.png";
import crayon from "../assets/images/pencil.png";

// Penser à faire le lien pour écrire à ma boite mail

function Contact() {
  return (
    <section class="colCenter" id="Contact">
            <h2>Contact</h2>
            <article class="wrapper">
                <h3>Ecrivez-moi un message</h3>
                <form action="#">
                    <div class="dbl-field">
                        <div class="field">
                            <input type="text" name="name" placeholder="Entrez votre nom" />
                            <img src={personne} alt="icône personne" />
                        </div>
                        <div class="field">
                            <input type="text" name="email" placeholder="Entrez votre adresse mail" />
                            <img src={enveloppe} alt="icône enveloppe" />
                        </div>
                    </div>
                    <div class="message">
                        <textarea name="message" placeholder="Ecrivez votre message"></textarea>
                        <img src={crayon} alt="icône crayon" />
                    </div>
                    <div class="button-area">
                        <button type="submit">Envoyer</button>
                        <span></span>
                    </div>
                </form>
            </article>
        </section>
  );
}

export default Contact;