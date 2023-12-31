import React from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import personne from "../assets/images/person.png";
import enveloppe from "../assets/images/envelope.png";
import crayon from "../assets/images/pencil.png";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_170tiv8', 'template_zwmcana', form.current, '01yr1XuTB5d9u5W6d')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
            form.current.reset();
            window.alert('Votre e-mail a été envoyé avec succès !');
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <section className="colCenter" id="Contact">
            <h2>Contact</h2>
            <article className="wrapper">
                <h3>Ecrivez-moi un message</h3>
                <form ref={form} onSubmit={sendEmail} action="#">
                    <div className="dbl-field">
                        <div className="field">
                            <input type="text" name="user_name" placeholder="Entrez votre nom" required />
                            <img src={personne} alt="icône personne" />
                        </div>
                        <div className="field">
                            <input type="text" name="user_email" placeholder="Entrez votre adresse mail" required />
                            <img src={enveloppe} alt="icône enveloppe" />
                        </div>
                    </div>
                    <div className="message">
                        <textarea name="message" placeholder="Ecrivez votre message" required ></textarea>
                        <img src={crayon} alt="icône crayon" />
                    </div>
                    <div className="button-area">
                        <button type="submit">Envoyer</button>
                        <span></span>
                    </div>
                </form>
            </article>
        </section>
  );
}

export default Contact;